/** Textes de la page Contact / Demander une présentation, dans les 6 langues. */
export type ContactLang = "fr" | "en" | "es" | "de" | "pt" | "ro"

export type ContactPageCopy = {
  home: string
  seoTitle: string
  seoDescription: string
  title: string
  lead: string
  points: string[]
  formTitle: string
  callTitle: string
  addressTitle: string
}

export const contactPageCopy: Record<ContactLang, ContactPageCopy> = {
  fr: {
    home: "Accueil",
    seoTitle: "Demander une présentation | GreenSensor",
    seoDescription: "Demandez une présentation de GreenSensor, la sonde de température sans fil pour le compostage. Un conseiller Prosensor vous répond.",
    title: "Demander une présentation",
    lead: "Laissez-nous vos coordonnées : un conseiller Prosensor vous présente GreenSensor et répond à vos questions.",
    points: ["Une présentation de GreenSensor adaptée à votre site", "Les réponses à vos questions : passerelle, portée, installation", "Un devis pour votre configuration"],
    formTitle: "Vos coordonnées",
    callTitle: "Vous préférez nous parler ?",
    addressTitle: "Où nous trouver",
  },
  en: {
    home: "Home",
    seoTitle: "Request a presentation | GreenSensor",
    seoDescription: "Request a presentation of GreenSensor, the wireless temperature probe for composting. A Prosensor advisor will get back to you.",
    title: "Request a presentation",
    lead: "Leave your details: a Prosensor advisor will present GreenSensor and answer your questions.",
    points: ["A GreenSensor presentation tailored to your site", "Answers to your questions: gateway, range, installation", "A quote for your configuration"],
    formTitle: "Your details",
    callTitle: "Prefer to talk?",
    addressTitle: "Where to find us",
  },
  es: {
    home: "Inicio",
    seoTitle: "Solicitar una presentación | GreenSensor",
    seoDescription: "Solicite una presentación de GreenSensor, la sonda de temperatura inalámbrica para compostaje. Un asesor de Prosensor le responderá.",
    title: "Solicitar una presentación",
    lead: "Déjenos sus datos: un asesor de Prosensor le presentará GreenSensor y responderá a sus preguntas.",
    points: ["Una presentación de GreenSensor adaptada a su sitio", "Respuestas a sus preguntas: pasarela, alcance, instalación", "Un presupuesto para su configuración"],
    formTitle: "Sus datos",
    callTitle: "¿Prefiere hablar con nosotros?",
    addressTitle: "Dónde encontrarnos",
  },
  de: {
    home: "Start",
    seoTitle: "Präsentation anfragen | GreenSensor",
    seoDescription: "Fragen Sie eine Präsentation von GreenSensor an, der kabellosen Temperatursonde für die Kompostierung. Ein Prosensor-Berater meldet sich bei Ihnen.",
    title: "Präsentation anfragen",
    lead: "Hinterlassen Sie Ihre Kontaktdaten: Ein Prosensor-Berater stellt Ihnen GreenSensor vor und beantwortet Ihre Fragen.",
    points: ["Eine GreenSensor-Präsentation, passend zu Ihrem Standort", "Antworten auf Ihre Fragen: Gateway, Reichweite, Installation", "Ein Angebot für Ihre Konfiguration"],
    formTitle: "Ihre Kontaktdaten",
    callTitle: "Lieber persönlich sprechen?",
    addressTitle: "So finden Sie uns",
  },
  pt: {
    home: "Início",
    seoTitle: "Pedir uma apresentação | GreenSensor",
    seoDescription: "Peça uma apresentação do GreenSensor, a sonda de temperatura sem fios para compostagem. Um consultor da Prosensor responder-lhe-á.",
    title: "Pedir uma apresentação",
    lead: "Deixe os seus contactos: um consultor da Prosensor apresenta o GreenSensor e responde às suas perguntas.",
    points: ["Uma apresentação do GreenSensor adaptada ao seu local", "Respostas às suas perguntas: gateway, alcance, instalação", "Um orçamento para a sua configuração"],
    formTitle: "Os seus contactos",
    callTitle: "Prefere falar connosco?",
    addressTitle: "Onde nos encontrar",
  },
  ro: {
    home: "Acasă",
    seoTitle: "Solicită o prezentare | GreenSensor",
    seoDescription: "Solicitați o prezentare GreenSensor, sonda de temperatură fără fir pentru compostare. Un consultant Prosensor vă va răspunde.",
    title: "Solicită o prezentare",
    lead: "Lăsați-ne datele dvs.: un consultant Prosensor vă prezintă GreenSensor și răspunde întrebărilor dvs.",
    points: ["O prezentare GreenSensor adaptată amplasamentului dvs.", "Răspunsuri la întrebările dvs.: gateway, rază, instalare", "O ofertă pentru configurația dvs."],
    formTitle: "Datele dvs.",
    callTitle: "Preferați să vorbim?",
    addressTitle: "Unde ne găsiți",
  },
}
