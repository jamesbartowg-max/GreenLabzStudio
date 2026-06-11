import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MailX, Search, Users, EyeOff, MousePointerClick, ArrowRight, TrendingDown, Building2 } from "lucide-react";


gsap.registerPlugin(ScrollTrigger);

const GraphicNoRequests = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-24 h-24 bg-gl-green/20 rounded-full blur-xl animate-pulse" />
    <MailX className="w-16 h-16 text-gl-green relative z-10 drop-shadow-[0_0_15px_rgba(0,204,106,0.5)]" strokeWidth={1.5} />
    <MousePointerClick className="w-8 h-8 text-white/40 absolute top-1/4 right-1/4 animate-bounce" strokeWidth={1.5} />
  </div>
);

const GraphicNotVisible = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-24 h-24 bg-gl-green/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="relative z-10 flex items-center justify-center">
      <Search className="w-16 h-16 text-gl-green drop-shadow-[0_0_15px_rgba(0,204,106,0.5)]" strokeWidth={1.5} />
      <EyeOff className="w-8 h-8 text-white/40 absolute -bottom-2 -right-2" strokeWidth={1.5} />
    </div>
    <TrendingDown className="w-6 h-6 text-red-400 absolute top-1/4 right-1/3 opacity-60" strokeWidth={2} />
  </div>
);

const GraphicCompetitor = () => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute w-24 h-24 bg-gl-green/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
    <div className="flex items-center gap-4 relative z-10">
      <Users className="w-10 h-10 text-white/40" strokeWidth={1.5} />
      <ArrowRight className="w-6 h-6 text-gl-green animate-pulse" strokeWidth={2} />
      <Building2 className="w-12 h-12 text-gl-green drop-shadow-[0_0_15px_rgba(0,204,106,0.5)]" strokeWidth={1.5} />
    </div>
  </div>
);

const problems = [
  {
    num: "01",
    graphic: <GraphicNoRequests />,
    title: "Keine Anfragen über die Website",
    desc: "Deine Website sieht gut aus, aber es kommen keine oder nur wenige Anfragen über das Kontaktformular.",
  },
  {
    num: "02",
    graphic: <GraphicNotVisible />,
    title: "Nicht sichtbar bei Google",
    desc: "Potenzielle Kunden suchen bei Google – und finden deine Konkurrenz, nicht dich.",
  },
  {
    num: "03",
    graphic: <GraphicCompetitor />,
    title: "Kunden gehen zur Konkurrenz",
    desc: "Jeden Tag verlierst du potenzielle Aufträge durch eine schwache Online-Präsenz.",
  },
];

export default function Problem() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLSpanElement>(null);
  const eyebrowRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the section and flip the cards sequentially
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=2000',
          pin: true,
          scrub: 1,
          onLeave: () => {
            if (typewriterRef.current) {
              typewriterRef.current.style.animationPlayState = 'running';
            }
          },
          onLeaveBack: () => {
            // Reset typewriter if user scrolls back up
            if (typewriterRef.current) {
              typewriterRef.current.style.animationPlayState = 'paused';
              typewriterRef.current.style.width = '0';
              // Re-trigger animation on next enter
              void typewriterRef.current.offsetWidth; // force reflow
            }
          },
        },
      });

      const cards = gsap.utils.toArray('.card-inner');

      // Animate the eyebrow text to red with glow
      tl.to(eyebrowRef.current, {
        color: "#EF4444",
        textShadow: "0 0 20px rgba(239, 68, 68, 0.8)",
        duration: 1,
        ease: "none",
      }, 0);

      cards.forEach((card: any, i) => {
        tl.to(card, {
          rotateY: 180,
          duration: 1,
          ease: 'power2.inOut',
        }, i * 0.8);
      });

      tl.to({}, { duration: 0.5 });

      // Start typewriter when all cards have flipped (end of pinned scroll)
      tl.call(() => {
        if (typewriterRef.current) {
          typewriterRef.current.style.animationPlayState = 'running';
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#0A0A0B] pb-16 pt-20 relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background radial glow behind the section */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle at top, rgba(0,204,106,0.15) 0%, transparent 70%)"
        }}
      />

      <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Header */}
        <div className="mb-8 md:mb-12 text-center">
          <p className="font-mono text-[12px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-px bg-gl-green/30" />
            <span ref={eyebrowRef} className="text-gl-green">DAS PROBLEM</span>
            <span className="w-8 h-px bg-gl-green/30" />
          </p>
          <h2 className="text-4xl md:text-6xl text-white mb-4 font-heading italic tracking-tight">
            Deine Website kostet dich Kunden.
          </h2>
        </div>

        {/* Cards Grid Container */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full" style={{ perspective: '1200px' }}>
          {problems.map((problem, i) => (
            <div 
              key={i} 
              className="w-full h-[380px] relative"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="card-inner w-full h-full relative" 
                style={{ 
                  transformStyle: 'preserve-3d',
                  // Fallback for non-js state:
                  transform: 'rotateY(0deg)'
                }}
              >
                
                {/* CARD FRONT (Placeholder before flip) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-[2.5rem] border border-white/5 bg-[#0f0f11] flex flex-col items-center justify-center shadow-2xl"
                  style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                  <div 
                    className="absolute inset-0 opacity-[0.02] rounded-[2.5rem]"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                      backgroundSize: '20px 20px'
                    }}
                  />
                  <div className="w-20 h-20 bg-[#151515] rounded-full flex items-center justify-center border border-white/5">
                    <span className="font-mono text-white/20 text-2xl font-bold tracking-widest">{problem.num}</span>
                  </div>
                  <p className="mt-6 font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">Scroll</p>
                </div>

                {/* CARD BACK (Actual Content after flip) */}
                <div 
                  className="absolute inset-0 w-full h-full rounded-[2.5rem] border border-white/10 bg-[#111111] overflow-hidden flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-gl-green/30 transition-colors duration-500"
                  style={{ 
                    backfaceVisibility: 'hidden', 
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)' 
                  }}
                >
                  {/* Top side: Graphic */}
                  <div className="w-full border-b border-white/5 relative flex items-center justify-center p-6 overflow-hidden bg-[#0a0a0b]/50 h-[170px]">
                    {/* Decorative grid background */}
                    <div 
                      className="absolute inset-0 opacity-[0.03] pointer-events-none"
                      style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}
                    />
                    {problem.graphic}
                  </div>

                  {/* Bottom side: Text */}
                  <div className="w-full p-6 flex flex-col flex-grow">
                    <span className="font-mono text-gradient-logo text-[10px] font-bold tracking-[0.2em] mb-3 opacity-80 uppercase">
                      {problem.num} / 03
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 leading-tight tracking-tight">
                      {problem.title}
                    </h3>
                    <p className="text-sm text-white/60 leading-relaxed font-light">
                      {problem.desc}
                    </p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-12 text-center relative z-10 flex justify-center h-16 items-center">
          <div 
            className="text-4xl md:text-5xl font-heading text-gl-green italic flex items-center"
            style={{ fontStyle: 'italic' }}
          >
            <span
              ref={typewriterRef}
              className="typewriter-text"
              style={{
                display: 'inline-block',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                borderRight: '2px solid #00cc6a',
                animation: 'typewriter 1.5s steps(16) forwards, blink-caret 0.75s step-end infinite',
                animationPlayState: 'paused',
                width: 0,
              }}
            >Ich ändere das.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
