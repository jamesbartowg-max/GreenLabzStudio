import { useState, useEffect } from 'react';
import { Link } from 'react-router';

const navLinks = [
  { name: 'Leistungen', href: '/leistungen', internal: true },
  { name: 'Portfolio',  href: '/#cases',     internal: false },
  { name: 'Ratgeber',   href: '/ratgeber',   internal: true },
  { name: 'FAQ',        href: '/#faq',       internal: false },
  { name: 'Kontakt',    href: '#kontakt',    internal: false },
];

export default function Header() {
  const [menuOpen,   setMenuOpen]     = useState(false);
  const [hoveredIdx, setHoveredIdx]   = useState<number | null>(null);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* ── NAV BAR ── */}
      <nav
        aria-label="Primary"
        className="fixed top-0 left-0 w-full z-[200] pointer-events-none"
      >
        <div className="w-full px-5 py-6 flex items-center justify-center">

          {/* Unified Nav Pill (Centered) */}
          <div className="pointer-events-auto flex items-center gap-3 bg-[#0A0A0B]/80 backdrop-blur-md border border-white/5 p-2" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
            
            {/* Logo SVG */}
            <Link to="/" aria-label="GreenLabz — Startseite" className="flex-shrink-0 flex items-center justify-center px-4 py-2 hover:scale-105 transition-transform">
              <svg viewBox="0 0 100 100" className="w-10 h-10" style={{ filter: 'drop-shadow(0 0 12px rgba(0, 204, 106, 0.3))' }}>
                <defs>
                  <linearGradient id="goldGradientHeader" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00cc6a" />
                    <stop offset="50%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#00884d" />
                  </linearGradient>
                </defs>
                <path d="M60 20 A30 30 0 1 0 70 60 L50 60 L50 90 M70 60 L50 40"
                      fill="none" stroke="url(#goldGradientHeader)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            {/* CTA */}
            <a
              href="#kontakt"
              className="btn-wibify"
            >
              <div className="glow-layer"></div>
              <span>Projekt starten &rarr;</span>
            </a>

            {/* Burger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'}
              className="group relative flex h-12 w-12 items-center justify-center border border-white/10 bg-[#111] transition-colors hover:border-white/20 hover:bg-[#1a1a1b]"
            >
              {menuOpen ? (
                <span className="text-white text-xl leading-none">✕</span>
              ) : (
                <div className="flex w-5 flex-col gap-1.5 overflow-hidden">
                  <span className="h-[1px] w-full bg-white transition-transform duration-300 group-hover:-translate-x-1 group-hover:bg-gl-green" />
                  <span className="h-[1px] w-full bg-white transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-gl-green" />
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* ── FULLSCREEN MENU OVERLAY ── */}
      <div
        id="menuOverlay"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        className="fixed inset-0 z-[199] bg-[#0A0A0B] flex flex-col transition-all duration-500"
        style={{
          clipPath: menuOpen ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 100% 0%)',
          transitionTimingFunction: 'cubic-bezier(0.76, 0, 0.24, 1)',
        }}
      >
        {/* Subtle radial glow in background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 70% 50%, rgba(0,204,106,0.04) 0%, transparent 70%)' }}
        />

        {/* Spacer for nav bar height */}
        <div className="h-[73px] flex-shrink-0" />

        {/* Nav items */}
        <nav aria-label="Overlay navigation" className="flex flex-col justify-center flex-1 px-8 md:px-16 py-12">
          <ul className="list-none m-0 p-0 space-y-0">
            {navLinks.map((link, i) => {
              const isHovered  = hoveredIdx === i;
              const anyHovered = hoveredIdx !== null;
              return (
                <li key={link.name}>
                  {link.internal ? (
                    <Link
                      to={link.href}
                      onClick={close}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="block leading-none py-2 font-sans font-black transition-all duration-300 select-none"
                      style={{
                        fontSize: 'clamp(3rem, 13vw, 10rem)',
                        letterSpacing: '-0.04em',
                        color: isHovered
                          ? '#00cc6a'
                          : anyHovered
                          ? 'rgba(255,255,255,0.25)'
                          : 'white',
                        transform: menuOpen
                          ? 'translateY(0)'
                          : 'translateY(40px)',
                        opacity: menuOpen ? 1 : 0,
                        transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                      }}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={close}
                      onMouseEnter={() => setHoveredIdx(i)}
                      onMouseLeave={() => setHoveredIdx(null)}
                      className="block leading-none py-2 font-sans font-black transition-all duration-300 select-none"
                      style={{
                        fontSize: 'clamp(3rem, 13vw, 10rem)',
                        letterSpacing: '-0.04em',
                        color: isHovered
                          ? '#00cc6a'
                          : anyHovered
                          ? 'rgba(255,255,255,0.25)'
                          : 'white',
                        transform: menuOpen
                          ? 'translateY(0)'
                          : 'translateY(40px)',
                        opacity: menuOpen ? 1 : 0,
                        transitionDelay: menuOpen ? `${i * 60}ms` : '0ms',
                      }}
                    >
                      {link.name}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer row */}
        <div className="px-8 md:px-16 py-8 border-t border-white/8 flex items-center justify-between">
          <span className="font-mono text-white/30 text-xs uppercase tracking-widest">
            GreenLabz · Webdesign &amp; SEO
          </span>
          <a href="mailto:hallo@greenlabz.studio" className="font-mono text-white/40 text-xs hover:text-gradient-logo transition-colors">
            hallo@greenlabz.studio
          </a>
        </div>
      </div>
    </>
  );
}
