import { FACTS as F, type LegalDoc, type LegalLang } from "@/i18n/legal-facts"

const phoneMail = `[${F.email}](mailto:${F.email}) · ${F.phone}`

const fr: LegalDoc = {
  title: "Conditions générales d'utilisation",
  subtitle: `Les règles d'utilisation du site ${F.site}.`,
  updated: "29 octobre 2026",
  sections: [
    {
      title: "Objet",
      blocks: [
        { p: `Les présentes conditions encadrent l'accès au site ${F.site} et son utilisation : présentation de ${F.brand}, FAQ, documentation, articles et formulaire de contact. Utiliser le site vaut acceptation de ces conditions.` },
        { note: `La commande de sondes et l'accès à la plateforme ${F.brand} sont régis par le devis ou le contrat conclu avec ${F.name}, et non par ces conditions.` },
      ],
    },
    {
      title: "Accès au site",
      blocks: [
        { p: "L'accès au site est gratuit, hors coûts de connexion Internet à votre charge. Il est ouvert à tout moment, sauf maintenance, panne ou cas de force majeure. Aucune disponibilité continue n'est garantie." },
      ],
    },
    {
      title: "Utilisation conforme",
      blocks: [
        { p: "Vous vous engagez à utiliser le site de façon loyale. Sont notamment interdits :" },
        { ul: ["toute tentative d'intrusion ou de perturbation du site et de ses serveurs", "l'extraction automatisée ou massive de son contenu", "l'envoi de demandes abusives, trompeuses ou publicitaires via le formulaire de contact", "la communication de données qui ne sont pas les vôtres"] },
      ],
    },
    {
      title: "Formulaire de contact",
      blocks: [
        { p: `Une demande de présentation ne vous engage à rien : elle ne constitue ni une commande ni un contrat. Un conseiller ${F.name} vous répond par téléphone ou par e-mail. Les informations saisies doivent être exactes et sont traitées selon notre [politique de confidentialité](/politique-confidentialite).` },
      ],
    },
    {
      title: "Contenus et propriété intellectuelle",
      blocks: [{ p: `Les contenus du site appartiennent à ${F.name} ou à leurs titulaires. Vous pouvez les consulter et les citer en indiquant la source ; toute autre reproduction ou réutilisation nécessite un accord écrit préalable. Voir les [mentions légales](/mentions-legales).` }],
    },
    {
      title: "Informations et responsabilité",
      blocks: [
        { p: `Les informations du site sont données à titre indicatif et peuvent évoluer. Les caractéristiques techniques, les courbes, les alertes et les rapports présentés sont des exemples ; seul le devis ou le contrat fait foi.` },
        { p: `${F.name} ne peut être tenu responsable des dommages résultant de l'utilisation du site ou de l'impossibilité d'y accéder, dans les limites permises par la loi.` },
      ],
    },
    {
      title: "Liens externes",
      blocks: [{ p: `Le site peut renvoyer vers des sites tiers. ${F.name} n'en contrôle pas le contenu et n'est pas responsable de leur utilisation.` }],
    },
    {
      title: "Modification des conditions",
      blocks: [{ p: "Ces conditions peuvent être modifiées à tout moment. La version en vigueur est celle publiée sur cette page, avec sa date de mise à jour." }],
    },
    {
      title: "Droit applicable",
      blocks: [{ p: "Ces conditions sont soumises au droit français. À défaut de résolution amiable, les tribunaux français sont compétents." }],
    },
    { title: "Contact", blocks: [{ p: `Une question sur ces conditions ? ${phoneMail}` }] },
  ],
}

const en: LegalDoc = {
  title: "Terms of use",
  subtitle: `The rules for using the ${F.site} website.`,
  updated: "October 29, 2026",
  sections: [
    {
      title: "Purpose",
      blocks: [
        { p: `These terms govern access to the ${F.site} website and its use: presentation of ${F.brand}, FAQ, documentation, articles and contact form. Using the site means accepting these terms.` },
        { note: `Orders for probes and access to the ${F.brand} platform are governed by the quotation or contract entered into with ${F.name}, not by these terms.` },
      ],
    },
    {
      title: "Access to the site",
      blocks: [{ p: "Access to the site is free, apart from your own Internet connection costs. It is open at all times, except for maintenance, failure or force majeure. Continuous availability is not guaranteed." }],
    },
    {
      title: "Proper use",
      blocks: [
        { p: "You agree to use the site fairly. In particular, the following are prohibited:" },
        { ul: ["any attempt to break into or disrupt the site and its servers", "automated or bulk extraction of its content", "sending abusive, misleading or promotional requests through the contact form", "providing data that is not your own"] },
      ],
    },
    {
      title: "Contact form",
      blocks: [{ p: `A presentation request does not commit you to anything: it is neither an order nor a contract. A ${F.name} advisor will reply by phone or email. The information you enter must be accurate and is processed in line with our [privacy policy](/politique-confidentialite).` }],
    },
    {
      title: "Content and intellectual property",
      blocks: [{ p: `The site's content belongs to ${F.name} or its owners. You may read and quote it, citing the source; any other reproduction or reuse requires prior written permission. See the [legal notice](/mentions-legales).` }],
    },
    {
      title: "Information and liability",
      blocks: [
        { p: "The information on the site is indicative and may change. The technical characteristics, curves, alerts and reports shown are examples; only the quotation or contract prevails." },
        { p: `${F.name} cannot be held liable for damage arising from use of the site or from being unable to access it, within the limits permitted by law.` },
      ],
    },
    {
      title: "External links",
      blocks: [{ p: `The site may link to third-party sites. ${F.name} does not control their content and is not responsible for their use.` }],
    },
    {
      title: "Changes to these terms",
      blocks: [{ p: "These terms may be changed at any time. The version in force is the one published on this page, with its update date." }],
    },
    {
      title: "Governing law",
      blocks: [{ p: "These terms are governed by French law. Failing an amicable settlement, the French courts have jurisdiction." }],
    },
    { title: "Contact", blocks: [{ p: `A question about these terms? ${phoneMail}` }] },
  ],
}

const es: LegalDoc = {
  title: "Condiciones de uso",
  subtitle: `Las normas de uso del sitio ${F.site}.`,
  updated: "29 de octubre de 2026",
  sections: [
    {
      title: "Objeto",
      blocks: [
        { p: `Estas condiciones regulan el acceso al sitio ${F.site} y su uso: presentación de ${F.brand}, preguntas frecuentes, documentación, artículos y formulario de contacto. Utilizar el sitio implica aceptarlas.` },
        { note: `El pedido de sondas y el acceso a la plataforma ${F.brand} se rigen por el presupuesto o el contrato celebrado con ${F.name}, y no por estas condiciones.` },
      ],
    },
    {
      title: "Acceso al sitio",
      blocks: [{ p: "El acceso al sitio es gratuito, salvo los costes de su conexión a Internet. Está abierto en todo momento, salvo mantenimiento, avería o fuerza mayor. No se garantiza una disponibilidad continua." }],
    },
    {
      title: "Uso adecuado",
      blocks: [
        { p: "Se compromete a utilizar el sitio de forma leal. En particular, está prohibido:" },
        { ul: ["intentar acceder indebidamente al sitio y a sus servidores o perturbar su funcionamiento", "extraer su contenido de forma automatizada o masiva", "enviar solicitudes abusivas, engañosas o publicitarias a través del formulario de contacto", "comunicar datos que no sean suyos"] },
      ],
    },
    {
      title: "Formulario de contacto",
      blocks: [{ p: `Una solicitud de presentación no le compromete a nada: no es un pedido ni un contrato. Un asesor de ${F.name} le responderá por teléfono o por correo. Los datos introducidos deben ser exactos y se tratan según nuestra [política de privacidad](/politique-confidentialite).` }],
    },
    {
      title: "Contenidos y propiedad intelectual",
      blocks: [{ p: `Los contenidos del sitio pertenecen a ${F.name} o a sus titulares. Puede consultarlos y citarlos indicando la fuente; cualquier otra reproducción o reutilización requiere autorización escrita previa. Consulte el [aviso legal](/mentions-legales).` }],
    },
    {
      title: "Información y responsabilidad",
      blocks: [
        { p: "La información del sitio es orientativa y puede cambiar. Las características técnicas, curvas, alertas e informes mostrados son ejemplos; solo el presupuesto o el contrato son vinculantes." },
        { p: `${F.name} no puede ser considerada responsable de los daños derivados del uso del sitio o de la imposibilidad de acceder a él, dentro de los límites permitidos por la ley.` },
      ],
    },
    {
      title: "Enlaces externos",
      blocks: [{ p: `El sitio puede remitir a sitios de terceros. ${F.name} no controla su contenido ni es responsable de su uso.` }],
    },
    {
      title: "Modificación de las condiciones",
      blocks: [{ p: "Estas condiciones pueden modificarse en cualquier momento. La versión vigente es la publicada en esta página, con su fecha de actualización." }],
    },
    {
      title: "Ley aplicable",
      blocks: [{ p: "Estas condiciones se rigen por el derecho francés. A falta de solución amistosa, son competentes los tribunales franceses." }],
    },
    { title: "Contacto", blocks: [{ p: `¿Una pregunta sobre estas condiciones? ${phoneMail}` }] },
  ],
}

const de: LegalDoc = {
  title: "Nutzungsbedingungen",
  subtitle: `Die Regeln für die Nutzung der Website ${F.site}.`,
  updated: "29. Oktober 2026",
  sections: [
    {
      title: "Gegenstand",
      blocks: [
        { p: `Diese Bedingungen regeln den Zugang zur Website ${F.site} und ihre Nutzung: Vorstellung von ${F.brand}, FAQ, Dokumentation, Artikel und Kontaktformular. Mit der Nutzung der Website akzeptieren Sie diese Bedingungen.` },
        { note: `Die Bestellung von Sonden und der Zugang zur ${F.brand}-Plattform unterliegen dem Angebot oder dem Vertrag mit ${F.name}, nicht diesen Bedingungen.` },
      ],
    },
    {
      title: "Zugang zur Website",
      blocks: [{ p: "Der Zugang zur Website ist kostenlos, abgesehen von Ihren eigenen Internetkosten. Sie ist jederzeit erreichbar, außer bei Wartung, Störung oder höherer Gewalt. Eine ununterbrochene Verfügbarkeit wird nicht garantiert." }],
    },
    {
      title: "Ordnungsgemäße Nutzung",
      blocks: [
        { p: "Sie verpflichten sich, die Website redlich zu nutzen. Insbesondere untersagt sind:" },
        { ul: ["jeder Versuch, in die Website und ihre Server einzudringen oder sie zu stören", "das automatisierte oder massenhafte Auslesen ihrer Inhalte", "das Senden missbräuchlicher, irreführender oder werblicher Anfragen über das Kontaktformular", "die Angabe von Daten, die nicht Ihre eigenen sind"] },
      ],
    },
    {
      title: "Kontaktformular",
      blocks: [{ p: `Eine Anfrage nach einer Vorstellung verpflichtet Sie zu nichts: Sie ist weder eine Bestellung noch ein Vertrag. Ein Berater von ${F.name} antwortet per Telefon oder E-Mail. Ihre Angaben müssen zutreffen und werden gemäß unserer [Datenschutzerklärung](/politique-confidentialite) verarbeitet.` }],
    },
    {
      title: "Inhalte und geistiges Eigentum",
      blocks: [{ p: `Die Inhalte der Website gehören ${F.name} oder ihren Rechteinhabern. Sie dürfen sie lesen und unter Quellenangabe zitieren; jede weitere Vervielfältigung oder Wiederverwendung bedarf einer vorherigen schriftlichen Genehmigung. Siehe [Impressum](/mentions-legales).` }],
    },
    {
      title: "Informationen und Haftung",
      blocks: [
        { p: "Die Informationen auf der Website sind unverbindlich und können sich ändern. Die gezeigten technischen Angaben, Kurven, Warnungen und Berichte sind Beispiele; maßgeblich sind allein Angebot oder Vertrag." },
        { p: `${F.name} haftet im gesetzlich zulässigen Rahmen nicht für Schäden, die aus der Nutzung der Website oder der Unmöglichkeit des Zugriffs entstehen.` },
      ],
    },
    {
      title: "Externe Links",
      blocks: [{ p: `Die Website kann auf Websites Dritter verweisen. ${F.name} kontrolliert deren Inhalte nicht und ist für deren Nutzung nicht verantwortlich.` }],
    },
    {
      title: "Änderung der Bedingungen",
      blocks: [{ p: "Diese Bedingungen können jederzeit geändert werden. Maßgeblich ist die auf dieser Seite veröffentlichte Fassung mit ihrem Aktualisierungsdatum." }],
    },
    {
      title: "Anwendbares Recht",
      blocks: [{ p: "Für diese Bedingungen gilt französisches Recht. Kommt keine gütliche Einigung zustande, sind die französischen Gerichte zuständig." }],
    },
    { title: "Kontakt", blocks: [{ p: `Eine Frage zu diesen Bedingungen? ${phoneMail}` }] },
  ],
}

const pt: LegalDoc = {
  title: "Condições de utilização",
  subtitle: `As regras de utilização do site ${F.site}.`,
  updated: "29 de outubro de 2026",
  sections: [
    {
      title: "Objeto",
      blocks: [
        { p: `Estas condições regulam o acesso ao site ${F.site} e a sua utilização: apresentação do ${F.brand}, perguntas frequentes, documentação, artigos e formulário de contacto. Utilizar o site implica aceitá-las.` },
        { note: `A encomenda de sondas e o acesso à plataforma ${F.brand} são regidos pelo orçamento ou pelo contrato celebrado com a ${F.name}, e não por estas condições.` },
      ],
    },
    {
      title: "Acesso ao site",
      blocks: [{ p: "O acesso ao site é gratuito, exceto os custos da sua ligação à Internet. Está aberto a qualquer momento, salvo manutenção, avaria ou força maior. Não é garantida uma disponibilidade contínua." }],
    },
    {
      title: "Utilização adequada",
      blocks: [
        { p: "Compromete-se a utilizar o site de forma leal. É nomeadamente proibido:" },
        { ul: ["tentar aceder indevidamente ao site e aos seus servidores ou perturbar o seu funcionamento", "extrair o seu conteúdo de forma automatizada ou massiva", "enviar pedidos abusivos, enganosos ou publicitários através do formulário de contacto", "comunicar dados que não sejam seus"] },
      ],
    },
    {
      title: "Formulário de contacto",
      blocks: [{ p: `Um pedido de apresentação não o compromete a nada: não é uma encomenda nem um contrato. Um consultor da ${F.name} responde por telefone ou por e-mail. Os dados introduzidos devem ser exatos e são tratados de acordo com a nossa [política de privacidade](/politique-confidentialite).` }],
    },
    {
      title: "Conteúdos e propriedade intelectual",
      blocks: [{ p: `Os conteúdos do site pertencem à ${F.name} ou aos respetivos titulares. Pode consultá-los e citá-los indicando a fonte; qualquer outra reprodução ou reutilização requer autorização escrita prévia. Consulte o [aviso legal](/mentions-legales).` }],
    },
    {
      title: "Informações e responsabilidade",
      blocks: [
        { p: "As informações do site são indicativas e podem evoluir. As características técnicas, curvas, alertas e relatórios apresentados são exemplos; apenas o orçamento ou o contrato fazem fé." },
        { p: `A ${F.name} não pode ser responsabilizada por danos decorrentes da utilização do site ou da impossibilidade de aceder a ele, dentro dos limites permitidos por lei.` },
      ],
    },
    {
      title: "Ligações externas",
      blocks: [{ p: `O site pode remeter para sites de terceiros. A ${F.name} não controla o seu conteúdo nem é responsável pela sua utilização.` }],
    },
    {
      title: "Alteração das condições",
      blocks: [{ p: "Estas condições podem ser alteradas a qualquer momento. A versão em vigor é a publicada nesta página, com a respetiva data de atualização." }],
    },
    {
      title: "Lei aplicável",
      blocks: [{ p: "Estas condições estão sujeitas ao direito francês. Na falta de resolução amigável, são competentes os tribunais franceses." }],
    },
    { title: "Contacto", blocks: [{ p: `Uma questão sobre estas condições? ${phoneMail}` }] },
  ],
}

const ro: LegalDoc = {
  title: "Condiții de utilizare",
  subtitle: `Regulile de utilizare a site-ului ${F.site}.`,
  updated: "29 octombrie 2026",
  sections: [
    {
      title: "Obiect",
      blocks: [
        { p: `Aceste condiții reglementează accesul la site-ul ${F.site} și utilizarea sa: prezentarea ${F.brand}, întrebări frecvente, documentație, articole și formular de contact. Utilizarea site-ului înseamnă acceptarea lor.` },
        { note: `Comanda de sonde și accesul la platforma ${F.brand} sunt reglementate de oferta sau contractul încheiat cu ${F.name}, nu de aceste condiții.` },
      ],
    },
    {
      title: "Accesul la site",
      blocks: [{ p: "Accesul la site este gratuit, cu excepția costurilor propriei conexiuni la internet. Este deschis oricând, cu excepția mentenanței, a defecțiunilor sau a forței majore. Nu se garantează o disponibilitate continuă." }],
    },
    {
      title: "Utilizare corespunzătoare",
      blocks: [
        { p: "Vă angajați să utilizați site-ul cu bună-credință. Sunt interzise în special:" },
        { ul: ["orice tentativă de intruziune sau de perturbare a site-ului și a serverelor sale", "extragerea automată sau în masă a conținutului său", "trimiterea de cereri abuzive, înșelătoare sau publicitare prin formularul de contact", "comunicarea unor date care nu sunt ale dvs."] },
      ],
    },
    {
      title: "Formularul de contact",
      blocks: [{ p: `O cerere de prezentare nu vă angajează la nimic: nu este nici comandă, nici contract. Un consultant ${F.name} vă răspunde telefonic sau prin e-mail. Informațiile introduse trebuie să fie exacte și sunt prelucrate conform [politicii noastre de confidențialitate](/politique-confidentialite).` }],
    },
    {
      title: "Conținut și proprietate intelectuală",
      blocks: [{ p: `Conținutul site-ului aparține ${F.name} sau titularilor săi. Îl puteți consulta și cita indicând sursa; orice altă reproducere sau reutilizare necesită acord scris prealabil. Consultați [mențiunile legale](/mentions-legales).` }],
    },
    {
      title: "Informații și răspundere",
      blocks: [
        { p: "Informațiile de pe site sunt orientative și pot evolua. Caracteristicile tehnice, curbele, alertele și rapoartele prezentate sunt exemple; doar oferta sau contractul fac dovada." },
        { p: `${F.name} nu poate fi făcută răspunzătoare pentru daunele rezultate din utilizarea site-ului sau din imposibilitatea de a-l accesa, în limitele permise de lege.` },
      ],
    },
    {
      title: "Linkuri externe",
      blocks: [{ p: `Site-ul poate trimite către site-uri terțe. ${F.name} nu le controlează conținutul și nu răspunde de utilizarea lor.` }],
    },
    {
      title: "Modificarea condițiilor",
      blocks: [{ p: "Aceste condiții pot fi modificate oricând. Versiunea în vigoare este cea publicată pe această pagină, cu data actualizării." }],
    },
    {
      title: "Legea aplicabilă",
      blocks: [{ p: "Aceste condiții sunt supuse dreptului francez. În lipsa unei soluții amiabile, instanțele franceze sunt competente." }],
    },
    { title: "Contact", blocks: [{ p: `O întrebare despre aceste condiții? ${phoneMail}` }] },
  ],
}

export const cguDocs: Record<LegalLang, LegalDoc> = { fr, en, es, de, pt, ro }
