import Header from '../sections/Header'
import Footer from '../sections/Footer'
import Audit from '../sections/Audit'

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      
      <section className="pt-32 pb-10">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gradient-logo font-semibold uppercase tracking-wider text-sm mb-4">Lead-Analyse</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Website Audit</h1>
          <p className="text-gl-gray-light max-w-2xl mx-auto text-lg">
            Sichere dir jetzt deine kostenlose Kurzanalyse und entdecke ungenutzte Potenziale.
          </p>
        </div>
      </section>

      <Audit />

      <Footer />
    </div>
  )
}
