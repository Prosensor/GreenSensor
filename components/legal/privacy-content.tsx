"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"

export function PrivacyContent() {
  const { language } = useI18n()
  const isEn = language === "en"
  const isEs = language === "es"
  const isDe = language === "de"
  const isPt = language === "pt"
  const isRo = language === "ro"

  const ui = isEn
    ? {
        breadcrumb: "Privacy Policy",
        title: "Privacy Policy",
        subtitle: "How GreenSensor protects and processes your data",
        cards: [
          { label: "Last update", value: "December 2024" },
          { label: "Version", value: "1.0" },
          { label: "Controller", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Introduction", text: "We explain how we collect, use, store and protect your personal data in compliance with GDPR and French law." },
          { title: "2. Data controller", text: "Prosensor is the data controller for data collected via GreenSensor website and related IoT solutions. Contact: info@prosensor.com." },
          { title: "3. Data we collect", text: "Contact data, anonymized IoT technical data and browsing data, only when necessary for services and support." },
          { title: "4. Legal bases", text: "Consent, contract performance, legitimate interest and legal obligations depending on processing purpose." },
          { title: "5. Sharing and transfers", text: "We do not sell personal data. Sharing may occur only when legally required or with confidential service providers." },
          { title: "6. Retention", text: "Data is retained for limited periods depending on type (e.g. contacts 3 years, technical logs up to 5 years)." },
          { title: "7. Security", text: "Encryption, access control, backups, audits and incident monitoring are implemented to protect data." },
          { title: "8. Your rights", text: "You can request access, correction, deletion, limitation, portability, objection or consent withdrawal." },
          { title: "9. Cookies", text: "Essential, analytics and preference cookies may be used. You can manage them via browser settings or consent tools." },
          { title: "10. Minors", text: "Our services are not intended for children under 16. Any unauthorized data is removed upon detection." },
          { title: "11. Changes", text: "This policy may be updated. The latest revision date appears at the top of this page." },
          { title: "12. Contact", text: "For any privacy request, contact info@prosensor.com." },
        ],
        back: "Back to home",
      }
    : isEs
    ? {
        breadcrumb: "Política de privacidad",
        title: "Política de privacidad",
        subtitle: "Cómo GreenSensor protege y trata tus datos",
        cards: [
          { label: "Última actualización", value: "Diciembre 2024" },
          { label: "Versión", value: "1.0" },
          { label: "Responsable", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Introducción", text: "Prosensor protege la privacidad de sus usuarios y aplica los principios del RGPD en la recogida, uso y conservación de datos." },
          { title: "2. Responsable del tratamiento", text: "Prosensor es responsable del tratamiento de los datos recogidos mediante el sitio GreenSensor y servicios asociados." },
          { title: "3. Datos recogidos", text: "Recogemos datos de contacto, datos técnicos IoT (anonimizados) y datos de navegación necesarios para el servicio." },
          { title: "4. Bases legales", text: "Los tratamientos se basan en consentimiento, ejecución contractual, interés legítimo u obligación legal." },
          { title: "5. Compartición de datos", text: "No vendemos datos personales. Solo se comparten cuando lo exige la ley o con proveedores bajo confidencialidad." },
          { title: "6. Conservación", text: "Los datos se conservan durante plazos definidos según su tipo y luego se eliminan o anonimizan." },
          { title: "7. Seguridad", text: "Aplicamos cifrado, control de acceso, copias de seguridad, auditorías y monitorización continua." },
          { title: "8. Tus derechos", text: "Puedes solicitar acceso, rectificación, supresión, oposición, limitación, portabilidad y retirada del consentimiento." },
          { title: "9. Cookies", text: "El sitio puede usar cookies esenciales, analíticas y de preferencias. Puedes gestionarlas en cualquier momento." },
          { title: "10. Menores", text: "Nuestros servicios no están dirigidos a menores de 16 años." },
          { title: "11. Cambios", text: "Esta política puede actualizarse. La fecha de revisión se muestra al inicio de la página." },
          { title: "12. Contacto", text: "Para cualquier consulta: info@prosensor.com." },
        ],
        back: "Volver al inicio",
      }
    : isDe
    ? {
        breadcrumb: "Datenschutz",
        title: "Datenschutzerklärung",
        subtitle: "Wie GreenSensor Ihre Daten schützt und verarbeitet",
        cards: [
          { label: "Letzte Aktualisierung", value: "Dezember 2024" },
          { label: "Version", value: "1.0" },
          { label: "Verantwortlicher", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Einleitung", text: "Prosensor schützt die Privatsphäre der Nutzer und beachtet die DSGVO bei Erhebung, Nutzung und Speicherung von Daten." },
          { title: "2. Verantwortlicher", text: "Prosensor ist Verantwortlicher für die Verarbeitung der über GreenSensor erhobenen Daten." },
          { title: "3. Erhobene Daten", text: "Erfasst werden Kontakt-, technische IoT- (anonymisiert) und Navigationsdaten, soweit für den Service erforderlich." },
          { title: "4. Rechtsgrundlagen", text: "Verarbeitungen basieren je nach Zweck auf Einwilligung, Vertragserfüllung, berechtigtem Interesse oder gesetzlicher Pflicht." },
          { title: "5. Datenweitergabe", text: "Keine Datenverkäufe. Weitergabe erfolgt nur gesetzlich erforderlich oder an vertraglich gebundene Dienstleister." },
          { title: "6. Speicherdauer", text: "Daten werden nur für definierte Zeiträume gespeichert und anschließend gelöscht oder anonymisiert." },
          { title: "7. Sicherheit", text: "Wir nutzen Verschlüsselung, Zugriffskontrollen, Backups, Audits und Monitoring." },
          { title: "8. Ihre Rechte", text: "Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Widerspruch und Datenübertragbarkeit." },
          { title: "9. Cookies", text: "Die Website nutzt notwendige, analytische und Präferenz-Cookies. Einstellungen können jederzeit angepasst werden." },
          { title: "10. Minderjährige", text: "Unsere Dienste richten sich nicht an Personen unter 16 Jahren." },
          { title: "11. Änderungen", text: "Diese Erklärung kann aktualisiert werden. Das Datum der letzten Aktualisierung steht oben auf der Seite." },
          { title: "12. Kontakt", text: "Für Datenschutzanfragen: info@prosensor.com." },
        ],
        back: "Zurück zur Startseite",
      }
    : isPt
    ? {
        breadcrumb: "Política de privacidade",
        title: "Política de privacidade",
        subtitle: "Como a GreenSensor protege e trata os seus dados",
        cards: [
          { label: "Última atualização", value: "Dezembro 2024" },
          { label: "Versão", value: "1.0" },
          { label: "Responsável", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Introdução", text: "A Prosensor protege a privacidade dos utilizadores e aplica o RGPD na recolha e tratamento de dados." },
          { title: "2. Responsável pelo tratamento", text: "A Prosensor é responsável pelos dados recolhidos através do website GreenSensor e serviços associados." },
          { title: "3. Dados recolhidos", text: "Recolhemos dados de contacto, dados técnicos IoT (anonimizados) e dados de navegação necessários ao serviço." },
          { title: "4. Bases legais", text: "Consentimento, execução contratual, interesse legítimo ou obrigação legal, conforme o objetivo." },
          { title: "5. Partilha de dados", text: "Não vendemos dados pessoais. A partilha ocorre apenas quando exigido por lei ou com prestadores sob confidencialidade." },
          { title: "6. Conservação", text: "Os dados são conservados por períodos definidos e depois eliminados ou anonimizados." },
          { title: "7. Segurança", text: "Aplicamos encriptação, controlo de acesso, backups, auditorias e monitorização." },
          { title: "8. Direitos do titular", text: "Pode exercer direitos de acesso, retificação, apagamento, oposição, limitação e portabilidade." },
          { title: "9. Cookies", text: "O site pode usar cookies essenciais, analíticos e de preferências." },
          { title: "10. Menores", text: "Os serviços não se destinam a menores de 16 anos." },
          { title: "11. Alterações", text: "Esta política pode ser atualizada. A data de revisão é apresentada no topo." },
          { title: "12. Contacto", text: "Para questões de privacidade: info@prosensor.com." },
        ],
        back: "Voltar ao início",
      }
    : isRo
    ? {
        breadcrumb: "Politica de confidențialitate",
        title: "Politica de confidențialitate",
        subtitle: "Cum GreenSensor protejează și prelucrează datele dvs.",
        cards: [
          { label: "Ultima actualizare", value: "Decembrie 2024" },
          { label: "Versiune", value: "1.0" },
          { label: "Operator", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Introducere", text: "Prosensor protejează confidențialitatea utilizatorilor și aplică RGPD în colectarea și prelucrarea datelor." },
          { title: "2. Operatorul de date", text: "Prosensor este operatorul datelor colectate prin site-ul GreenSensor și serviciile asociate." },
          { title: "3. Date colectate", text: "Colectăm date de contact, date tehnice IoT (anonimizate) și date de navigare necesare serviciului." },
          { title: "4. Temeiuri legale", text: "Consimțământ, executare contractuală, interes legitim sau obligație legală, în funcție de scop." },
          { title: "5. Partajarea datelor", text: "Nu vindem date personale. Partajarea are loc doar când este cerută legal sau cu furnizori confidențiali." },
          { title: "6. Păstrarea datelor", text: "Datele sunt păstrate pentru perioade definite, apoi șterse sau anonimizate." },
          { title: "7. Securitate", text: "Aplicăm criptare, control acces, backup-uri, audituri și monitorizare continuă." },
          { title: "8. Drepturile dvs.", text: "Puteți solicita acces, rectificare, ștergere, opoziție, limitare și portabilitate." },
          { title: "9. Cookie-uri", text: "Site-ul poate folosi cookie-uri esențiale, analitice și de preferințe." },
          { title: "10. Minori", text: "Serviciile nu sunt destinate persoanelor sub 16 ani." },
          { title: "11. Modificări", text: "Această politică poate fi actualizată. Data ultimei revizii este afișată sus." },
          { title: "12. Contact", text: "Pentru întrebări despre confidențialitate: info@prosensor.com." },
        ],
        back: "Înapoi la început",
      }
    : {
        breadcrumb: "Politique de confidentialité",
        title: "Politique de confidentialité",
        subtitle: "Comment GreenSensor protège et traite vos données",
        cards: [
          { label: "Dernière mise à jour", value: "Décembre 2024" },
          { label: "Version", value: "1.0" },
          { label: "Responsable", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Introduction et engagement", text: "Prosensor protège la vie privée de ses utilisateurs et applique les principes RGPD dans la collecte, l'utilisation et la conservation des données." },
          { title: "2. Responsable du traitement", text: "Prosensor est responsable du traitement des données collectées via le site GreenSensor et les services associés. Contact : info@prosensor.com." },
          { title: "3. Données collectées", text: "Nous collectons des données de contact, des données techniques IoT (anonymisées) et des données de navigation nécessaires au fonctionnement du service." },
          { title: "4. Bases légales", text: "Les traitements reposent sur le consentement, l'exécution contractuelle, l'intérêt légitime ou l'obligation légale." },
          { title: "5. Partage des données", text: "Aucune vente de données. Les partages sont limités aux obligations légales ou aux prestataires soumis à confidentialité." },
          { title: "6. Durées de conservation", text: "Les données sont conservées pendant des durées définies selon leur nature, puis supprimées ou anonymisées." },
          { title: "7. Sécurité", text: "Nous mettons en place chiffrement, accès restreint, sauvegardes, audits et surveillance pour protéger les données." },
          { title: "8. Vos droits (RGPD)", text: "Vous disposez des droits d'accès, rectification, effacement, opposition, limitation, portabilité et retrait du consentement." },
          { title: "9. Cookies", text: "Le site peut utiliser des cookies essentiels, analytiques et de préférence. Vous pouvez les gérer à tout moment." },
          { title: "10. Données des mineurs", text: "Nos services ne ciblent pas les moins de 16 ans. Toute donnée collectée sans autorisation est supprimée dès constat." },
          { title: "11. Modifications", text: "Cette politique peut évoluer. La date de mise à jour est indiquée en tête de page." },
          { title: "12. Contact", text: "Pour toute question liée à la confidentialité : info@prosensor.com." },
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
        {ui.cards.map((card) => (
          <div key={card.label} className="rounded-xl border border-gray-200 bg-white p-4">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">{card.label}</p>
            <p className="text-gray-800 font-medium">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-5">
        {ui.sections.map((section) => (
          <section key={section.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{section.title}</h2>
            <p className="text-gray-700 leading-relaxed">{section.text}</p>
          </section>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 text-gray-700">
        {isEn ? (
          <p>
            Personal data processing details are also covered in our legal pages and can be requested by email at{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>.
          </p>
        ) : isEs ? (
          <p>
            Puedes solicitar información detallada sobre el tratamiento por email a{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>. Consulta también el{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">aviso legal</Link>.
          </p>
        ) : isDe ? (
          <p>
            Detaillierte Informationen zur Datenverarbeitung erhalten Sie per E-Mail an{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>. Siehe auch{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">Impressum</Link>.
          </p>
        ) : isPt ? (
          <p>
            Informações detalhadas sobre o tratamento podem ser solicitadas por email para{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>. Consulte também o{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">aviso legal</Link>.
          </p>
        ) : isRo ? (
          <p>
            Informații detaliate despre prelucrare pot fi solicitate prin email la{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>. Consultați și{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">mențiunile legale</Link>.
          </p>
        ) : (
          <p>
            Les informations détaillées liées au traitement peuvent être demandées à tout moment par email à{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>. Consultez aussi nos{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">mentions légales</Link>.
          </p>
        )}
      </div>

      <div className="pt-4">
        <Link href="/" className="inline-flex items-center text-[#3eab35] hover:underline font-medium">
          {ui.back}
        </Link>
      </div>
    </div>
  )
}
