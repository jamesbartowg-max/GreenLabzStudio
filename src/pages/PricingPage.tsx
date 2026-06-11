import Header from '../sections/Header'
import Footer from '../sections/Footer'
import Pricing from '../sections/Pricing'

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gradient-logo font-semibold uppercase tracking-wider text-sm mb-4">Investition</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Pakete & Preise</h1>
          <p className="text-gl-gray-light max-w-2xl mx-auto text-lg">
            Transparente Preise für nachhaltiges Wachstum. Wähle das Paket, das am besten zu deinen Zielen passt.
          </p>
        </div>
      </section>

      <Pricing />

      <Footer />
    </div>
  )
}
