import { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Logos() {
  const logos = [
    { name: "NEWEO", sub: "DIGITAL AGENCY", img: "/neweo-main-logo.png", url: "https://neweo.de/", desc: "Ich habe deren Anfragen durch SEO um 300% gesteigert." },
    { name: "TIERARZTPRAXIS DR. BUSS", sub: "MÖCKMÜHL", img: "/buss-logo.png", url: "https://www.xn--tierarztpraxis-mckmhl-wec5l.de/", desc: "Terminbuchung automatisiert - Praxis ist nun wochenlang ausgebucht." },
    { name: "HAPPEN", sub: "STREETFOOD", img: "/happen-logo.png", url: "https://happen.food/", desc: "Vom Nullpunkt zur lokalen Nr. 1 durch gezielte Local SEO." },
    { name: "PHYSIO BEWEGT", sub: "MÖCKMÜHL", img: "/physiologo.png", desc: "Digitales Praxismanagement und neue Patienten-Akquise." },
    { name: "ELEKTRO MÜLLER", sub: "MEISTERBETRIEB", img: "/elektro.png", scale: 0.8, desc: "Qualifizierte Anfragen statt Preiskampf." },
    { name: "ZAHNARZT DR. WENZEL", sub: "MÖCKMÜHL", img: "/zahnarzt.png", url: "https://drwenzel.netlify.app/", desc: "Modernes Patienten-Vertrauen durch High-End Design." },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % logos.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  return (
    <section className="bg-[#0A0A0B] py-32 border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gl-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <div className="eyebrow-wrapper justify-center mb-4">
            <span className="eyebrow-tag">[06]</span>
            <span className="uppercase tracking-widest text-xs">Case Studies</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-6">
            Ergebnisse, die <br /><em className="text-gradient-logo font-heading italic pr-2">für sich sprechen.</em>
          </h2>
        </div>
        
        <div 
          className="relative h-[450px] flex items-center justify-center w-full"
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        >
          {logos.map((logo, i) => {
            let offset = i - activeIndex;
            if (offset < -Math.floor(logos.length / 2)) offset += logos.length;
            if (offset > Math.floor(logos.length / 2)) offset -= logos.length;

            const isCenter = offset === 0;
            const absoluteOffset = Math.abs(offset);
            
            const translateX = offset * 180; 
            const translateZ = absoluteOffset * -300; 
            const rotateY = offset * -25; 
            
            const opacity = isCenter ? 1 : Math.max(0.05, 0.2 - (absoluteOffset - 1) * 0.1);
            const blur = isCenter ? 0 : absoluteOffset * 4; 
            const zIndex = 20 - absoluteOffset;

            if (absoluteOffset > 2) return null;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`absolute w-full max-w-[320px] transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] ${
                  !isCenter && 'cursor-pointer'
                }`}
                style={{
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg)`,
                  opacity: opacity,
                  filter: `blur(${blur}px)`,
                  zIndex: zIndex,
                }}
              >
                <div className={`h-full relative transition-all duration-500 flex flex-col items-center text-center p-8 rounded-3xl ${
                  isCenter ? 'bg-[#0A0A0B] border border-white/10 shadow-2xl shadow-gl-green/10' : 'bg-transparent'
                }`}>
                  <div className="flex flex-col items-center gap-6 mb-8 w-full">
                    {logo.img ? (
                      <div className="h-24 w-full flex items-center justify-center">
                        <img 
                          src={logo.img} 
                          alt={logo.name} 
                          className="max-h-full max-w-[180px] object-contain drop-shadow-lg"
                          style={logo.name === 'NEWEO' ? { filter: 'brightness(0) invert(1)' } : undefined}
                        />
                      </div>
                    ) : (
                      <div className="h-24 w-full flex items-center justify-center font-heading text-5xl text-gradient-logo opacity-80">
                        {logo.name[0]}
                      </div>
                    )}
                    <div>
                      <h3 className="text-white font-heading text-xl tracking-tight mb-1">{logo.name}</h3>
                      <p className="text-white/40 text-[10px] font-mono uppercase tracking-widest">{logo.sub}</p>
                    </div>
                  </div>
                  
                  <p className="text-white/60 text-sm font-light leading-relaxed mb-8 flex-grow">
                    "{logo.desc}"
                  </p>

                  {logo.url && (
                    <a 
                      href={logo.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`mt-auto inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white transition-all ${
                        isCenter ? 'hover:bg-gl-green hover:text-black hover:border-gl-green pointer-events-auto' : 'pointer-events-none opacity-0'
                      }`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            );
          })}

          <button
            onClick={prevSlide}
            className="absolute left-0 md:left-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-gl-green hover:text-black text-white border border-white/10 transition-all z-20"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 md:right-12 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white/5 hover:bg-gl-green hover:text-black text-white border border-white/10 transition-all z-20"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
