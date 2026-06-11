import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: "Wie lange dauert die Erstellung einer Website?",
    a: "In der Regel dauert ein Projekt von der Strategie bis zum Launch zwischen 4 und 8 Wochen, abhängig von der Komplexität und deinen Anforderungen."
  },
  {
    q: "Ist die Website direkt für Google optimiert (SEO)?",
    a: "Ja, jede Website von mir wird mit einer soliden On-Page-SEO-Grundlage erstellt. Ich achte auf schnelle Ladezeiten, saubere Code-Strukturen und die richtigen Keywords."
  },
  {
    q: "Kann ich Inhalte später selbst ändern?",
    a: "Absolut. Ich baue meine Systeme so auf, dass du Texte, Bilder oder Blogbeiträge ganz einfach ohne Programmierkenntnisse selbst verwalten kannst."
  },
  {
    q: "Was kostet eine professionelle Website bei GreenLabz?",
    a: "Da jedes Projekt individuell ist, variieren die Preise. Eine professionelle Landingpage startet bei ca. 1.500€, umfangreichere Firmenwebsites liegen meist zwischen 3.000€ und 7.000€."
  },
  {
    q: "Bietest du auch laufende Betreuung an?",
    a: "Ja, ich lasse dich nach dem Launch nicht allein. Ich biete Wartungspakete für Sicherheit, Updates und fortlaufende SEO-Optimierung an."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="bg-[#0a0b0a] py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gl-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gl-green/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 reveal-on-scroll">
          <p className="text-gradient-logo font-bold tracking-widest uppercase text-xs mb-4">FRAGEN & ANTWORTEN</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Häufig gestellte <span className="text-gradient-logo">Fragen</span>
          </h2>
          <p className="text-gl-gray max-w-xl mx-auto">
            Hier findest du Antworten auf die wichtigsten Fragen. Dein Anliegen ist nicht dabei? Schreib mir einfach!
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className={`border border-white/10 rounded-2xl transition-all duration-300 reveal-on-scroll ${openIndex === i ? 'bg-white/5 border-white/20' : 'bg-transparent hover:bg-white/5'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="text-lg font-bold text-white">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-transform duration-300 ${openIndex === i ? 'rotate-180 bg-gl-green border-gl-green text-black' : 'text-white'}`}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <div className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <div className="px-8 pb-8 text-gl-gray leading-relaxed text-base">
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
