import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const projects = [
    { title: "Malerbetrieb Müller", category: "Webdesign & SEO", image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&q=80&w=800", year: "2025" },
    { title: "Zahnarztpraxis Dr. Schmidt", category: "Website & Google Maps", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800", year: "2024" },
    { title: "Elektro Wagner", category: "Conversion Optimierung", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800", year: "2024" },
    { title: "Schreinerei Huber", category: "Full-Service Webdesign", image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=800", year: "2023" },
  ]

  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      
      {/* Editorial Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-12 md:pb-20 min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end border-b border-white/5 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0A0A0B]" />
          <div
            className="absolute top-0 right-0 w-[800px] h-[800px] pointer-events-none opacity-20"
            style={{
              background: "radial-gradient(circle at center, rgba(0,204,106,0.1) 0%, transparent 70%)"
            }}
          />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150" />
        </div>

        <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
            <div className="lg:col-span-8">
              <p className="font-mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-white/50 mb-4 md:mb-6 flex items-center gap-4">
                <span className="w-6 md:w-8 h-px bg-white/30" />
                <span className="text-gradient-logo">[P]</span>
                Portfolio · Selected Work
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight font-heading leading-tight">
                Meine <em className="italic text-gradient-logo">Projekte.</em>
              </h1>
              <p className="text-gl-gray-light text-lg md:text-xl lg:text-2xl leading-relaxed font-light max-w-3xl">
                „Hier zeige ich dir, was ich bewege: Von maßgeschneiderten Web-Lösungen für Handwerk und Dienstleistung bis hin zu eigenen SaaS-Produkten und Apps. Lass dich inspirieren, wie ich digitale Herausforderungen in echte Lösungen verwandle.“
              </p>
            </div>
          </div>

          {/* Meta Stats Row */}
          <div className="mt-12 md:mt-20 pt-8 md:pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div>
              <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">Projekte</p>
              <p className="text-white font-medium text-sm md:text-base">4 Selected Cases</p>
            </div>
            <div>
              <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">Fokus</p>
              <p className="text-white font-medium text-sm md:text-base">Handwerk &amp; Dienstleistung</p>
            </div>
            <div>
              <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">Zeitraum</p>
              <p className="text-white font-medium text-sm md:text-base">2023 — 2026</p>
            </div>
            <div>
              <p className="text-white/40 font-mono text-[10px] md:text-xs uppercase tracking-wider mb-1 md:mb-2">Standort</p>
              <p className="text-white font-medium text-sm md:text-base">Deutschland · Remote</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12 md:mb-20">
            <span className="w-6 md:w-8 h-px bg-white/30" />
            <span className="font-mono text-[10px] md:text-[12px] font-bold uppercase tracking-[0.2em] text-white/50">
              <span className="text-gradient-logo">[01]</span> Alle Cases
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">
            {projects.map((p, i) => (
              <a href="#" key={i} className="group block">
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden rounded-[2rem] mb-8 border border-white/10 bg-white/5 relative isolate">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={p.image} 
                    alt={p.title} 
                    className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]" 
                  />
                  {/* Hover Arrow */}
                  <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full w-14 h-14 flex items-center justify-center text-white opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>

                {/* Meta Row */}
                <div className="flex justify-between items-center text-white/40 font-mono text-sm mb-4 border-b border-white/5 pb-4">
                  <span>0{i + 1}</span>
                  <span>{p.year}</span>
                </div>

                {/* Title & Category */}
                <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-gl-green transition-colors">{p.title}</h3>
                <p className="text-white/50 text-lg">{p.category}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-[#050505] relative overflow-hidden border-t border-white/5">
        <div className="max-w-[800px] mx-auto px-6 text-center relative z-10">
          <p className="font-mono text-gl-green font-bold text-xs md:text-sm tracking-widest mb-4 md:mb-6">START NOW</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight font-heading">
            Bereit für dein <em className="italic text-white/50">eigenes Projekt?</em>
          </h2>
          <p className="text-white/60 text-base md:text-xl leading-relaxed mb-10 md:mb-12 max-w-2xl mx-auto">
            Lass uns gemeinsam herausfinden, wie wir deine Marke digital auf das nächste Level bringen können. Ich antworte in der Regel innerhalb von 24 Stunden.
          </p>
          <a href="#kontakt" className="inline-flex items-center gap-3 bg-white text-black px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-base md:text-lg hover:bg-gl-green hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(0,204,106,0.4)]">
            Projekt anfragen
            <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
