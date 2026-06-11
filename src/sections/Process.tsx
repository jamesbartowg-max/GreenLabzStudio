import { useLayoutEffect, useRef } from "react";
import { Target, PenTool, Box, Rocket } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useScrollReveal } from "../hooks/useScrollReveal";

gsap.registerPlugin(ScrollTrigger);

const processes = [
  {
    num: "01",
    icon: Target,
    title: "Strategie",
    desc: "Ich lerne euch und eure Marke kennen. Ziele, Zielgruppe, Wettbewerb. Daraus entsteht die Roadmap, die alles Weitere trägt.",
    tags: ["BRIEFING & WORKSHOP", "WETTBEWERBSANALYSE", "MARKENSTRATEGIE", "ROADMAP"]
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design",
    desc: "Identität, Interface, Prototyp. Hier wird die Marke sichtbar — vom Logo bis zum letzten Pixel der Website.",
    tags: ["BRAND IDENTITY", "WIREFRAMES & UX", "UI DESIGN", "DESIGNSYSTEM"]
  },
  {
    num: "03",
    icon: Box,
    title: "Build",
    desc: "Entwicklung in modernem Stack: Next.js, React, Performance-first. Sauberer Code, der skaliert und in fünf Jahren noch läuft.",
    tags: ["FRONTEND & CMS", "BACKEND / API", "PERFORMANCE & SEO", "QA & TESTING"]
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Pflege",
    desc: "Deployment, Monitoring, kontinuierliche Optimierung. Ich bleibe dran — eure Marke wächst, ich wachse mit.",
    tags: ["GO-LIVE", "ANALYTICS", "WARTUNG & UPDATES", "ITERATION & GROWTH"]
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const revealRef = useScrollReveal();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top", 
          end: "+=500%", // Increased scroll distance to include pause
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      // Initial state: cards are hidden below the window
      cards.forEach((card, i) => {
        gsap.set(card, { 
          y: window.innerHeight, 
          zIndex: i,
          transformOrigin: "top center"
        });
      });

      // Card 0 flies in
      tl.to(cards[0], { y: 0, duration: 1, ease: "none" });

      // Subsequent cards
      for (let i = 1; i < cards.length; i++) {
        tl.addLabel(`card${i}In`);
        
        // Next card flies in
        tl.to(cards[i], { y: 0, duration: 1, ease: "none" }, `card${i}In`);
        
        // Previous card scales down and darkens
        tl.to(cards[i-1], {
          scale: 0.95,
          y: -20,
          duration: 1,
          ease: "none"
        }, `card${i}In`);
        
        const overlay = cards[i-1]?.querySelector('.card-overlay');
        if (overlay) {
          tl.to(overlay, { opacity: 1, duration: 1, ease: "none" }, `card${i}In`);
        }
      }

      // Add a dummy tween at the end to create a pause before the section unpins
      tl.to({}, { duration: 1 });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="ablauf" className="bg-[#0A0A0B] relative z-[50] overflow-hidden h-screen flex flex-col" ref={containerRef}>
      {/* Background radial glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at center, rgba(0,204,106,0.15) 0%, transparent 70%)"
        }}
      />

      <div className="w-full h-full max-w-[1600px] mx-auto flex flex-col relative z-10 px-6 md:px-10 py-12 md:py-24" ref={revealRef as React.RefObject<HTMLDivElement>}>
        {/* Header */}
        <header className="flex flex-col mb-8 md:mb-16 reveal-on-scroll" style={{ gap: '1.75rem' }}>
          <p className="font-mono text-white/50 uppercase flex items-center" style={{ fontSize: '0.74rem', letterSpacing: '0.06em', gap: '0.85rem' }}>
            <span className="w-8 h-px bg-white/30 flex-shrink-0" aria-hidden="true" />
            <span className="text-gradient-logo">[04]</span>
            Prozess / Wie ich arbeite
          </p>
          <h2 className="font-sans font-semibold text-white" style={{ fontSize: 'clamp(2.25rem, 6.5vw, 5.25rem)', letterSpacing: '-0.045em', lineHeight: '0.95' }}>
            Vom{' '}
            <em className="font-heading text-gradient-logo not-italic" style={{ fontStyle: 'italic', letterSpacing: '-0.025em', padding: '0 0.04em' }}>Briefing</em>
            {' '}zum Launch.
          </h2>
        </header>

        {/* Stacking Cards Container */}
        <div className="relative w-full flex-1" ref={cardsWrapperRef}>
          {processes.map((process, i) => (
            <div
              key={i}
              ref={el => { cardsRef.current[i] = el; }}
              className="absolute top-0 left-0 w-full h-full rounded-[2rem] md:rounded-[2.5rem] border border-white/10 border-t-white/20 bg-[#111111]/95 backdrop-blur-xl flex flex-col md:flex-row shadow-[0_-10px_40px_rgba(0,0,0,0.8)] overflow-hidden ring-1 ring-black/50"
            >
              {/* Overlay for darkening background cards as next card comes over */}
              <div 
                className="card-overlay absolute inset-0 bg-[#050505] pointer-events-none z-50" 
                style={{ opacity: 0 }} 
              />
              
              {/* Left side: Icon / Graphic */}
              <div className="w-full md:w-1/2 h-[35%] md:h-full border-b md:border-b-0 md:border-r border-white/5 relative flex items-center justify-center p-8 md:p-12 overflow-hidden">
                {/* Decorative wireframe rings */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                  <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border border-white/20 absolute" />
                  <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/10 absolute" />
                  <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full border border-white/5 absolute" />
                  <div className="absolute w-[1px] h-full bg-white/10" />
                  <div className="absolute h-[1px] w-full bg-white/10" />
                </div>
                
                {/* Glowing orb behind icon */}
                <div className="absolute w-[150px] h-[150px] bg-gl-green/20 blur-[60px] rounded-full" />
                
                {/* Icon */}
                <process.icon className="w-24 h-24 md:w-32 md:h-32 text-white relative z-10 opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]" strokeWidth={1} />
              </div>

              {/* Right side: Text */}
              <div className="w-full md:w-1/2 h-[65%] md:h-full p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-gradient-to-br from-transparent to-black/20 relative z-10">
                <span className="font-mono text-gradient-logo font-bold text-sm tracking-widest mb-4 md:mb-8 opacity-90">
                  {process.num} <span className="text-white/30 mx-2">/</span> 04
                </span>
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight tracking-tight">
                  {process.title}
                </h3>
                <p className="text-base md:text-xl text-white/60 leading-relaxed font-light mb-8 md:mb-12">
                  {process.desc}
                </p>
                
                {/* Tags */}
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-[10px] md:text-xs text-white/40 tracking-[0.15em] uppercase">
                  {process.tags.map((tag, tagIdx) => (
                    <div key={tagIdx} className="flex items-center">
                      <span className="hover:text-gradient-logo transition-colors cursor-default">{tag}</span>
                      {tagIdx < process.tags.length - 1 && (
                        <span className="w-1 h-1 rounded-full bg-white/20 ml-4 hidden md:block" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
