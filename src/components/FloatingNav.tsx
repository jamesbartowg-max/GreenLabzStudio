import { Home, PlayCircle, Send, Search, User } from 'lucide-react';

export default function FloatingNav() {
  return (
    <div className="flex justify-center mt-12 md:mt-16">
      <div className="bg-gradient-to-b from-[#2a2a2a] to-[#0a0a0a] backdrop-blur-xl border border-white/10 rounded-full px-10 py-5 flex items-center gap-10 md:gap-14 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-t-white/20">
        <button className="text-white/70 hover:text-white transition-all transform hover:scale-110">
          <Home className="w-6 h-6" />
        </button>
        <button className="text-white/70 hover:text-white transition-all transform hover:scale-110">
          <PlayCircle className="w-6 h-6" />
        </button>
        <button className="text-white/70 hover:text-white transition-all transform hover:scale-110">
          <Send className="w-6 h-6" />
        </button>
        <button className="text-white/70 hover:text-white transition-all transform hover:scale-110">
          <Search className="w-6 h-6" />
        </button>
        <button className="text-white/70 hover:text-white transition-all transform hover:scale-110">
          <User className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
