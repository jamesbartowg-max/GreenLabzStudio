import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default function AGB() {
  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      <main className="pt-40 pb-32">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="font-mono text-gradient-logo font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
            Rechtliches
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-16 font-heading tracking-tight">AG<span className="text-gradient-logo">B</span></h1>
          
          <div className="space-y-16 text-gl-gray-light leading-relaxed font-sans">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">1. Geltungsbereich</h2>
              <p>Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen:</p>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white mt-4">
                <p className="font-bold text-gradient-logo mb-2">GreenLabz Studio</p>
                <p>Inhaber: James Green</p>
                <p>Tulpenstraße 4</p>
                <p>71088 Holzgerlingen</p>
                <p>Deutschland</p>
              </div>
              <p className="mt-6 italic">– nachfolgend „Agentur“ – und ihren Kunden.</p>
              <p className="mt-4">Abweichende Bedingungen des Kunden werden nicht anerkannt, es sei denn, die Agentur stimmt ihrer Geltung ausdrücklich schriftlich zu.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">2. Leistungen der Agentur</h2>
              <p>Die Agentur erbringt Dienstleistungen in den Bereichen:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo text-white">
                <li>Webdesign & Webentwicklung</li>
                <li>Suchmaschinenoptimierung (SEO)</li>
                <li>Online-Marketing & Conversion-Optimierung</li>
                <li>Google-Unternehmensprofil Optimierung</li>
              </ul>
              <p className="mt-4">Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot oder der individuellen Vereinbarung.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">3. Vertragsschluss</h2>
              <p>Ein Vertrag kommt zustande durch:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Annahme eines Angebots</li>
                <li>schriftliche Bestätigung</li>
                <li>oder Beginn der Leistung durch die Agentur</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">4. Mitwirkungspflichten des Kunden</h2>
              <p>Der Kunde verpflichtet sich, alle zur Durchführung des Projekts erforderlichen Inhalte rechtzeitig bereitzustellen, insbesondere:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo text-white">
                <li>Texte, Bilder & Logos</li>
                <li>Zugangsdaten</li>
                <li>Freigaben</li>
              </ul>
              <p className="mt-6">Verzögerungen durch fehlende Mitwirkung verlängern vereinbarte Fristen entsprechend und gehen nicht zu Lasten der Agentur.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">5. Vergütung</h2>
              <p>Die Vergütung erfolgt, sofern nicht anders vereinbart, wie folgt:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>50 % der vereinbarten Vergütung sind als Anzahlung vor Beginn der Leistung fällig</li>
                <li>50 % sind nach Fertigstellung des Projekts innerhalb von 7 Tagen nach Rechnungsstellung zu zahlen</li>
              </ul>
              <p className="mt-6">Bei laufenden Dienstleistungen (z. B. SEO oder Betreuung) erfolgt die Abrechnung monatlich im Voraus. Die Agentur ist berechtigt, mit der Leistung erst nach Eingang der Anzahlung zu beginnen.</p>
              <p className="mt-4 font-bold text-gradient-logo underline underline-offset-4 decoration-white/20">Alle angegebenen Preise sind Endpreise. Gemäß § 19 UStG (Kleinunternehmerregelung) wird keine Umsatzsteuer berechnet und somit auch nicht ausgewiesen.</p>
              <p className="mt-4 text-sm">Bei Zahlungsverzug ist die Agentur berechtigt, Leistungen auszusetzen oder zu stoppen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">6. Leistungszeit</h2>
              <p>Angaben zu Liefer- oder Fertigstellungszeiten sind unverbindlich, sofern sie nicht ausdrücklich schriftlich als verbindlich vereinbart wurden.</p>
              <p className="mt-4">Verzögerungen durch fehlende Mitwirkung des Kunden, technische Probleme Dritter oder höhere Gewalt verlängern entsprechende Fristen angemessen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">7. Abnahme</h2>
              <p>Webdesign- und Entwicklungsleistungen gelten als abgenommen, wenn:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>der Kunde die Leistung freigibt oder</li>
                <li>innerhalb von 7 Tagen nach Bereitstellung keine wesentlichen Mängel schriftlich angezeigt werden</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">8. Korrekturschleifen</h2>
              <p>Sofern nicht anders vereinbart, sind bis zu zwei Korrekturschleifen im Angebot enthalten. Weitere Anpassungen werden gesondert berechnet.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">9. Nutzungsrechte</h2>
              <p>Nach vollständiger Zahlung erhält der Kunde ein einfaches, nicht übertragbares Nutzungsrecht an den erstellten Leistungen.</p>
              <p className="mt-4">Die Agentur ist berechtigt, erstellte Projekte zu Referenz- und Marketingzwecken zu verwenden, sofern keine andere Vereinbarung getroffen wurde.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">10. Haftung</h2>
              <p>Die Agentur haftet nur bei Vorsatz und grober Fahrlässigkeit. Eine Haftung für wirtschaftliche Ergebnisse, Suchmaschinen-Rankings oder Leistungen Dritter ist ausgeschlossen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">11. SEO- und Marketing-Leistungen</h2>
              <p>Die Agentur schuldet keine konkreten Ergebnisse. Insbesondere werden keine garantierten Rankings, Leads oder Umsätze zugesichert, da diese von externen Faktoren abhängen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">12. Vertragslaufzeit und Kündigung</h2>
              <p>Bei laufenden Dienstleistungen gilt:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Mindestlaufzeit: 3 Monate</li>
                <li>Kündigungsfrist: 14 Tage zum Laufzeitende</li>
              </ul>
              <p className="mt-6">Einmalige Projekte enden mit vollständiger Leistungserbringung.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">13. Stornierung / vorzeitige Beendigung</h2>
              <p>Bei vorzeitiger Kündigung durch den Kunden sind bereits erbrachte Leistungen vollständig zu vergüten. Bereits geleistete Anzahlungen werden nicht erstattet.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">14. Vertraulichkeit</h2>
              <p>Beide Parteien verpflichten sich zur vertraulichen Behandlung aller im Rahmen der Zusammenarbeit erhaltenen Informationen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">15. Schlussbestimmungen</h2>
              <p>Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist – soweit gesetzlich zulässig – der Sitz der Agentur. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
