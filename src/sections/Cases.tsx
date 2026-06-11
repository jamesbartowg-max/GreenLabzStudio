import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import TextRoll from '../components/TextRoll';

const projects = [
  {
    number: "01",
    name: "Die Lackier-Werkstatt",
    tags: "Webseite · Branding",
    year: "2025",
    url: "#",
    thumb: null,
  },
  {
    number: "02",
    name: "UnfallFix24",
    tags: "Webseite · Software",
    year: "2025",
    url: "#",
    thumb: null,
  },
  {
    number: "03",
    name: "Tierarztpraxis Dr. Buss",
    tags: "Webseite · SEO",
    year: "2024",
    url: "https://www.xn--tierarztpraxis-mckmhl-wec5l.de/",
    thumb: "/tierarzt-cover.png",
  },
  {
    number: "04",
    name: "Happen Streetfood",
    tags: "Webseite · Local SEO",
    year: "2024",
    url: "https://happen.food/",
    thumb: "/happen.png",
  },
  {
    number: "05",
    name: "Zahnarzt Dr. Wenzel",
    tags: "Webseite · Branding",
    year: "2024",
    url: "https://drwenzel.netlify.app/",
    thumb: null,
  },
  {
    number: "06",
    name: "Physio Bewegt Möckmühl",
    tags: "Webseite · Google Maps",
    year: "2024",
    url: "#",
    thumb: null,
  },
];


export default function Cases() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const revealRef = useScrollReveal();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    const el = sectionRef.current;
    el?.addEventListener('mousemove', handleMouseMove);
    return () => el?.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="bg-[#0A0A0B] relative overflow-hidden"
      style={{ padding: '8rem 2.5rem 7rem', contentVisibility: 'auto' } as React.CSSProperties}
    >
      {/* Floating image preview cursor */}
      {cursorVisible && previewSrc && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute z-50 overflow-hidden border border-white/10 transition-opacity duration-300"
          style={{
            width: 248,
            height: 140,
            left: cursorPos.x + 20,
            top: cursorPos.y - 70,
            background: '#111',
          }}
        >
          <img
            src={previewSrc}
            alt="Case-Vorschau"
            className="w-full h-full object-contain"
          />
        </div>
      )}

      <div className="w-full max-w-[1600px] mx-auto flex flex-col" ref={revealRef as React.RefObject<HTMLDivElement>}>

        {/* Header */}
        <header className="flex flex-col mb-18 reveal-on-scroll" style={{ gap: '1.75rem', marginBottom: '4.5rem' }}>
          <p className="font-mono text-white/50 uppercase flex items-center" style={{ fontSize: '0.74rem', letterSpacing: '0.06em', gap: '0.85rem' }}>
            <span className="w-8 h-px bg-white/30 flex-shrink-0" aria-hidden="true" />
            <span className="text-gradient-logo">[02]</span>
            Selected Work / 2024 — 2026
          </p>

          <h2 className="font-sans font-semibold text-white" style={{ fontSize: 'clamp(2.25rem, 6.5vw, 5.25rem)', letterSpacing: '-0.045em', lineHeight: '0.95' }}>
            Was ich{' '}
            <em className="font-heading text-gradient-logo not-italic" style={{ fontStyle: 'italic', letterSpacing: '-0.025em', padding: '0 0.04em' }}>gebaut</em>
            {' '}habe.
          </h2>
        </header>

        {/* Project list */}
        <ul className="m-0 p-0 list-none" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          {projects.map((project, i) => (
            <li key={i} className="relative reveal-on-scroll" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <a
                href={project.url}
                target={project.url !== '#' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="work-link group no-underline"
                onMouseEnter={() => {
                  setCursorVisible(true);
                  setPreviewSrc(project.thumb);
                }}
                onMouseLeave={() => {
                  setCursorVisible(false);
                  setPreviewSrc(null);
                }}
              >
                {/* Green line appears at top on hover */}
                <span className="work-link-bar" aria-hidden="true" />

                {/* Number */}
                <span className="font-mono text-white/30 flex-shrink-0" style={{ fontSize: '0.78rem', letterSpacing: '0.04em', gridArea: 'num' }}>
                  {project.number}
                </span>

                {/* Name with text-roll animation */}
                <h3 className="font-sans font-semibold text-white m-0" style={{ fontSize: 'clamp(1.65rem, 4.5vw, 3.25rem)', letterSpacing: '-0.04em', lineHeight: 1, gridArea: 'name' }}>
                  <TextRoll text={project.name} label={project.name} />
                </h3>

                {/* Tags */}
                <span className="font-mono text-white/40 uppercase" style={{ fontSize: '0.78rem', letterSpacing: '0.04em', gridArea: 'tag' }}>
                  {project.tags}
                </span>

                {/* Year */}
                <span className="font-mono text-white/40 uppercase" style={{ fontSize: '0.78rem', letterSpacing: '0.04em', gridArea: 'year' }}>
                  {project.year}
                </span>

                {/* Arrow */}
                <span className="font-mono text-white/40 transition-all duration-[450ms] work-arrow" style={{ fontSize: '1.05rem', gridArea: 'arrow' }}>
                  ↗
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Footer CTA */}
        <div className="flex justify-end mt-12">
          <a
            href="#kontakt"
            className="font-mono text-white/60 uppercase border-b border-white/20 inline-flex items-center gap-2 pb-2 transition-all duration-300 hover:text-gradient-logo hover:border-gl-green"
            style={{ fontSize: '0.82rem', letterSpacing: '0.04em' }}
          >
            Alle Projekte ansehen
            <span className="transition-transform duration-400 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}
