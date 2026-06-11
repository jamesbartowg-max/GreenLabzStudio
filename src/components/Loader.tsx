import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loader() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const path = pathRef.current;
      if (!path) return;

      // length of the path
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

      const tl = gsap.timeline();

      // 1. Logo zeichnen
      tl.to(path, { strokeDashoffset: 0, duration: 2.5, ease: "power2.inOut" })
        // 2. Text sanft einblenden
        .to(textRef.current, { opacity: 1, duration: 1, ease: "power2.in" }, "-=1")
        // 3. Ausblenden
        .to(containerRef.current, { opacity: 0, duration: 0.5, ease: "power2.out", delay: 0.5 })
        .set(containerRef.current, { display: 'none' });
    });

    // Sicherheits-Fallback
    const fallback = setTimeout(() => {
        if(containerRef.current) containerRef.current.style.display = 'none';
    }, 6000);

    return () => {
        ctx.revert();
        clearTimeout(fallback);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="loader-screen"
      style={{
        position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
        background: '#050505', display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center', zIndex: 9999
      }}
    >
      {/* Logo SVG */}
      <svg
        className="logo-svg"
        viewBox="0 0 100 100"
        style={{ width: '150px', height: '150px', filter: 'drop-shadow(0 0 20px rgba(0, 204, 106, 0.3))' }}
      >
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00cc6a" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#00884d" />
          </linearGradient>
        </defs>
        <path
          ref={pathRef}
          className="monogram-path"
          d="M60 20 A30 30 0 1 0 70 60 L50 60 L50 90 M70 60 L50 40"
          style={{
            fill: "none",
            stroke: "url(#goldGradient)",
            strokeWidth: 4,
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }}
          id="gl-path"
        />
      </svg>

      {/* Markenname */}
      <h1
        ref={textRef}
        id="brand-text"
        style={{
          marginTop: '20px',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 300,
          letterSpacing: '0.3em',
          color: '#ffffff',
          textTransform: 'uppercase',
          fontSize: '1.2rem',
          opacity: 0
        }}
      >
        GreenLabz Studio
      </h1>
    </div>
  );
}
