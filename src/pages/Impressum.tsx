import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      <main className="pt-40 pb-32">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="font-mono text-gradient-logo font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
            Rechtliches
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-16 font-heading tracking-tight">Impres<span className="text-gradient-logo">sum</span></h1>
          
          <div className="space-y-16 text-gl-gray-light leading-relaxed font-sans">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Angaben gemäß § 5 TMG</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white">
                <p className="font-bold text-gradient-logo mb-2">GreenLabz Studio</p>
                <p>Inhaber: James Green</p>
                <p>Tulpenstraße 4</p>
                <p>71088 Holzgerlingen</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Kontakt</h2>
              <p>E-Mail: <a href="mailto:hallo@greenlabz.studio" className="text-gradient-logo hover:underline">hallo@greenlabz.studio</a></p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white">
                <p>James Green</p>
                <p>Tulpenstraße 4</p>
                <p>71088 Holzgerlingen</p>
                <p>Deutschland</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-gradient-logo hover:underline ml-2">
                  https://ec.europa.eu/consumers/odr/
                </a>.
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
