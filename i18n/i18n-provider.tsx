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
    subtitle_line1: "ProSensor révolutionne la production et le suivi du processus du compostage avec des sondes de température.",
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
      { q: "Quelle est la précision de mesure des sondes GreenSensor ?", a: "Les sondes ProSensor offrent une précision de mesure exceptionnelle, avec une marge d'erreur de seulement ±0,5°C. Cette précision permet un contrôle optimal de la température dans le processus de production de composts." },
      { q: "Comment puis-je intégrer GreenSensor à mon système de production actuel ?", a: "GreenSensor est conçu pour s'intégrer facilement à la plupart des systèmes de production existants. Notre équipe technique vous guidera tout au long du processus d'installation et d'intégration pour assurer une transition en douceur." },
      { q: "Quelles sont les options de rapport et d'analyse disponibles ?", a: "GreenSensor offre une suite complète d'outils de rapport et d'analyse. Vous pouvez accéder à des graphiques en temps réel, des rapports détaillés sur l'historique des températures, et des analyses prédictives pour optimiser votre production." },
      { q: "Comment configurer les alertes de température ?", a: "La configuration des alertes est simple et personnalisable. Dans l'interface GreenSensor, à la création de la campagne, naviguez vers Paramètres > Alertes pour définir vos seuils de température et choisir vos méthodes de notification préférées (SMS, email, notifications push)." },
    ],
    cta: "Demander une présentation",
  },
  demo: {
    heading: "Demandez une",
    heading_highlight: "Présentation",
    paragraph: "Découvrez la puissance de ProSensor en action. Demandez une présentation pour voir comment nos sondes de chaleur peuvent révolutionner votre production de compost et optimiser vos processus.",
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
    paragraph_line1: "ProSensor vous offre tous les outils nécessaires pour simplifier votre processus de production",
    paragraph_line2: "et automatiser les tâches chronophages dans votre flux de travail, garantissant ainsi une qualité constante de vos compost.",
    advantages: [
      "Mesure précise de la température jusqu'à 0,5°C près",
      "Interface intuitive pour un suivi en temps réel",
      "Alertes personnalisables pour chaque étape de la production",
      "Génération de rapports de campagnes et exportation des données",
      "Installation facile et prise en main rapide",
    ],
    image_alt: "Sonde ProSensor en action dans la production de compotes",
  },
  footer: {
    description: "GreenSensor est une solution innovante pour le suivi des températures dans le processus de compostage.",
    useful_links: "Liens utiles",
    legal_info: "Informations légales",
    nav: { home: "Accueil", features: "Fonctionnalités", specs: "Spécifications", analytics: "Analyse", faq: "FAQ", contact: "Contact" },
    legal: { mentions: "Mentions légales", privacy: "Politique de confidentialité", terms: "Conditions Générales d'Utilisation", prosensor_site: "Site de Prosensor" },
    copyright: "© 2025 ProSensor. Tous droits réservés.",
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
    subtitle_line1: "ProSensor transforms composting monitoring with reliable temperature probes.",
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
      { q: "What is the measurement accuracy of GreenSensor probes?", a: "ProSensor probes offer ±0.5°C accuracy, enabling optimal temperature control during compost production." },
      { q: "How can I integrate GreenSensor into my current production system?", a: "GreenSensor integrates easily with most existing setups. Our technical team will guide you through installation and integration for a smooth transition." },
      { q: "What reporting and analytics options are available?", a: "GreenSensor offers real-time charts, detailed temperature history reports, and predictive analytics to optimize your production." },
      { q: "How do I configure temperature alerts?", a: "Alerts are simple to set up. In the GreenSensor interface when creating a campaign, go to Settings > Alerts to define thresholds and notification methods (SMS, email, push)." },
    ],
    cta: "Request a demo",
  },
  demo: {
    heading: "Request a",
    heading_highlight: "Demo",
    paragraph: "See ProSensor in action. Request a demo to learn how our temperature probes can transform your compost production and optimize your processes.",
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
    paragraph_line1: "ProSensor provides all the tools you need to simplify production",
    paragraph_line2: "and automate time‑consuming tasks, ensuring consistent compost quality.",
    advantages: [
      "Accurate temperature measurement up to ±0.5°C",
      "Intuitive interface for real‑time monitoring",
      "Customizable alerts for each production stage",
      "Campaign reports and data export",
      "Easy installation and quick onboarding",
    ],
    image_alt: "ProSensor probe in action for compost production",
  },
  footer: {
    description: "GreenSensor is an innovative solution for temperature monitoring in the composting process.",
    useful_links: "Useful links",
    legal_info: "Legal information",
    nav: { home: "Home", features: "Features", specs: "Specifications", analytics: "Analytics", faq: "FAQ", contact: "Contact" },
    legal: { mentions: "Legal notice", privacy: "Privacy policy", terms: "Terms of use", prosensor_site: "Prosensor website" },
    copyright: "© 2025 ProSensor. All rights reserved.",
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


