import { Star } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const testimonials = [
  {
    quote:
      "Unsere stetig wachsende Nutzerbasis freut sich über eine tolle Website. Die Kommunikation war immer offen, freundlich und super schnell. Wer einen verlässlichen Partner mit hervorragender Ergebnisqualität sucht, ist bei GreenLabz bestens aufgehoben.",
    img: "https://i.pravatar.cc/150?u=1",
    name: "Milan Wolfs",
    title: "Gründer, Gardify",
  },
  {
    quote:
      "Unsere hohen Designansprüche konnten zu unserer vollsten Zufriedenheit umgesetzt werden. Die Seite sieht nicht nur großartig aus, sondern ist auch äußerst benutzerfreundlich und bringt spürbar mehr Kunden.",
    img: "https://i.pravatar.cc/150?u=2",
    name: "Armin Kienreich",
    title: "Gründer, Impulsschmiede",
  },
  {
    quote:
      "Die Zusammenarbeit war durchgehend professionell, effizient und von einer ausgezeichneten Kommunikation geprägt. Ich habe nun eine Website, die genau meinen Vorstellungen entspricht und großen Mehrwert bietet.",
    img: "https://i.pravatar.cc/150?u=3",
    name: "Daniel Bruck",
    title: "Gründer, Uniprep",
  },
  {
    quote:
      "Zusammen haben wir die Seite innerhalb kürzester Zeit konzipiert, entwickelt und erfolgreich gelauncht. Wir und unsere Kunden sind mit dem Resultat mehr als glücklich.",
    img: "https://i.pravatar.cc/150?u=4",
    name: "Thomas M.",
    title: "CEO, TechFlow",
  },
  {
    quote:
      "Wir sind begeistert von dem Endergebnis! Nach dem Launch unserer neuen Website konnten wir die Conversion-Rate massiv steigern. Echte Profis mit dem Auge fürs Detail.",
    img: "https://i.pravatar.cc/150?u=5",
    name: "Sarah Lindner",
    title: "Marketing, Novatree",
  },
  {
    quote:
      "Schon bevor die Entwicklung losging, hat GreenLabz uns mit Kompetenz dafür beraten. Alle Wünsche wurden umgesetzt und das in Rekordzeit. Jederzeit wieder!",
    img: "https://i.pravatar.cc/150?u=6",
    name: "Felix R.",
    title: "Geschäftsführer",
  },
];

export default function Testimonials() {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-[#0A0A0B] py-32 relative" ref={revealRef}>
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col gap-16">
          {/* Header */}
          <div className="max-w-2xl reveal-on-scroll">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gradient-logo mb-3 flex items-center gap-3">
              <span className="w-8 h-px bg-white/30" />
              DAS SAGEN UNSERE KUNDEN
            </p>
            <h2 className="text-4xl lg:text-[56px] font-sans font-semibold text-white leading-[1.05] tracking-tight">
              Zufriedene Kunden <br />
              sind die <em className="font-heading text-gradient-logo not-italic" style={{ fontStyle: 'italic', letterSpacing: '-0.025em', padding: '0 0.04em' }}>beste Referenz</em>.
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-[#121214] border border-white/5 rounded-[20px] p-8 flex flex-col relative group transition-all duration-300 hover:border-gl-green/30 hover:bg-[#151518] reveal-on-scroll hover-zoom"
              >
                <span className="absolute top-6 right-8 text-6xl font-serif font-black leading-none text-gl-green/10 group-hover:text-gl-green/20 transition-colors select-none">
                  "
                </span>
                
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, si) => (
                    <Star
                      key={si}
                      className="w-[18px] h-[18px] fill-[#E5B300] text-[#E5B300]"
                    />
                  ))}
                </div>
                
                <p className="text-white/70 text-[15px] leading-[1.7] flex-grow pr-4">
                  {t.quote}
                </p>
                
                <div className="w-full h-px bg-white/[0.06] my-8" />
                
                <div className="flex items-center gap-4">
                  <img src={t.img} alt={t.name} className="w-11 h-11 rounded-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
                  <div>
                    <p className="text-[15px] font-semibold text-white mb-0.5">
                      {t.name}
                    </p>
                    <p className="text-[12px] text-white/40 font-mono tracking-wide">{t.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
