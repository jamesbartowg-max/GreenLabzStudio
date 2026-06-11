import { useParams } from 'react-router';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import StickyCTA from '../sections/StickyCTA';

export default function ProjectDetail() {
  const { slug } = useParams();

  // In a real app, this data would come from a CMS or an API
  // Here we just map the slug to a display title
  const formatTitle = (slug: string) => {
    return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const title = slug ? formatTitle(slug) : 'Projekt';

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <Header />
      
      {/* Hero Section of the Project */}
      <section className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,204,106,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col items-start gap-6">
          <p className="font-mono text-gl-green uppercase tracking-widest text-sm bg-gl-green/10 px-3 py-1 rounded">
            Case Study
          </p>
          <h1 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tight leading-tight">
            {title}
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mt-4">
            Wir haben {title} von Grund auf neu entwickelt und dabei modernste Webtechnologien eingesetzt, um die Performance und Conversion zu maximieren.
          </p>
          
          <div className="flex gap-4 mt-8 flex-wrap">
            <span className="font-mono text-xs text-white/50 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              Webseite
            </span>
            <span className="font-mono text-xs text-white/50 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              UX/UI Design
            </span>
            <span className="font-mono text-xs text-white/50 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              SEO
            </span>
            <span className="font-mono text-xs text-white/50 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
              2025
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Sidebar Info */}
          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Kunde</h3>
              <p className="text-white font-medium">{title}</p>
            </div>
            <div>
              <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Technologien</h3>
              <ul className="text-white font-medium space-y-1">
                <li>React & Vite</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-xs text-white/40 uppercase tracking-widest mb-2">Live ansehen</h3>
              <a href="#" className="text-gl-green hover:underline">Zur Webseite ↗</a>
            </div>
          </div>

          {/* Body Content */}
          <div className="md:col-span-8 prose prose-invert max-w-none">
            <p className="text-xl text-white/80 leading-relaxed font-light mb-8">
              Das Projekt {title} stand vor der Herausforderung, eine veraltete Online-Präsenz in eine moderne, hochperformante Lead-Maschine zu verwandeln. 
              Wir haben uns intensiv mit der Zielgruppe auseinandergesetzt und ein komplett neues Branding sowie UX-Konzept erarbeitet.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6 tracking-tight">Die Herausforderung</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Veraltetes Design, langsame Ladezeiten und eine unübersichtliche Navigation führten zu einer hohen Absprungrate. Ziel war es, das Vertrauen der Nutzer zurückzugewinnen und die Marke digital als Branchenführer zu positionieren.
            </p>

            <h2 className="text-3xl font-bold text-white mt-16 mb-6 tracking-tight">Die Lösung</h2>
            <p className="text-white/70 leading-relaxed mb-6">
              Wir implementierten ein Headless CMS gepaart mit einem modernen Frontend. Dadurch konnten wir die Ladezeiten drastisch reduzieren und gleichzeitig ein pixelperfektes, hochgradig interaktives Erlebnis schaffen.
            </p>

            {/* Example Image Placeholder */}
            <div className="my-16 w-full aspect-video bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center text-white/20">
              Mockup / Screenshot Platzhalter
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
}
