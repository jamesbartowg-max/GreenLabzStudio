import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default function ProcessPage() {
  const steps = [
    { num: "01", title: "Analyse & Strategie", text: "Wir analysieren deinen Markt, deine Konkurrenz und definieren die Ziele für deine Website." },
    { num: "02", title: "Design & Konzept", text: "Wir erstellen ein Design-Konzept, das deine Marke perfekt widerspiegelt und auf Conversions optimiert ist." },
    { num: "03", title: "Entwicklung", text: "Die technische Umsetzung erfolgt mit modernsten Technologien für maximale Geschwindigkeit und Sicherheit." },
    { num: "04", title: "Launch & Optimierung", text: "Nach dem Launch begleiten wir dich weiter und optimieren die Seite basierend auf echten Nutzerdaten." },
  ]

  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gradient-logo font-semibold uppercase tracking-wider text-sm mb-4">Schritt für Schritt</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Dein Ablauf</h1>
          <p className="text-gl-gray-light max-w-2xl mx-auto text-lg">
            So begleiten wir dich von der ersten Idee bis zur fertigen, verkaufsstarken Website.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-12 max-w-4xl mx-auto">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-8 items-start bg-white/5 p-8 rounded-2xl border border-white/10">
                <div className="text-5xl font-black text-gradient-logo/20 leading-none">{s.num}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">{s.title}</h3>
                  <p className="text-gl-gray-light leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
