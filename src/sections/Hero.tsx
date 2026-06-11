import { useEffect, useRef } from 'react';

/* Animated SVG underline — drawn on load like Wibify */
function SvgUnderline({ delay = 0, color = '#00cc6a' }: { delay?: number; color?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 12"
      preserveAspectRatio="none"
      className="hero-word-underline"
      style={{ '--delay': `${delay}s` } as React.CSSProperties}
    >
      <path
        d="M2,9 C20,3 40,10 60,6 C75,3 88,9 98,7"
        fill="none"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        filter={`drop-shadow(0 1px 6px ${color}88)`}
      />
    </svg>
  );
}

const stats = [
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#00cc6a"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    ),
    num: '5.0',
    label: 'Google · 21 Reviews',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00cc6a" strokeWidth="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
    ),
    num: '7.5M+',
    label: 'Nutzer erreicht',
  },
  {
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="#00cc6a"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    num: '100',
    label: 'PageSpeed Score',
  },
];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  /* Word-by-word rise animation on mount */
  useEffect(() => {
    const words = titleRef.current?.querySelectorAll<HTMLElement>('.hero-word');
    if (!words) return;
    words.forEach((w, i) => {
      w.style.setProperty('--i', String(i));
    });
  }, []);

  return (
    <header
      id="home"
      className="hero"
      style={{ background: '#0A0A0B' }}
    >
      {/* ── Background image (right side, masked) ── */}
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/hero-asteroid.png"
          alt=""
          className="hero-bg-image"
          style={{
            objectPosition: 'right center',
            maskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.85) 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.1) 30%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.85) 100%)',
          }}
        />
      </div>

      {/* Dark overlay */}
      <div
        className="hero-overlay"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(140% 90% at 30% 55%, transparent 0%, rgba(10,10,11,0.45) 75%), linear-gradient(rgba(10,10,11,0.5) 0%, rgba(10,10,11,0.15) 25%, rgba(10,10,11,0.45) 65%, rgba(10,10,11,0.97) 100%)',
          position: 'absolute',
          inset: 0,
          zIndex: 1,
        }}
      />

      {/* ── Content ── */}
      <div className="hero-content">

        {/* Eyebrow */}
        <p className="hero-eyebrow">
          <span className="hero-eyebrow-line" aria-hidden="true" />
          <span className="text-gradient-logo">[01]</span>
          <span>Digital Design Studio</span>
        </p>

        {/* Headline */}
        <h1 className="hero-title" ref={titleRef}>
          <span className="hero-word" style={{ '--i': 0 } as React.CSSProperties}>
            Ich{'\u00a0'}baue{' '}
          </span>
          <span className="hero-word hero-word-em" style={{ '--i': 1 } as React.CSSProperties}>
            <em>digitale</em>
            <SvgUnderline delay={1.4} />
          </span>
          {' '}
          <br />
          <span className="hero-word hero-word-em" style={{ '--i': 2 } as React.CSSProperties}>
            <em>Produkte</em>
            <SvgUnderline delay={1.58} />
          </span>
          {' '}
          <span className="hero-word" style={{ '--i': 3 } as React.CSSProperties}>
            für{' '}
          </span>
          <span className="hero-word hero-word-em" style={{ '--i': 4 } as React.CSSProperties}>
            <em>Marken</em>
            <SvgUnderline delay={1.76} />
          </span>
          <br />
          <span className="hero-word" style={{ '--i': 5 } as React.CSSProperties}>
            mit Anspruch
          </span>
        </h1>

        {/* Sub */}
        <p className="hero-sub">
          Ich baue Webseiten, Branding, Software und Local SEO —{' '}
          <strong>digitale Produkte für Marken mit Anspruch.</strong>
        </p>

        {/* CTA buttons */}
        <div className="hero-actions">
          <a
            href="#kontakt"
            id="heroCtaPrimary"
            className="hero-btn-primary glow-border-always"
          >
            <span className="hero-btn-dots" aria-hidden="true" />
            <span className="relative z-10">Projekt starten →</span>
          </a>

          <a
            href="#cases"
            id="heroCtaSecondary"
            className="hero-btn-secondary"
          >
            <span
              aria-hidden="true"
              style={{ width: 10, height: 10, background: '#00cc6a', flexShrink: 0, display: 'inline-block' }}
            />
            Ausgewählte Arbeiten
          </a>
        </div>

        {/* Stats */}
        <div className="hero-stats" role="list">
          {stats.map((s, i) => (
            <div key={i} className="hero-stat" role="listitem">
              <span className="hero-stat-icon">{s.icon}</span>
              <span className="hero-stat-num">{s.num}</span>
              <span className="hero-stat-label">{s.label}</span>
              {i < stats.length - 1 && (
                <span className="hero-stat-sep" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
