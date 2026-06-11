import { motion } from 'framer-motion'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { Monitor, Zap, MapPin, BarChart } from 'lucide-react'

export default function Services() {
  const services = [
    {
      title: "Webdesign für Handwerk",
      description: "Individuelle Websites, die dein Handwerk perfekt präsentieren und Kunden überzeugen.",
      icon: <Monitor className="w-8 h-8 text-gl-green" />
    },
    {
      title: "SEO Optimierung",
      description: "Sichtbarkeit bei Google für die Begriffe, nach denen deine Kunden wirklich suchen.",
      icon: <Zap className="w-8 h-8 text-gl-green" />
    },
    {
      title: "Google Maps Marketing",
      description: "Werde die Nummer 1 in deiner Region mit einem optimierten Google Unternehmensprofil.",
      icon: <MapPin className="w-8 h-8 text-gl-green" />
    },
    {
      title: "Conversion Optimierung",
      description: "Wir machen aus deinen Website-Besuchern echte Anfragen und zahlende Kunden.",
      icon: <BarChart className="w-8 h-8 text-gl-green" />
    }
  ]

  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      
      {/* Subpage Hero */}
      <section className="pt-32 pb-20 border-b border-white/5">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gradient-logo font-semibold uppercase tracking-wider text-sm mb-4">Was wir tun</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Unsere Leistungen</h1>
          <p className="text-gl-gray-light max-w-2xl mx-auto text-lg">
            Ganzheitliche digitale Lösungen, um dein Unternehmen online zum Erfolg zu führen.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                key={i} 
                className="bg-white/5 border border-white/10 p-10 rounded-2xl hover:border-gl-green/30 transition-all group"
              >
                <div className="mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{s.title}</h3>
                <p className="text-gl-gray-light leading-relaxed mb-6">{s.description}</p>
                <a href="#kontakt" className="text-gradient-logo font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Mehr erfahren <i className="ph ph-arrow-right"></i>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
