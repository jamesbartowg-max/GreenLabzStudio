export default function FloatingContact() {
  return (
    <div
      className="fixed right-3 top-1/2 -translate-y-1/2 z-[200] flex flex-col gap-2"
      aria-label="Schnellkontakt"
    >
      {/* WhatsApp */}
      <a
        href="https://wa.me/49XXXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="relative glow-border-always group flex items-center justify-center bg-[#111111] border border-white/10 text-white/60 hover:text-white transition-all duration-300"
        style={{ width: '60px', height: '60px', borderRadius: '12px' }}
      >
        {/* Hover Background: Green glow + Dotted Grid */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-[12px]">
          <div className="absolute inset-0 bg-gradient-to-br from-gl-green/40 to-transparent" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          {/* Top border glow */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gl-green/80 to-transparent" />
          {/* Left border glow */}
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-gl-green/80 to-transparent" />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10" style={{ width: '24px', height: '24px' }} fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.547 4.085 1.504 5.806L.057 23.927a.5.5 0 00.609.61l6.219-1.429A11.954 11.954 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.52-5.17-1.426l-.37-.218-3.836.881.902-3.741-.24-.386A9.964 9.964 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>

      {/* Phone */}
      <a
        href="tel:+49XXXXXXXXXX"
        aria-label="Anrufen"
        className="relative glow-border-always group flex items-center justify-center bg-[#111111] border border-white/10 text-white/60 hover:text-white transition-all duration-300"
        style={{ width: '60px', height: '60px', borderRadius: '12px' }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-[12px]">
          <div className="absolute inset-0 bg-gradient-to-br from-gl-green/40 to-transparent" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gl-green/80 to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-gl-green/80 to-transparent" />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10" style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>

      {/* Chat / Email */}
      <a
        href="mailto:hallo@greenlabz.studio"
        aria-label="E-Mail schreiben"
        className="relative glow-border-always group flex items-center justify-center bg-[#111111] border border-white/10 text-white/60 hover:text-white transition-all duration-300"
        style={{ width: '60px', height: '60px', borderRadius: '12px' }}
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none overflow-hidden rounded-[12px]">
          <div className="absolute inset-0 bg-gradient-to-br from-gl-green/40 to-transparent" />
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-gl-green/80 to-transparent" />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-gl-green/80 to-transparent" />
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" className="relative z-10" style={{ width: '24px', height: '24px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </a>
    </div>
  );
}
