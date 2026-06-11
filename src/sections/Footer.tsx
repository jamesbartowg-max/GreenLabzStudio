import { Link } from 'react-router'
import { useScrollReveal } from '../hooks/useScrollReveal';
import TextRoll from '../components/TextRoll';

export default function Footer() {
  const revealRef = useScrollReveal();

  return (
    <footer ref={revealRef} className="bg-[#0A0A0B] text-white pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gl-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">


        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 reveal-on-scroll">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-heading mb-6 text-white tracking-tight">GreenLabz</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-8 font-light">
              Ich baue hochkonvertierende Websites, Branding, Software und Mobile Apps für ambitionierte Marken.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                <i className="ph ph-instagram-logo text-lg text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                <i className="ph ph-linkedin-logo text-lg text-white"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              <li><Link to="/leistungen" className="hover:text-white transition-colors block w-max"><TextRoll text="Leistungen" /></Link></li>
              <li><Link to="/audit" className="hover:text-white transition-colors block w-max"><TextRoll text="Website Audit" /></Link></li>
              <li><Link to="/projekte" className="hover:text-white transition-colors block w-max"><TextRoll text="Projekte" /></Link></li>
              <li><Link to="/#ablauf" className="hover:text-white transition-colors block w-max"><TextRoll text="Ablauf" /></Link></li>
              <li><Link to="/ratgeber" className="hover:text-white transition-colors block w-max"><TextRoll text="Ratgeber" /></Link></li>
            </ul>
          </div>

          {/* Fokus */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8">Fokus</h4>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              <li>Webdesign für Handwerk</li>
              <li>SEO Optimierung</li>
              <li>Google Maps Marketing</li>
              <li>Conversion Optimierung</li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-8">Kontakt</h4>
            <ul className="space-y-4 text-sm text-white/70 font-light">
              <li className="flex items-center gap-3">
                <i className="ph ph-envelope text-white/40 text-lg"></i>
                <a href="mailto:hallo@greenlabz.studio" className="hover:text-white transition-colors">hallo@greenlabz.studio</a>
              </li>
              <li className="flex items-center gap-3">
                <i className="ph ph-map-pin text-white/40 text-lg"></i>
                <span>Baden-Württemberg, DE</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} GreenLabz. Engineering, Design and Strategy.</p>
          <div className="flex gap-8">
            <Link to="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
            <Link to="/agb" className="hover:text-white transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
