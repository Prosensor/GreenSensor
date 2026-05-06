"use client"

import Link from "next/link"
import { useI18n } from "@/i18n/i18n-provider"

export function CguContent() {
  const { language } = useI18n()
  const isEn = language === "en"
  const isEs = language === "es"
  const isDe = language === "de"
  const isPt = language === "pt"
  const isRo = language === "ro"

  const ui = isEn
    ? {
        breadcrumb: "Terms of Use",
        title: "Terms of Use",
        subtitle: "Rules and conditions for using GreenSensor website",
        cards: [
          { label: "Last update", value: "December 2024" },
          { label: "Version", value: "1.0" },
          { label: "Publisher", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Purpose", text: "These Terms govern use of GreenSensor website and information about our IoT compost monitoring solution." },
          { title: "2. Access and use", text: "Website access is free. Using the site implies full acceptance of these Terms and lawful behavior." },
          { title: "3. Intellectual property", text: "All content is protected and owned by Prosensor unless otherwise specified. Reuse requires prior written authorization." },
          { title: "4. Liability and warranties", text: "Information may evolve. Use of the site is at user’s own risk. Prosensor is not liable for direct or indirect damages." },
          { title: "5. Personal data", text: "Personal data processing is described in our Privacy Policy and follows GDPR principles." },
          { title: "6. External links", text: "External links may be provided for convenience. Prosensor is not responsible for third‑party content or policies." },
          { title: "7. Changes", text: "Prosensor may update these Terms at any time. Continued use after updates means acceptance." },
          { title: "8. Governing law", text: "These Terms are governed by French law and French courts have jurisdiction." },
          { title: "9. Contact", text: "For any question regarding these Terms, contact info@prosensor.com." },
        ],
        back: "Back to home",
      }
    : isEs
    ? {
        breadcrumb: "Condiciones de uso",
        title: "Condiciones de uso",
        subtitle: "Normas y condiciones de uso del sitio GreenSensor",
        cards: [
          { label: "Última actualización", value: "Diciembre 2024" },
          { label: "Versión", value: "1.0" },
          { label: "Editor", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Objeto", text: "Estas condiciones regulan el uso del sitio GreenSensor y la consulta de información sobre nuestras soluciones IoT." },
          { title: "2. Acceso y uso", text: "El acceso es gratuito. El uso del sitio implica la aceptación plena de estas condiciones." },
          { title: "3. Propiedad intelectual", text: "Los contenidos del sitio están protegidos y pertenecen a Prosensor salvo indicación contraria." },
          { title: "4. Responsabilidad", text: "La información se proporciona a título informativo. El uso del sitio es responsabilidad del usuario." },
          { title: "5. Datos personales", text: "El tratamiento de datos personales se describe en nuestra Política de privacidad." },
          { title: "6. Enlaces externos", text: "El sitio puede incluir enlaces externos; Prosensor no es responsable del contenido de terceros." },
          { title: "7. Cambios", text: "Prosensor puede modificar estas condiciones en cualquier momento." },
          { title: "8. Legislación aplicable", text: "Estas condiciones se rigen por la legislación francesa." },
          { title: "9. Contacto", text: "Para cualquier duda, escribe a info@prosensor.com." },
        ],
        back: "Volver al inicio",
      }
    : isDe
    ? {
        breadcrumb: "Nutzungsbedingungen",
        title: "Nutzungsbedingungen",
        subtitle: "Regeln und Bedingungen für die Nutzung der GreenSensor-Website",
        cards: [
          { label: "Letzte Aktualisierung", value: "Dezember 2024" },
          { label: "Version", value: "1.0" },
          { label: "Herausgeber", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Zweck", text: "Diese Bedingungen regeln die Nutzung der GreenSensor-Website und der dort bereitgestellten Informationen." },
          { title: "2. Zugang und Nutzung", text: "Der Zugang ist kostenlos. Die Nutzung setzt die vollständige Akzeptanz dieser Bedingungen voraus." },
          { title: "3. Geistiges Eigentum", text: "Alle Inhalte sind geschützt und gehören Prosensor, sofern nicht anders angegeben." },
          { title: "4. Haftung", text: "Die Informationen dienen der Orientierung. Die Nutzung erfolgt auf eigenes Risiko des Nutzers." },
          { title: "5. Personenbezogene Daten", text: "Die Datenverarbeitung ist in unserer Datenschutzerklärung beschrieben." },
          { title: "6. Externe Links", text: "Prosensor ist nicht für Inhalte externer Websites verantwortlich." },
          { title: "7. Änderungen", text: "Prosensor kann diese Bedingungen jederzeit aktualisieren." },
          { title: "8. Anwendbares Recht", text: "Es gilt französisches Recht. Zuständig sind französische Gerichte." },
          { title: "9. Kontakt", text: "Bei Fragen: info@prosensor.com." },
        ],
        back: "Zurück zur Startseite",
      }
    : isPt
    ? {
        breadcrumb: "Condições gerais de utilização",
        title: "Condições gerais de utilização",
        subtitle: "Termos de acesso e utilização dos serviços GreenSensor",
        cards: [
          { label: "Última atualização", value: "Dezembro 2024" },
          { label: "Versão", value: "1.0" },
          { label: "Operador", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Objeto", text: "As presentes CGU definem as condições de acesso e utilização do website e serviços GreenSensor." },
          { title: "2. Aceitação", text: "A utilização do serviço implica a aceitação integral destas CGU." },
          { title: "3. Acesso ao serviço", text: "A Prosensor procura garantir alta disponibilidade, sem obrigação de resultado permanente." },
          { title: "4. Conta de utilizador", text: "O utilizador é responsável pela confidencialidade das credenciais e atividades da sua conta." },
          { title: "5. Obrigações do utilizador", text: "É proibido uso fraudulento, malicioso ou contrário à lei e aos interesses da Prosensor." },
          { title: "6. Propriedade intelectual", text: "Conteúdos, marcas e elementos gráficos são protegidos e não podem ser reutilizados sem autorização." },
          { title: "7. Limitação de responsabilidade", text: "A Prosensor não responde por danos indiretos, perdas de exploração ou interrupções fora do seu controlo." },
          { title: "8. Suspensão e rescisão", text: "A Prosensor pode suspender acesso em caso de incumprimento grave das CGU." },
          { title: "9. Evolução dos termos", text: "As CGU podem ser atualizadas a qualquer momento; a versão vigente é publicada nesta página." },
          { title: "10. Lei aplicável", text: "As CGU são regidas pela lei francesa; litígios ficam sob jurisdição dos tribunais competentes." },
        ],
        back: "Voltar ao início",
      }
    : isRo
    ? {
        breadcrumb: "Termeni de utilizare",
        title: "Termeni de utilizare",
        subtitle: "Reguli și condiții pentru utilizarea serviciilor GreenSensor",
        cards: [
          { label: "Ultima actualizare", value: "Decembrie 2024" },
          { label: "Versiune", value: "1.0" },
          { label: "Operator", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Obiect", text: "Acești termeni definesc condițiile de acces și utilizare ale site-ului și serviciilor GreenSensor." },
          { title: "2. Acceptare", text: "Utilizarea serviciului implică acceptarea integrală a acestor termeni." },
          { title: "3. Acces la serviciu", text: "Prosensor urmărește disponibilitate ridicată, fără obligație de rezultat permanent." },
          { title: "4. Cont utilizator", text: "Utilizatorul este responsabil pentru confidențialitatea credențialelor și activităților contului." },
          { title: "5. Obligațiile utilizatorului", text: "Este interzisă utilizarea frauduloasă, malițioasă sau contrară legii și intereselor Prosensor." },
          { title: "6. Proprietate intelectuală", text: "Conținuturile, mărcile și elementele grafice sunt protejate și nu pot fi reutilizate fără autorizare." },
          { title: "7. Limitarea răspunderii", text: "Prosensor nu răspunde pentru daune indirecte, pierderi de exploatare sau întreruperi în afara controlului său." },
          { title: "8. Suspendare și încetare", text: "Prosensor poate suspenda accesul în caz de încălcare gravă a termenilor." },
          { title: "9. Evoluția termenilor", text: "Termenii pot fi actualizați oricând; versiunea în vigoare este publicată pe această pagină." },
          { title: "10. Legea aplicabilă", text: "Termenii sunt guvernați de legea franceză; litigiile țin de jurisdicția instanțelor competente." },
        ],
        back: "Înapoi la început",
      }
    : {
        breadcrumb: "Conditions Générales d'Utilisation",
        title: "Conditions Générales d'Utilisation",
        subtitle: "Règles et conditions d'utilisation du site GreenSensor",
        cards: [
          { label: "Dernière mise à jour", value: "Décembre 2024" },
          { label: "Version", value: "1.0" },
          { label: "Éditeur", value: "Prosensor - GreenSensor" },
        ],
        sections: [
          { title: "1. Objet et champ d'application", text: "Les présentes CGU encadrent l'utilisation du site GreenSensor et l'accès aux informations sur nos solutions IoT." },
          { title: "2. Accès et utilisation du site", text: "L'accès au site est gratuit. Son utilisation implique l'acceptation pleine et entière des présentes CGU." },
          { title: "3. Propriété intellectuelle", text: "Les contenus du site sont protégés et appartiennent à Prosensor sauf mention contraire. Toute reproduction sans autorisation est interdite." },
          { title: "4. Responsabilité et garanties", text: "Les informations sont fournies à titre indicatif. L'utilisation du site se fait sous la responsabilité de l'utilisateur." },
          { title: "5. Données personnelles", text: "Le traitement des données personnelles est encadré par notre Politique de confidentialité." },
          { title: "6. Liens externes", text: "Le site peut contenir des liens vers des sites tiers. Prosensor n'est pas responsable de leur contenu." },
          { title: "7. Évolution des conditions", text: "Prosensor peut modifier les CGU à tout moment. L'utilisation du site après mise à jour vaut acceptation." },
          { title: "8. Droit applicable", text: "Les présentes CGU sont soumises au droit français. Les juridictions françaises sont compétentes." },
          { title: "9. Contact", text: "Pour toute question relative aux CGU, contactez info@prosensor.com." },
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
            Please also consult our{" "}
            <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Privacy Policy</Link>{" "}
            and{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">Legal Notice</Link>.
          </p>
        ) : isEs ? (
          <p>
            Consulta también nuestra{" "}
            <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Política de privacidad</Link>{" "}
            y el{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">aviso legal</Link>.
          </p>
        ) : isDe ? (
          <p>
            Bitte beachten Sie auch unsere{" "}
            <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Datenschutzerklärung</Link>{" "}
            und das{" "}
            <Link href="/mentions-legales" className="text-[#3eab35] underline">Impressum</Link>.
          </p>
        ) : isPt ? (
          <p>
            Para qualquer dúvida sobre estas condições, contacte{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>. Pode também consultar a{" "}
            <Link href="/politique-confidentialite" className="text-[#3eab35] underline">política de privacidade</Link>.
          </p>
        ) : isRo ? (
          <p>
            Pentru orice întrebare despre acești termeni, contactați{" "}
            <a href="mailto:info@prosensor.com" className="text-[#3eab35] underline">info@prosensor.com</a>. Puteți consulta și{" "}
            <Link href="/politique-confidentialite" className="text-[#3eab35] underline">politica de confidențialitate</Link>.
          </p>
        ) : (
          <p>
            Consultez également notre{" "}
            <Link href="/politique-confidentialite" className="text-[#3eab35] underline">Politique de confidentialité</Link>{" "}
            et nos{" "}
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
