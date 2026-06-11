import { useState, useEffect, useRef } from 'react';

import { MessageSquare, X } from 'lucide-react';

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const isClosedRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isClosedRef.current) return;

      const casesSection = document.getElementById('cases');
      if (casesSection) {
        const rect = casesSection.getBoundingClientRect();
        if (rect.bottom < 0 && rect.top < 0) {
          setIsVisible(true);
        } else if (rect.top > window.innerHeight) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible && !isClosed) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isVisible, isClosed]);

  const handleClose = () => {
    isClosedRef.current = true;
    setIsClosed(true);
    setIsVisible(false);
  };

  if (isClosed) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      style={{
        pointerEvents: isVisible ? 'auto' : 'none',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.3s ease',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
      />

      {/* Modal Container */}
      <div
        className="relative z-10 w-full max-w-md overflow-hidden rounded-[3rem] glass-card shadow-2xl p-4"
        style={{
          transform: isVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(20px)',
          opacity: isVisible ? 1 : 0,
          transition: 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
        }}
      >
        {/* Schließen-Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          className="absolute right-8 top-8 z-50 rounded-full p-2 text-white/40 transition-colors hover:bg-white/10 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Schließen"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content-Bereich */}
        <div className="relative flex flex-col items-center px-6 py-12 text-center sm:px-10 sm:py-16">
          {/* Icon Container */}
          <div className="mb-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gl-green/10 border border-gl-green/20 rotate-3">
            <MessageSquare className="h-10 w-10 text-gl-green" strokeWidth={2.5} />
          </div>

          {/* Titel */}
          <h2 className="mb-6 text-balance text-4xl font-black leading-tight tracking-tighter text-white">
            Bereit für mehr <br />
            <span className="text-gradient-logo">Anfragen?</span>
          </h2>

          {/* Beschreibung */}
          <p className="mb-12 text-balance text-lg leading-relaxed text-gl-gray-light">
            Lass uns unverbindlich über dein Projekt sprechen und deine Potenziale finden.
          </p>

          {/* Call-to-Action Button */}
          <div className="flex w-full flex-col items-center">
            <a
              href="#kontakt"
              className="btn-wibify w-full"
              onClick={handleClose}
            >
              <div className="glow-layer"></div>
              <span>Jetzt Termin Sichern</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
