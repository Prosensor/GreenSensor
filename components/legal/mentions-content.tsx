"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"

export function MentionsContent() {
  const { language } = useI18n()
  const isEn = language === "en"
  const isEs = language === "es"
  const isDe = language === "de"
  const isPt = language === "pt"
  const isRo = language === "ro"

  const ui = isEn
    ? {
        breadcrumb: "Legal",
        title: "Legal Notice",
        subtitle: "Website legal information and publisher details",
        cardSite: "Website",
        cardUpdate: "Last update",
        cardPublisher: "Publisher",
        siteValue: "GreenSensor - Temperature probe for compost",
        updateValue: "December 2024",
        publisherValue: "Prosensor",
        sections: [
          {
            title: "1. Publisher",
            content: (
              <>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-4 text-gray-700">
                  <p>
                    <strong>Company name:</strong> Prosensor<br />
                    <strong>Brand:</strong> GreenSensor<br />
                    <strong>Email:</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                    <strong>Address:</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                    <strong>RCS:</strong> Metz 451 740 187<br />
                    <strong>SIRET:</strong> 451 740 187 00012<br />
                    <strong>APE code:</strong> 6201Z (Computer programming)
                  </p>
                </div>
                <p className="text-gray-700">
                  Prosensor is a French company specialized in IoT solutions for agriculture and environment. The GreenSensor brand represents our flagship compost monitoring solution.
                </p>
              </>
            ),
          },
          {
            title: "2. Hosting",
            content: (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-700">
                <p>
                  <strong>Host:</strong> LWS (Ligne Web Services)<br />
                  <strong>Address:</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br />
                  <strong>Website:</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br />
                  <strong>Phone:</strong> 01 77 62 30 03
                </p>
              </div>
            ),
          },
          {
            title: "3. Intellectual property",
            content: (
              <p className="text-gray-700">
                All content on this site is the exclusive property of Prosensor unless otherwise specified. Any unauthorized reproduction or use is prohibited.
              </p>
            ),
          },
          {
            title: "4. Liability",
            content: (
              <p className="text-gray-700">
                Information is provided for guidance only and may be updated without notice. Prosensor cannot be held liable for direct or indirect damages resulting from use of the site.
              </p>
            ),
          },
          {
            title: "5. Data and privacy",
            content: (
              <p className="text-gray-700">
                Personal data processing is governed by our <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Privacy Policy</Link>, in compliance with GDPR.
              </p>
            ),
          },
        ],
        back: "Back to home",
      }
    : isEs
    ? {
        breadcrumb: "Aviso legal",
        title: "Aviso legal",
        subtitle: "Información del editor, alojamiento y responsabilidades",
        cardSite: "Sitio web",
        cardUpdate: "Última actualización",
        cardPublisher: "Editor",
        siteValue: "GreenSensor - Sonda de temperatura para compost",
        updateValue: "Diciembre 2024",
        publisherValue: "Prosensor",
        sections: [
          {
            title: "1. Editor del sitio",
            content: (
              <>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-4 text-gray-700">
                  <p>
                    <strong>Razón social:</strong> Prosensor<br />
                    <strong>Marca comercial:</strong> GreenSensor<br />
                    <strong>Email:</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                    <strong>Dirección:</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                    <strong>RCS:</strong> Metz 451 740 187<br />
                    <strong>SIRET:</strong> 451 740 187 00012
                  </p>
                </div>
                <p className="text-gray-700">
                  Prosensor es una empresa francesa especializada en soluciones IoT para agricultura y medio ambiente. GreenSensor es su solución para el seguimiento inteligente del compostaje.
                </p>
              </>
            ),
          },
          {
            title: "2. Alojamiento",
            content: (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-700">
                <p>
                  <strong>Proveedor:</strong> LWS (Ligne Web Services)<br />
                  <strong>Dirección:</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br />
                  <strong>Sitio web:</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br />
                  <strong>Teléfono:</strong> 01 77 62 30 03
                </p>
              </div>
            ),
          },
          {
            title: "3. Propiedad intelectual",
            content: (
              <p className="text-gray-700">
                Todo el contenido del sitio pertenece a Prosensor, salvo indicación contraria. Se prohíbe su reproducción sin autorización.
              </p>
            ),
          },
          {
            title: "4. Responsabilidad",
            content: (
              <p className="text-gray-700">
                La información se ofrece a título orientativo y puede cambiar. Prosensor no se responsabiliza de daños directos o indirectos derivados del uso del sitio.
              </p>
            ),
          },
          {
            title: "5. Datos personales",
            content: (
              <p className="text-gray-700">
                El tratamiento de datos personales se rige por nuestra <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Política de privacidad</Link>, conforme al RGPD.
              </p>
            ),
          },
        ],
        back: "Volver al inicio",
      }
    : isDe
    ? {
        breadcrumb: "Impressum",
        title: "Impressum",
        subtitle: "Anbieter-, Hosting- und Verantwortlichkeitsinformationen",
        cardSite: "Website",
        cardUpdate: "Letzte Aktualisierung",
        cardPublisher: "Herausgeber",
        siteValue: "GreenSensor - Temperaturfühler für Kompost",
        updateValue: "Dezember 2024",
        publisherValue: "Prosensor",
        sections: [
          {
            title: "1. Herausgeber der Website",
            content: (
              <>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-4 text-gray-700">
                  <p>
                    <strong>Unternehmen:</strong> Prosensor<br />
                    <strong>Marke:</strong> GreenSensor<br />
                    <strong>E-Mail:</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                    <strong>Adresse:</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                    <strong>RCS:</strong> Metz 451 740 187<br />
                    <strong>SIRET:</strong> 451 740 187 00012
                  </p>
                </div>
                <p className="text-gray-700">
                  Prosensor ist ein französisches Unternehmen für IoT-Lösungen in Landwirtschaft und Umwelt. GreenSensor ist die Lösung zur intelligenten Kompostüberwachung.
                </p>
              </>
            ),
          },
          {
            title: "2. Hosting",
            content: (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-700">
                <p>
                  <strong>Hoster:</strong> LWS (Ligne Web Services)<br />
                  <strong>Adresse:</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br />
                  <strong>Website:</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br />
                  <strong>Telefon:</strong> 01 77 62 30 03
                </p>
              </div>
            ),
          },
          {
            title: "3. Geistiges Eigentum",
            content: <p className="text-gray-700">Alle Inhalte der Website sind Eigentum von Prosensor, sofern nicht anders angegeben. Jede unautorisierte Nutzung ist untersagt.</p>,
          },
          {
            title: "4. Haftung",
            content: <p className="text-gray-700">Die Inhalte dienen der Information und können sich ändern. Prosensor haftet nicht für direkte oder indirekte Schäden durch die Nutzung der Website.</p>,
          },
          {
            title: "5. Personenbezogene Daten",
            content: <p className="text-gray-700">Die Verarbeitung personenbezogener Daten erfolgt gemäß unserer <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Datenschutzerklärung</Link>.</p>,
          },
        ],
        back: "Zurück zur Startseite",
      }
    : isPt
    ? {
        breadcrumb: "Aviso legal",
        title: "Aviso legal",
        subtitle: "Informações do editor, alojamento e responsabilidade",
        cardSite: "Website",
        cardUpdate: "Última atualização",
        cardPublisher: "Editor",
        siteValue: "GreenSensor - Sonda de temperatura para compostagem",
        updateValue: "Dezembro 2024",
        publisherValue: "Prosensor",
        sections: [
          {
            title: "1. Editor do site",
            content: (
              <>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-4 text-gray-700">
                  <p>
                    <strong>Empresa:</strong> Prosensor<br />
                    <strong>Marca:</strong> GreenSensor<br />
                    <strong>Email:</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                    <strong>Morada:</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                    <strong>RCS:</strong> Metz 451 740 187<br />
                    <strong>SIRET:</strong> 451 740 187 00012
                  </p>
                </div>
                <p className="text-gray-700">A Prosensor é uma empresa francesa especializada em soluções IoT para agricultura e ambiente.</p>
              </>
            ),
          },
          { title: "2. Alojamento", content: <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-700"><p><strong>Alojamento:</strong> LWS (Ligne Web Services)<br /><strong>Morada:</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br /><strong>Website:</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br /><strong>Telefone:</strong> 01 77 62 30 03</p></div> },
          { title: "3. Propriedade intelectual", content: <p className="text-gray-700">Todos os conteúdos pertencem à Prosensor, salvo indicação em contrário.</p> },
          { title: "4. Responsabilidade", content: <p className="text-gray-700">As informações têm caráter informativo e podem ser atualizadas sem aviso prévio.</p> },
          { title: "5. Dados pessoais", content: <p className="text-gray-700">O tratamento de dados pessoais é regido pela nossa <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Política de privacidade</Link>.</p> },
        ],
        back: "Voltar ao início",
      }
    : isRo
    ? {
        breadcrumb: "Mențiuni legale",
        title: "Mențiuni legale",
        subtitle: "Informații despre editor, găzduire și responsabilitate",
        cardSite: "Website",
        cardUpdate: "Ultima actualizare",
        cardPublisher: "Editor",
        siteValue: "GreenSensor - Sondă de temperatură pentru compostare",
        updateValue: "Decembrie 2024",
        publisherValue: "Prosensor",
        sections: [
          {
            title: "1. Editorul site-ului",
            content: (
              <>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-4 text-gray-700">
                  <p>
                    <strong>Companie:</strong> Prosensor<br />
                    <strong>Brand:</strong> GreenSensor<br />
                    <strong>Email:</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                    <strong>Adresă:</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                    <strong>RCS:</strong> Metz 451 740 187<br />
                    <strong>SIRET:</strong> 451 740 187 00012
                  </p>
                </div>
                <p className="text-gray-700">Prosensor este o companie franceză specializată în soluții IoT pentru agricultură și mediu.</p>
              </>
            ),
          },
          { title: "2. Găzduire", content: <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-700"><p><strong>Gazdă:</strong> LWS (Ligne Web Services)<br /><strong>Adresă:</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br /><strong>Website:</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br /><strong>Telefon:</strong> 01 77 62 30 03</p></div> },
          { title: "3. Proprietate intelectuală", content: <p className="text-gray-700">Toate conținuturile aparțin Prosensor, dacă nu este menționat altfel.</p> },
          { title: "4. Responsabilitate", content: <p className="text-gray-700">Informațiile au caracter informativ și pot fi actualizate fără notificare prealabilă.</p> },
          { title: "5. Date personale", content: <p className="text-gray-700">Prelucrarea datelor personale este reglementată de <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Politica noastră de confidențialitate</Link>.</p> },
        ],
        back: "Înapoi la început",
      }
    : {
        breadcrumb: "Mentions légales",
        title: "Mentions légales",
        subtitle: "Informations éditeur, hébergement et responsabilités",
        cardSite: "Site web",
        cardUpdate: "Dernière mise à jour",
        cardPublisher: "Éditeur",
        siteValue: "GreenSensor - Sonde de température à compost",
        updateValue: "Décembre 2024",
        publisherValue: "Prosensor",
        sections: [
          {
            title: "1. Éditeur du site",
            content: (
              <>
                <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-4 text-gray-700">
                  <p>
                    <strong>Raison sociale :</strong> Prosensor<br />
                    <strong>Marque commerciale :</strong> GreenSensor<br />
                    <strong>Email :</strong> <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a><br />
                    <strong>Adresse :</strong> 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France<br />
                    <strong>RCS :</strong> Metz 451 740 187<br />
                    <strong>SIRET :</strong> 451 740 187 00012
                  </p>
                </div>
                <p className="text-gray-700">
                  Prosensor est une société française spécialisée dans les solutions IoT pour l'agriculture et l'environnement. GreenSensor est sa solution dédiée au suivi intelligent du compostage.
                </p>
              </>
            ),
          },
          {
            title: "2. Hébergement du site",
            content: (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-gray-700">
                <p>
                  <strong>Hébergeur :</strong> LWS (Ligne Web Services)<br />
                  <strong>Adresse :</strong> 10, RUE PENTHIEVRE, 75008 PARIS, FRANCE<br />
                  <strong>Site web :</strong> <a href="https://www.lws.fr" className="text-[#3eab35] underline" target="_blank" rel="noopener noreferrer">www.lws.fr</a><br />
                  <strong>Téléphone :</strong> 01 77 62 30 03
                </p>
              </div>
            ),
          },
          {
            title: "3. Propriété intellectuelle",
            content: (
              <p className="text-gray-700">
                L'ensemble des contenus du site est la propriété de Prosensor, sauf mention contraire. Toute reproduction ou utilisation non autorisée est interdite.
              </p>
            ),
          },
          {
            title: "4. Responsabilité et limitations",
            content: (
              <p className="text-gray-700">
                Les informations sont fournies à titre indicatif et peuvent évoluer. Prosensor ne peut être tenu responsable des dommages directs ou indirects liés à l'utilisation du site.
              </p>
            ),
          },
          {
            title: "5. Données personnelles",
            content: (
              <p className="text-gray-700">
                Le traitement des données personnelles est régi par notre <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Politique de confidentialité</Link>, conforme au RGPD.
              </p>
            ),
          },
        ],
        back: "Retour à l'accueil",
      }

  return (
    <div className="space-y-8">
      <nav className="text-sm text-gray-500">
        <Link href="/" className="hover:text-[#3eab35] transition-colors">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-700 font-medium">{ui.breadcrumb}</span>
      </nav>

      <header className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{ui.title}</h1>
        <p className="text-[#3eab35] mt-2 font-medium">{ui.subtitle}</p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{ui.cardSite}</p>
          <p className="text-gray-800 font-medium">{ui.siteValue}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{ui.cardUpdate}</p>
          <p className="text-gray-800 font-medium">{ui.updateValue}</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{ui.cardPublisher}</p>
          <p className="text-gray-800 font-medium">{ui.publisherValue}</p>
        </div>
      </div>

      <div className="space-y-5">
        {ui.sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
            {section.content}
          </section>
        ))}
      </div>

      <div className="pt-4">
        <Link href="/" className="inline-flex items-center text-[#3eab35] hover:underline font-medium">
          {ui.back}
        </Link>
      </div>
    </div>
  )
}
