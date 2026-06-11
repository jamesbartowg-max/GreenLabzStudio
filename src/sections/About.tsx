import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="ueber-uns" ref={revealRef} className="bg-gl-dark py-24 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-gl-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col reveal-on-scroll">
            <p className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-gradient-logo mb-4 flex items-center gap-4">
              <span className="w-8 h-px bg-gl-green/30" />
              Über Uns
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6 font-heading tracking-tight leading-tight">
              Das ist <br className="hidden lg:block" />
              <span className="italic">GreenLabz</span>
            </h2>
            <div className="space-y-6 text-gl-gray-light text-lg leading-relaxed">
              <p>
                Ich bin mehr als nur eine Agentur. Ich bin dein strategischer Partner für den digitalen Raum. Bei GreenLabz verbinde ich High-End Design mit messbarer Performance.
              </p>
              <p>
                Mein Ziel? Marken zu erschaffen, die nicht nur beeindrucken, sondern konvertieren. Ich glaube an radikale Transparenz, datengetriebene Entscheidungen und Ergebnisse, die für sich selbst sprechen.
              </p>
            </div>
            
            <div className="mt-10 flex gap-6">
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-mono">100+</span>
                <span className="text-xs text-gl-gray-light uppercase tracking-wider mt-1">Projekte</span>
              </div>
              <div className="w-px h-12 bg-white/10" />
              <div className="flex flex-col">
                <span className="text-3xl font-black text-white font-mono">99%</span>
                <span className="text-xs text-gl-gray-light uppercase tracking-wider mt-1">Zufriedenheit</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden glass-card border border-white/10 shadow-2xl reveal-on-scroll">
            <div className="absolute inset-0 bg-gl-green/10 mix-blend-overlay z-10 pointer-events-none transition-opacity duration-500 hover:opacity-0" />
            <img 
              src="/images/about_office.png" 
              alt="GreenLabz Office" 
              className="object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
