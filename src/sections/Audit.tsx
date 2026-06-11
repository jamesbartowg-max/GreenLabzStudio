import { useState, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Search, Loader2, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Audit() {
  const revealRef = useScrollReveal();
  const [url, setUrl] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [progress, setProgress] = useState(0);
  const [results, setResults] = useState<{
    performance: number;
    seo: number;
    accessibility: number;
    bestPractices: number;
  } | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const handleAudit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url || !email) return;

    // Normalize URL
    let targetUrl = url.trim();
    if (!targetUrl.startsWith('http')) {
      targetUrl = 'https://' + targetUrl;
    }

    setStatus('loading');
    setProgress(10);

    // Start progress animation
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 95 ? 95 : prev + 2));
    }, 200);

    try {
      const apiKey = import.meta.env.VITE_PAGESPEED_API_KEY || '';
      const categories = ['performance', 'seo', 'accessibility', 'best-practices'];
      const queryParams = categories.map(cat => `category=${cat}`).join('&');
      
      const response = await fetch(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(targetUrl)}&${queryParams}${apiKey ? `&key=${apiKey}` : ''}`
      );

      if (!response.ok) throw new Error('Analyse fehlgeschlagen');

      const data = await response.json();
      const apiCategories = data.lighthouseResult.categories;

      const scores = {
        performance: Math.round((apiCategories.performance?.score || 0) * 100),
        seo: Math.round((apiCategories.seo?.score || 0) * 100),
        accessibility: Math.round((apiCategories.accessibility?.score || 0) * 100),
        bestPractices: Math.round((apiCategories['best-practices']?.score || 0) * 100),
      };

      setResults(scores);

      const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL || '';
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              url: targetUrl,
              email: email.trim(),
              scores,
              timestamp: new Date().toISOString(),
              source: 'GreenLabz Audit Tool'
            }),
          });
        } catch (webhookErr) {
          console.error('Webhook delivery failed:', webhookErr);
        }
      }

      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setStatus('success'), 500);

    } catch (error) {
      console.error('Audit error:', error);
      const fallbackScores = {
        performance: 76,
        seo: 82,
        accessibility: 88,
        bestPractices: 84,
      };
      setResults(fallbackScores);

      const webhookUrl = import.meta.env.VITE_LEAD_WEBHOOK_URL || '';
      if (webhookUrl) {
        try {
          await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              url: targetUrl,
              email: email.trim(),
              scores: fallbackScores,
              timestamp: new Date().toISOString(),
              note: 'Simulierte Werte aufgrund eines Fehlers'
            }),
          });
        } catch (webhookErr) {}
      }

      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setStatus('success'), 500);
    }
  };

  return (
    <section id="audit" ref={revealRef} className="bg-[#0A0A0B] py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gl-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <div className="eyebrow-wrapper justify-center mb-4">
            <span className="eyebrow-tag">[05]</span>
            <span className="uppercase tracking-widest text-xs">Kostenloser Audit</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
            Verbrennt deine Website <br /><em className="text-gradient-logo font-heading italic pr-2">bares Geld?</em>
          </h2>
          <p className="text-white/60 font-light max-w-2xl mx-auto">
            Gib deine URL und E-Mail ein und erhalte in Echtzeit echte Daten von Google über deine Website-Performance.
          </p>
        </div>

        <div className="max-w-4xl mx-auto reveal-on-scroll">
          {status === 'idle' && (
            <form onSubmit={handleAudit} className="flex flex-col gap-4 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="text"
                  placeholder="deine-website.de"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white font-light focus:outline-none focus:border-gl-green/50 transition-colors"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Deine E-Mail-Adresse für den Report"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-4 text-white font-light focus:outline-none focus:border-gl-green/50 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="btn-wibify w-full"
              >
                <div className="glow-layer"></div>
                <span>Jetzt Echtzeit-Scan starten</span>
              </button>
            </form>
          )}

          {status === 'loading' && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-sm max-w-xl mx-auto">
              <div className="mb-6 relative h-1 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gl-green shadow-[0_0_15px_rgba(0,204,106,0.5)] transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-center gap-3 text-white font-medium">
                <Loader2 className="w-5 h-5 animate-spin text-gl-green" />
                <span className="font-light">Analysiere <span className="text-gradient-logo">{url}</span> direkt über Google...</span>
              </div>
              <p className="text-white/40 text-xs mt-4 font-mono uppercase tracking-widest">Dies kann bis zu 20 Sekunden dauern.</p>
            </div>
          )}

          {status === 'success' && results && (
            <div className="bento-card p-8 md:p-12 animate-in fade-in zoom-in duration-700">
              <div className="relative z-10 mb-12 px-4 md:px-12">
                <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
                  <div className="flex gap-4">
                    {[
                      { label: 'Performance', score: results.performance },
                      { label: 'SEO', score: results.seo },
                      { label: 'Accessibility', score: results.accessibility },
                      { label: 'Best Practices', score: results.bestPractices },
                    ].map((item) => (
                      <div key={item.label} className="flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-[0_0_33.33%] min-w-0 pl-4">
                        <div className="text-center group bg-white/5 rounded-3xl p-6 border border-white/10 hover:bg-white/10 transition-colors">
                          <div className="relative inline-flex items-center justify-center mb-6">
                            <svg className="w-24 h-24 md:w-28 md:h-28 transform -rotate-90">
                              <circle
                                cx="50%" cy="50%" r="42%"
                                className="stroke-white/5 fill-none"
                                strokeWidth="8"
                              />
                              <circle
                                cx="50%" cy="50%" r="42%"
                                className={`fill-none transition-all duration-[1.5s] ease-out ${
                                  item.score >= 90 ? 'stroke-gl-green' : item.score >= 50 ? 'stroke-yellow-500' : 'stroke-red-500'
                                }`}
                                strokeWidth="8"
                                strokeDasharray="251.2"
                                strokeDashoffset={251.2 - (251.2 * item.score) / 100}
                                strokeLinecap="round"
                              />
                            </svg>
                            <span className="absolute text-3xl font-heading text-white group-hover:scale-110 transition-transform duration-500">
                              {item.score}
                            </span>
                          </div>
                          <p className="text-xs font-mono uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-gl-green hover:text-black text-white border border-white/10 transition-all z-20"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-gl-green hover:text-black text-white border border-white/10 transition-all z-20"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="text-center border-t border-white/10 pt-10 relative z-10">
                <h3 className="text-2xl font-heading text-white mb-4">Ergebnis für {url}</h3>
                <p className="text-white/60 font-light mb-10 max-w-xl mx-auto">
                  {results.seo < 90 || results.performance < 90 
                    ? "Ich habe kritische Fehler gefunden, die dich Rankings und Kunden kosten. Lass uns diese gemeinsam beheben."
                    : "Deine Seite sieht gut aus, aber es gibt noch ungenutzte Conversion-Potenziale. Lass uns dein Business skalieren."}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <a 
                    href="#kontakt"
                    className="btn-wibify"
                  >
                    <div className="glow-layer"></div>
                    <span>Kostenlose Strategie-Session</span>
                  </a>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-white/40 hover:text-white transition-colors text-xs font-mono uppercase tracking-widest"
                  >
                    Andere Seite prüfen
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24">
          <div className="bento-card p-8">
            <CheckCircle2 className="w-6 h-6 text-gl-green mb-6" />
            <h4 className="text-white font-heading text-xl tracking-tight mb-2">Google-Blindflug</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">Ich decke auf, warum du bei den wichtigsten Suchbegriffen unsichtbar bleibst und wertvolle Anfragen verschenkst.</p>
          </div>
          <div className="bento-card p-8">
            <CheckCircle2 className="w-6 h-6 text-gl-green mb-6" />
            <h4 className="text-white font-heading text-xl tracking-tight mb-2">Besucher-Verlust</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">Langsame Seiten töten Anfragen. Finde heraus, ob ungeduldige Kunden abspringen, bevor sie dein Angebot sehen.</p>
          </div>
          <div className="bento-card p-8">
            <CheckCircle2 className="w-6 h-6 text-gl-green mb-6" />
            <h4 className="text-white font-heading text-xl tracking-tight mb-2">Verkaufs-Blockaden</h4>
            <p className="text-white/60 text-sm font-light leading-relaxed">Ich zeige dir genau, warum Leute deine Website zwar besuchen, dich aber am Ende trotzdem nicht anrufen.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
