import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { Link } from 'react-router'
import { articlesData } from './ArticleDetail'
import { ArrowRight, Tag, Clock, ArrowLeft } from 'lucide-react'

export default function Guide() {
  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      
      <section className="pt-32 pb-20 border-b border-white/5 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gl-green/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gl-gray-light hover:text-gl-green transition-colors mb-8 group text-xs font-mono uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Startseite
          </Link>
          
          <p className="text-gradient-logo font-black uppercase tracking-[0.3em] text-[10px] mb-4">Wissen & Strategie</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Ratgeber</h1>
          <p className="text-gl-gray-light max-w-2xl mx-auto text-lg leading-relaxed">
            Exklusive Einblicke in Webdesign, SEO und Conversion-Optimierung für lokale Unternehmen.
          </p>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articlesData.map((a) => (
              <Link 
                key={a.slug} 
                to={`/ratgeber/${a.slug}`}
                className="group flex flex-col bg-white/5 border border-white/10 p-8 rounded-3xl hover:border-gl-green/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="bg-gl-green/10 text-gradient-logo px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-gl-green/20 flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    {a.category}
                  </span>
                  <span className="text-gl-gray-light text-[10px] flex items-center gap-2 font-mono">
                    <Clock className="w-3 h-3" />
                    {a.date}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gradient-logo transition-colors leading-tight">
                  {a.title}
                </h3>
                
                <p className="text-gl-gray-light text-sm line-clamp-3 mb-8 flex-1 leading-relaxed">
                  {a.description}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                  <span className="text-white text-xs font-black uppercase tracking-wider flex items-center gap-2">
                    Beitrag lesen <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform text-gl-green" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
