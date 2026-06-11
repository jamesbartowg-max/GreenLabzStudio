import { useState } from 'react';
import LeadPopup from './components/LeadPopup';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-mesh p-4">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
          Lead-Generierung
        </h1>
        <p className="mb-8 text-lg text-zinc-400 text-balance">
          Das Pop-up sollte standardmäßig beim Laden der Seite geöffnet sein. Falls du es geschlossen hast, kannst du es hier wieder öffnen.
        </p>
        <button
          onClick={() => setIsPopupOpen(true)}
          className="rounded-xl bg-[#51b827] px-6 py-3 font-semibold text-black shadow-sm ring-1 ring-inset ring-white/50 transition-all hover:bg-[#46a321] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#51b827] focus:ring-offset-2 focus:ring-offset-[#050505]"
        >
          Pop-up öffnen
        </button>
      </div>

      <LeadPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
}
