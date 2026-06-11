import Header from '../sections/Header'
import Footer from '../sections/Footer'

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-gl-dark">
      <Header />
      <main className="pt-40 pb-32">
        <div className="max-w-[800px] mx-auto px-6">
          <p className="font-mono text-gradient-logo font-bold tracking-[0.2em] text-[10px] uppercase mb-4">
            Rechtliches
          </p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-16 font-heading tracking-tight">Datenschutz<span className="text-gradient-logo">erklärung</span></h1>
          
          <div className="space-y-16 text-gl-gray-light leading-relaxed font-sans">
            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">1. Allgemeine Hinweise</h2>
              <p>
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Die Verarbeitung erfolgt im Einklang mit der Datenschutz-Grundverordnung (DSGVO) sowie den geltenden nationalen Datenschutzbestimmungen.
              </p>
              <p className="mt-4">
                Diese Datenschutzerklärung erläutert Art, Umfang und Zweck der Verarbeitung personenbezogener Daten auf unserer Website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">2. Verantwortlicher</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-white">
                <p className="font-bold text-gradient-logo mb-2">GreenLabz Studio</p>
                <p>Inhaber: James Green</p>
                <p>Tulpenstraße 4</p>
                <p>71088 Holzgerlingen</p>
                <p>Deutschland</p>
                <p className="mt-4">E-Mail: <a href="mailto:hallo@greenlabz.studio" className="text-gradient-logo hover:underline">hallo@greenlabz.studio</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">3. Hosting</h2>
              <p>Unsere Website wird bei einem externen Dienstleister gehostet.</p>
              <p className="mt-4">Dabei werden folgende Daten automatisch erfasst:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>IP-Adresse</li>
                <li>Browsertyp und -version</li>
                <li>Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Uhrzeit der Anfrage</li>
              </ul>
              <p className="mt-4">Diese Daten dienen der technischen Bereitstellung und Sicherheit der Website.</p>
              <p className="mt-2 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">4. Cookies & Einwilligungsmanagement</h2>
              <p>Unsere Website verwendet Cookies und ähnliche Technologien.</p>
              <p className="mt-4">Nicht technisch notwendige Cookies (z. B. für Analyse und Marketing) werden <strong>nur nach ausdrücklicher Einwilligung</strong> gesetzt.</p>
              <p className="mt-4">Beim ersten Besuch wird Ihnen ein Cookie-Banner angezeigt, über das Sie Ihre Einwilligung erteilen oder ablehnen können.</p>
              <p className="mt-4">Sie können Ihre Einwilligung jederzeit widerrufen.</p>
              <p className="mt-2 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">5. Kontaktaufnahme</h2>
              <p>Wenn Sie uns kontaktieren (z. B. per Formular oder E-Mail), verarbeiten wir:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Inhalt der Anfrage</li>
              </ul>
              <p className="mt-4 text-sm italic">Zweck: Bearbeitung Ihrer Anfrage</p>
              <p className="mt-2 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">6. Terminbuchung (Calendly)</h2>
              <p>Zur Terminvereinbarung nutzen wir Calendly.</p>
              <p className="mt-2 font-bold">Anbieter: Calendly LLC, USA</p>
              <p className="mt-4">Verarbeitete Daten:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Name</li>
                <li>E-Mail-Adresse</li>
                <li>Termininformationen</li>
              </ul>
              <p className="mt-4">Die Datenverarbeitung erfolgt auf Grundlage Ihrer Einwilligung. Es kann zu einer Übermittlung personenbezogener Daten in die USA kommen. Calendly verwendet Standardvertragsklauseln (SCCs) zur Sicherstellung eines angemessenen Datenschutzniveaus.</p>
              <p className="mt-2 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">7. Webanalyse (Google Analytics 4)</h2>
              <p>Diese Website nutzt Google Analytics 4.</p>
              <p className="mt-2 font-bold">Anbieter: Google Ireland Ltd.</p>
              <p className="mt-4">Erfasste Daten:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Nutzungsverhalten</li>
                <li>Seitenaufrufe</li>
                <li>Verweildauer</li>
                <li>Gerätetyp</li>
                <li>ungefähre geografische Herkunft</li>
              </ul>
              <p className="mt-4">IP-Anonymisierung ist aktiv. Die Verarbeitung erfolgt ausschließlich nach Einwilligung. Daten können in die USA übertragen werden. Google verwendet Standardvertragsklauseln (SCCs).</p>
              <p className="mt-2 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">8. Marketing & Tracking (Meta Pixel)</h2>
              <p>Wir verwenden das Meta Pixel zur Analyse und Optimierung unserer Werbemaßnahmen.</p>
              <p className="mt-2 font-bold">Anbieter: Meta Platforms Ireland Ltd.</p>
              <p className="mt-4">Erfasste Daten:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Seitenbesuche</li>
                <li>Interaktionen</li>
                <li>Conversion-Daten</li>
              </ul>
              <p className="mt-4">Die Daten können mit Ihrem Facebook-/Instagram-Profil verknüpft werden. Datenübertragung in Drittländer (USA) möglich.</p>
              <p className="mt-2 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">9. Zahlungsanbieter</h2>
              <p>Zur Abwicklung von Zahlungen nutzen wir externe Zahlungsdienstleister. Dabei werden Zahlungsdaten an den jeweiligen Anbieter übermittelt.</p>
              <p className="mt-2 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">10. CRM- und Marketing-Tools</h2>
              <p>Wir nutzen CRM- und Marketing-Tools zur Verwaltung von Kundenanfragen und Leads.</p>
              <p className="mt-4">Dabei können folgende Daten verarbeitet werden:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Kontaktdaten</li>
                <li>Kommunikationsverläufe</li>
                <li>Nutzungsdaten</li>
              </ul>
              <p className="mt-4 text-sm italic">Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO sowie Art. 6 Abs. 1 lit. b DSGVO</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">11. Datenübermittlung in Drittländer</h2>
              <p>Einige der eingesetzten Dienste übertragen Daten in Länder außerhalb der EU (z. B. USA).</p>
              <p className="mt-4">Diese Übermittlungen erfolgen auf Basis:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Standardvertragsklauseln (SCCs)</li>
                <li>ggf. weiterer geeigneter Garantien</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">12. Speicherdauer</h2>
              <p>Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">13. Ihre Rechte</h2>
              <p>Sie haben folgende Rechte:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2 marker:text-gradient-logo">
                <li>Auskunft (Art. 15 DSGVO)</li>
                <li>Berichtigung (Art. 16 DSGVO)</li>
                <li>Löschung (Art. 17 DSGVO)</li>
                <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
                <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
                <li>Widerruf Ihrer Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
              </ul>
              <p className="mt-4">Beschwerderecht bei einer Aufsichtsbehörde besteht ebenfalls.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">14. SSL-/TLS-Verschlüsselung</h2>
              <p>Diese Website nutzt SSL- bzw. TLS-Verschlüsselung zur sicheren Datenübertragung.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">15. Widerspruch gegen Werbung</h2>
              <p>Der Nutzung von veröffentlichten Kontaktdaten zur Übersendung nicht ausdrücklich angeforderter Werbung wird widersprochen.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-6 font-heading">16. Änderungen</h2>
              <p>Wir behalten uns vor, diese Datenschutzerklärung jederzeit anzupassen, um sie an rechtliche Anforderungen oder Änderungen unserer Leistungen anzupassen.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
