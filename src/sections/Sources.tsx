import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Sources() {
  const revealRef = useScrollReveal();

  const sources = [
    {
      title: "Next.js 16",
      desc: "Production framework powering every GreenLabz site.",
      link: "https://nextjs.org/"
    },
    {
      title: "React 19",
      desc: "UI library — official docs by the React core team.",
      link: "https://react.dev/"
    },
    {
      title: "Vercel",
      desc: "Default deployment platform with Fluid Compute + AI Gateway.",
      link: "https://vercel.com/"
    },
    {
      title: "TypeScript",
      desc: "Type-safe codebases — official Microsoft documentation.",
      link: "https://www.typescriptlang.org/"
    },
    {
      title: "Core Web Vitals",
      desc: "Google's performance standard — how GreenLabz measures speed.",
      link: "https://web.dev/vitals/"
    },
    {
      title: "Schema.org",
      desc: "Open standard behind the structured data on this page.",
      link: "https://schema.org/"
    },
    {
      title: "/llms-full.txt",
      desc: "Maschinenlesbarer Korpus für KI-Assistenten.",
      link: "/llms-full.txt"
    }
  ];

  return (
    <section ref={revealRef} className="bg-[#0A0A0B] py-24 md:py-32 relative border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Left Column - Header */}
          <div className="lg:col-span-4 reveal-on-scroll">
            <div className="flex items-center gap-4 mb-6">
               <span className="w-8 h-px bg-white/20"></span>
               <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                 [REF] QUELLEN
               </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Verifiziere meine<br />Aussagen
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-md">
              Ich nenne Stack, Performance-Ziele und Standards offen. Hier kannst du die wichtigsten Quellen selbst nachschlagen.
            </p>
          </div>

          {/* Right Column - Grid */}
          <div className="lg:col-span-8 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-white/10">
              {sources.map((s, i) => (
                <a 
                  key={i}
                  href={s.link}
                  target={s.link.startsWith('http') ? '_blank' : '_self'}
                  rel={s.link.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="p-8 border-r border-b border-white/10 group hover:bg-white/[0.02] transition-colors block"
                >
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-white font-mono text-sm tracking-wide font-bold group-hover:text-gl-green transition-colors">{s.title}</h4>
                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-gl-green group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
