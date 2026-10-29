import { useI18n } from "@/i18n/i18n-provider"

/**
 * Textes de la page d'accueil. Les chiffres et formulations viennent de la plaquette, du flyer
 * et de la fiche technique GreenSensor (autonomie 5 ans, 2 capteurs cœur + air, IP68, 316L...).
 */
type Lang = "fr" | "en" | "es" | "de" | "pt" | "ro"

export type HomeCopy = {
  menuOpen: string
  menuClose: string
  languageLabel: string
  topbar: { tagline: string; phone: string; email: string }
  hero: {
    title: string
    lead: string
    secondary: string
    tagline: string
    alert: { label: string; title: string; text: string }
  }
  figures: { value: string; label: string; caption: string }[]
  challenge: { title: string; today: string; with: string; problems: string[]; after: { name: string; desc: string }[] }
  chain: { title: string; steps: { name: string; desc: string }[] }
  curve: {
    title: string
    lead: string
    points: string[]
    caption: string
    day: string
    sliderLabel: string
    phases: { rise: string; thermo: string; mature: string }
  }
  specs: { title: string; lead: string; rows: { label: string; value: string }[]; custom: string; alt: string }
  platform: { title: string; lead: string; alt: string; features: { name: string; desc: string }[] }
  why: { title: string; items: { name: string; desc: string }[]; strip: string[] }
  lab: {
    steps: { name: string; desc: string }[]
    simulation: string
    nav: string[]
    probe: string
    kpi: { campaigns: string; probes: string; alerts: string; title: string; chart: string }
    core: string
    air: string
    campaign: string
    phase: string
    ok: string
    alert: string
    threshold: string
    sms: string
    email: string
    report: string
    parts: { name: string; desc: string }[]
  }
  report: {
    title: string
    lead: string
    points: string[]
    paper: {
      title: string
      phase: string
      start: string
      log: string
      date: string
      event: string
      started: string
      phaseStarted: string
      readings: string
      average: string
      objective: string
      achieved: string
      periods: string
      days: string
      dayShort: string
      reached: string
      ended: string
    }
  }
  trust: string
  campaign: { define: string; follow: string; phases: string; done: string; running: string; hours: string }
  faqHome: { q: string; a: string }[]
  contact: { lead: string; note: string; privacy: string; thanks: string }
  faqAll: string
  help: { docText: string }
  brandOf: string
  since: string
}

const fr: HomeCopy = {
  menuOpen: "Ouvrir le menu",
  menuClose: "Fermer le menu",
  languageLabel: "Langue",
  topbar: {
    tagline: "Une marque Prosensor, fabricant français de sondes de température depuis 1989",
    phone: "Tél. :",
    email: "E-mail :",
  },
  hero: {
    title: "Maîtrisez votre process de compostage",
    lead: "Des sondes de température sans fil, une plateforme web simple pour suivre vos campagnes de compostage, et des alertes par SMS ou e-mail.",
    secondary: "Voir la fiche technique",
    tagline: "Précis. Robuste. Connecté.",
    alert: { label: "Exemple d'alerte", title: "Andain 3 · 88 °C", text: "Seuil de 85 °C dépassé. SMS envoyé." },
  },
  figures: [
    { value: "±0,5 °C", label: "Précision", caption: "Au cœur de l'andain" },
    { value: "5 ans", label: "Autonomie", caption: "Batterie remplaçable" },
    { value: "2 km", label: "Portée radio", caption: "En champ libre" },
    { value: "IP68", label: "Étanchéité", caption: "Boîtier et tube inox 316L" },
  ],
  challenge: {
    title: "Pourquoi une solution connectée ?",
    today: "Aujourd'hui",
    with: "Avec GreenSensor",
    problems: [
      "Un andain qui chauffe trop peut prendre feu",
      "Les relevés manuels prennent beaucoup de temps",
      "Les rapports réglementaires demandent un gros travail administratif",
      "Difficile de savoir quand retourner un andain",
    ],
    after: [{ name: "Soyez alerté", desc: "Un SMS part dès que le seuil de température est dépassé, pour intervenir avant l'incident." }, { name: "Collecte automatique des mesures", desc: "Les mesures arrivent seules, toutes les heures : plus de tournée de relevés." }, { name: "Rapports réglementaires automatisés", desc: "Le rapport de suivi de votre process est généré pour vos démarches administratives." }, { name: "Retournez vos andains au bon moment", desc: "Vous suivez la montée en température et intervenez quand il le faut, sur le bon andain." }],
  },
  chain: {
    title: "Du capteur à votre écran",
    steps: [
      { name: "Sonde GreenSensor", desc: "Mesure la température au cœur de l'andain et celle de l'air. Une ou plusieurs par andain." },
      { name: "Passerelle", desc: "Reçoit les données jusqu'à 2 km de distance, en champ libre." },
      { name: "Serveur cloud", desc: "Stocke les mesures en sécurité." },
      { name: "Plateforme web", desc: "Données en direct, historique et alertes." },
    ],
  },
  curve: {
    title: "Suivez chaque phase d'une campagne",
    lead: "Pour chaque phase, vous fixez les objectifs de température à atteindre. GreenSensor suit leur avancement en continu.",
    points: [
      "Une alerte par SMS quand un seuil critique est atteint",
      "Une phase peut se terminer automatiquement quand son objectif est atteint",
      "Historique sur 1 an, export des données et rapports à imprimer pour vos audits",
    ],
    caption: "Exemple de campagne de compostage",
    day: "Jour",
    sliderLabel: "Choisir un jour de la campagne",
    phases: { rise: "Montée en température", thermo: "Phase thermophile", mature: "Maturation" },
  },
  specs: {
    title: "Fiche technique",
    lead: "Une sonde robuste et ergonomique, sans fil, pour andains de compostage, à planter à la main grâce à ses deux poignées.",
    rows: [
      { label: "Capteurs", value: "2 capteurs numériques : cœur de l'andain (pointe) et air (dans le boîtier)" },
      { label: "2e point de mesure", value: "En option sur les sondes de 2 m, à 1 m (au milieu de la tige)" },
      { label: "Plage de mesure", value: "-55 °C à +125 °C" },
      { label: "Précision", value: "±0,5 °C de -10 °C à +85 °C" },
      { label: "Intervalle de mesure", value: "Toutes les heures (fixe)" },
      { label: "Portée radio", value: "2 km en champ libre, bande 868 MHz" },
      { label: "Autonomie", value: "5 ans à une mesure par heure, batterie remplaçable" },
      { label: "Longueur / diamètre", value: "1 m, 1.5 m ou 2 m / Ø 16 mm" },
      { label: "Tube", value: "Inox 316L, deux poignées fixées et collées" },
      { label: "Boîtier", value: "IP68, 130 × 50 × 54 mm" },
      { label: "Température de service", value: "-40 °C à +85 °C" },
      { label: "Alertes", value: "SMS et e-mail" },
    ],
    custom: "Version sur mesure : notre bureau d'études adapte la longueur, les capteurs et les options à votre site.",
    alt: "Sonde GreenSensor : antenne, boîtier IP68, deux poignées et tube inox 316L",
  },
  platform: {
    title: "Tout votre site sur un seul écran",
    lead: "Plus besoin de passer d'andain en andain : consultez tout depuis le bureau ou directement sur votre téléphone, avec une interface simple pensée pour le terrain.",
    alt: "Plateforme GreenSensor : tableau de bord avec campagnes en cours, sites de compostage, sondes actives et alertes",
    features: [
      { name: "Températures en temps réel", desc: "La température de chaque andain, mise à jour automatiquement." },
      { name: "Suivi des lots", desc: "Suivez chaque phase de compostage et de maturation." },
      { name: "Alertes instantanées", desc: "Un SMS ou un e-mail dès qu'une limite est franchie." },
      { name: "Rapports en un clic", desc: "Exportez les données et imprimez des rapports pour vos audits." },
      { name: "Pensé pour le téléphone", desc: "Une interface simple, à consulter directement sur votre téléphone, au pied de l'andain." },
      { name: "Sondes liées aux andains", desc: "Une ou plusieurs sondes par andain, chaque mesure au bon endroit." },
    ],
  },
  why: {
    title: "Pourquoi choisir GreenSensor ?",
    items: [
      { name: "Fiable", desc: "Fabriquée dans notre usine en France, 100 % testée." },
      { name: "Expérimenté", desc: "Prosensor mesure la température depuis plus de 30 ans, avec des produits qui s'améliorent sans cesse." },
      { name: "Sur mesure", desc: "Des solutions conçues par notre bureau d'études." },
    ],
    strip: ["Prêt à l'emploi", "Support gratuit", "Garantie 3 ans", "Fabriqué en France"],
  },
  lab: {
    steps: [
      { name: "La sonde mesure", desc: "Toutes les heures, au cœur de l'andain et dans l'air." },
      { name: "La plateforme suit", desc: "La courbe se met à jour toute seule, andain par andain." },
      { name: "Vous êtes alerté", desc: "Un SMS ou un e-mail dès que le seuil est franchi." },
    ],
    simulation: "Simulation",
    core: "Cœur",
    air: "Air",
    campaign: "Campagne",
    phase: "Phase",
    ok: "Normal",
    alert: "Alerte",
    threshold: "Seuil d'alerte",
    sms: "SMS",
    email: "E-mail",
    report: "Rapport de campagne",
    nav: ["Tableau de bord", "Campagnes", "Phases", "Objectifs", "Sondes", "Paramètres"],
    probe: "Sonde",
    kpi: { campaigns: "Campagnes en cours", probes: "Sondes actives", alerts: "Alertes", title: "Tableau de bord", chart: "Évolution de la température" },
    parts: [
      { name: "Antenne", desc: "Envoie chaque mesure à la passerelle, jusqu'à 2 km en champ libre (868 MHz)." },
      { name: "Boîtier IP68", desc: "130 × 50 × 54 mm. Il contient la batterie remplaçable (5 ans à une mesure par heure) et le capteur d'air." },
      { name: "Deux poignées", desc: "Fixées et collées sur le tube : la sonde se plante à la main." },
      { name: "Tube inox 316L", desc: "Ø 16 mm, en 1 m, 1.5 m ou 2 m. Un 2e point de mesure est possible en option sur les sondes de 2 m, à 1 m." },
      { name: "Capteur de cœur", desc: "Au bout du tube : -55 °C à +125 °C, ±0,5 °C de -10 °C à +85 °C." },
    ],
  },
  report: {
    title: "Un rapport qui valide votre process de compostage",
    lead: "À chaque phase, vous éditez un rapport daté avec vos objectifs de température, le pourcentage atteint et les périodes concernées. Un document à présenter lors d'un audit ou d'un contrôle de votre site.",
    points: [
      "Vos objectifs par phase, par exemple 55 °C pendant 14 jours",
      "Début, fin et durée de chaque période atteinte",
      "Le journal des évènements : démarrage, objectifs atteints, fin de phase",
      "La courbe complète des relevés, avec leur nombre et la moyenne",
    ],
    paper: { title: "Rapport de suivi de campagne", phase: "Fermentation", start: "Début", log: "Journal des évènements", date: "Date", event: "Évènement", started: "Campagne démarrée", phaseStarted: "Phase démarrée", readings: "relevés", average: "Moyenne", objective: "Objectif", achieved: "% atteint", periods: "Périodes", days: "jours", dayShort: "j", reached: "Objectif atteint", ended: "Terminée" },
  },
  trust: "Ils nous ont fait confiance",
  campaign: { define: "Vous fixez vos objectifs", follow: "GreenSensor suit l'avancement", phases: "Phases", done: "Terminé", running: "En cours", hours: "heures" },
  faqHome: [
    { q: "L'installation nécessite-t-elle un technicien ?", a: "Non. Il suffit de connecter le routeur à Internet et de démarrer la sonde en appuyant sur le bouton du boîtier." },
    { q: "De quelle connexion Internet le routeur a-t-il besoin ?", a: "Idéalement en Ethernet. Pour les sites sans connexion Internet, des solutions 4G existent." },
    { q: "Peut-on acheter les sondes ?", a: "Oui. Les sondes s'achètent avec l'accès annuel à la plateforme GreenSensor. Une première commande comprend souvent quelques sondes et une passerelle pour tester, puis les sites passent à des dizaines de sondes. Contactez-nous pour un devis adapté à votre site." },
    { q: "Comment configurer les alertes et les destinataires ?", a: "Directement sur la plateforme : chaque utilisateur paramètre lui-même les seuils d'alerte et les destinataires." },
  ],
  contact: { lead: "Laissez-nous vos coordonnées : un conseiller Prosensor vous contacte pour vous présenter GreenSensor et répondre à vos questions.", note: "En envoyant ce formulaire, vous acceptez d'être recontacté par Prosensor.", privacy: "Politique de confidentialité", thanks: "Merci pour votre demande. Nous revenons vers vous." },
  faqAll: "Voir toute la FAQ",
  help: { docText: "Guide pas à pas, du branchement de la passerelle jusqu'à votre première campagne." },
  brandOf: "Une marque de",
  since: "Fabricant depuis 1989",
}

const en: HomeCopy = {
  menuOpen: "Open menu",
  menuClose: "Close menu",
  languageLabel: "Language",
  topbar: {
    tagline: "A Prosensor brand, French manufacturer of temperature probes since 1989",
    phone: "Tel:",
    email: "Email:",
  },
  hero: {
    title: "Take control of your composting process",
    lead: "Wireless temperature probes, a simple web platform to follow your composting campaigns, and alerts by SMS or email.",
    secondary: "See the datasheet",
    tagline: "Precise. Robust. Connected.",
    alert: { label: "Example alert", title: "Windrow 3 · 88 °C", text: "85 °C threshold exceeded. SMS sent." },
  },
  figures: [
    { value: "±0.5 °C", label: "Accuracy", caption: "In the core of the pile" },
    { value: "5 years", label: "Battery life", caption: "Replaceable battery" },
    { value: "2 km", label: "Radio range", caption: "In open field" },
    { value: "IP68", label: "Waterproof", caption: "Housing and 316L stainless tube" },
  ],
  challenge: {
    title: "Why a connected solution?",
    today: "Today",
    with: "With GreenSensor",
    problems: [
      "A windrow that overheats can catch fire",
      "Manual readings take a lot of time",
      "Regulatory reports mean heavy paperwork",
      "Hard to know when to turn a windrow",
    ],
    after: [{ name: "Get alerted", desc: "An SMS goes out as soon as the temperature threshold is exceeded, so you can act before an incident." }, { name: "Automatic data collection", desc: "Readings arrive on their own, every hour: no more manual rounds." }, { name: "Automated regulatory reports", desc: "The follow-up report of your process is generated for your administrative paperwork." }, { name: "Turn your windrows at the right time", desc: "You follow the temperature rise and step in when needed, on the right windrow." }],
  },
  chain: {
    title: "From sensor to screen",
    steps: [
      { name: "GreenSensor probe", desc: "Measures the pile and air temperature. One or more per windrow." },
      { name: "Gateway", desc: "Receives the data up to 2 km away, in open field." },
      { name: "Cloud server", desc: "Stores the readings safely." },
      { name: "Web platform", desc: "Live data, history and alerts." },
    ],
  },
  curve: {
    title: "Follow every phase of a campaign",
    lead: "For each phase, you set the temperature objectives to reach. GreenSensor tracks their progress continuously.",
    points: [
      "An SMS alert when a critical threshold is reached",
      "A phase can end automatically when its target is reached",
      "1-year history, data export and printable reports for your audits",
    ],
    caption: "Example composting campaign",
    day: "Day",
    sliderLabel: "Pick a day of the campaign",
    phases: { rise: "Temperature rise", thermo: "Thermophilic phase", mature: "Maturation" },
  },
  specs: {
    title: "Technical specifications",
    lead: "A rugged, ergonomic wireless probe for composting windrows, pushed in by hand with its two handles.",
    rows: [
      { label: "Sensors", value: "2 digital sensors: core of the pile (tip) and air (in the housing)" },
      { label: "2nd measuring point", value: "Optional on 2 m probes, at 1 m (middle of the rod)" },
      { label: "Measuring range", value: "-55 °C to +125 °C" },
      { label: "Accuracy", value: "±0.5 °C from -10 °C to +85 °C" },
      { label: "Reading interval", value: "Every hour (fixed)" },
      { label: "Radio range", value: "2 km in open field, 868 MHz band" },
      { label: "Battery life", value: "5 years at one reading per hour, replaceable battery" },
      { label: "Length / diameter", value: "1 m, 1.5 m or 2 m / Ø 16 mm" },
      { label: "Tube", value: "316L stainless steel, two handles fixed and glued" },
      { label: "Housing", value: "IP68, 130 × 50 × 54 mm" },
      { label: "Working temperature", value: "-40 °C to +85 °C" },
      { label: "Alerts", value: "SMS and email" },
    ],
    custom: "Custom version: our R&D team can adapt length, sensors and options to your site.",
    alt: "GreenSensor probe: antenna, IP68 housing, two handles and 316L stainless steel tube",
  },
  platform: {
    title: "Your whole site on one screen",
    lead: "No more walking from pile to pile. Check it all from your office, or straight from your phone with a simple, field-friendly interface.",
    alt: "GreenSensor platform: dashboard with running campaigns, composting sites, active probes and alerts",
    features: [
      { name: "Real-time temperatures", desc: "The temperature of each windrow, updated automatically." },
      { name: "Batch tracking", desc: "Follow each composting and maturing phase." },
      { name: "Instant alerts", desc: "An SMS or email as soon as a limit is crossed." },
      { name: "One-click reports", desc: "Export data and print reports for audits." },
      { name: "Made for your phone", desc: "A simple interface to check directly on your phone, right at the windrow." },
      { name: "Probes linked to windrows", desc: "One or more probes per windrow, each reading in the right place." },
    ],
  },
  why: {
    title: "Why choose GreenSensor?",
    items: [
      { name: "Reliable", desc: "Made in our own factory in France, 100% tested." },
      { name: "Experienced", desc: "Prosensor has over 30 years of experience in temperature measurement, with products that keep improving." },
      { name: "Made to measure", desc: "Custom solutions designed by our R&D team." },
    ],
    strip: ["Ready to use", "Free support", "3-year warranty", "Made in France"],
  },
  lab: {
    steps: [
      { name: "The probe measures", desc: "Every hour, in the core of the pile and in the air." },
      { name: "The platform tracks", desc: "The curve updates by itself, windrow by windrow." },
      { name: "You get alerted", desc: "An SMS or email as soon as the threshold is crossed." },
    ],
    simulation: "Simulation",
    core: "Core",
    air: "Air",
    campaign: "Campaign",
    phase: "Phase",
    ok: "Normal",
    alert: "Alert",
    threshold: "Alert threshold",
    sms: "SMS",
    email: "Email",
    report: "Campaign report",
    nav: ["Dashboard", "Campaigns", "Phases", "Objectives", "Probes", "Settings"],
    probe: "Probe",
    kpi: { campaigns: "Running campaigns", probes: "Active probes", alerts: "Alerts", title: "Dashboard", chart: "Temperature trend" },
    parts: [
      { name: "Antenna", desc: "Sends each reading to the gateway, up to 2 km in open field (868 MHz)." },
      { name: "IP68 housing", desc: "130 × 50 × 54 mm. Holds the replaceable battery (5 years at one reading per hour) and the air sensor." },
      { name: "Two handles", desc: "Fixed and glued on the tube: you push the probe in by hand." },
      { name: "316L stainless tube", desc: "Ø 16 mm, in 1 m, 1.5 m or 2 m. A 2nd measuring point is optional on 2 m probes, at 1 m." },
      { name: "Core sensor", desc: "At the end of the tube: -55 °C to +125 °C, ±0.5 °C from -10 °C to +85 °C." },
    ],
  },
  report: {
    title: "A report that validates your composting process",
    lead: "For each phase, you issue a dated report with your temperature objectives, the percentage reached and the periods concerned. A document to show during an audit or an inspection of your site.",
    points: [
      "Your objectives per phase, for example 55 °C for 14 days",
      "Start, end and duration of every period reached",
      "The event log: start, objectives reached, end of phase",
      "The full reading curve, with the number of readings and the average",
    ],
    paper: { title: "Campaign follow-up report", phase: "Fermentation", start: "Start", log: "Event log", date: "Date", event: "Event", started: "Campaign started", phaseStarted: "Phase started", readings: "readings", average: "Average", objective: "Objective", achieved: "% reached", periods: "Periods", days: "days", dayShort: "d", reached: "Objective reached", ended: "Completed" },
  },
  trust: "They trusted us",
  campaign: { define: "You set your objectives", follow: "GreenSensor tracks progress", phases: "Phases", done: "Done", running: "In progress", hours: "hours" },
  faqHome: [
    { q: "Does installation require a technician?", a: "No. Just connect the router to the Internet and start the probe by pressing the button on its housing." },
    { q: "What internet connection does the router need?", a: "Ideally Ethernet. For sites without an Internet connection, 4G solutions are available." },
    { q: "Can the probes be purchased?", a: "Yes. The probes are sold with annual access to the GreenSensor platform. A first order often includes a few probes and a gateway to test, then sites move on to dozens of probes. Contact us for a quote tailored to your site." },
    { q: "How are alerts configured and assigned?", a: "Directly on the platform: each user sets the alert thresholds and recipients themselves." },
  ],
  contact: { lead: "Leave your details: a Prosensor advisor will contact you to present GreenSensor and answer your questions.", note: "By sending this form, you agree to be contacted by Prosensor.", privacy: "Privacy policy", thanks: "Thank you for your request. We will get back to you." },
  faqAll: "View the full FAQ",
  help: { docText: "Step-by-step guide, from plugging in the gateway to your first campaign." },
  brandOf: "A brand of",
  since: "Manufacturer since 1989",
}

const es: HomeCopy = {
  menuOpen: "Abrir el menú",
  menuClose: "Cerrar el menú",
  languageLabel: "Idioma",
  topbar: {
    tagline: "Una marca Prosensor, fabricante francés de sondas de temperatura desde 1989",
    phone: "Tel.:",
    email: "Correo:",
  },
  hero: {
    title: "Domine su proceso de compostaje",
    lead: "Sondas de temperatura inalámbricas, una plataforma web sencilla para seguir sus campañas de compostaje y alertas por SMS o correo.",
    secondary: "Ver la ficha técnica",
    tagline: "Preciso. Robusto. Conectado.",
    alert: { label: "Ejemplo de alerta", title: "Hilera 3 · 88 °C", text: "Umbral de 85 °C superado. SMS enviado." },
  },
  figures: [
    { value: "±0,5 °C", label: "Precisión", caption: "En el núcleo de la hilera" },
    { value: "5 años", label: "Autonomía", caption: "Batería reemplazable" },
    { value: "2 km", label: "Alcance radio", caption: "En campo abierto" },
    { value: "IP68", label: "Estanqueidad", caption: "Carcasa y tubo de acero 316L" },
  ],
  challenge: {
    title: "¿Por qué una solución conectada?",
    today: "Hoy",
    with: "Con GreenSensor",
    problems: [
      "Una hilera que se calienta demasiado puede incendiarse",
      "Las lecturas manuales llevan mucho tiempo",
      "Los informes reglamentarios suponen mucho trabajo administrativo",
      "Es difícil saber cuándo voltear una hilera",
    ],
    after: [{ name: "Reciba alertas", desc: "Un SMS sale en cuanto se supera el umbral de temperatura, para actuar antes del incidente." }, { name: "Recogida automática de mediciones", desc: "Las mediciones llegan solas, cada hora: se acabaron las rondas manuales." }, { name: "Informes reglamentarios automatizados", desc: "El informe de seguimiento de su proceso se genera para sus trámites administrativos." }, { name: "Voltee sus hileras en el momento justo", desc: "Sigue la subida de temperatura e interviene cuando hace falta, en la hilera correcta." }],
  },
  chain: {
    title: "Del sensor a su pantalla",
    steps: [
      { name: "Sonda GreenSensor", desc: "Mide la temperatura del núcleo y la del aire. Una o varias por hilera." },
      { name: "Pasarela", desc: "Recibe los datos hasta 2 km de distancia, en campo abierto." },
      { name: "Servidor en la nube", desc: "Almacena las mediciones de forma segura." },
      { name: "Plataforma web", desc: "Datos en directo, historial y alertas." },
    ],
  },
  curve: {
    title: "Siga cada fase de una campaña",
    lead: "En cada fase, usted fija los objetivos de temperatura que alcanzar. GreenSensor sigue su avance de forma continua.",
    points: [
      "Una alerta por SMS cuando se alcanza un umbral crítico",
      "Una fase puede terminar automáticamente al alcanzar su objetivo",
      "Historial de 1 año, exportación de datos e informes imprimibles para sus auditorías",
    ],
    caption: "Ejemplo de campaña de compostaje",
    day: "Día",
    sliderLabel: "Elegir un día de la campaña",
    phases: { rise: "Subida de temperatura", thermo: "Fase termófila", mature: "Maduración" },
  },
  specs: {
    title: "Ficha técnica",
    lead: "Una sonda inalámbrica, robusta y ergonómica, para hileras de compostaje, que se clava a mano con sus dos asas.",
    rows: [
      { label: "Sensores", value: "2 sensores digitales: núcleo de la hilera (punta) y aire (en la carcasa)" },
      { label: "2.º punto de medición", value: "Opcional en sondas de 2 m, a 1 m (mitad de la varilla)" },
      { label: "Rango de medición", value: "-55 °C a +125 °C" },
      { label: "Precisión", value: "±0,5 °C de -10 °C a +85 °C" },
      { label: "Intervalo de medición", value: "Cada hora (fijo)" },
      { label: "Alcance radio", value: "2 km en campo abierto, banda de 868 MHz" },
      { label: "Autonomía", value: "5 años con una medición por hora, batería reemplazable" },
      { label: "Longitud / diámetro", value: "1 m, 1,5 m o 2 m / Ø 16 mm" },
      { label: "Tubo", value: "Acero inoxidable 316L, dos asas fijadas y pegadas" },
      { label: "Carcasa", value: "IP68, 130 × 50 × 54 mm" },
      { label: "Temperatura de servicio", value: "-40 °C a +85 °C" },
      { label: "Alertas", value: "SMS y correo electrónico" },
    ],
    custom: "Versión a medida: nuestro departamento de I+D adapta la longitud, los sensores y las opciones a su sitio.",
    alt: "Sonda GreenSensor: antena, carcasa IP68, dos asas y tubo de acero inoxidable 316L",
  },
  platform: {
    title: "Todo su sitio en una sola pantalla",
    lead: "Sin ir de hilera en hilera: consulte todo desde la oficina o directamente desde el teléfono, con una interfaz sencilla pensada para el campo.",
    alt: "Plataforma GreenSensor: panel con campañas en curso, sitios de compostaje, sondas activas y alertas",
    features: [
      { name: "Temperaturas en tiempo real", desc: "La temperatura de cada hilera, actualizada automáticamente." },
      { name: "Seguimiento de lotes", desc: "Siga cada fase de compostaje y maduración." },
      { name: "Alertas instantáneas", desc: "Un SMS o correo en cuanto se supera un límite." },
      { name: "Informes en un clic", desc: "Exporte los datos e imprima informes para sus auditorías." },
      { name: "Pensada para el teléfono", desc: "Una interfaz sencilla, para consultar directamente en el teléfono, junto a la hilera." },
      { name: "Sondas asignadas a hileras", desc: "Una o varias sondas por hilera, cada medición en su sitio." },
    ],
  },
  why: {
    title: "¿Por qué elegir GreenSensor?",
    items: [
      { name: "Fiable", desc: "Fabricada en nuestra propia fábrica en Francia, 100 % probada." },
      { name: "Con experiencia", desc: "Prosensor lleva más de 30 años midiendo temperatura, con productos que no dejan de mejorar." },
      { name: "A medida", desc: "Soluciones diseñadas por nuestro departamento de I+D." },
    ],
    strip: ["Lista para usar", "Soporte gratuito", "Garantía de 3 años", "Fabricado en Francia"],
  },
  lab: {
    steps: [
      { name: "La sonda mide", desc: "Cada hora, en el núcleo de la hilera y en el aire." },
      { name: "La plataforma sigue", desc: "La curva se actualiza sola, hilera por hilera." },
      { name: "Usted recibe la alerta", desc: "Un SMS o un correo en cuanto se supera el umbral." },
    ],
    simulation: "Simulación",
    core: "Núcleo",
    air: "Aire",
    campaign: "Campaña",
    phase: "Fase",
    ok: "Normal",
    alert: "Alerta",
    threshold: "Umbral de alerta",
    sms: "SMS",
    email: "Correo",
    report: "Informe de campaña",
    nav: ["Panel", "Campañas", "Fases", "Objetivos", "Sondas", "Ajustes"],
    probe: "Sonda",
    kpi: { campaigns: "Campañas en curso", probes: "Sondas activas", alerts: "Alertas", title: "Panel", chart: "Evolución de la temperatura" },
    parts: [
      { name: "Antena", desc: "Envía cada medición a la pasarela, hasta 2 km en campo abierto (868 MHz)." },
      { name: "Caja IP68", desc: "130 × 50 × 54 mm. Contiene la batería reemplazable (5 años con una medición por hora) y el sensor de aire." },
      { name: "Dos asas", desc: "Fijadas y pegadas al tubo: la sonda se clava a mano." },
      { name: "Tubo de acero inoxidable 316L", desc: "Ø 16 mm, de 1 m, 1,5 m o 2 m. Un 2.º punto de medición opcional en las sondas de 2 m, a 1 m." },
      { name: "Sensor de núcleo", desc: "En la punta del tubo: de -55 °C a +125 °C, ±0,5 °C de -10 °C a +85 °C." },
    ],
  },
  report: {
    title: "Un informe que valida su proceso de compostaje",
    lead: "En cada fase, usted emite un informe fechado con sus objetivos de temperatura, el porcentaje alcanzado y los periodos correspondientes. Un documento para presentar en una auditoría o inspección de su sitio.",
    points: [
      "Sus objetivos por fase, por ejemplo 55 °C durante 14 días",
      "Inicio, fin y duración de cada periodo alcanzado",
      "El registro de eventos: inicio, objetivos alcanzados, fin de fase",
      "La curva completa de mediciones, con su número y el promedio",
    ],
    paper: { title: "Informe de seguimiento de campaña", phase: "Fermentación", start: "Inicio", log: "Registro de eventos", date: "Fecha", event: "Evento", started: "Campaña iniciada", phaseStarted: "Fase iniciada", readings: "mediciones", average: "Promedio", objective: "Objetivo", achieved: "% alcanzado", periods: "Periodos", days: "días", dayShort: "d", reached: "Objetivo alcanzado", ended: "Terminada" },
  },
  trust: "Han confiado en nosotros",
  campaign: { define: "Usted fija sus objetivos", follow: "GreenSensor sigue el avance", phases: "Fases", done: "Terminado", running: "En curso", hours: "horas" },
  faqHome: [
    { q: "¿La instalación requiere técnico?", a: "No. Basta con conectar el router a Internet y poner en marcha la sonda pulsando el botón de su caja." },
    { q: "¿Qué conexión a Internet necesita el router?", a: "Idealmente Ethernet. Para los sitios sin conexión a Internet existen soluciones 4G." },
    { q: "¿Se pueden comprar las sondas?", a: "Sí. Las sondas se compran con el acceso anual a la plataforma GreenSensor. Un primer pedido suele incluir algunas sondas y una pasarela para probar, y luego los sitios pasan a decenas de sondas. Contáctenos para un presupuesto adaptado a su sitio." },
    { q: "¿Cómo se configuran y asignan las alertas?", a: "Directamente en la plataforma: cada usuario define por sí mismo los umbrales de alerta y los destinatarios." },
  ],
  contact: { lead: "Déjenos sus datos: un asesor de Prosensor se pondrá en contacto con usted para presentarle GreenSensor y responder a sus preguntas.", note: "Al enviar este formulario, acepta que Prosensor le contacte.", privacy: "Política de privacidad", thanks: "Gracias por su solicitud. Nos pondremos en contacto con usted." },
  faqAll: "Ver toda la FAQ",
  help: { docText: "Guía paso a paso, desde la conexión de la pasarela hasta su primera campaña." },
  brandOf: "Una marca de",
  since: "Fabricante desde 1989",
}

const de: HomeCopy = {
  menuOpen: "Menü öffnen",
  menuClose: "Menü schließen",
  languageLabel: "Sprache",
  topbar: {
    tagline: "Eine Marke von Prosensor, französischer Hersteller von Temperatursonden seit 1989",
    phone: "Tel.:",
    email: "E-Mail:",
  },
  hero: {
    title: "Behalten Sie Ihren Kompostierprozess im Griff",
    lead: "Funk-Temperatursonden, eine einfache Webplattform zur Verfolgung Ihrer Kompostierungskampagnen und Alarme per SMS oder E-Mail.",
    secondary: "Datenblatt ansehen",
    tagline: "Präzise. Robust. Vernetzt.",
    alert: { label: "Beispiel-Alarm", title: "Miete 3 · 88 °C", text: "Schwelle von 85 °C überschritten. SMS gesendet." },
  },
  figures: [
    { value: "±0,5 °C", label: "Genauigkeit", caption: "Im Kern der Miete" },
    { value: "5 Jahre", label: "Batterielaufzeit", caption: "Austauschbare Batterie" },
    { value: "2 km", label: "Funkreichweite", caption: "Im freien Feld" },
    { value: "IP68", label: "Wasserdicht", caption: "Gehäuse und Rohr aus Edelstahl 316L" },
  ],
  challenge: {
    title: "Warum eine vernetzte Lösung?",
    today: "Heute",
    with: "Mit GreenSensor",
    problems: [
      "Eine Miete, die zu heiß wird, kann Feuer fangen",
      "Manuelle Messungen kosten viel Zeit",
      "Behördliche Berichte bedeuten viel Verwaltungsaufwand",
      "Schwer zu erkennen, wann eine Miete gewendet werden muss",
    ],
    after: [{ name: "Alarm erhalten", desc: "Eine SMS geht raus, sobald die Temperaturschwelle überschritten wird, damit Sie vor einem Vorfall eingreifen können." }, { name: "Automatische Messwerterfassung", desc: "Die Messwerte kommen von selbst, jede Stunde: keine Messrunden mehr." }, { name: "Automatisierte behördliche Berichte", desc: "Der Verlaufsbericht Ihres Prozesses wird für Ihre administrativen Nachweise erstellt." }, { name: "Mieten zum richtigen Zeitpunkt wenden", desc: "Sie verfolgen den Temperaturanstieg und greifen ein, wenn es nötig ist, bei der richtigen Miete." }],
  },
  chain: {
    title: "Vom Sensor auf Ihren Bildschirm",
    steps: [
      { name: "GreenSensor-Sonde", desc: "Misst die Temperatur im Kern und die Lufttemperatur. Eine oder mehrere pro Miete." },
      { name: "Gateway", desc: "Empfängt die Daten bis 2 km Entfernung im freien Feld." },
      { name: "Cloud-Server", desc: "Speichert die Messwerte sicher." },
      { name: "Webplattform", desc: "Live-Daten, Historie und Alarme." },
    ],
  },
  curve: {
    title: "Jede Phase einer Kampagne verfolgen",
    lead: "Für jede Phase legen Sie die zu erreichenden Temperaturziele fest. GreenSensor verfolgt deren Fortschritt fortlaufend.",
    points: [
      "Ein Alarm per SMS, wenn eine kritische Schwelle erreicht wird",
      "Eine Phase kann automatisch enden, sobald ihr Ziel erreicht ist",
      "Historie über 1 Jahr, Datenexport und druckbare Berichte für Ihre Audits",
    ],
    caption: "Beispiel einer Kompostierungskampagne",
    day: "Tag",
    sliderLabel: "Einen Tag der Kampagne wählen",
    phases: { rise: "Temperaturanstieg", thermo: "Thermophile Phase", mature: "Reifung" },
  },
  specs: {
    title: "Technische Daten",
    lead: "Eine robuste, ergonomische Funksonde für Kompostmieten, die Sie mit den zwei Griffen von Hand einstecken.",
    rows: [
      { label: "Sensoren", value: "2 digitale Sensoren: Kern der Miete (Spitze) und Luft (im Gehäuse)" },
      { label: "2. Messpunkt", value: "Optional bei Sonden mit 2 m, bei 1 m (Mitte des Stabs)" },
      { label: "Messbereich", value: "-55 °C bis +125 °C" },
      { label: "Genauigkeit", value: "±0,5 °C von -10 °C bis +85 °C" },
      { label: "Messintervall", value: "Stündlich (fest)" },
      { label: "Funkreichweite", value: "2 km im freien Feld, Band 868 MHz" },
      { label: "Batterielaufzeit", value: "5 Jahre bei einer Messung pro Stunde, austauschbare Batterie" },
      { label: "Länge / Durchmesser", value: "1 m, 1,5 m oder 2 m / Ø 16 mm" },
      { label: "Rohr", value: "Edelstahl 316L, zwei Griffe fest verklebt" },
      { label: "Gehäuse", value: "IP68, 130 × 50 × 54 mm" },
      { label: "Betriebstemperatur", value: "-40 °C bis +85 °C" },
      { label: "Alarme", value: "SMS und E-Mail" },
    ],
    custom: "Sonderanfertigung: Unsere Entwicklungsabteilung passt Länge, Sensoren und Optionen an Ihren Standort an.",
    alt: "GreenSensor-Sonde: Antenne, IP68-Gehäuse, zwei Griffe und Rohr aus Edelstahl 316L",
  },
  platform: {
    title: "Ihr ganzer Standort auf einem Bildschirm",
    lead: "Kein Laufen von Miete zu Miete mehr: Alles vom Büro aus oder direkt am Smartphone prüfen, mit einer einfachen Oberfläche für den Einsatz vor Ort.",
    alt: "GreenSensor-Plattform: Dashboard mit laufenden Kampagnen, Kompostierstandorten, aktiven Sonden und Alarmen",
    features: [
      { name: "Temperaturen in Echtzeit", desc: "Die Temperatur jeder Miete, automatisch aktualisiert." },
      { name: "Chargenverfolgung", desc: "Jede Kompostierungs- und Reifephase im Blick." },
      { name: "Sofortige Alarme", desc: "SMS oder E-Mail, sobald ein Grenzwert überschritten wird." },
      { name: "Berichte mit einem Klick", desc: "Daten exportieren und Berichte für Audits drucken." },
      { name: "Für das Smartphone gemacht", desc: "Eine einfache Oberfläche, die Sie direkt am Smartphone neben der Miete aufrufen." },
      { name: "Sonden den Mieten zugeordnet", desc: "Eine oder mehrere Sonden pro Miete, jeder Messwert am richtigen Ort." },
    ],
  },
  why: {
    title: "Warum GreenSensor?",
    items: [
      { name: "Zuverlässig", desc: "In unserer eigenen Fabrik in Frankreich gefertigt, zu 100 % geprüft." },
      { name: "Erfahren", desc: "Prosensor misst seit über 30 Jahren Temperaturen, mit Produkten, die sich stetig verbessern." },
      { name: "Maßgeschneidert", desc: "Lösungen, entwickelt von unserer Entwicklungsabteilung." },
    ],
    strip: ["Sofort einsatzbereit", "Kostenloser Support", "3 Jahre Garantie", "Made in France"],
  },
  lab: {
    steps: [
      { name: "Die Sonde misst", desc: "Jede Stunde, im Kern der Miete und in der Luft." },
      { name: "Die Plattform verfolgt", desc: "Die Kurve aktualisiert sich von selbst, Miete für Miete." },
      { name: "Sie werden gewarnt", desc: "Eine SMS oder E-Mail, sobald der Grenzwert überschritten wird." },
    ],
    simulation: "Simulation",
    core: "Kern",
    air: "Luft",
    campaign: "Kampagne",
    phase: "Phase",
    ok: "Normal",
    alert: "Warnung",
    threshold: "Warnschwelle",
    sms: "SMS",
    email: "E-Mail",
    report: "Kampagnenbericht",
    nav: ["Übersicht", "Kampagnen", "Phasen", "Ziele", "Sonden", "Einstellungen"],
    probe: "Sonde",
    kpi: { campaigns: "Laufende Kampagnen", probes: "Aktive Sonden", alerts: "Warnungen", title: "Übersicht", chart: "Temperaturverlauf" },
    parts: [
      { name: "Antenne", desc: "Sendet jede Messung an das Gateway, bis zu 2 km im freien Feld (868 MHz)." },
      { name: "IP68-Gehäuse", desc: "130 × 50 × 54 mm. Enthält die austauschbare Batterie (5 Jahre bei einer Messung pro Stunde) und den Luftsensor." },
      { name: "Zwei Griffe", desc: "Am Rohr befestigt und verklebt: Sie stecken die Sonde von Hand hinein." },
      { name: "Rohr aus Edelstahl 316L", desc: "Ø 16 mm, in 1 m, 1,5 m oder 2 m. Ein 2. Messpunkt ist bei Sonden mit 2 m optional, bei 1 m." },
      { name: "Kernsensor", desc: "Am Rohrende: -55 °C bis +125 °C, ±0,5 °C von -10 °C bis +85 °C." },
    ],
  },
  report: {
    title: "Ein Bericht, der Ihren Kompostierungsprozess validiert",
    lead: "Für jede Phase erstellen Sie einen datierten Bericht mit Ihren Temperaturzielen, dem erreichten Prozentsatz und den betroffenen Zeiträumen. Ein Dokument für Audits oder Kontrollen Ihres Standorts.",
    points: [
      "Ihre Ziele pro Phase, zum Beispiel 55 °C an 14 Tagen",
      "Beginn, Ende und Dauer jedes erreichten Zeitraums",
      "Das Ereignisprotokoll: Start, erreichte Ziele, Ende der Phase",
      "Die vollständige Messkurve mit Anzahl der Messungen und Mittelwert",
    ],
    paper: { title: "Kampagnenbericht", phase: "Fermentation", start: "Beginn", log: "Ereignisprotokoll", date: "Datum", event: "Ereignis", started: "Kampagne gestartet", phaseStarted: "Phase gestartet", readings: "Messungen", average: "Mittelwert", objective: "Ziel", achieved: "% erreicht", periods: "Zeiträume", days: "Tage", dayShort: "T", reached: "Ziel erreicht", ended: "Abgeschlossen" },
  },
  trust: "Sie haben uns vertraut",
  campaign: { define: "Sie legen Ihre Ziele fest", follow: "GreenSensor verfolgt den Fortschritt", phases: "Phasen", done: "Abgeschlossen", running: "Läuft", hours: "Stunden" },
  faqHome: [
    { q: "Ist für die Installation ein Techniker erforderlich?", a: "Nein. Es genügt, den Router mit dem Internet zu verbinden und die Sonde durch Drücken der Taste am Gehäuse zu starten." },
    { q: "Welche Internetverbindung benötigt der Router?", a: "Idealerweise Ethernet. Für Standorte ohne Internetanschluss gibt es 4G-Lösungen." },
    { q: "Kann man die Sonden kaufen?", a: "Ja. Die Sonden werden mit jährlichem Zugang zur GreenSensor-Plattform verkauft. Eine Erstbestellung umfasst oft einige Sonden und ein Gateway zum Testen, danach wechseln die Standorte zu Dutzenden von Sonden. Kontaktieren Sie uns für ein Angebot für Ihren Standort." },
    { q: "Wie werden Warnungen konfiguriert und zugewiesen?", a: "Direkt auf der Plattform: Jeder Nutzer legt die Alarmschwellen und die Empfänger selbst fest." },
  ],
  contact: { lead: "Hinterlassen Sie Ihre Kontaktdaten: Ein Prosensor-Berater meldet sich bei Ihnen, stellt GreenSensor vor und beantwortet Ihre Fragen.", note: "Mit dem Absenden stimmen Sie zu, von Prosensor kontaktiert zu werden.", privacy: "Datenschutzerklärung", thanks: "Vielen Dank für Ihre Anfrage. Wir melden uns bei Ihnen." },
  faqAll: "Komplette FAQ ansehen",
  help: { docText: "Schritt-für-Schritt-Anleitung, vom Anschluss des Gateways bis zu Ihrer ersten Kampagne." },
  brandOf: "Eine Marke von",
  since: "Hersteller seit 1989",
}

const pt: HomeCopy = {
  menuOpen: "Abrir o menu",
  menuClose: "Fechar o menu",
  languageLabel: "Idioma",
  topbar: {
    tagline: "Uma marca Prosensor, fabricante francês de sondas de temperatura desde 1989",
    phone: "Tel.:",
    email: "E-mail:",
  },
  hero: {
    title: "Domine o seu processo de compostagem",
    lead: "Sondas de temperatura sem fios, uma plataforma web simples para acompanhar as suas campanhas de compostagem e alertas por SMS ou e-mail.",
    secondary: "Ver a ficha técnica",
    tagline: "Preciso. Robusto. Conectado.",
    alert: { label: "Exemplo de alerta", title: "Leira 3 · 88 °C", text: "Limite de 85 °C ultrapassado. SMS enviado." },
  },
  figures: [
    { value: "±0,5 °C", label: "Precisão", caption: "No núcleo da leira" },
    { value: "5 anos", label: "Autonomia", caption: "Bateria substituível" },
    { value: "2 km", label: "Alcance rádio", caption: "Em campo aberto" },
    { value: "IP68", label: "Estanque", caption: "Caixa e tubo em inox 316L" },
  ],
  challenge: {
    title: "Porquê uma solução conectada?",
    today: "Hoje",
    with: "Com o GreenSensor",
    problems: [
      "Uma leira que aquece demais pode incendiar-se",
      "As leituras manuais levam muito tempo",
      "Os relatórios regulamentares exigem muito trabalho administrativo",
      "É difícil saber quando revirar uma leira",
    ],
    after: [{ name: "Seja alertado", desc: "Um SMS sai assim que o limite de temperatura é ultrapassado, para intervir antes do incidente." }, { name: "Recolha automática das medições", desc: "As medições chegam sozinhas, a cada hora: acabaram-se as rondas manuais." }, { name: "Relatórios regulamentares automatizados", desc: "O relatório de acompanhamento do seu processo é gerado para as suas formalidades administrativas." }, { name: "Reviste as leiras no momento certo", desc: "Acompanha a subida de temperatura e intervém quando é preciso, na leira certa." }],
  },
  chain: {
    title: "Do sensor ao seu ecrã",
    steps: [
      { name: "Sonda GreenSensor", desc: "Mede a temperatura no núcleo e a do ar. Uma ou várias por leira." },
      { name: "Gateway", desc: "Recebe os dados até 2 km de distância, em campo aberto." },
      { name: "Servidor cloud", desc: "Guarda as medições em segurança." },
      { name: "Plataforma web", desc: "Dados em direto, histórico e alertas." },
    ],
  },
  curve: {
    title: "Acompanhe cada fase de uma campanha",
    lead: "Em cada fase, define os objetivos de temperatura a atingir. O GreenSensor acompanha o seu progresso de forma contínua.",
    points: [
      "Um alerta por SMS quando um limiar crítico é atingido",
      "Uma fase pode terminar automaticamente quando o objetivo é atingido",
      "Histórico de 1 ano, exportação de dados e relatórios para imprimir nas suas auditorias",
    ],
    caption: "Exemplo de campanha de compostagem",
    day: "Dia",
    sliderLabel: "Escolher um dia da campanha",
    phases: { rise: "Subida de temperatura", thermo: "Fase termófila", mature: "Maturação" },
  },
  specs: {
    title: "Ficha técnica",
    lead: "Uma sonda sem fios, robusta e ergonómica, para leiras de compostagem, cravada à mão com as suas duas pegas.",
    rows: [
      { label: "Sensores", value: "2 sensores digitais: núcleo da leira (ponta) e ar (na caixa)" },
      { label: "2.º ponto de medição", value: "Opcional nas sondas de 2 m, a 1 m (meio da haste)" },
      { label: "Gama de medição", value: "-55 °C a +125 °C" },
      { label: "Precisão", value: "±0,5 °C de -10 °C a +85 °C" },
      { label: "Intervalo de medição", value: "A cada hora (fixo)" },
      { label: "Alcance rádio", value: "2 km em campo aberto, banda de 868 MHz" },
      { label: "Autonomia", value: "5 anos com uma medição por hora, bateria substituível" },
      { label: "Comprimento / diâmetro", value: "1 m, 1,5 m ou 2 m / Ø 16 mm" },
      { label: "Tubo", value: "Inox 316L, duas pegas fixas e coladas" },
      { label: "Caixa", value: "IP68, 130 × 50 × 54 mm" },
      { label: "Temperatura de serviço", value: "-40 °C a +85 °C" },
      { label: "Alertas", value: "SMS e e-mail" },
    ],
    custom: "Versão por medida: a nossa equipa de I&D adapta o comprimento, os sensores e as opções ao seu local.",
    alt: "Sonda GreenSensor: antena, caixa IP68, duas pegas e tubo em inox 316L",
  },
  platform: {
    title: "Todo o seu local num só ecrã",
    lead: "Sem andar de leira em leira: consulte tudo a partir do escritório ou diretamente no telemóvel, com uma interface simples pensada para o terreno.",
    alt: "Plataforma GreenSensor: painel com campanhas em curso, locais de compostagem, sondas ativas e alertas",
    features: [
      { name: "Temperaturas em tempo real", desc: "A temperatura de cada leira, atualizada automaticamente." },
      { name: "Acompanhamento de lotes", desc: "Acompanhe cada fase de compostagem e maturação." },
      { name: "Alertas instantâneos", desc: "Um SMS ou e-mail assim que um limite é ultrapassado." },
      { name: "Relatórios com um clique", desc: "Exporte os dados e imprima relatórios para as auditorias." },
      { name: "Pensada para o telemóvel", desc: "Uma interface simples, para consultar diretamente no telemóvel, junto à leira." },
      { name: "Sondas ligadas às leiras", desc: "Uma ou várias sondas por leira, cada medição no sítio certo." },
    ],
  },
  why: {
    title: "Porquê escolher o GreenSensor?",
    items: [
      { name: "Fiável", desc: "Fabricada na nossa própria fábrica em França, 100 % testada." },
      { name: "Experiente", desc: "A Prosensor mede temperatura há mais de 30 anos, com produtos em constante evolução." },
      { name: "Por medida", desc: "Soluções concebidas pela nossa equipa de I&D." },
    ],
    strip: ["Pronta a usar", "Suporte gratuito", "Garantia de 3 anos", "Fabricado em França"],
  },
  lab: {
    steps: [
      { name: "A sonda mede", desc: "A cada hora, no núcleo da leira e no ar." },
      { name: "A plataforma acompanha", desc: "A curva atualiza-se sozinha, leira a leira." },
      { name: "É alertado", desc: "Um SMS ou e-mail assim que o limite é ultrapassado." },
    ],
    simulation: "Simulação",
    core: "Núcleo",
    air: "Ar",
    campaign: "Campanha",
    phase: "Fase",
    ok: "Normal",
    alert: "Alerta",
    threshold: "Limite de alerta",
    sms: "SMS",
    email: "E-mail",
    report: "Relatório da campanha",
    nav: ["Painel", "Campanhas", "Fases", "Objetivos", "Sondas", "Definições"],
    probe: "Sonda",
    kpi: { campaigns: "Campanhas em curso", probes: "Sondas ativas", alerts: "Alertas", title: "Painel", chart: "Evolução da temperatura" },
    parts: [
      { name: "Antena", desc: "Envia cada medição à gateway, até 2 km em campo aberto (868 MHz)." },
      { name: "Caixa IP68", desc: "130 × 50 × 54 mm. Contém a bateria substituível (5 anos com uma medição por hora) e o sensor de ar." },
      { name: "Duas pegas", desc: "Fixas e coladas ao tubo: a sonda crava-se à mão." },
      { name: "Tubo em aço inoxidável 316L", desc: "Ø 16 mm, em 1 m, 1,5 m ou 2 m. Um 2.º ponto de medição opcional nas sondas de 2 m, a 1 m." },
      { name: "Sensor de núcleo", desc: "Na ponta do tubo: -55 °C a +125 °C, ±0,5 °C de -10 °C a +85 °C." },
    ],
  },
  report: {
    title: "Um relatório que valida o seu processo de compostagem",
    lead: "Em cada fase, emite um relatório datado com os seus objetivos de temperatura, a percentagem atingida e os períodos em causa. Um documento a apresentar numa auditoria ou fiscalização do seu local.",
    points: [
      "Os seus objetivos por fase, por exemplo 55 °C durante 14 dias",
      "Início, fim e duração de cada período atingido",
      "O registo de eventos: início, objetivos atingidos, fim da fase",
      "A curva completa das medições, com o seu número e a média",
    ],
    paper: { title: "Relatório de acompanhamento da campanha", phase: "Fermentação", start: "Início", log: "Registo de eventos", date: "Data", event: "Evento", started: "Campanha iniciada", phaseStarted: "Fase iniciada", readings: "medições", average: "Média", objective: "Objetivo", achieved: "% atingido", periods: "Períodos", days: "dias", dayShort: "d", reached: "Objetivo atingido", ended: "Concluída" },
  },
  trust: "Confiaram em nós",
  campaign: { define: "Define os seus objetivos", follow: "O GreenSensor acompanha o progresso", phases: "Fases", done: "Concluído", running: "Em curso", hours: "horas" },
  faqHome: [
    { q: "A instalação requer técnico?", a: "Não. Basta ligar o router à Internet e arrancar a sonda premindo o botão da caixa." },
    { q: "Que ligação à Internet o router precisa?", a: "Idealmente Ethernet. Para os locais sem ligação à Internet, existem soluções 4G." },
    { q: "É possível comprar as sondas?", a: "Sim. As sondas são vendidas com o acesso anual à plataforma GreenSensor. Uma primeira encomenda inclui muitas vezes algumas sondas e um gateway para testar, e depois os locais passam a dezenas de sondas. Contacte-nos para um orçamento adaptado ao seu local." },
    { q: "Como configurar e atribuir alertas?", a: "Diretamente na plataforma: cada utilizador define os limiares de alerta e os destinatários." },
  ],
  contact: { lead: "Deixe os seus contactos: um consultor da Prosensor entrará em contacto consigo para apresentar o GreenSensor e responder às suas perguntas.", note: "Ao enviar este formulário, aceita ser contactado pela Prosensor.", privacy: "Política de privacidade", thanks: "Obrigado pelo seu pedido. Entraremos em contacto consigo." },
  faqAll: "Ver a FAQ completa",
  help: { docText: "Guia passo a passo, desde a ligação do gateway até à sua primeira campanha." },
  brandOf: "Uma marca da",
  since: "Fabricante desde 1989",
}

const ro: HomeCopy = {
  menuOpen: "Deschide meniul",
  menuClose: "Închide meniul",
  languageLabel: "Limba",
  topbar: {
    tagline: "Un brand Prosensor, producător francez de sonde de temperatură din 1989",
    phone: "Tel.:",
    email: "E-mail:",
  },
  hero: {
    title: "Controlați-vă procesul de compostare",
    lead: "Sonde de temperatură fără fir, o platformă web simplă pentru urmărirea campaniilor de compostare și alerte prin SMS sau e-mail.",
    secondary: "Vezi fișa tehnică",
    tagline: "Precis. Robust. Conectat.",
    alert: { label: "Exemplu de alertă", title: "Șirul 3 · 88 °C", text: "Pragul de 85 °C a fost depășit. SMS trimis." },
  },
  figures: [
    { value: "±0,5 °C", label: "Precizie", caption: "În inima șirului" },
    { value: "5 ani", label: "Autonomie", caption: "Baterie înlocuibilă" },
    { value: "2 km", label: "Rază radio", caption: "În câmp deschis" },
    { value: "IP68", label: "Etanșeitate", caption: "Carcasă și tub din inox 316L" },
  ],
  challenge: {
    title: "De ce o soluție conectată?",
    today: "Astăzi",
    with: "Cu GreenSensor",
    problems: [
      "Un șir care se încălzește prea mult poate lua foc",
      "Citirile manuale consumă mult timp",
      "Rapoartele reglementare cer multă muncă administrativă",
      "Greu de știut când trebuie întors un șir",
    ],
    after: [{ name: "Fiți alertat", desc: "Un SMS pleacă imediat ce pragul de temperatură este depășit, ca să interveniți înainte de incident." }, { name: "Colectare automată a măsurătorilor", desc: "Măsurătorile sosesc singure, în fiecare oră: nu mai sunt ture manuale." }, { name: "Rapoarte reglementare automatizate", desc: "Raportul de urmărire a procesului dvs. este generat pentru demersurile administrative." }, { name: "Întoarceți șirurile la momentul potrivit", desc: "Urmăriți creșterea temperaturii și interveniți când e nevoie, la șirul potrivit." }],
  },
  chain: {
    title: "De la senzor la ecranul dvs.",
    steps: [
      { name: "Sonda GreenSensor", desc: "Măsoară temperatura din inima șirului și pe cea a aerului. Una sau mai multe pe șir." },
      { name: "Gateway", desc: "Primește datele până la 2 km distanță, în câmp deschis." },
      { name: "Server cloud", desc: "Stochează măsurătorile în siguranță." },
      { name: "Platformă web", desc: "Date în direct, istoric și alerte." },
    ],
  },
  curve: {
    title: "Urmăriți fiecare fază a unei campanii",
    lead: "Pentru fiecare fază, stabiliți obiectivele de temperatură de atins. GreenSensor le urmărește progresul în mod continuu.",
    points: [
      "O alertă prin SMS când este atins un prag critic",
      "O fază se poate încheia automat când obiectivul este atins",
      "Istoric de 1 an, export de date și rapoarte de tipărit pentru auditurile dvs.",
    ],
    caption: "Exemplu de campanie de compostare",
    day: "Ziua",
    sliderLabel: "Alege o zi din campanie",
    phases: { rise: "Creșterea temperaturii", thermo: "Faza termofilă", mature: "Maturare" },
  },
  specs: {
    title: "Fișă tehnică",
    lead: "O sondă fără fir, robustă și ergonomică, pentru șiruri de compost, înfiptă manual cu ajutorul celor două mânere.",
    rows: [
      { label: "Senzori", value: "2 senzori digitali: inima șirului (vârf) și aerul (în carcasă)" },
      { label: "Al 2-lea punct de măsură", value: "Opțional la sondele de 2 m, la 1 m (mijlocul tijei)" },
      { label: "Interval de măsurare", value: "-55 °C la +125 °C" },
      { label: "Precizie", value: "±0,5 °C de la -10 °C la +85 °C" },
      { label: "Interval de citire", value: "În fiecare oră (fix)" },
      { label: "Rază radio", value: "2 km în câmp deschis, banda de 868 MHz" },
      { label: "Autonomie", value: "5 ani la o măsurătoare pe oră, baterie înlocuibilă" },
      { label: "Lungime / diametru", value: "1 m, 1,5 m sau 2 m / Ø 16 mm" },
      { label: "Tub", value: "Inox 316L, două mânere fixate și lipite" },
      { label: "Carcasă", value: "IP68, 130 × 50 × 54 mm" },
      { label: "Temperatură de lucru", value: "-40 °C la +85 °C" },
      { label: "Alerte", value: "SMS și e-mail" },
    ],
    custom: "Versiune la comandă: echipa noastră de cercetare-dezvoltare adaptează lungimea, senzorii și opțiunile la situl dvs.",
    alt: "Sonda GreenSensor: antenă, carcasă IP68, două mânere și tub din inox 316L",
  },
  platform: {
    title: "Tot situl dvs. pe un singur ecran",
    lead: "Nu mai mergeți de la un șir la altul: verificați totul de la birou sau direct de pe telefon, cu o interfață simplă, gândită pentru teren.",
    alt: "Platforma GreenSensor: tablou de bord cu campanii în curs, situri de compostare, sonde active și alerte",
    features: [
      { name: "Temperaturi în timp real", desc: "Temperatura fiecărui șir, actualizată automat." },
      { name: "Urmărirea loturilor", desc: "Urmăriți fiecare fază de compostare și maturare." },
      { name: "Alerte instantanee", desc: "Un SMS sau un e-mail imediat ce o limită este depășită." },
      { name: "Rapoarte dintr-un clic", desc: "Exportați datele și tipăriți rapoarte pentru audituri." },
      { name: "Gândită pentru telefon", desc: "O interfață simplă, de consultat direct pe telefon, lângă șir." },
      { name: "Sonde legate de șiruri", desc: "Una sau mai multe sonde pe șir, fiecare măsurătoare la locul ei." },
    ],
  },
  why: {
    title: "De ce să alegeți GreenSensor?",
    items: [
      { name: "Fiabil", desc: "Fabricat în propria noastră fabrică din Franța, testat 100 %." },
      { name: "Experimentat", desc: "Prosensor măsoară temperatura de peste 30 de ani, cu produse care se îmbunătățesc continuu." },
      { name: "La comandă", desc: "Soluții proiectate de echipa noastră de cercetare-dezvoltare." },
    ],
    strip: ["Gata de utilizare", "Suport gratuit", "Garanție 3 ani", "Fabricat în Franța"],
  },
  lab: {
    steps: [
      { name: "Sonda măsoară", desc: "În fiecare oră, în miezul șirului și în aer." },
      { name: "Platforma urmărește", desc: "Curba se actualizează singură, șir cu șir." },
      { name: "Sunteți alertat", desc: "Un SMS sau un e-mail imediat ce pragul este depășit." },
    ],
    simulation: "Simulare",
    core: "Miez",
    air: "Aer",
    campaign: "Campanie",
    phase: "Fază",
    ok: "Normal",
    alert: "Alertă",
    threshold: "Prag de alertă",
    sms: "SMS",
    email: "E-mail",
    report: "Raport de campanie",
    nav: ["Panou", "Campanii", "Faze", "Obiective", "Sonde", "Setări"],
    probe: "Sondă",
    kpi: { campaigns: "Campanii în curs", probes: "Sonde active", alerts: "Alerte", title: "Panou", chart: "Evoluția temperaturii" },
    parts: [
      { name: "Antenă", desc: "Trimite fiecare măsurătoare la gateway, până la 2 km în câmp deschis (868 MHz)." },
      { name: "Carcasă IP68", desc: "130 × 50 × 54 mm. Conține bateria înlocuibilă (5 ani la o măsurătoare pe oră) și senzorul de aer." },
      { name: "Două mânere", desc: "Fixate și lipite pe tub: sonda se înfige cu mâna." },
      { name: "Tub din inox 316L", desc: "Ø 16 mm, de 1 m, 1,5 m sau 2 m. Un al 2-lea punct de măsurare opțional la sondele de 2 m, la 1 m." },
      { name: "Senzor de miez", desc: "La capătul tubului: -55 °C până la +125 °C, ±0,5 °C între -10 °C și +85 °C." },
    ],
  },
  report: {
    title: "Un raport care validează procesul dvs. de compostare",
    lead: "La fiecare fază, emiteți un raport datat cu obiectivele de temperatură, procentul atins și perioadele vizate. Un document de prezentat la un audit sau la un control al amplasamentului.",
    points: [
      "Obiectivele pe fază, de exemplu 55 °C timp de 14 zile",
      "Începutul, sfârșitul și durata fiecărei perioade atinse",
      "Jurnalul de evenimente: pornire, obiective atinse, sfârșitul fazei",
      "Curba completă a măsurătorilor, cu numărul lor și media",
    ],
    paper: { title: "Raport de urmărire a campaniei", phase: "Fermentare", start: "Început", log: "Jurnal de evenimente", date: "Data", event: "Eveniment", started: "Campanie pornită", phaseStarted: "Fază pornită", readings: "măsurători", average: "Medie", objective: "Obiectiv", achieved: "% atins", periods: "Perioade", days: "zile", dayShort: "z", reached: "Obiectiv atins", ended: "Finalizată" },
  },
  trust: "Ne-au acordat încrederea",
  campaign: { define: "Stabiliți obiectivele", follow: "GreenSensor urmărește progresul", phases: "Faze", done: "Finalizat", running: "În curs", hours: "ore" },
  faqHome: [
    { q: "Instalarea necesită tehnician?", a: "Nu. Este suficient să conectați routerul la internet și să porniți sonda apăsând butonul de pe carcasă." },
    { q: "Ce conexiune la internet necesită routerul?", a: "Ideal prin Ethernet. Pentru locațiile fără conexiune la internet există soluții 4G." },
    { q: "Se pot cumpăra sondele?", a: "Da. Sondele se cumpără cu accesul anual la platforma GreenSensor. O primă comandă include adesea câteva sonde și un gateway pentru testare, apoi amplasamentele trec la zeci de sonde. Contactați-ne pentru o ofertă adaptată locației dvs." },
    { q: "Cum se configurează și alocă alertele?", a: "Direct pe platformă: fiecare utilizator stabilește singur pragurile de alertă și destinatarii." },
  ],
  contact: { lead: "Lăsați-ne datele dvs.: un consultant Prosensor vă va contacta pentru a vă prezenta GreenSensor și a răspunde întrebărilor dvs.", note: "Trimițând acest formular, sunteți de acord să fiți contactat de Prosensor.", privacy: "Politica de confidențialitate", thanks: "Vă mulțumim pentru solicitare. Revenim către dvs." },
  faqAll: "Vezi FAQ complet",
  help: { docText: "Ghid pas cu pas, de la conectarea gateway-ului până la prima dvs. campanie." },
  brandOf: "Un brand al",
  since: "Producător din 1989",
}

const copy: Record<Lang, HomeCopy> = { fr, en, es, de, pt, ro }

export function useHomeCopy(): HomeCopy {
  const { language } = useI18n()
  return copy[language]
}

/**
 * Assemble les titres i18n historiques, découpés en « titre + mot mis en valeur ». Les mots mis en
 * valeur portaient une majuscule (« Questions Fréquentes ») : on les repasse en minuscules, sauf en
 * allemand où les noms gardent leur majuscule.
 */
export const joinTitle = (language: string, first: string, ...rest: string[]) =>
  [first, ...rest.map((part) => (language === "de" ? part : part.charAt(0).toLowerCase() + part.slice(1)))]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
