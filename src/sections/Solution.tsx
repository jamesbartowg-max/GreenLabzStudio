import type { SVGProps } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
/* ── Icons ── */
const IconWebsite = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="3" y1="9" x2="21" y2="9" />
    <circle cx="6" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="8.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    <circle cx="11" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
const IconSEO = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="21" y2="21" />
    <line x1="11" y1="8" x2="11" y2="14" />
    <line x1="8" y1="11" x2="14" y2="11" />
  </svg>
);
const IconBranding = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);
const IconSoftware = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
    <line x1="12" y1="4" x2="12" y2="20" strokeOpacity="0.5" />
  </svg>
);
const IconApp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="7" y="2" width="10" height="20" rx="2" />
    <circle cx="12" cy="18" r="1" fill="currentColor" stroke="none" />
    <line x1="9" y1="6" x2="15" y2="6" />
  </svg>
);

const IconAnalytics = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
    strokeLinecap="round" strokeLinejoin="round" {...p}>
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);

const services = [
  {
    num: '01',
    icon: IconWebsite,
    title: 'Webseiten',
    description:
      'Hochperformante Marketing-Sites, Landing Pages und Corporate Websites — gebaut für Conversion und Geschwindigkeit.',
    capabilities: ['Next.js', 'React', 'Headless CMS', 'PageSpeed 100'],
    link: '/leistungen#webseiten',
  },
  {
    num: '02',
    icon: IconSEO,
    title: 'SEO & Local SEO',
    description:
      'Mehr Sichtbarkeit bei Google — von technischem On-Page-SEO bis zu Google Maps Optimierung für lokale Kunden.',
    capabilities: ['On-Page SEO', 'Local SEO', 'Google Maps', 'Backlinks'],
    link: '/leistungen#seo',
  },
  {
    num: '03',
    icon: IconBranding,
    title: 'Branding',
    description:
      'Markenidentitäten von Logo bis Designsystem. Identitäten, die haften und über alle Touchpoints konsistent funktionieren.',
    capabilities: ['Logo Design', 'Designsystem', 'CI/CD', 'Brand Voice'],
    link: '/leistungen#branding',
  },
  {
    num: '04',
    icon: IconAnalytics,
    title: 'Ads & Marketing',
    description:
      'Bezahlte Kampagnen und datengetriebene Strategien, die Reichweite in Umsatz verwandeln \u2014 messbar und skalierbar.',
    capabilities: ['Google Ads', 'Meta Ads', 'GA4', 'Retargeting'],
    link: '/leistungen#ads',
  },
  {
    num: '05',
    icon: IconApp,
    title: 'App Entwicklung',
    description:
      'Native und Cross-Platform Apps für iOS und Android. Vom Konzept bis zum Launch — schnell, performant und nutzerzentriert.',
    capabilities: ['React Native', 'iOS', 'Android', 'App Store'],
    link: '/leistungen#apps',
  },
  {
    num: '06',
    icon: IconSoftware,
    title: 'Software',
    description:
      'Custom Tools, interne Plattformen und SaaS-Produkte. Vom MVP bis zur skalierbaren Enterprise-L\u00f6sung.',
    capabilities: ['TypeScript', 'Supabase', 'API', 'MVP'],
    link: '/leistungen#software',
  },
];

export default function Solution() {
  const revealRef = useScrollReveal();

  return (
    <section
      id="leistungen"
      ref={revealRef}
      className="relative overflow-hidden"
      style={{
        background: '#0A0A0B',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        isolation: 'isolate',
      }}
    >
      {/* Background radial glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle at 50% 30%, rgba(0,204,106,0.12) 0%, transparent 55%)',
          opacity: 0.5,
        }}
      />
      {/* Overlay darkening */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(120% 80%, rgba(10,10,11,0.3) 0%, rgba(10,10,11,0.6) 55%, rgba(10,10,11,0.85) 100%)',
        }}
      />

      <div
        className="relative z-[2] w-full max-w-[1600px] mx-auto"
        style={{
          padding: '7rem 2.5rem 6rem',
          marginLeft: 'max(1.5rem, calc(50vw - 812px))',
          marginRight: 'auto',
        }}
      >
        {/* Header */}
        <header className="flex flex-col reveal-on-scroll" style={{ gap: '1.25rem', marginBottom: '4rem' }}>
          <p
            className="font-mono text-white/50 uppercase flex items-center"
            style={{ fontSize: '0.74rem', letterSpacing: '0.06em', gap: '0.85rem' }}
          >
            <span className="w-8 h-px bg-white/30 flex-shrink-0" aria-hidden="true" />
            <span className="text-gradient-logo">[03]</span>
            Leistungen / Was ich mache
          </p>

          <h2
            className="font-sans font-semibold text-white m-0"
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 5rem)',
              letterSpacing: '-0.045em',
              lineHeight: '0.95',
              maxWidth: '16ch',
            }}
          >
            Sechs{' '}
            <em
              className="font-heading text-gradient-logo"
              style={{ fontStyle: 'italic', letterSpacing: '-0.025em', padding: '0 0.04em', fontWeight: 400 }}
            >
              Disziplinen.
            </em>{' '}
            Alles aus einer Hand.
          </h2>
        </header>

        {/* Service cards grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
          style={{ gap: '1.25rem' }}
        >
          {services.map((s) => (
            <article
              key={s.num}
              className="service-card group reveal-on-scroll hover-zoom"
            >
              {/* Green top-line accent */}
              <span className="service-card-accent" aria-hidden="true" />

              {/* Watermark number */}
              <span className="service-card-watermark" aria-hidden="true">{s.num}</span>

              {/* Icon */}
              <header className="service-head">
                <div className="service-icon">
                  <s.icon width={22} height={22} />
                </div>
              </header>

              {/* Body */}
              <div className="service-body">
                <h3
                  className="font-sans text-white m-0"
                  style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.035em', lineHeight: '0.98' }}
                >
                  {s.title}
                </h3>

                <span className="service-divider" />

                <p className="text-white/55 m-0" style={{ fontSize: '0.95rem', lineHeight: 1.55, maxWidth: '38ch' }}>
                  {s.description}
                </p>

                {/* Capability pills */}
                <ul className="service-capabilities">
                  {s.capabilities.map((cap) => (
                    <li key={cap} className="service-capability">
                      <span
                        className="capability-icon-box inline-flex items-center justify-center rounded"
                        style={{
                          width: 18,
                          height: 18,
                          background: 'rgba(0,204,106,0.1)',
                          border: '1px solid rgba(0,204,106,0.2)',
                          transition: 'all 0.4s ease',
                          flexShrink: 0,
                        }}
                      >
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="#00cc6a" stroke="none">
                          <path d="M20 6L9 17l-5-5" stroke="#00cc6a" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow */}
              <a
                href={s.link}
                className="service-card-arrow"
                aria-label={`Mehr über ${s.title}`}
                tabIndex={-1}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
