import { Check } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const plans = [
  {
    name: "Starter",
    desc: "Die professionelle Grundlage",
    features: [
      "Mobiles Premium-Design",
      "Google Basis-Setup",
      "Rechtlich abgesichert",
      "Schnelle Ladezeiten",
    ],
    price: "ab 499 €",
    highlighted: false,
    buttonStyle: "bg-white/20 backdrop-blur-xl border border-black/10 text-[#1A1A1A] hover:bg-gl-green hover:border-gl-green hover:text-black hover:shadow-[0_10px_30px_rgba(74,179,35,0.3)] transition-all duration-300 shadow-sm",
  },
  {
    name: "Growth",
    desc: "Die lokale Sichtbarkeits-Maschine",
    features: [
      "Alles aus Starter, plus:",
      "Conversion-optimiertes Design",
      "Lokale Google-Dominanz",
      "Zielgruppen-SEO",
      "Performance-Tracking",
    ],
    price: "ab 1.999 €",
    highlighted: true,
    buttonStyle: "bg-gl-green/30 backdrop-blur-xl text-black border-2 border-gl-green/50 hover:bg-gl-green hover:shadow-[0_15px_40px_rgba(74,179,35,0.5)] transition-all duration-300",
  },
  {
    name: "Premium",
    desc: "Das Rundum-Sorglos-System",
    features: [
      "Alles aus Growth, plus:",
      "Individuelles High-End Design",
      "Umfassende Content- & SEO-Strategie",
      "Premium Lead-Generierung",
      "Inklusive: Laufende Begleitung",
    ],
    price: "ab 2.999 €",
    highlighted: false,
    buttonStyle: "bg-white/20 backdrop-blur-xl border border-black/10 text-[#1A1A1A] hover:bg-gl-green hover:border-gl-green hover:text-black hover:shadow-[0_10px_30px_rgba(74,179,35,0.3)] transition-all duration-300 shadow-sm",
  },
];

export default function Pricing() {
  const revealRef = useScrollReveal();

  return (
    <section id="leistungen" ref={revealRef} className="bg-gl-dark py-32 relative z-10 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 reveal-on-scroll">
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gradient-logo mb-4">
            PREISE & PAKETE
          </p>
          <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
            Investiere in dein <span className="text-gradient-logo">Wachstum.</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-center">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative h-full reveal-on-scroll ${plan.highlighted ? 'md:scale-105 z-10' : 'z-0'}`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gl-green text-black text-[10px] font-black uppercase tracking-[0.2em] px-5 py-2 rounded-full shadow-xl z-20 font-mono">
                  EMPFOHLEN
                </div>
              )}
              <div
                className={`glass-card rounded-[2.5rem] p-8 lg:p-10 h-full flex flex-col transition-all duration-500 hover-zoom ${
                  plan.highlighted
                    ? "border-gl-green ring-4 ring-gl-green/10"
                    : "hover:border-white/20"
                }`}
              >
                <h3 className="text-2xl font-black text-white text-center tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-sm text-gl-gray-light text-center mt-3 mb-10">
                  {plan.desc}
                </p>

                <ul className="space-y-5 flex-1 mb-10">
                  {plan.features.map((feature, fi) => (
                    <li key={fi} className="flex items-start gap-4 text-sm text-gl-gray-light">
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-gl-green text-black' : 'bg-white/10 text-white'}`}>
                        <Check className="w-3 h-3" strokeWidth={4} />
                      </div>
                      <span className={feature.includes("Inklusive") ? "font-bold text-white" : ""}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center mb-10">
                  <span className="text-3xl font-black text-white tracking-tighter">
                    {plan.price}
                  </span>
                </div>

                <button className="btn-wibify w-full">
                  <div className="glow-layer"></div>
                  <span>Paket wählen</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Retainer Section */}
        <div className="mt-20 lg:mt-32">
          <div className="glass-card rounded-[2.5rem] p-8 lg:p-12 relative overflow-hidden group">
            {/* Internal Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gl-green/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-12">
              <div className="lg:w-[70%]">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4 tracking-tight">
                  Dein Erfolg ist kein Einmal-Projekt.
                </h3>
                <p className="text-gradient-logo font-bold text-sm mb-6 uppercase tracking-widest font-mono">
                  Google ändert sich ständig. Ich halte dich oben.
                </p>
                <p className="text-gl-gray-light text-lg leading-relaxed max-w-2xl">
                  <span className="text-white font-bold">SEO- & Website-Begleitung.</span> Verfügbar für alle Pakete. 
                  Ich lasse dich nach dem Launch nicht allein. Ich übernehme die Wartung, Sicherheitsupdates und 
                  optimiere deine Rankings kontinuierlich weiter.
                </p>
              </div>
              <div className="lg:w-[30%] lg:text-right flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-12">
                <p className="text-[10px] font-black text-gradient-logo uppercase tracking-[0.3em] mb-3 font-mono">Abopreis</p>
                <p className="text-4xl lg:text-5xl font-black text-white tracking-tighter">ab 149 € <span className="text-lg font-normal text-gl-gray-light">/ mtl.</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gl-gray-light text-sm max-w-2xl mx-auto leading-relaxed">
            Hinweis: Umfangreichere Firmenwebsites liegen meist zwischen <span className="text-white font-bold">3.000 € und 5.000 €</span>. 
            Für individuelle Anforderungen erstelle ich dir gerne ein maßgeschneidertes Angebot.
          </p>
        </div>
      </div>
    </section>
  );
}
