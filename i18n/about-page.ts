/**
 * Textes de la page « Qui sommes-nous », dans les 6 langues. Les faits sur Prosensor (création en 1989, une
 * quarantaine de personnes, 2 800 m² à Norroy-le-Veneur, laboratoire d'étalonnage, secteurs, valeurs) viennent de
 * la page « Présentation de la société » de prosensor.fr ; ceux sur GreenSensor, de la FAQ et de la fiche technique.
 */
export type AboutLang = "fr" | "en" | "es" | "de" | "pt" | "ro"

export type AboutPageCopy = {
  home: string
  seoTitle: string
  seoDescription: string
  title: string
  lead: string
  photoAlt: string
  photoCaption: string
  craft: { title: string; text: string[]; sectorsTitle: string; sectors: string[] }
  chain: { title: string; lead: string; photoAlt: string; steps: { name: string; desc: string }[] }
  values: { quote: string; mission: string; items: { name: string; desc: string }[] }
  team: {
    title: string
    lead: string
    moments: { name: string; desc: string }[]
    reach: string
    phone: string
    email: string
    hours: string
    hoursValue: string
    address: string
    where: string
    cta: string
  }
}

export const aboutPageCopy: Record<AboutLang, AboutPageCopy> = {
  fr: {
    home: "Accueil",
    seoTitle: "Qui sommes-nous | GreenSensor by Prosensor",
    seoDescription:
      "GreenSensor est conçu et fabriqué par Prosensor, fabricant français de sondes de température depuis 1989, à Norroy-le-Veneur (Moselle). Une équipe disponible pour vous accompagner.",
    title: "Qui sommes-nous ?",
    lead: "GreenSensor est une marque de Prosensor, fabricant français de sondes de température depuis 1989. Nous concevons et fabriquons nos sondes à Norroy-le-Veneur, en Moselle.",
    photoAlt: "Le siège et l'usine Prosensor à Norroy-le-Veneur",
    photoCaption: "Notre siège et notre usine à Norroy-le-Veneur (57) : 2 800 m² de locaux, une quarantaine de personnes.",
    craft: {
      title: "Plus de 35 ans de mesure de température",
      text: [
        "Prosensor conçoit et fabrique des sondes de température depuis 1989 : sondes Pt100, thermocouples, enregistreurs, éléments chauffants et appareils de mesure portables.",
        "GreenSensor applique ce savoir-faire au compostage : une sonde conçue pour l'andain et une plateforme qui suit la température de vos tas.",
      ],
      sectorsTitle: "Secteurs où nos sondes sont utilisées",
      sectors: [
        "Agroalimentaire",
        "Aéronautique",
        "Nucléaire",
        "Chimie et pétrochimie",
        "Automobile",
        "Sidérurgie",
        "Froid industriel",
        "Chauffage et climatisation",
        "Météorologie",
        "Environnement",
      ],
    },
    chain: {
      title: "De notre atelier à votre andain",
      lead: "Conception, fabrication, contrôle et support : tout se fait chez Prosensor, à Norroy-le-Veneur.",
      photoAlt: "Sonde GreenSensor plantée dans un andain de compost",
      steps: [
        { name: "Conception", desc: "Notre bureau d'études conçoit la sonde et la plateforme. Si besoin, il adapte la longueur, les capteurs et les options à votre site." },
        { name: "Fabrication", desc: "Chaque sonde est fabriquée dans notre usine de Norroy-le-Veneur : tube inox 316L, boîtier étanche IP68, deux poignées pour la planter à la main." },
        { name: "Contrôle", desc: "Chaque sonde est testée avant de partir. Notre laboratoire d'étalonnage en température délivre des certificats et constats de vérification." },
        { name: "Accompagnement", desc: "Un conseiller vous aide à choisir le nombre de sondes et l'emplacement de la passerelle, puis reste joignable après l'installation." },
      ],
    },
    values: {
      quote: "Nos engagements",
      mission:
        "Notre mission : concevoir des capteurs fiables et durables pour l'industrie.",
      items: [
        { name: "Un interlocuteur direct", desc: "Vous échangez directement avec l'équipe Prosensor qui conçoit, fabrique et assure le support de la sonde." },
        { name: "Des sondes faites pour durer", desc: "Tube inox 316L, boîtier étanche IP68, batterie de 5 ans et garantie 3 ans." },
        { name: "Pensé pour le compostage", desc: "Nous développons GreenSensor pour les plateformes de compostage : objectifs de température par phase, rapport de suivi pour les audits, sonde plantée à la main." },
      ],
    },
    team: {
      title: "Une équipe disponible, à chaque étape",
      lead: "Le support est assuré par l'équipe Prosensor, à Norroy-le-Veneur, du lundi au vendredi de 9h à 18h. Il est gratuit.",
      moments: [
        { name: "Avant", desc: "Une présentation adaptée à votre site et un devis pour votre configuration." },
        { name: "À l'installation", desc: "Un guide pas à pas et un conseiller pour la passerelle, la portée et le placement des sondes." },
        { name: "Ensuite", desc: "Un support gratuit, une garantie de 3 ans et des sondes supplémentaires à l'unité." },
      ],
      reach: "Nous joindre",
      phone: "Téléphone",
      email: "E-mail",
      hours: "Horaires",
      hoursValue: "Du lundi au vendredi, 9h – 18h",
      address: "Adresse",
      where: "En Lorraine, au cœur de l'Europe, à proximité du Luxembourg, de l'Allemagne et de la Belgique.",
      cta: "Demander une présentation",
    },
  },
  en: {
    home: "Home",
    seoTitle: "About us | GreenSensor by Prosensor",
    seoDescription:
      "GreenSensor is designed and built by Prosensor, a French manufacturer of temperature probes since 1989, based in Norroy-le-Veneur (Moselle, France). A team ready to support you.",
    title: "About us",
    lead: "GreenSensor is a brand of Prosensor, a French manufacturer of temperature probes since 1989. We design and build our probes in Norroy-le-Veneur, in Moselle.",
    photoAlt: "Prosensor headquarters and factory in Norroy-le-Veneur",
    photoCaption: "Our headquarters and factory in Norroy-le-Veneur, France: 2,800 m² of premises and around 40 people.",
    craft: {
      title: "Over 35 years of temperature measurement",
      text: [
        "Prosensor has been designing and building temperature probes since 1989: Pt100 probes, thermocouples, data loggers, heating elements and portable measuring instruments.",
        "GreenSensor applies this know-how to composting: a probe designed for the windrow and a platform that tracks the temperature of your piles.",
      ],
      sectorsTitle: "Sectors where our probes are used",
      sectors: [
        "Food industry",
        "Aerospace",
        "Nuclear",
        "Chemicals and petrochemicals",
        "Automotive",
        "Steel",
        "Industrial refrigeration",
        "Heating and air conditioning",
        "Meteorology",
        "Environment",
      ],
    },
    chain: {
      title: "From our workshop to your windrow",
      lead: "Design, manufacturing, testing and support: everything is done at Prosensor, in Norroy-le-Veneur.",
      photoAlt: "GreenSensor probe pushed into a compost windrow",
      steps: [
        { name: "Design", desc: "Our engineering team designs the probe and the platform. When needed, it adapts the length, sensors and options to your site." },
        { name: "Manufacturing", desc: "Every probe is built in our Norroy-le-Veneur factory: 316L stainless steel tube, IP68 waterproof housing, two handles to push it in by hand." },
        { name: "Testing", desc: "Every probe is tested before it leaves. Our temperature calibration laboratory issues calibration certificates and verification reports." },
        { name: "Support", desc: "An advisor helps you choose the number of probes and where to place the gateway, then stays reachable after installation." },
      ],
    },
    values: {
      quote: "Our commitments",
      mission:
        "Our mission: to design reliable, durable sensors for industry.",
      items: [
        { name: "A direct contact", desc: "You deal directly with the Prosensor team that designs, builds and supports the probe." },
        { name: "Probes built to last", desc: "316L stainless steel tube, IP68 waterproof housing, 5-year battery and 3-year warranty." },
        { name: "Built for composting", desc: "We develop GreenSensor for composting sites: temperature targets per phase, a monitoring report for audits, a probe pushed in by hand." },
      ],
    },
    team: {
      title: "A team that's there at every step",
      lead: "Support is provided by the Prosensor team in Norroy-le-Veneur, Monday to Friday, 9am to 6pm. It is free.",
      moments: [
        { name: "Before", desc: "A presentation tailored to your site and a quote for your configuration." },
        { name: "At installation", desc: "A step-by-step guide and an advisor for the gateway, range and probe placement." },
        { name: "After", desc: "Free support, a 3-year warranty and additional probes available one at a time." },
      ],
      reach: "Get in touch",
      phone: "Phone",
      email: "Email",
      hours: "Opening hours",
      hoursValue: "Monday to Friday, 9am – 6pm (CET)",
      address: "Address",
      where: "In Lorraine, at the heart of Europe, close to Luxembourg, Germany and Belgium.",
      cta: "Request a presentation",
    },
  },
  es: {
    home: "Inicio",
    seoTitle: "Quiénes somos | GreenSensor by Prosensor",
    seoDescription:
      "GreenSensor está diseñado y fabricado por Prosensor, fabricante francés de sondas de temperatura desde 1989, en Norroy-le-Veneur (Mosela, Francia). Un equipo disponible para acompañarle.",
    title: "Quiénes somos",
    lead: "GreenSensor es una marca de Prosensor, fabricante francés de sondas de temperatura desde 1989. Diseñamos y fabricamos nuestras sondas en Norroy-le-Veneur, en Mosela.",
    photoAlt: "Sede y fábrica de Prosensor en Norroy-le-Veneur",
    photoCaption: "Nuestra sede y fábrica en Norroy-le-Veneur (Francia): 2.800 m² de instalaciones y unas 40 personas.",
    craft: {
      title: "Más de 35 años midiendo temperatura",
      text: [
        "Prosensor diseña y fabrica sondas de temperatura desde 1989: sondas Pt100, termopares, registradores, elementos calefactores e instrumentos de medida portátiles.",
        "GreenSensor aplica este saber hacer al compostaje: una sonda diseñada para la pila de compost y una plataforma que sigue su temperatura.",
      ],
      sectorsTitle: "Sectores en los que se utilizan nuestras sondas",
      sectors: [
        "Agroalimentario",
        "Aeronáutica",
        "Nuclear",
        "Química y petroquímica",
        "Automoción",
        "Siderurgia",
        "Frío industrial",
        "Calefacción y climatización",
        "Meteorología",
        "Medio ambiente",
      ],
    },
    chain: {
      title: "De nuestro taller a su pila",
      lead: "Diseño, fabricación, control y soporte: todo se hace en Prosensor, en Norroy-le-Veneur.",
      photoAlt: "Sonda GreenSensor clavada en una pila de compost",
      steps: [
        { name: "Diseño", desc: "Nuestra oficina técnica diseña la sonda y la plataforma. Si es necesario, adapta la longitud, los sensores y las opciones a su sitio." },
        { name: "Fabricación", desc: "Cada sonda se fabrica en nuestra fábrica de Norroy-le-Veneur: tubo de acero inoxidable 316L, caja estanca IP68 y dos empuñaduras para clavarla a mano." },
        { name: "Control", desc: "Cada sonda se prueba antes de salir. Nuestro laboratorio de calibración de temperatura emite certificados e informes de verificación." },
        { name: "Acompañamiento", desc: "Un asesor le ayuda a elegir el número de sondas y la ubicación de la pasarela, y sigue disponible después de la instalación." },
      ],
    },
    values: {
      quote: "Nuestros compromisos",
      mission:
        "Nuestra misión: diseñar sensores fiables y duraderos para la industria.",
      items: [
        { name: "Un interlocutor directo", desc: "Usted trata directamente con el equipo de Prosensor que diseña, fabrica y da soporte a la sonda." },
        { name: "Sondas hechas para durar", desc: "Tubo de acero inoxidable 316L, carcasa estanca IP68, batería de 5 años y garantía de 3 años." },
        { name: "Pensado para el compostaje", desc: "Desarrollamos GreenSensor para las plantas de compostaje: objetivos de temperatura por fase, informe de seguimiento para las auditorías, sonda que se clava a mano." },
      ],
    },
    team: {
      title: "Un equipo disponible en cada etapa",
      lead: "El soporte lo presta el equipo de Prosensor, en Norroy-le-Veneur, de lunes a viernes de 9:00 a 18:00. Es gratuito.",
      moments: [
        { name: "Antes", desc: "Una presentación adaptada a su sitio y un presupuesto para su configuración." },
        { name: "En la instalación", desc: "Una guía paso a paso y un asesor para la pasarela, el alcance y la colocación de las sondas." },
        { name: "Después", desc: "Soporte gratuito, garantía de 3 años y sondas adicionales por unidad." },
      ],
      reach: "Contactarnos",
      phone: "Teléfono",
      email: "Correo electrónico",
      hours: "Horario",
      hoursValue: "De lunes a viernes, 9:00 – 18:00 (hora de París)",
      address: "Dirección",
      where: "En Lorena, en el corazón de Europa, cerca de Luxemburgo, Alemania y Bélgica.",
      cta: "Solicitar una presentación",
    },
  },
  de: {
    home: "Start",
    seoTitle: "Über uns | GreenSensor by Prosensor",
    seoDescription:
      "GreenSensor wird von Prosensor entwickelt und gefertigt, einem französischen Hersteller von Temperatursonden seit 1989, mit Sitz in Norroy-le-Veneur (Lothringen). Ein Team, das Sie begleitet.",
    title: "Über uns",
    lead: "GreenSensor ist eine Marke von Prosensor, einem französischen Hersteller von Temperatursonden seit 1989. Wir entwickeln und fertigen unsere Sonden in Norroy-le-Veneur in Lothringen.",
    photoAlt: "Firmensitz und Werk von Prosensor in Norroy-le-Veneur",
    photoCaption: "Unser Firmensitz und Werk in Norroy-le-Veneur (Frankreich): 2.800 m² Betriebsfläche, rund 40 Mitarbeitende.",
    craft: {
      title: "Über 35 Jahre Temperaturmessung",
      text: [
        "Prosensor entwickelt und fertigt seit 1989 Temperatursonden: Pt100-Fühler, Thermoelemente, Datenlogger, Heizelemente und tragbare Messgeräte.",
        "GreenSensor überträgt dieses Know-how auf die Kompostierung: eine Sonde für die Miete und eine Plattform, die die Temperatur Ihrer Mieten verfolgt.",
      ],
      sectorsTitle: "Branchen, in denen unsere Sonden eingesetzt werden",
      sectors: [
        "Lebensmittelindustrie",
        "Luftfahrt",
        "Kerntechnik",
        "Chemie und Petrochemie",
        "Automobil",
        "Stahlindustrie",
        "Industriekälte",
        "Heizung und Klima",
        "Meteorologie",
        "Umwelt",
      ],
    },
    chain: {
      title: "Von unserer Werkstatt bis zu Ihrer Miete",
      lead: "Entwicklung, Fertigung, Prüfung und Support: Alles geschieht bei Prosensor in Norroy-le-Veneur.",
      photoAlt: "GreenSensor-Sonde in einer Kompostmiete",
      steps: [
        { name: "Entwicklung", desc: "Unser Konstruktionsbüro entwickelt Sonde und Plattform. Bei Bedarf passt es Länge, Sensoren und Optionen an Ihren Standort an." },
        { name: "Fertigung", desc: "Jede Sonde wird in unserem Werk in Norroy-le-Veneur gefertigt: Edelstahlrohr 316L, wasserdichtes IP68-Gehäuse, zwei Griffe zum Einstecken von Hand." },
        { name: "Prüfung", desc: "Jede Sonde wird vor dem Versand geprüft. Unser Kalibrierlabor für Temperatur stellt Kalibrierscheine und Prüfprotokolle aus." },
        { name: "Begleitung", desc: "Ein Berater hilft Ihnen bei der Anzahl der Sonden und dem Standort des Gateways und bleibt auch nach der Installation erreichbar." },
      ],
    },
    values: {
      quote: "Unsere Zusagen",
      mission:
        "Unsere Mission: zuverlässige, langlebige Sensoren für die Industrie entwickeln.",
      items: [
        { name: "Ein direkter Ansprechpartner", desc: "Sie sprechen direkt mit dem Prosensor-Team, das die Sonde entwickelt, fertigt und betreut." },
        { name: "Sonden, die lange halten", desc: "Edelstahlrohr 316L, wasserdichtes IP68-Gehäuse, 5 Jahre Batterielaufzeit und 3 Jahre Garantie." },
        { name: "Für die Kompostierung entwickelt", desc: "Wir entwickeln GreenSensor für Kompostierungsanlagen: Temperaturziele je Phase, Überwachungsbericht für Audits, eine Sonde, die von Hand gesetzt wird." },
      ],
    },
    team: {
      title: "Ein Team, das bei jedem Schritt da ist",
      lead: "Der Support erfolgt durch das Prosensor-Team in Norroy-le-Veneur, Montag bis Freitag von 9 bis 18 Uhr. Er ist kostenlos.",
      moments: [
        { name: "Vorher", desc: "Eine Präsentation passend zu Ihrem Standort und ein Angebot für Ihre Konfiguration." },
        { name: "Bei der Installation", desc: "Eine Schritt-für-Schritt-Anleitung und ein Berater für Gateway, Reichweite und Platzierung der Sonden." },
        { name: "Danach", desc: "Kostenloser Support, 3 Jahre Garantie und zusätzliche Sonden einzeln erhältlich." },
      ],
      reach: "Kontakt",
      phone: "Telefon",
      email: "E-Mail",
      hours: "Öffnungszeiten",
      hoursValue: "Montag bis Freitag, 9–18 Uhr",
      address: "Adresse",
      where: "In Lothringen, im Herzen Europas, nahe Luxemburg, Deutschland und Belgien.",
      cta: "Präsentation anfragen",
    },
  },
  pt: {
    home: "Início",
    seoTitle: "Quem somos | GreenSensor by Prosensor",
    seoDescription:
      "O GreenSensor é concebido e fabricado pela Prosensor, fabricante francês de sondas de temperatura desde 1989, em Norroy-le-Veneur (Mosela, França). Uma equipa disponível para o acompanhar.",
    title: "Quem somos",
    lead: "O GreenSensor é uma marca da Prosensor, fabricante francês de sondas de temperatura desde 1989. Concebemos e fabricamos as nossas sondas em Norroy-le-Veneur, na Mosela.",
    photoAlt: "Sede e fábrica da Prosensor em Norroy-le-Veneur",
    photoCaption: "A nossa sede e fábrica em Norroy-le-Veneur (França): 2 800 m² de instalações e cerca de 40 pessoas.",
    craft: {
      title: "Mais de 35 anos a medir temperatura",
      text: [
        "A Prosensor concebe e fabrica sondas de temperatura desde 1989: sondas Pt100, termopares, registadores, elementos de aquecimento e instrumentos de medição portáteis.",
        "O GreenSensor aplica este saber-fazer à compostagem: uma sonda pensada para a pilha e uma plataforma que acompanha a temperatura das suas pilhas.",
      ],
      sectorsTitle: "Setores onde as nossas sondas são utilizadas",
      sectors: [
        "Agroalimentar",
        "Aeronáutica",
        "Nuclear",
        "Química e petroquímica",
        "Automóvel",
        "Siderurgia",
        "Frio industrial",
        "Aquecimento e climatização",
        "Meteorologia",
        "Ambiente",
      ],
    },
    chain: {
      title: "Da nossa oficina à sua pilha",
      lead: "Conceção, fabrico, controlo e suporte: tudo é feito na Prosensor, em Norroy-le-Veneur.",
      photoAlt: "Sonda GreenSensor espetada numa pilha de composto",
      steps: [
        { name: "Conceção", desc: "O nosso gabinete técnico concebe a sonda e a plataforma. Se necessário, adapta o comprimento, os sensores e as opções ao seu local." },
        { name: "Fabrico", desc: "Cada sonda é fabricada na nossa fábrica de Norroy-le-Veneur: tubo em inox 316L, caixa estanque IP68 e duas pegas para a espetar à mão." },
        { name: "Controlo", desc: "Cada sonda é testada antes de sair. O nosso laboratório de calibração de temperatura emite certificados e relatórios de verificação." },
        { name: "Acompanhamento", desc: "Um consultor ajuda-o a escolher o número de sondas e o local da gateway, e continua disponível depois da instalação." },
      ],
    },
    values: {
      quote: "Os nossos compromissos",
      mission:
        "A nossa missão: conceber sensores fiáveis e duráveis para a indústria.",
      items: [
        { name: "Um interlocutor direto", desc: "Fala diretamente com a equipa Prosensor que concebe, fabrica e dá suporte à sonda." },
        { name: "Sondas feitas para durar", desc: "Tubo em aço inox 316L, caixa estanque IP68, bateria de 5 anos e garantia de 3 anos." },
        { name: "Pensado para a compostagem", desc: "Desenvolvemos o GreenSensor para as centrais de compostagem: objetivos de temperatura por fase, relatório de acompanhamento para as auditorias, sonda espetada à mão." },
      ],
    },
    team: {
      title: "Uma equipa disponível em cada etapa",
      lead: "O suporte é assegurado pela equipa da Prosensor, em Norroy-le-Veneur, de segunda a sexta, das 9h às 18h. É gratuito.",
      moments: [
        { name: "Antes", desc: "Uma apresentação adaptada ao seu local e um orçamento para a sua configuração." },
        { name: "Na instalação", desc: "Um guia passo a passo e um consultor para a gateway, o alcance e a colocação das sondas." },
        { name: "Depois", desc: "Suporte gratuito, garantia de 3 anos e sondas adicionais à unidade." },
      ],
      reach: "Contactar-nos",
      phone: "Telefone",
      email: "E-mail",
      hours: "Horário",
      hoursValue: "De segunda a sexta, 9h – 18h (hora de Paris)",
      address: "Morada",
      where: "Na Lorena, no coração da Europa, perto do Luxemburgo, da Alemanha e da Bélgica.",
      cta: "Pedir uma apresentação",
    },
  },
  ro: {
    home: "Acasă",
    seoTitle: "Despre noi | GreenSensor by Prosensor",
    seoDescription:
      "GreenSensor este proiectat și fabricat de Prosensor, producător francez de sonde de temperatură din 1989, cu sediul în Norroy-le-Veneur (Moselle, Franța). O echipă disponibilă să vă însoțească.",
    title: "Despre noi",
    lead: "GreenSensor este o marcă Prosensor, producător francez de sonde de temperatură din 1989. Proiectăm și fabricăm sondele în Norroy-le-Veneur, în Moselle.",
    photoAlt: "Sediul și fabrica Prosensor din Norroy-le-Veneur",
    photoCaption: "Sediul și fabrica noastră din Norroy-le-Veneur (Franța): 2.800 m² de spații și circa 40 de angajați.",
    craft: {
      title: "Peste 35 de ani de măsurare a temperaturii",
      text: [
        "Prosensor proiectează și fabrică sonde de temperatură din 1989: sonde Pt100, termocupluri, înregistratoare, elemente de încălzire și aparate de măsură portabile.",
        "GreenSensor aplică această experiență în compostare: o sondă gândită pentru brazdă și o platformă care urmărește temperatura brazdelor dvs.",
      ],
      sectorsTitle: "Sectoare în care sunt folosite sondele noastre",
      sectors: [
        "Industria alimentară",
        "Aeronautică",
        "Nuclear",
        "Chimie și petrochimie",
        "Auto",
        "Siderurgie",
        "Frig industrial",
        "Încălzire și climatizare",
        "Meteorologie",
        "Mediu",
      ],
    },
    chain: {
      title: "Din atelierul nostru până la brazda dvs.",
      lead: "Proiectare, fabricație, control și suport: totul se face la Prosensor, în Norroy-le-Veneur.",
      photoAlt: "Sondă GreenSensor înfiptă într-o brazdă de compost",
      steps: [
        { name: "Proiectare", desc: "Biroul nostru tehnic proiectează sonda și platforma. La nevoie, adaptează lungimea, senzorii și opțiunile la amplasamentul dvs." },
        { name: "Fabricație", desc: "Fiecare sondă este fabricată în fabrica noastră din Norroy-le-Veneur: tub din inox 316L, carcasă etanșă IP68, două mânere pentru a o înfige manual." },
        { name: "Control", desc: "Fiecare sondă este testată înainte de plecare. Laboratorul nostru de etalonare a temperaturii emite certificate și rapoarte de verificare." },
        { name: "Însoțire", desc: "Un consultant vă ajută să alegeți numărul de sonde și amplasarea gateway-ului, apoi rămâne disponibil după instalare." },
      ],
    },
    values: {
      quote: "Angajamentele noastre",
      mission:
        "Misiunea noastră: să proiectăm senzori fiabili și durabili pentru industrie.",
      items: [
        { name: "Un interlocutor direct", desc: "Discutați direct cu echipa Prosensor care proiectează, fabrică și asigură suportul sondei." },
        { name: "Sonde făcute să reziste", desc: "Tub din inox 316L, carcasă etanșă IP68, baterie de 5 ani și garanție de 3 ani." },
        { name: "Gândit pentru compostare", desc: "Dezvoltăm GreenSensor pentru platformele de compostare: obiective de temperatură pe faze, raport de monitorizare pentru audituri, sondă înfiptă manual." },
      ],
    },
    team: {
      title: "O echipă disponibilă la fiecare etapă",
      lead: "Suportul este asigurat de echipa Prosensor, în Norroy-le-Veneur, de luni până vineri, 9:00–18:00. Este gratuit.",
      moments: [
        { name: "Înainte", desc: "O prezentare adaptată amplasamentului dvs. și o ofertă pentru configurația dvs." },
        { name: "La instalare", desc: "Un ghid pas cu pas și un consultant pentru gateway, rază și amplasarea sondelor." },
        { name: "După", desc: "Suport gratuit, garanție de 3 ani și sonde suplimentare la bucată." },
      ],
      reach: "Contactați-ne",
      phone: "Telefon",
      email: "E-mail",
      hours: "Program",
      hoursValue: "De luni până vineri, 9:00 – 18:00 (ora Parisului)",
      address: "Adresă",
      where: "În Lorena, în inima Europei, aproape de Luxemburg, Germania și Belgia.",
      cta: "Solicită o prezentare",
    },
  },
}
