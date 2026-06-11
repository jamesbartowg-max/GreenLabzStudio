import { AnimatePresence, motion } from 'motion/react';
import { MessageSquare, X } from 'lucide-react';
import { useEffect } from 'react';

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadPopup({ isOpen, onClose }: LeadPopupProps) {
  // Option: schließen durch "Escape" Taste
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', bounce: 0.3, duration: 0.6 }}
            className="relative z-10 w-full max-w-md overflow-hidden rounded-[40px] bg-[#0e0e0e] shadow-2xl ring-1 ring-white/5"
          >
            {/* Schließen-Button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 rounded-full p-2 text-zinc-500 transition-colors hover:bg-white/10 hover:text-white focus:outline-none"
              aria-label="Schließen"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Content-Bereich */}
            <div className="relative flex flex-col items-center px-6 py-14 text-center sm:px-10 sm:py-16">
              {/* Icon / Avatar Container */}
              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#2d5619] bg-[#16270e]">
                <MessageSquare className="h-8 w-8 text-[#51b827]" strokeWidth={2} />
              </div>

              {/* Titel */}
              <h2 className="mb-6 text-balance text-3xl font-bold leading-snug tracking-tight text-white sm:text-[32px]">
                Bereit für mehr <br />
                Anfragen?
              </h2>

              {/* Beschreibung */}
              <p className="mb-12 text-balance text-[17px] leading-relaxed text-zinc-400">
                Lass uns unverbindlich über dein <br className="hidden sm:block" />
                Projekt sprechen und deine <br className="hidden sm:block" />
                Potenziale finden.
              </p>

              {/* Call-to-Action Button */}
              <div className="flex w-full flex-col items-center">
                <button
                  className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-white/80 bg-[#51b827] px-8 py-5 text-sm font-bold uppercase tracking-widest text-black transition-all hover:bg-[#46a321] focus:outline-none focus:ring-2 focus:ring-[#51b827] focus:ring-offset-2 focus:ring-offset-[#0e0e0e]"
                  style={{ boxShadow: '0 10px 40px -10px rgba(81, 184, 39, 0.4)' }}
                  onClick={onClose}
                >
                  <span className="relative z-10">Jetzt Termin Sichern</span>
                  {/* Shine-Effekt beim Hovern */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
