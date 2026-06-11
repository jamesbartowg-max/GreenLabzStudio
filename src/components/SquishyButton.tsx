import { ArrowUpRight } from 'lucide-react';

export default function SquishyButton() {
  return (
    <button className="group relative cursor-pointer border-none bg-transparent p-0 outline-none">
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gl-green/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
      
      {/* Main Button - Pill Shape with Thick White Border */}
      <div className="relative bg-gl-green/80 backdrop-blur-md text-black font-black text-sm px-6 py-3 rounded-full border-[2px] border-white flex items-center gap-2 transform transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_-10px_rgba(0,204,106,0.5)] active:scale-95">
        <span>Kostenlose Analyse sichern</span>
        
        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-500 shrink-0 shadow-lg">
          <ArrowUpRight className="text-gl-green w-3 h-3" />
        </div>
      </div>
    </button>
  );
}
