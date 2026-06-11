import { CalendarWidget } from '../components/CalendarWidget';

export default function Contact() {
  return (
    <section id="kontakt" className="bg-gl-dark py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gl-green/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <p className="font-mono text-gradient-logo font-bold tracking-[0.3em] text-[10px] uppercase mb-6">
            Kostenloses Erstgespräch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
            Bereit für mehr <br className="hidden md:block" />
            <span className="text-gradient-logo">planbare Anfragen?</span>
          </h2>
          <p className="text-gl-gray-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Sichere dir jetzt deinen Termin für eine unverbindliche Analyse. Wir schauen uns gemeinsam deine Potenziale an.
          </p>
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-10 duration-1000 max-w-4xl mx-auto glass-card rounded-[3rem] p-4 md:p-8">
          <CalendarWidget />
        </div>


      </div>
    </section>
  );
}
