import { useParams, Link } from 'react-router';
import Header from '../sections/Header';
import Footer from '../sections/Footer';
import { ArrowLeft, Clock, Tag } from 'lucide-react';

export const articlesData = [
  {
    slug: 'handwerker-websites-fehler',
    title: 'Warum Handwerker-Websites oft keine Kunden bringen',
    date: '30. April 2026',
    category: 'Webdesign',
    description: 'Warum generiert deine Handwerker-Website keine Anfragen? Erfahre die 5 häufigsten Fehler und wie du deine Seite in eine Anfrage-Maschine verwandelst.',
    content: `
      <p>Du bist Handwerker, deine Auftragsbücher sind eigentlich voll, aber über deine Website kommt so gut wie gar nichts rein? Damit bist du nicht allein. Über 90% der Handwerker-Websites in Deutschland sind reine "Visitenkarten", die im Netz verstauben.</p>
      
      <h2>Der Fehler Nr. 1: Fehlende Kontaktmöglichkeiten</h2>
      <p>Ein potenzieller Kunde hat ein akutes Problem (Rohrbruch, defekte Heizung). Er landet auf deiner Seite und muss erst mühsam nach deiner Telefonnummer suchen. Im schlimmsten Fall gibt es nur ein langes Kontaktformular.</p>
      <p><strong>Lösung:</strong> Ein klickbarer "Jetzt anrufen"-Button muss auf dem Smartphone immer sichtbar sein.</p>

      <h2>Fehlende mobile Optimierung</h2>
      <p>Kunden suchen heute auf der Baustelle oder vom Sofa aus. Wenn deine Website auf dem Handy nicht perfekt aussieht oder ewig lädt, ist der Kunde sofort wieder weg und klickt auf den nächsten Eintrag bei Google.</p>

      <h2>Keine lokalen Referenzen</h2>
      <p>Im Handwerk ist Vertrauen alles. Wenn du keine echten Bilder deiner Arbeit oder Bewertungen von Kunden aus der Region zeigst, bleibst du austauschbar.</p>

      <h2>Fazit: Deine Website als bester Mitarbeiter</h2>
      <p>Eine gute Website arbeitet 24/7 für dich. Sie filtert Anfragen vor und sorgt dafür, dass nur die Kunden bei dir landen, die wirklich zu dir passen.</p>
    `
  },
  {
    slug: 'local-seo-guide-2026',
    title: 'SEO für lokale Unternehmen: Der Guide für 2026',
    date: '28. April 2026',
    category: 'SEO',
    description: 'Willst du in deiner Stadt ganz oben bei Google stehen? Unser Local SEO Guide zeigt dir, wie du deine Konkurrenz abhängst.',
    content: `
      <h2>Was ist Local SEO und warum ist es überlebenswichtig?</h2>
      <p>Local SEO sorgt dafür, dass Menschen in deiner direkten Umgebung dich finden, wenn sie nach deiner Dienstleistung suchen. Wer hier nicht auf Seite 1 steht, existiert für den Kunden praktisch nicht.</p>
      
      <h2>Keywords mit Ortsbezug</h2>
      <p>Es reicht nicht, nur für "Elektriker" zu ranken. Du musst für "Elektriker [Deine Stadt]" gefunden werden. Das ist weniger Konkurrenz und viel relevanterer Traffic.</p>
      
      <h2>On-Page Optimierung</h2>
      <p>Stelle sicher, dass deine Adresse und Telefonnummer (NAP-Daten) auf jeder Seite konsistent sind. Google liebt Klarheit.</p>
    `
  },
  {
    slug: 'google-maps-optimierung',
    title: 'Google Maps Optimierung: In 5 Schritten nach oben',
    date: '25. April 2026',
    category: 'Marketing',
    description: 'Erfahre, wie du dein Unternehmen in der Google Maps Suche ganz nach oben bringst und mehr Anrufe generierst.',
    content: `
      <h2>Die Macht des Google Unternehmensprofils</h2>
      <p>Dein Eintrag bei Google Maps ist oft das Erste, was ein Kunde sieht. Ein unvollständiges Profil wirkt unprofessionell.</p>
      
      <h2>Bewertungen: Dein Treibstoff</h2>
      <p>Sammle aktiv 5-Sterne-Bewertungen. Google belohnt Interaktion und positive Rückmeldungen mit besseren Platzierungen.</p>
      
      <h2>Bilder und Beiträge</h2>
      <p>Lade regelmäßig Fotos von deiner Arbeit oder deinem Team hoch. Das schafft Vertrauen und zeigt Google, dass dein Business aktiv ist.</p>
    `
  },
  {
    slug: 'ladezeit-seo-performance',
    title: 'Ladezeit & SEO: Geschwindigkeit ist bares Geld',
    date: '22. April 2026',
    category: 'Performance',
    description: 'Eine langsame Website tötet deinen Umsatz. Erfahre, warum Google Speed liebt und wie du deine Ladezeit optimierst.',
    content: `
      <h2>Die 3-Sekunden-Regel</h2>
      <p>Wenn deine Seite länger als 3 Sekunden zum Laden braucht, verlierst du bereits die Hälfte deiner potenziellen Kunden. Im mobilen Netz zählt jede Millisekunde.</p>
      
      <h2>Core Web Vitals</h2>
      <p>Google misst heute ganz genau, wie schnell deine Seite stabil nutzbar ist. Das beeinflusst dein Ranking direkt.</p>
    `
  },
  {
    slug: 'conversion-rate-optimierung-tipps',
    title: 'Conversion Rate Optimierung: Aus Besuchern Kunden machen',
    date: '20. April 2026',
    category: 'Conversion',
    description: 'Viele Besucher, aber keine Anfragen? Lerne, wie du deine Website psychologisch so aufbaust, dass Besucher zu Kunden werden.',
    content: `
      <h2>Klare Handlungsaufforderungen (CTA)</h2>
      <p>Sag deinen Besuchern genau, was sie tun sollen. "Jetzt Termin anfragen" ist viel effektiver als ein versteckter Link zur Kontaktseite.</p>
      
      <h2>Social Proof</h2>
      <p>Menschen kaufen von Menschen. Zeige Testimonials, Siegel oder Partnerlogos, um das Risiko für den Kunden im Kopf zu minimieren.</p>
    `
  },
  {
    slug: 'webdesign-trends-2026',
    title: 'Webdesign Trends 2026: Minimalismus trifft Performance',
    date: '18. April 2026',
    category: 'Design',
    description: 'Entdecke die Webdesign-Trends 2026. Warum weniger oft mehr ist und wie Design deine Markenbotschaft stärkt.',
    content: `
      <h2>Premium-Look durch Kontraste</h2>
      <p>Dunkle Modi und klare, mutige Typografie dominieren das Jahr 2026. Es geht darum, Charakter zu zeigen, ohne den Nutzer zu überladen.</p>
      
      <h2>Micro-Interactions</h2>
      <p>Kleine Animationen beim Scrollen oder Klicken machen die Website lebendig und führen den Blick des Nutzers.</p>
    `
  },
  {
    slug: 'seo-fuer-aerzte-praxen',
    title: 'Sichtbarkeit für Arztpraxen & Therapeuten',
    date: '15. April 2026',
    category: 'Praxis-Marketing',
    description: 'Wie finden Patienten deine Praxis? Unser Ratgeber zeigt, wie Ärzte und Therapeuten online Vertrauen aufbauen.',
    content: `
      <h2>Vertrauen durch Team-Vorstellung</h2>
      <p>Patienten möchten wissen, wem sie sich anvertrauen. Professionelle Fotos und kurze Biografien sind hier Pflicht.</p>
      
      <h2>Online-Terminbuchung</h2>
      <p>In einer digitalen Welt erwarten Patienten, Termine auch außerhalb der Sprechzeiten buchen zu können. Das entlastet zudem dein Personal am Telefon.</p>
    `
  },
  {
    slug: 'google-unternehmensprofil-guide',
    title: 'Google Unternehmensprofil: Die unterschätzte Waffe',
    date: '12. April 2026',
    category: 'Marketing',
    description: 'Nutzt du dein Google Unternehmensprofil richtig? Lerne versteckte Funktionen kennen, die dir einen Vorsprung verschaffen.',
    content: `
      <h2>Fragen und Antworten nutzen</h2>
      <p>Beantworte häufige Fragen direkt im Profil. Das spart Zeit und zeigt deine Expertise direkt in den Suchergebnissen.</p>
      
      <h2>Statistiken verstehen</h2>
      <p>Schau dir an, über welche Suchbegriffe die Leute auf dein Profil kommen. Das gibt dir wertvolle Hinweise für deine restliche SEO-Strategie.</p>
    `
  },
  {
    slug: 'warum-lokal-content-marketing',
    title: 'Warum jedes lokale Business Content Marketing braucht',
    date: '10. April 2026',
    category: 'Strategie',
    description: 'Warum ein Blog für Handwerker oder Dienstleister kein Zeitvertreib ist, sondern echtes Geld verdient.',
    content: `
      <h2>Beantworte Kundenfragen</h2>
      <p>Schreibe über Themen, die deine Kunden wirklich interessieren (z.B. "Was kostet eine neue Heizung?"). Damit wirst du zum ersten Ansprechpartner.</p>
      
      <h2>Long-Tail Keywords</h2>
      <p>Durch spezifische Artikel deckst du Nischen ab, die deine Konkurrenz vernachlässigt, und ziehst genau die richtige Zielgruppe an.</p>
    `
  },
  {
    slug: 'mobile-first-check',
    title: 'Mobile First: Die Welt ist mobil – deine Website auch?',
    date: '08. April 2026',
    category: 'Technik',
    description: 'Über 80% der lokalen Suchen finden am Smartphone statt. Erfahre, warum Mobile-First überlebenswichtig ist.',
    content: `
      <h2>Google Mobile-First Indexing</h2>
      <p>Google bewertet deine Website heute primär nach der mobilen Version. Ist diese schlecht, sinkt dein Ranking auf allen Geräten.</p>
      
      <h2>Daumen-Freundlichkeit</h2>
      <p>Können alle Buttons bequem mit dem Daumen erreicht werden? Ist der Text groß genug? Kleine Details entscheiden über die Conversion.</p>
    `
  }
];

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = articlesData.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-gl-dark flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Artikel nicht gefunden</h1>
          <Link to="/ratgeber" className="text-gl-green hover:underline">Zurück zum Ratgeber</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-6">
          <Link to="/ratgeber" className="inline-flex items-center gap-2 text-gl-gray-light hover:text-gl-green transition-colors mb-12 group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <span className="bg-gl-green/10 text-gradient-logo px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-gl-green/20 flex items-center gap-2">
              <Tag className="w-3 h-3" />
              {article.category}
            </span>
            <span className="text-gl-gray-light text-xs flex items-center gap-2">
              <Clock className="w-3 h-3" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="prose prose-invert prose-gl max-w-none">
            <div 
              className="text-gl-gray-light text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Brauchst du Hilfe bei deiner Strategie?</h3>
            <p className="text-gl-gray-light mb-8">
              Lass uns gemeinsam schauen, wie wir diese Prinzipien auf dein Business anwenden können.
            </p>
            <Link 
              to="/#kontakt" 
              className="inline-block bg-gl-green hover:bg-gl-green-hover text-black font-black px-8 py-4 rounded-full transition-all shadow-xl"
            >
              Kostenlose Erstberatung
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
