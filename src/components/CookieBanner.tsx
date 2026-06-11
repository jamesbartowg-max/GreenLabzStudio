import { useState, useEffect } from 'react';

import { Cookie, X } from 'lucide-react';
import { Link } from 'react-router';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('gl-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('gl-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('gl-cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed bottom-6 left-6 right-6 md:left-8 md:right-auto md:max-w-md z-[300] transition-opacity duration-500"
        >
          <div className="bg-gl-dark/95 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Subtle Gradient Glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gl-green/10 blur-[60px] rounded-full pointer-events-none group-hover:bg-gl-green/20 transition-colors duration-700" />
            
            <div className="flex flex-col gap-6 relative z-10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gl-green/10 border border-gl-green/20 flex items-center justify-center">
                    <Cookie className="w-5 h-5 text-gl-green" />
                  </div>
                  <h4 className="text-white font-bold text-lg tracking-tight">Cookie-Einstellungen</h4>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-white/20 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-gl-gray-light text-sm leading-relaxed">
                Wir nutzen Cookies, um dein Erlebnis zu verbessern und unseren Traffic zu analysieren. Details findest du in unserer{' '}
                <Link to="/datenschutz" className="text-white underline underline-offset-4 hover:text-gl-green transition-colors">Datenschutzerklärung</Link>.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 bg-gl-green hover:bg-gl-green-hover text-black font-black py-3 px-6 rounded-full text-xs uppercase tracking-widest border border-white/50 shadow-lg shadow-gl-green/20 transition-all active:scale-95"
                >
                  Alle akzeptieren
                </button>
                <button
                  onClick={handleDecline}
                  className="flex-1 bg-white/5 hover:bg-white/10 text-white font-bold py-3 px-6 rounded-full text-xs uppercase tracking-widest border border-white/10 transition-all active:scale-95"
                >
                  Nur Notwendige
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
