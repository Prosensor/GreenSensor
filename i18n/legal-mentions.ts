import { FACTS as F, type LegalDoc, type LegalLang } from "@/i18n/legal-facts"

const phoneMail = `[${F.email}](mailto:${F.email}) · ${F.phone}`

const fr: LegalDoc = {
  title: "Mentions légales",
  subtitle: "Qui édite le site, qui l'héberge et dans quel cadre il est proposé.",
  updated: "29 octobre 2026",
  sections: [
    {
      title: "Éditeur du site",
      blocks: [
        { p: `Le site ${F.site} est édité par ${F.name}, fabricant français de sondes de température depuis 1989. ${F.brand} est sa solution de suivi du compostage.` },
        {
          rows: [
            ["Raison sociale", F.name],
            ["Marque commerciale", F.brand],
            ["Adresse", F.address],
            ["RCS", F.rcs],
            ["SIRET", F.siret],
            ["Téléphone", F.phone],
            ["E-mail", `[${F.email}](mailto:${F.email})`],
          ],
        },
      ],
    },
    {
      title: "Hébergement",
      blocks: [
        {
          rows: [
            ["Hébergeur", F.host],
            ["Adresse", `${F.hostAddress}, États-Unis`],
            ["Site web", `[vercel.com](${F.hostUrl})`],
          ],
        },
      ],
    },
    {
      title: "Propriété intellectuelle",
      blocks: [
        { p: `Les textes, images, photographies, schémas, logos et marques (${F.brand}, ${F.name}) présents sur le site sont la propriété de ${F.name} ou utilisés avec l'accord de leurs titulaires.` },
        { p: "Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite. Les logos de tiers présentés sur le site appartiennent à leurs propriétaires respectifs." },
      ],
    },
    {
      title: "Responsabilité",
      blocks: [
        { p: `${F.name} s'efforce de fournir des informations exactes et à jour, sans garantir leur exhaustivité. Les caractéristiques techniques sont données à titre indicatif : seul le devis ou le contrat fait foi. Les courbes, alertes et rapports présentés sur le site sont des exemples.` },
        { p: `${F.name} ne peut être tenu responsable des dommages liés à l'accès au site, à son indisponibilité ou à l'utilisation de ses informations. Les liens vers des sites tiers sont fournis à titre informatif : leur contenu n'est pas contrôlé par ${F.name}.` },
      ],
    },
    {
      title: "Données personnelles et cookies",
      blocks: [{ p: "Les données saisies dans le formulaire de contact sont traitées conformément au RGPD. Pour en savoir plus et exercer vos droits, consultez notre [politique de confidentialité](/politique-confidentialite)." }],
    },
    {
      title: "Droit applicable",
      blocks: [{ p: "Le site et les présentes mentions légales sont soumis au droit français. À défaut de résolution amiable, les tribunaux français sont compétents." }],
    },
    { title: "Contact", blocks: [{ p: `Une question sur ce site ? ${phoneMail}` }] },
  ],
}

const en: LegalDoc = {
  title: "Legal notice",
  subtitle: "Who publishes the site, who hosts it and the framework it is offered under.",
  updated: "October 29, 2026",
  sections: [
    {
      title: "Site publisher",
      blocks: [
        { p: `The ${F.site} website is published by ${F.name}, a French manufacturer of temperature probes since 1989. ${F.brand} is its composting monitoring solution.` },
        {
          rows: [
            ["Company name", F.name],
            ["Trade name", F.brand],
            ["Address", F.address],
            ["Trade register (RCS)", F.rcs],
            ["SIRET", F.siret],
            ["Phone", F.phone],
            ["Email", `[${F.email}](mailto:${F.email})`],
          ],
        },
      ],
    },
    {
      title: "Hosting",
      blocks: [
        {
          rows: [
            ["Host", F.host],
            ["Address", `${F.hostAddress}, United States`],
            ["Website", `[vercel.com](${F.hostUrl})`],
          ],
        },
      ],
    },
    {
      title: "Intellectual property",
      blocks: [
        { p: `The texts, images, photographs, diagrams, logos and trademarks (${F.brand}, ${F.name}) on the site belong to ${F.name} or are used with their owners' permission.` },
        { p: "Any reproduction, representation or adaptation, in whole or in part, without prior written permission is prohibited. Third-party logos shown on the site belong to their respective owners." },
      ],
    },
    {
      title: "Liability",
      blocks: [
        { p: `${F.name} strives to provide accurate and up-to-date information but does not guarantee that it is exhaustive. Technical characteristics are indicative: only the quotation or contract prevails. The curves, alerts and reports shown on the site are examples.` },
        { p: `${F.name} cannot be held liable for damage arising from access to the site, its unavailability or the use of its information. Links to third-party sites are provided for information only: ${F.name} does not control their content.` },
      ],
    },
    {
      title: "Personal data and cookies",
      blocks: [{ p: "Data entered in the contact form is processed in accordance with the GDPR. To find out more and exercise your rights, see our [privacy policy](/politique-confidentialite)." }],
    },
    {
      title: "Governing law",
      blocks: [{ p: "The site and this legal notice are governed by French law. Failing an amicable settlement, the French courts have jurisdiction." }],
    },
    { title: "Contact", blocks: [{ p: `A question about this site? ${phoneMail}` }] },
  ],
}

const es: LegalDoc = {
  title: "Aviso legal",
  subtitle: "Quién edita el sitio, quién lo aloja y en qué marco se ofrece.",
  updated: "29 de octubre de 2026",
  sections: [
    {
      title: "Editor del sitio",
      blocks: [
        { p: `El sitio ${F.site} está editado por ${F.name}, fabricante francés de sondas de temperatura desde 1989. ${F.brand} es su solución de seguimiento del compostaje.` },
        {
          rows: [
            ["Razón social", F.name],
            ["Marca comercial", F.brand],
            ["Dirección", F.address],
            ["Registro mercantil (RCS)", F.rcs],
            ["SIRET", F.siret],
            ["Teléfono", F.phone],
            ["Correo electrónico", `[${F.email}](mailto:${F.email})`],
          ],
        },
      ],
    },
    {
      title: "Alojamiento",
      blocks: [
        {
          rows: [
            ["Proveedor", F.host],
            ["Dirección", `${F.hostAddress}, Estados Unidos`],
            ["Sitio web", `[vercel.com](${F.hostUrl})`],
          ],
        },
      ],
    },
    {
      title: "Propiedad intelectual",
      blocks: [
        { p: `Los textos, imágenes, fotografías, esquemas, logotipos y marcas (${F.brand}, ${F.name}) del sitio son propiedad de ${F.name} o se utilizan con el permiso de sus titulares.` },
        { p: "Queda prohibida toda reproducción, representación o adaptación, total o parcial, sin autorización escrita previa. Los logotipos de terceros que aparecen en el sitio pertenecen a sus respectivos propietarios." },
      ],
    },
    {
      title: "Responsabilidad",
      blocks: [
        { p: `${F.name} se esfuerza por ofrecer información exacta y actualizada, sin garantizar que sea exhaustiva. Las características técnicas son orientativas: solo el presupuesto o el contrato son vinculantes. Las curvas, alertas e informes mostrados en el sitio son ejemplos.` },
        { p: `${F.name} no puede ser considerada responsable de los daños derivados del acceso al sitio, de su indisponibilidad o del uso de su información. Los enlaces a sitios de terceros se facilitan a título informativo: ${F.name} no controla su contenido.` },
      ],
    },
    {
      title: "Datos personales y cookies",
      blocks: [{ p: "Los datos introducidos en el formulario de contacto se tratan conforme al RGPD. Para saber más y ejercer sus derechos, consulte nuestra [política de privacidad](/politique-confidentialite)." }],
    },
    {
      title: "Ley aplicable",
      blocks: [{ p: "El sitio y este aviso legal se rigen por el derecho francés. A falta de solución amistosa, son competentes los tribunales franceses." }],
    },
    { title: "Contacto", blocks: [{ p: `¿Una pregunta sobre este sitio? ${phoneMail}` }] },
  ],
}

const de: LegalDoc = {
  title: "Impressum",
  subtitle: "Wer die Website betreibt, wer sie hostet und in welchem Rahmen sie angeboten wird.",
  updated: "29. Oktober 2026",
  sections: [
    {
      title: "Herausgeber der Website",
      blocks: [
        { p: `Die Website ${F.site} wird von ${F.name} herausgegeben, einem französischen Hersteller von Temperatursonden seit 1989. ${F.brand} ist die Lösung des Unternehmens zur Überwachung der Kompostierung.` },
        {
          rows: [
            ["Firma", F.name],
            ["Handelsmarke", F.brand],
            ["Anschrift", F.address],
            ["Handelsregister (RCS)", F.rcs],
            ["SIRET", F.siret],
            ["Telefon", F.phone],
            ["E-Mail", `[${F.email}](mailto:${F.email})`],
          ],
        },
      ],
    },
    {
      title: "Hosting",
      blocks: [
        {
          rows: [
            ["Hosting-Anbieter", F.host],
            ["Anschrift", `${F.hostAddress}, USA`],
            ["Website", `[vercel.com](${F.hostUrl})`],
          ],
        },
      ],
    },
    {
      title: "Geistiges Eigentum",
      blocks: [
        { p: `Die Texte, Bilder, Fotografien, Schemata, Logos und Marken (${F.brand}, ${F.name}) auf der Website sind Eigentum von ${F.name} oder werden mit Zustimmung der Rechteinhaber verwendet.` },
        { p: "Jede ganze oder teilweise Vervielfältigung, Wiedergabe oder Bearbeitung ohne vorherige schriftliche Genehmigung ist untersagt. Auf der Website gezeigte Logos Dritter gehören ihren jeweiligen Inhabern." },
      ],
    },
    {
      title: "Haftung",
      blocks: [
        { p: `${F.name} bemüht sich um richtige und aktuelle Informationen, übernimmt jedoch keine Gewähr für deren Vollständigkeit. Technische Angaben sind unverbindlich: maßgeblich sind allein Angebot oder Vertrag. Die auf der Website gezeigten Kurven, Warnungen und Berichte sind Beispiele.` },
        { p: `${F.name} haftet nicht für Schäden, die durch den Zugriff auf die Website, ihre Nichtverfügbarkeit oder die Nutzung ihrer Informationen entstehen. Links zu Websites Dritter dienen nur der Information: ${F.name} hat keinen Einfluss auf deren Inhalte.` },
      ],
    },
    {
      title: "Personenbezogene Daten und Cookies",
      blocks: [{ p: "Die im Kontaktformular eingegebenen Daten werden gemäß DSGVO verarbeitet. Weitere Informationen und die Ausübung Ihrer Rechte finden Sie in unserer [Datenschutzerklärung](/politique-confidentialite)." }],
    },
    {
      title: "Anwendbares Recht",
      blocks: [{ p: "Für die Website und dieses Impressum gilt französisches Recht. Kommt keine gütliche Einigung zustande, sind die französischen Gerichte zuständig." }],
    },
    { title: "Kontakt", blocks: [{ p: `Eine Frage zu dieser Website? ${phoneMail}` }] },
  ],
}

const pt: LegalDoc = {
  title: "Aviso legal",
  subtitle: "Quem edita o site, quem o aloja e em que quadro é disponibilizado.",
  updated: "29 de outubro de 2026",
  sections: [
    {
      title: "Editor do site",
      blocks: [
        { p: `O site ${F.site} é editado pela ${F.name}, fabricante francesa de sondas de temperatura desde 1989. O ${F.brand} é a sua solução de acompanhamento da compostagem.` },
        {
          rows: [
            ["Denominação social", F.name],
            ["Marca comercial", F.brand],
            ["Morada", F.address],
            ["Registo comercial (RCS)", F.rcs],
            ["SIRET", F.siret],
            ["Telefone", F.phone],
            ["E-mail", `[${F.email}](mailto:${F.email})`],
          ],
        },
      ],
    },
    {
      title: "Alojamento",
      blocks: [
        {
          rows: [
            ["Alojamento", F.host],
            ["Morada", `${F.hostAddress}, Estados Unidos`],
            ["Site", `[vercel.com](${F.hostUrl})`],
          ],
        },
      ],
    },
    {
      title: "Propriedade intelectual",
      blocks: [
        { p: `Os textos, imagens, fotografias, esquemas, logótipos e marcas (${F.brand}, ${F.name}) do site são propriedade da ${F.name} ou utilizados com a autorização dos respetivos titulares.` },
        { p: "É proibida qualquer reprodução, representação ou adaptação, total ou parcial, sem autorização escrita prévia. Os logótipos de terceiros apresentados no site pertencem aos respetivos proprietários." },
      ],
    },
    {
      title: "Responsabilidade",
      blocks: [
        { p: `A ${F.name} procura fornecer informações exatas e atualizadas, sem garantir que sejam exaustivas. As características técnicas são indicativas: apenas o orçamento ou o contrato fazem fé. As curvas, alertas e relatórios apresentados no site são exemplos.` },
        { p: `A ${F.name} não pode ser responsabilizada por danos decorrentes do acesso ao site, da sua indisponibilidade ou da utilização das suas informações. As ligações a sites de terceiros são fornecidas a título informativo: a ${F.name} não controla o seu conteúdo.` },
      ],
    },
    {
      title: "Dados pessoais e cookies",
      blocks: [{ p: "Os dados introduzidos no formulário de contacto são tratados em conformidade com o RGPD. Para saber mais e exercer os seus direitos, consulte a nossa [política de privacidade](/politique-confidentialite)." }],
    },
    {
      title: "Lei aplicável",
      blocks: [{ p: "O site e este aviso legal estão sujeitos ao direito francês. Na falta de resolução amigável, são competentes os tribunais franceses." }],
    },
    { title: "Contacto", blocks: [{ p: `Uma questão sobre este site? ${phoneMail}` }] },
  ],
}

const ro: LegalDoc = {
  title: "Mențiuni legale",
  subtitle: "Cine editează site-ul, cine îl găzduiește și în ce cadru este oferit.",
  updated: "29 octombrie 2026",
  sections: [
    {
      title: "Editorul site-ului",
      blocks: [
        { p: `Site-ul ${F.site} este editat de ${F.name}, producător francez de sonde de temperatură din 1989. ${F.brand} este soluția sa de urmărire a compostării.` },
        {
          rows: [
            ["Denumire", F.name],
            ["Marcă comercială", F.brand],
            ["Adresă", F.address],
            ["Registrul comerțului (RCS)", F.rcs],
            ["SIRET", F.siret],
            ["Telefon", F.phone],
            ["E-mail", `[${F.email}](mailto:${F.email})`],
          ],
        },
      ],
    },
    {
      title: "Găzduire",
      blocks: [
        {
          rows: [
            ["Gazdă", F.host],
            ["Adresă", `${F.hostAddress}, Statele Unite`],
            ["Site web", `[vercel.com](${F.hostUrl})`],
          ],
        },
      ],
    },
    {
      title: "Proprietate intelectuală",
      blocks: [
        { p: `Textele, imaginile, fotografiile, schemele, logo-urile și mărcile (${F.brand}, ${F.name}) de pe site aparțin ${F.name} sau sunt utilizate cu acordul titularilor.` },
        { p: "Orice reproducere, reprezentare sau adaptare, totală sau parțială, fără acord scris prealabil este interzisă. Logo-urile terților afișate pe site aparțin proprietarilor lor." },
      ],
    },
    {
      title: "Răspundere",
      blocks: [
        { p: `${F.name} se străduiește să ofere informații exacte și actualizate, fără a garanta caracterul lor exhaustiv. Caracteristicile tehnice sunt orientative: doar oferta sau contractul fac dovada. Curbele, alertele și rapoartele prezentate pe site sunt exemple.` },
        { p: `${F.name} nu poate fi făcută răspunzătoare pentru daunele rezultate din accesul la site, indisponibilitatea sa sau utilizarea informațiilor sale. Linkurile către site-uri terțe sunt oferite cu titlu informativ: ${F.name} nu le controlează conținutul.` },
      ],
    },
    {
      title: "Date personale și cookie-uri",
      blocks: [{ p: "Datele introduse în formularul de contact sunt prelucrate conform RGPD. Pentru detalii și pentru exercitarea drepturilor dvs., consultați [politica de confidențialitate](/politique-confidentialite)." }],
    },
    {
      title: "Legea aplicabilă",
      blocks: [{ p: "Site-ul și aceste mențiuni legale sunt supuse dreptului francez. În lipsa unei soluții amiabile, instanțele franceze sunt competente." }],
    },
    { title: "Contact", blocks: [{ p: `O întrebare despre acest site? ${phoneMail}` }] },
  ],
}

export const mentionsDocs: Record<LegalLang, LegalDoc> = { fr, en, es, de, pt, ro }
