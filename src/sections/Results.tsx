import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useScrollReveal } from "../hooks/useScrollReveal";

const stats = [
  { value: 37, prefix: "+", suffix: "%", label: "mehr Anfragen\ndurchschnittlich" },
  { value: 2, prefix: "", suffix: "x", label: "mehr Sichtbarkeit\nbei Google" },
  { value: 1, prefix: "Platz ", suffix: "", label: "bei Google Maps\nfür relevante Suchbegriffe" },
  { value: 100, prefix: "", suffix: "+", label: "erfolgreiche Projekte\nin verschiedensten Branchen" },
];

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const proxy = { val: 0 };
      
      gsap.to(proxy, {
        val: value,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (el) {
            el.textContent = prefix + Math.round(proxy.val) + suffix;
          }
        }
      });
    });

    return () => ctx.revert();
  }, [value, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function Results() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="bg-[#0A0A0B] py-32 border-y border-white/5 relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gl-green/5 blur-[120px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-16">
          {/* Left */}
          <div className="lg:w-[35%] reveal-on-scroll">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gradient-logo mb-3 flex items-center gap-3">
              <span className="w-8 h-px bg-white/30" />
              [04] ERGEBNISSE
            </p>
            <h2 className="text-4xl lg:text-[56px] font-sans font-semibold text-white leading-[1.05] tracking-tight">
              Messbarer <br />
              <em className="font-heading text-gradient-logo not-italic" style={{ fontStyle: 'italic', letterSpacing: '-0.025em', padding: '0 0.04em' }}>Erfolg.</em>
            </h2>
            <a
              href="#projekte"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-mono uppercase tracking-widest text-xs mt-10 transition-colors group"
            >
              Projekte ansehen
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-gl-green" />
            </a>
          </div>

          {/* Right - Stats */}
          <div className="lg:w-[65%] grid grid-cols-2 gap-8 md:gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col reveal-on-scroll">
                <div className="text-5xl lg:text-7xl font-heading text-white leading-none tracking-tighter mb-4">
                  <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <div className="w-12 h-px bg-white/10 mb-4"></div>
                <p className="text-sm text-white/50 font-light whitespace-pre-line leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

