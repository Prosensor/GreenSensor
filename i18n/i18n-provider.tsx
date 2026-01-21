"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

type Language = "fr" | "en"

type Translations = {
  nav: {
    home: string
    features: string
    specs: string
    analytics: string
    faq: string
    contact: string
  }
  hero: {
    title_highlight: string
    title_rest: string
    subtitle_line1: string
    subtitle_line2: string
    cta: string
    features: { iconKey: "thermometer" | "bell" | "map"; label: string }[]
  }
  features: {
    heading: string
    heading_highlight: string
    subheading: string
    cta: string
    cards: { iconKey: "thermometer" | "bell" | "shield" | "chart"; title: string; desc: string }[]
  }
  keyFeatures: {
    heading: string
    heading_highlight: string
    connector: string
    paragraph: string
    items: { iconKey: "thermometer" | "chart" | "bell" | "lock"; label: string; highlight?: boolean }[]
    cta: string
  }
  faq: {
    heading: string
    heading_highlight: string
    items: { q: string; a: string }[]
    cta: string
  }
  demo: {
    heading: string
    heading_highlight: string
    paragraph: string
    hq_title: string
    hq_company: string
    address: string
    contact_title: string
    phone_label: string
    phone_value: string
    email_label: string
    email_value: string
  }
  download: {
    heading: string
    heading_highlight: string
    paragraph: string
    bullets: string[]
    cta: string
  }
  run: {
    heading_line1: string
    heading_highlight: string
    heading_line2: string
    paragraph_line1: string
    paragraph_line2: string
    advantages: string[]
    image_alt: string
  }
  footer: {
    description: string
    useful_links: string
    legal_info: string
    nav: { home: string; features: string; specs: string; analytics: string; faq: string; contact: string }
    legal: { mentions: string; privacy: string; terms: string; prosensor_site: string }
    hours: { title: string; weekdays: string; weekend: string }
    copyright: string
  }
  form?: {
    labels: {
      name: string
      email: string
      phone: string
      company: string
      message: string
      submit: string
      sending: string
      placeholders: {
        name: string
        email: string
        phone: string
        company: string
        message: string
      }
    }
    messages: {
      name_min: string
      email_invalid: string
      phone_min: string
      company_min: string
      success: string
      error: string
    }
  }
  header?: {
    appButton: string
  }
}

const fr: Translations = {
  nav: {
    home: "Accueil",
    features: "Fonctionnalités",
    specs: "Spécifications",
    analytics: "Analyse",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    title_highlight: "Compost",
    title_rest: "Sonde de température à",
    subtitle_line1: "Prosensor révolutionne la production et le suivi du processus du compostage avec des sondes de température.",
    subtitle_line2: "Grâce à une  interface de gestion intuitive, optimisez votre processus de compostage et garantissez la qualité de votre production.",
    cta: "Demander une présentation",
    features: [
      { iconKey: "thermometer", label: "Mesure précise" },
      { iconKey: "bell", label: "Alertes par SMS / Email" },
      { iconKey: "map", label: "Affection des sondes à un lieu" },
    ],
  },
  features: {
    heading: "Fonctionnalités clés pour simplifier",
    heading_highlight: " votre production",
    subheading: "Découvrez le suivi des températures dans le processus de compostage avec GreenSensor",
    cta: "Demander une présentation",
    cards: [
      { iconKey: "thermometer", title: "Mesure Précise", desc: "Obtenez des lectures de température précises au degré près pour votre compost." },
      { iconKey: "bell", title: "Alertes Personnalisées", desc: "Configurez des notifications par mail ou par sms pour être informé lorsque la température dépasse les limites définies." },
      { iconKey: "shield", title: "Hygiène", desc: "Assurez-vous que vos compost atteignent la température de sécurité requise." },
      { iconKey: "chart", title: "Analyse des Données", desc: "Visualisez et analysez les tendances de température pour optimiser votre production." },
    ],
  },
  keyFeatures: {
    heading: "Fonctionnalités",
    heading_highlight: "Clés",
    connector: "de",
    paragraph: "Création de campagnes de fermentation ou de maturation, affection de sondes à des andains, suivi des objectifs dans le déroulement des campagnes, export de données, impression de rapports, alertes SMS/Email en cas d'anomalie.",
    items: [
      { iconKey: "thermometer", label: "Mesure" },
      { iconKey: "chart", label: "Analyse" },
      { iconKey: "bell", label: "Alertes" },
      { iconKey: "lock", label: "Sécurité ", highlight: true },
    ],
    cta: "Demander une présentation",
  },
  faq: {
    heading: "Questions",
    heading_highlight: "Fréquentes",
    items: [
      { q: "Quelle est la visibilité de la sonde ?", a: "La sonde a été corrigée en rose fluo pour améliorer sa visibilité. Vous pouvez consulter les détails dans notre datasheet." },
      { q: "Combien y a-t-il de capteurs par sonde ?", a: "Chaque sonde dispose de 2 capteurs, ce qui a été validé par notre bureau d'études." },
      { q: "Peut-on commenter des points de données ?", a: "Oui, cette fonctionnalité a été ajoutée. Nos développeurs ont intégré un espace commentaire permettant de commenter des points de données." },
      { q: "Peut-on changer de sonde dans un lot en cours de campagne ?", a: "Oui, cette fonctionnalité est validée. Il est possible de changer de sonde dans un lot en cours de campagne." },
      { q: "Qu'est-ce que le certificat d'étalonnage ?", a: "Le certificat initial atteste qu'un étalonnage annuel n'est pas nécessaire et que le fonctionnement numérique exclut tout dérive." },
      { q: "Si le bureau est à moins de 2 km de la plateforme, le routeur est-il indispensable ?", a: "La portée entre la sonde et le routeur est de 2 km en champ libre. Si votre bureau est à moins de 2 km de la plateforme, le routeur peut ne pas être indispensable selon votre configuration." },
      { q: "Combien de routeurs maximum pour un compte (cas de plusieurs plateformes) ?", a: "Il sera possible d'avoir plusieurs sites de compostage sous un même compte." },
      { q: "Certains adhérents sont susceptibles de commander 5 voire 10 sondes. Peut-on imaginer une remise supplémentaire pour les commandes en grand nombre ?", a: "Nos prix sont dégressifs en fonction de la quantité et seront maintenus pendant 3 ans pour les clients engagés, soit jusqu'en juin 2027." },
      { q: "Comment envisager le changement de pile (peut-on le faire de manière autonome ?) Si non, quelles sont les conditions de renvoi ?", a: "L'autonomie de la batterie est de 4 ans. Le changement s'effectue par nos soins avec un forfait de 80€ incluant la révision complète, le changement de pile et le transport Prosensor/client." },
      { q: "Le nombre de sondes par routeur est-il plafonné ?", a: "Non, il n'y a pas de limite par routeur." },
      { q: "Les frais d'activation correspondent à un compte, à un routeur ou à une sonde ?", a: "Les frais d'activation s'appliquent à un compte de facturation (par site de compostage, c'est-à-dire géographique)." },
      { q: "Le nombre de routeurs par compte utilisateur est bien plafonné à 5 ?", a: "Oui, comme convenu, 5 grand maximum pour des raisons techniques." },
    ],
    cta: "Demander une présentation",
  },
  demo: {
    heading: "Demandez une",
    heading_highlight: "Présentation",
    paragraph: "Découvrez la puissance de Prosensor en action. Demandez une présentation pour voir comment nos sondes de chaleur peuvent révolutionner votre production de compost et optimiser vos processus.",
    hq_title: "Siège Social : ",
    hq_company: "Prosensor",
    address: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur",
    contact_title: "Coordonnées",
    phone_label: "Téléphone:",
    phone_value: "+33 3 87 53 53 53",
    email_label: "Email:",
    email_value: "info@prosensor.com",
  },
  download: {
    heading: "Solution pour le",
    heading_highlight: "Suivi du Compostage",
    paragraph: "Notre système intégré combine des sondes de température sans fil de haute précision, une connectivité sécurisée et une plateforme cloud puissante pour un suivi en temps réel de vos processus de compostage.",
    bullets: [
      "Sondes sans fil précises à ±0.5°C",
      "Transmission de données sécurisée et fiable",
      "Alertes et rapports automatisés",
    ],
    cta: "Demander une présentation",
  },
  run: {
    heading_line1: "Optimisez votre",
    heading_highlight: "production",
    heading_line2: "de compost",
    paragraph_line1: "Prosensor vous offre tous les outils nécessaires pour simplifier votre processus de production",
    paragraph_line2: "et automatiser les tâches chronophages dans votre flux de travail, garantissant ainsi une qualité constante de vos compost.",
    advantages: [
      "Mesure précise de la température jusqu'à 0,5°C près",
      "Interface intuitive pour un suivi en temps réel",
      "Alertes personnalisables pour chaque étape de la production",
      "Génération de rapports de campagnes et exportation des données",
      "Installation facile et prise en main rapide",
    ],
    image_alt: "Sonde Prosensor en action dans la production de compotes",
  },
  footer: {
    description: "GreenSensor est une solution innovante pour le suivi des températures dans le processus de compostage.",
    useful_links: "Liens utiles",
    legal_info: "Informations légales",
    nav: { home: "Accueil", features: "Fonctionnalités", specs: "Spécifications", analytics: "Analyse", faq: "FAQ", contact: "Contact" },
    legal: { mentions: "Mentions légales", privacy: "Politique de confidentialité", terms: "Conditions Générales d'Utilisation", prosensor_site: "Site de Prosensor" },
    hours: { title: "Horaires d'ouverture:", weekdays: "Lundi - Vendredi: 9h00 - 18h00", weekend: "Samedi - Dimanche: Fermé" },
    copyright: "© 2025 Prosensor. Tous droits réservés.",
  },
  form: {
    labels: {
      name: "Nom",
      email: "Email",
      phone: "Numéro de téléphone",
      company: "Entreprise",
      message: "Message (Optionnel)",
      submit: "Envoyer",
      sending: "Envoi en cours...",
      placeholders: {
        name: "Entrez votre nom",
        email: "Entrez votre email",
        phone: "Votre numéro",
        company: "Votre entreprise",
        message: "Parlez-nous de vos besoins en matière de contrôle de température...",
      }
    },
    messages: {
      name_min: "Le nom doit contenir au moins 2 caractères",
      email_invalid: "Adresse email invalide",
      phone_min: "Le numéro de téléphone doit contenir au moins 10 chiffres",
      company_min: "Le nom de l'entreprise doit contenir au moins 2 caractères",
      success: "Demande de présentation envoyée avec succès !",
      error: "Une erreur est survenue. Veuillez réessayer.",
    }
  },
  header: { appButton: "Interface" },
}

const en: Translations = {
  nav: {
    home: "Home",
    features: "Features",
    specs: "Specifications",
    analytics: "Analytics",
    faq: "FAQ",
    contact: "Contact",
  },
  hero: {
    title_highlight: "Compost",
    title_rest: "Temperature probe for",
    subtitle_line1: "Prosensor transforms composting monitoring with reliable temperature probes.",
    subtitle_line2: "With an intuitive dashboard, optimize your process and ensure quality output.",
    cta: "Request a demo",
    features: [
      { iconKey: "thermometer", label: "Accurate measurement" },
      { iconKey: "bell", label: "SMS / Email alerts" },
      { iconKey: "map", label: "Assign probes to a location" },
    ],
  },
  features: {
    heading: "Key features to simplify",
    heading_highlight: " your production",
    subheading: "Discover temperature tracking in the composting process with GreenSensor",
    cta: "Request a demo",
    cards: [
      { iconKey: "thermometer", title: "Accurate Measurement", desc: "Get degree-accurate temperature readings for your compost." },
      { iconKey: "bell", title: "Custom Alerts", desc: "Set email/SMS notifications when temperature crosses your thresholds." },
      { iconKey: "shield", title: "Hygiene", desc: "Ensure your compost reaches the required safety temperature." },
      { iconKey: "chart", title: "Data Analytics", desc: "Visualize and analyze temperature trends to optimize output." },
    ],
  },
  keyFeatures: {
    heading: "Key",
    heading_highlight: "Features",
    connector: "of",
    paragraph: "Create fermentation/maturation campaigns, assign probes to windrows, track goals, export data, print reports, and receive SMS/Email alerts in case of anomalies.",
    items: [
      { iconKey: "thermometer", label: "Measurement" },
      { iconKey: "chart", label: "Analytics" },
      { iconKey: "bell", label: "Alerts" },
      { iconKey: "lock", label: "Security", highlight: true },
    ],
    cta: "Request a demo",
  },
  faq: {
    heading: "Frequently",
    heading_highlight: "Asked Questions",
    items: [
      { q: "What is the visibility of the probe?", a: "The probe has been corrected to fluorescent pink to improve its visibility. You can check the details in our datasheet." },
      { q: "How many sensors per probe?", a: "Each probe has 2 sensors, which has been validated by our engineering department." },
      { q: "Can we comment on data points?", a: "Yes, this feature has been added. Our developers have integrated a comment space allowing you to comment on data points." },
      { q: "Can we change probes in a batch during an ongoing campaign?", a: "Yes, this feature is validated. It is possible to change probes in a batch during an ongoing campaign." },
      { q: "What is the calibration certificate?", a: "The initial certificate attests that annual calibration is not necessary and that digital operation excludes any drift." },
      { q: "If the office is less than 2 km from the platform, is the router essential?", a: "The range between the probe and the router is 2 km in free space. If your office is less than 2 km from the platform, the router may not be essential depending on your configuration." },
      { q: "What is the maximum number of routers per account (case of multiple platforms)?", a: "It will be possible to have multiple composting sites under the same account." },
      { q: "Some members may order 5 or even 10 probes. Can we imagine an additional discount for bulk orders?", a: "Our prices are degressive based on quantity and will be maintained for 3 years for committed clients, until June 2027." },
      { q: "How to consider battery replacement (can it be done autonomously?) If not, what are the return conditions?", a: "Battery autonomy is 4 years. Replacement is done by us with a flat rate of €80 including complete revision, battery replacement and Prosensor/client transport." },
      { q: "Is the number of probes per router capped?", a: "No, there is no limit per router." },
      { q: "Do activation fees correspond to an account, a router or a probe?", a: "Activation fees apply to a billing account (per composting site, i.e., geographic)." },
      { q: "Is the number of routers per user account capped at 5?", a: "Yes, as agreed, 5 maximum for technical reasons." },
    ],
    cta: "Request a demo",
  },
  demo: {
    heading: "Request a",
    heading_highlight: "Demo",
    paragraph: "See Prosensor in action. Request a demo to learn how our temperature probes can transform your compost production and optimize your processes.",
    hq_title: "Headquarters: ",
    hq_company: "Prosensor",
    address: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur",
    contact_title: "Contact",
    phone_label: "Phone:",
    phone_value: "+33 3 87 53 53 53",
    email_label: "Email:",
    email_value: "info@prosensor.com",
  },
  download: {
    heading: "Solution for",
    heading_highlight: "Composting Monitoring",
    paragraph: "Our integrated system combines high-precision wireless temperature probes, secure connectivity, and a powerful cloud platform to monitor your composting processes in real time.",
    bullets: [
      "Wireless probes accurate to ±0.5°C",
      "Secure and reliable data transmission",
      "Automated alerts and reports",
    ],
    cta: "Request a demo",
  },
  run: {
    heading_line1: "Optimize your",
    heading_highlight: "production",
    heading_line2: "of compost",
    paragraph_line1: "Prosensor provides all the tools you need to simplify production",
    paragraph_line2: "and automate time‑consuming tasks, ensuring consistent compost quality.",
    advantages: [
      "Accurate temperature measurement up to ±0.5°C",
      "Intuitive interface for real‑time monitoring",
      "Customizable alerts for each production stage",
      "Campaign reports and data export",
      "Easy installation and quick onboarding",
    ],
    image_alt: "Prosensor probe in action for compost production",
  },
  footer: {
    description: "GreenSensor is an innovative solution for temperature monitoring in the composting process.",
    useful_links: "Useful links",
    legal_info: "Legal information",
    nav: { home: "Home", features: "Features", specs: "Specifications", analytics: "Analytics", faq: "FAQ", contact: "Contact" },
    legal: { mentions: "Legal notice", privacy: "Privacy policy", terms: "Terms of use", prosensor_site: "Prosensor website" },
    hours: { title: "Opening hours:", weekdays: "Monday - Friday: 9:00 - 18:00", weekend: "Saturday - Sunday: Closed" },
    copyright: "© 2025 Prosensor. All rights reserved.",
  },
  form: {
    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone number",
      company: "Company",
      message: "Message (Optional)",
      submit: "Send",
      sending: "Sending...",
      placeholders: {
        name: "Enter your name",
        email: "Enter your email",
        phone: "Your number",
        company: "Your company",
        message: "Tell us about your temperature monitoring needs...",
      }
    },
    messages: {
      name_min: "Name must be at least 2 characters",
      email_invalid: "Invalid email address",
      phone_min: "Phone number must be at least 10 digits",
      company_min: "Company name must be at least 2 characters",
      success: "Demo request sent successfully!",
      error: "An error occurred. Please try again.",
    }
  },
  header: { appButton: "Open App" },
}

const dictionaries: Record<Language, Translations> = { fr, en }

type I18nContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr")

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (window.localStorage.getItem("language") as Language | null) : null
    if (stored === "fr" || stored === "en") {
      setLanguage(stored)
    }
  }, [])

  const value = useMemo<I18nContextType>(() => ({
    language,
    setLanguage: (lang: Language) => {
      setLanguage(lang)
      if (typeof window !== "undefined") {
        window.localStorage.setItem("language", lang)
      }
      if (typeof document !== "undefined") {
        document.documentElement.lang = lang === "fr" ? "fr" : "en"
      }
    },
    t: dictionaries[language],
  }), [language])

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}


