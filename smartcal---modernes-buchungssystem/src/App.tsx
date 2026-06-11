/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { CalendarWidget } from './components/CalendarWidget';

export default function App() {
  return (
    <div className="min-h-screen pt-12 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Mesh Gradient Background Elements */}
      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-[#5cc82b]/5 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <header className="text-center space-y-4">
          <div className="text-[#5cc82b] text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Kostenloses Erstgespräch
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Lassen Sie uns über Ihr Projekt sprechen.
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Wählen Sie einfach einen passenden Termin für unser Gespräch. 
            Ich nehme mir gerne Zeit für Sie und Ihre Fragen rund um Webdesign und SEO.
          </p>
        </header>

        <main>
          <CalendarWidget />
        </main>
      </div>
    </div>
  );
}
