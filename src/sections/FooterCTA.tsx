import { ArrowRight, Check } from "lucide-react";

export default function FooterCTA() {
  return (
    <section id="analyse" className="bg-gl-dark py-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left */}
          <div className="md:w-[60%]">
            <h2 className="text-2xl lg:text-[28px] font-bold text-white leading-tight mb-3">
              Lass uns über dein Wachstum sprechen.
            </h2>
            <p className="text-sm text-gl-gray-light leading-relaxed mb-4">
              Sichere dir jetzt deine kostenlose Analyse und erfahre, wie wir richtig deinen Erfolg steigern.
            </p>
            <div className="flex items-center gap-2 text-sm text-gl-gray-light">
              <Check className="w-4 h-4 text-gl-green" />
              <span>Kostenlose Erstberatung</span>
            </div>
          </div>

          {/* Right */}
          <div className="md:w-[40%] md:flex md:justify-end">
            <a
              href="#kontakt"
              className="inline-flex items-center gap-2 bg-gl-green hover:bg-gl-green-hover text-black font-semibold px-7 py-4 rounded-lg transition-all duration-200 group"
            >
              Kostenlose Analyse sichern
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
