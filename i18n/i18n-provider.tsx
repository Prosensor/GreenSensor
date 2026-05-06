"use client"

import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"

type Language = "fr" | "en" | "es" | "de" | "pt" | "ro"

type Translations = {
  nav: {
    home: string
    features: string
    specs: string
    analytics: string
    faq: string
    doc: string
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
    nav: { home: string; features: string; specs: string; analytics: string; faq: string; doc: string; contact: string }
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
    doc: "Documentation",
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
    nav: { home: "Accueil", features: "Fonctionnalités", specs: "Spécifications", analytics: "Analyse", faq: "FAQ", doc: "Documentation", contact: "Contact" },
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
    doc: "Documentation",
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
    nav: { home: "Home", features: "Features", specs: "Specifications", analytics: "Analytics", faq: "FAQ", doc: "Documentation", contact: "Contact" },
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

const es: Translations = {
  nav: {
    home: "Inicio",
    features: "Funcionalidades",
    specs: "Especificaciones",
    analytics: "Análisis",
    faq: "FAQ",
    doc: "Documentación",
    contact: "Contacto",
  },
  hero: {
    title_highlight: "Compostaje",
    title_rest: "Sonda de temperatura para",
    subtitle_line1: "Prosensor transforma el seguimiento del compostaje con sondas de temperatura fiables.",
    subtitle_line2: "Con una interfaz intuitiva, optimiza tu proceso y garantiza una producción de calidad.",
    cta: "Solicitar una demo",
    features: [
      { iconKey: "thermometer", label: "Medición precisa" },
      { iconKey: "bell", label: "Alertas SMS / Email" },
      { iconKey: "map", label: "Asignación de sondas por ubicación" },
    ],
  },
  features: {
    heading: "Funcionalidades clave para simplificar",
    heading_highlight: " tu producción",
    subheading: "Descubre el seguimiento de temperatura en el proceso de compostaje con GreenSensor",
    cta: "Solicitar una demo",
    cards: [
      { iconKey: "thermometer", title: "Medición precisa", desc: "Obtén lecturas de temperatura precisas para tu compost." },
      { iconKey: "bell", title: "Alertas personalizadas", desc: "Configura alertas por email/SMS cuando se superen tus umbrales." },
      { iconKey: "shield", title: "Higiene", desc: "Asegura que el compost alcance la temperatura de seguridad requerida." },
      { iconKey: "chart", title: "Análisis de datos", desc: "Visualiza tendencias para optimizar tu producción." },
    ],
  },
  keyFeatures: {
    heading: "Funcionalidades",
    heading_highlight: "Claves",
    connector: "de",
    paragraph: "Creación de campañas de fermentación o maduración, asignación de sondas a hileras, seguimiento de objetivos, exportación de datos, impresión de informes y alertas SMS/Email en caso de anomalía.",
    items: [
      { iconKey: "thermometer", label: "Medición" },
      { iconKey: "chart", label: "Análisis" },
      { iconKey: "bell", label: "Alertas" },
      { iconKey: "lock", label: "Seguridad", highlight: true },
    ],
    cta: "Solicitar una demo",
  },
  faq: {
    heading: "Preguntas",
    heading_highlight: "Frecuentes",
    items: [
      { q: "¿Cuál es la visibilidad de la sonda?", a: "La sonda se ha optimizado para mejorar su visibilidad. Consulta más detalles en nuestra ficha técnica." },
      { q: "¿Cuántos sensores tiene cada sonda?", a: "Cada sonda dispone de 2 sensores, validado por nuestro equipo de ingeniería." },
      { q: "¿Se pueden comentar puntos de datos?", a: "Sí, esta funcionalidad está disponible." },
      { q: "¿Se puede cambiar de sonda durante una campaña?", a: "Sí, esta funcionalidad está validada." },
      { q: "¿Qué es el certificado de calibración?", a: "Certifica que no se requiere calibración anual en condiciones normales." },
      { q: "Si la oficina está a menos de 2 km, ¿es obligatorio router?", a: "Depende de la configuración del sitio y los obstáculos." },
      { q: "¿Cuántos routers por cuenta se pueden tener?", a: "Se pueden gestionar varios sitios bajo la misma cuenta." },
      { q: "¿Hay descuento por volumen?", a: "Sí, hay tarifas decrecientes según cantidad." },
      { q: "¿Cómo se gestiona el cambio de batería?", a: "La autonomía es larga y el cambio puede planificarse con soporte Prosensor." },
      { q: "¿Hay límite de sondas por router?", a: "No hay un límite fijo, depende del dimensionamiento." },
      { q: "¿La activación aplica a cuenta, router o sonda?", a: "La activación aplica por cuenta/sitio de facturación." },
      { q: "¿El número de routers por cuenta está limitado?", a: "Puede limitarse por razones técnicas según proyecto." },
    ],
    cta: "Solicitar una demo",
  },
  demo: {
    heading: "Solicita una",
    heading_highlight: "Demo",
    paragraph: "Descubre Prosensor en acción y cómo nuestras sondas de temperatura pueden optimizar tu compostaje.",
    hq_title: "Sede: ",
    hq_company: "Prosensor",
    address: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur",
    contact_title: "Contacto",
    phone_label: "Teléfono:",
    phone_value: "+33 3 87 53 53 53",
    email_label: "Email:",
    email_value: "info@prosensor.com",
  },
  download: {
    heading: "Solución para el",
    heading_highlight: "Seguimiento del Compostaje",
    paragraph: "Nuestro sistema integra sondas de alta precisión, conectividad segura y plataforma cloud para seguimiento en tiempo real.",
    bullets: [
      "Sondas inalámbricas precisas ±0.5°C",
      "Transmisión de datos segura y fiable",
      "Alertas e informes automáticos",
    ],
    cta: "Solicitar una demo",
  },
  run: {
    heading_line1: "Optimiza tu",
    heading_highlight: "producción",
    heading_line2: "de compost",
    paragraph_line1: "Prosensor te ofrece todas las herramientas para simplificar tu producción",
    paragraph_line2: "y automatizar tareas repetitivas con calidad constante.",
    advantages: [
      "Medición precisa hasta ±0.5°C",
      "Interfaz intuitiva en tiempo real",
      "Alertas personalizables por etapa",
      "Informes y exportación de campañas",
      "Instalación fácil y rápida",
    ],
    image_alt: "Sonda Prosensor en acción en compostaje",
  },
  footer: {
    description: "GreenSensor es una solución innovadora para el seguimiento de temperatura en compostaje.",
    useful_links: "Enlaces útiles",
    legal_info: "Información legal",
    nav: { home: "Inicio", features: "Funcionalidades", specs: "Especificaciones", analytics: "Análisis", faq: "FAQ", doc: "Documentación", contact: "Contacto" },
    legal: { mentions: "Aviso legal", privacy: "Política de privacidad", terms: "Condiciones de uso", prosensor_site: "Sitio de Prosensor" },
    hours: { title: "Horario:", weekdays: "Lunes - Viernes: 9:00 - 18:00", weekend: "Sábado - Domingo: Cerrado" },
    copyright: "© 2025 Prosensor. Todos los derechos reservados.",
  },
  form: {
    labels: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      company: "Empresa",
      message: "Mensaje (Opcional)",
      submit: "Enviar",
      sending: "Enviando...",
      placeholders: {
        name: "Introduce tu nombre",
        email: "Introduce tu email",
        phone: "Tu número",
        company: "Tu empresa",
        message: "Cuéntanos tus necesidades de control de temperatura...",
      }
    },
    messages: {
      name_min: "El nombre debe tener al menos 2 caracteres",
      email_invalid: "Email no válido",
      phone_min: "El teléfono debe tener al menos 10 dígitos",
      company_min: "La empresa debe tener al menos 2 caracteres",
      success: "¡Solicitud enviada con éxito!",
      error: "Ha ocurrido un error. Inténtalo de nuevo.",
    }
  },
  header: { appButton: "Plataforma" },
}

const de: Translations = {
  nav: {
    home: "Start",
    features: "Funktionen",
    specs: "Spezifikationen",
    analytics: "Analyse",
    faq: "FAQ",
    doc: "Dokumentation",
    contact: "Kontakt",
  },
  hero: {
    title_highlight: "Kompostierung",
    title_rest: "Temperatursonde für",
    subtitle_line1: "Prosensor optimiert das Kompost-Monitoring mit zuverlässigen Temperatursensoren.",
    subtitle_line2: "Mit einer intuitiven Oberfläche verbessern Sie Prozesse und sichern konstante Qualität.",
    cta: "Demo anfordern",
    features: [
      { iconKey: "thermometer", label: "Präzise Messung" },
      { iconKey: "bell", label: "SMS-/E-Mail-Benachrichtigungen" },
      { iconKey: "map", label: "Sonden nach Standort zuordnen" },
    ],
  },
  features: {
    heading: "Wichtige Funktionen zur Vereinfachung",
    heading_highlight: " Ihrer Produktion",
    subheading: "Entdecken Sie die Temperaturüberwachung im Kompostierungsprozess mit GreenSensor",
    cta: "Demo anfordern",
    cards: [
      { iconKey: "thermometer", title: "Präzise Messung", desc: "Erhalten Sie genaue Temperaturwerte für Ihren Kompost." },
      { iconKey: "bell", title: "Individuelle Warnungen", desc: "Konfigurieren Sie E-Mail-/SMS-Warnungen bei Grenzwertüberschreitung." },
      { iconKey: "shield", title: "Hygiene", desc: "Stellen Sie sicher, dass der Kompost die erforderliche Sicherheitstemperatur erreicht." },
      { iconKey: "chart", title: "Datenanalyse", desc: "Analysieren Sie Temperaturtrends zur Prozessoptimierung." },
    ],
  },
  keyFeatures: {
    heading: "Schlüssel-",
    heading_highlight: "Funktionen",
    connector: "von",
    paragraph: "Erstellung von Fermentations-/Reifekampagnen, Zuordnung von Sonden zu Mieten, Zielverfolgung, Datenexport, Berichtsdruck und SMS-/E-Mail-Warnungen bei Anomalien.",
    items: [
      { iconKey: "thermometer", label: "Messung" },
      { iconKey: "chart", label: "Analyse" },
      { iconKey: "bell", label: "Warnungen" },
      { iconKey: "lock", label: "Sicherheit", highlight: true },
    ],
    cta: "Demo anfordern",
  },
  faq: {
    heading: "Häufige",
    heading_highlight: "Fragen",
    items: [
      { q: "Wie sichtbar ist die Sonde?", a: "Die Sonde wurde für bessere Sichtbarkeit optimiert. Details finden Sie im Datenblatt." },
      { q: "Wie viele Sensoren hat eine Sonde?", a: "Jede Sonde verfügt über 2 Sensoren, geprüft durch unser Engineering-Team." },
      { q: "Kann man Datenpunkte kommentieren?", a: "Ja, diese Funktion ist verfügbar." },
      { q: "Kann eine Sonde während einer Kampagne gewechselt werden?", a: "Ja, das ist möglich." },
      { q: "Was ist das Kalibrierzertifikat?", a: "Es bestätigt die Messgenauigkeit unter den vorgesehenen Einsatzbedingungen." },
      { q: "Brauche ich einen Router unter 2 km Entfernung?", a: "Das hängt von der Standortkonfiguration und Hindernissen ab." },
      { q: "Wie viele Router pro Konto sind möglich?", a: "Mehrere Standorte können in einem Konto verwaltet werden." },
      { q: "Gibt es Mengenrabatte?", a: "Ja, es gelten Staffelpreise je nach Menge." },
      { q: "Wie erfolgt der Batteriewechsel?", a: "Die Laufzeit ist lang, ein Wechsel kann mit Prosensor-Unterstützung geplant werden." },
      { q: "Gibt es ein Limit an Sonden pro Router?", a: "Kein fixes Limit, abhängig von der Systemauslegung." },
      { q: "Wofür gelten Aktivierungskosten?", a: "Aktivierungskosten gelten pro Abrechnungs-/Standortkonto." },
      { q: "Ist die Routeranzahl pro Konto begrenzt?", a: "Je nach Projekt können technische Grenzen gelten." },
    ],
    cta: "Demo anfordern",
  },
  demo: {
    heading: "Demo",
    heading_highlight: "anfordern",
    paragraph: "Entdecken Sie Prosensor in der Praxis und wie unsere Temperatursonden Ihre Kompostprozesse optimieren.",
    hq_title: "Hauptsitz: ",
    hq_company: "Prosensor",
    address: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur",
    contact_title: "Kontakt",
    phone_label: "Telefon:",
    phone_value: "+33 3 87 53 53 53",
    email_label: "E-Mail:",
    email_value: "info@prosensor.com",
  },
  download: {
    heading: "Lösung für die",
    heading_highlight: "Kompostüberwachung",
    paragraph: "Unser System kombiniert hochpräzise Sonden, sichere Konnektivität und eine leistungsstarke Cloud-Plattform für Echtzeitmonitoring.",
    bullets: [
      "Kabellose Sonden mit ±0,5°C Genauigkeit",
      "Sichere und zuverlässige Datenübertragung",
      "Automatische Warnungen und Berichte",
    ],
    cta: "Demo anfordern",
  },
  run: {
    heading_line1: "Optimieren Sie Ihre",
    heading_highlight: "Produktion",
    heading_line2: "von Kompost",
    paragraph_line1: "Prosensor bietet alle Werkzeuge zur Vereinfachung Ihrer Prozesse",
    paragraph_line2: "und zur Automatisierung wiederkehrender Aufgaben bei gleichbleibender Qualität.",
    advantages: [
      "Präzise Temperaturmessung bis ±0,5°C",
      "Intuitive Oberfläche in Echtzeit",
      "Anpassbare Warnungen je Prozessschritt",
      "Kampagnenberichte und Datenexport",
      "Einfache Installation und schneller Start",
    ],
    image_alt: "Prosensor-Sonde im Komposteinsatz",
  },
  footer: {
    description: "GreenSensor ist eine innovative Lösung zur Temperaturüberwachung in Kompostierungsprozessen.",
    useful_links: "Nützliche Links",
    legal_info: "Rechtliches",
    nav: { home: "Start", features: "Funktionen", specs: "Spezifikationen", analytics: "Analyse", faq: "FAQ", doc: "Dokumentation", contact: "Kontakt" },
    legal: { mentions: "Impressum", privacy: "Datenschutz", terms: "Nutzungsbedingungen", prosensor_site: "Prosensor-Website" },
    hours: { title: "Öffnungszeiten:", weekdays: "Montag - Freitag: 9:00 - 18:00", weekend: "Samstag - Sonntag: Geschlossen" },
    copyright: "© 2025 Prosensor. Alle Rechte vorbehalten.",
  },
  form: {
    labels: {
      name: "Name",
      email: "E-Mail",
      phone: "Telefonnummer",
      company: "Unternehmen",
      message: "Nachricht (Optional)",
      submit: "Senden",
      sending: "Wird gesendet...",
      placeholders: {
        name: "Name eingeben",
        email: "E-Mail eingeben",
        phone: "Ihre Nummer",
        company: "Ihr Unternehmen",
        message: "Beschreiben Sie Ihren Bedarf zur Temperaturüberwachung...",
      }
    },
    messages: {
      name_min: "Name muss mindestens 2 Zeichen enthalten",
      email_invalid: "Ungültige E-Mail-Adresse",
      phone_min: "Telefonnummer muss mindestens 10 Ziffern haben",
      company_min: "Unternehmen muss mindestens 2 Zeichen enthalten",
      success: "Anfrage erfolgreich gesendet!",
      error: "Ein Fehler ist aufgetreten. Bitte erneut versuchen.",
    }
  },
  header: { appButton: "Plattform" },
}

const pt: Translations = {
  nav: {
    home: "Início",
    features: "Funcionalidades",
    specs: "Especificações",
    analytics: "Análise",
    faq: "FAQ",
    doc: "Documentação",
    contact: "Contacto",
  },
  hero: {
    title_highlight: "Compostagem",
    title_rest: "Sonda de temperatura para",
    subtitle_line1: "A Prosensor melhora a monitorização da compostagem com sondas de temperatura fiáveis.",
    subtitle_line2: "Com uma interface intuitiva, otimize o processo e garanta qualidade constante.",
    cta: "Pedir demonstração",
    features: [
      { iconKey: "thermometer", label: "Medição precisa" },
      { iconKey: "bell", label: "Alertas SMS / Email" },
      { iconKey: "map", label: "Atribuição por localização" },
    ],
  },
  features: {
    heading: "Funcionalidades-chave para simplificar",
    heading_highlight: " a sua produção",
    subheading: "Descubra a monitorização de temperatura no processo de compostagem com GreenSensor",
    cta: "Pedir demonstração",
    cards: [
      { iconKey: "thermometer", title: "Medição precisa", desc: "Obtenha leituras de temperatura precisas para o seu composto." },
      { iconKey: "bell", title: "Alertas personalizados", desc: "Configure alertas por email/SMS quando os limites forem ultrapassados." },
      { iconKey: "shield", title: "Higiene", desc: "Garanta que o composto atinge a temperatura de segurança necessária." },
      { iconKey: "chart", title: "Análise de dados", desc: "Analise tendências de temperatura para otimizar a produção." },
    ],
  },
  keyFeatures: {
    heading: "Funcionalidades",
    heading_highlight: "Principais",
    connector: "do",
    paragraph: "Criação de campanhas de fermentação ou maturação, atribuição de sondas a leiras, acompanhamento de objetivos, exportação de dados, relatórios e alertas SMS/Email em caso de anomalia.",
    items: [
      { iconKey: "thermometer", label: "Medição" },
      { iconKey: "chart", label: "Análise" },
      { iconKey: "bell", label: "Alertas" },
      { iconKey: "lock", label: "Segurança", highlight: true },
    ],
    cta: "Pedir demonstração",
  },
  faq: {
    heading: "Perguntas",
    heading_highlight: "Frequentes",
    items: [
      { q: "Qual é a visibilidade da sonda?", a: "A sonda foi otimizada para melhor visibilidade. Consulte a ficha técnica para detalhes." },
      { q: "Quantos sensores tem cada sonda?", a: "Cada sonda integra 2 sensores, validado pela nossa equipa de engenharia." },
      { q: "É possível comentar pontos de dados?", a: "Sim, essa funcionalidade está disponível." },
      { q: "Pode-se trocar a sonda durante uma campanha?", a: "Sim, essa funcionalidade está validada." },
      { q: "O que é o certificado de calibração?", a: "Comprova a precisão da medição nas condições de uso previstas." },
      { q: "Se o escritório estiver a menos de 2 km, preciso de router?", a: "Depende da configuração do local e de obstáculos." },
      { q: "Quantos routers por conta são possíveis?", a: "É possível gerir vários locais numa única conta." },
      { q: "Existem descontos por volume?", a: "Sim, existem preços escalonados conforme quantidade." },
      { q: "Como é feita a troca de bateria?", a: "A autonomia é longa e a substituição pode ser planeada com apoio Prosensor." },
      { q: "Há limite de sondas por router?", a: "Não há limite fixo; depende do dimensionamento." },
      { q: "A ativação aplica-se a conta, router ou sonda?", a: "A ativação aplica-se por conta/local de faturação." },
      { q: "O número de routers por conta é limitado?", a: "Pode haver limites técnicos conforme o projeto." },
    ],
    cta: "Pedir demonstração",
  },
  demo: {
    heading: "Peça uma",
    heading_highlight: "Demonstração",
    paragraph: "Veja a Prosensor em ação e como as nossas sondas podem otimizar o seu processo de compostagem.",
    hq_title: "Sede: ",
    hq_company: "Prosensor",
    address: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur",
    contact_title: "Contacto",
    phone_label: "Telefone:",
    phone_value: "+33 3 87 53 53 53",
    email_label: "Email:",
    email_value: "info@prosensor.com",
  },
  download: {
    heading: "Solução para o",
    heading_highlight: "Acompanhamento da Compostagem",
    paragraph: "O nosso sistema integra sondas de alta precisão, conectividade segura e plataforma cloud para monitorização em tempo real.",
    bullets: [
      "Sondas sem fios precisas a ±0,5°C",
      "Transmissão de dados segura e fiável",
      "Alertas e relatórios automáticos",
    ],
    cta: "Pedir demonstração",
  },
  run: {
    heading_line1: "Otimize a sua",
    heading_highlight: "produção",
    heading_line2: "de composto",
    paragraph_line1: "A Prosensor oferece todas as ferramentas para simplificar o seu processo",
    paragraph_line2: "e automatizar tarefas repetitivas com qualidade consistente.",
    advantages: [
      "Medição precisa até ±0,5°C",
      "Interface intuitiva em tempo real",
      "Alertas personalizáveis por etapa",
      "Relatórios e exportação de campanhas",
      "Instalação fácil e rápida",
    ],
    image_alt: "Sonda Prosensor em operação na compostagem",
  },
  footer: {
    description: "GreenSensor é uma solução inovadora para monitorização de temperatura no processo de compostagem.",
    useful_links: "Links úteis",
    legal_info: "Informação legal",
    nav: { home: "Início", features: "Funcionalidades", specs: "Especificações", analytics: "Análise", faq: "FAQ", doc: "Documentação", contact: "Contacto" },
    legal: { mentions: "Aviso legal", privacy: "Política de privacidade", terms: "Condições de utilização", prosensor_site: "Site da Prosensor" },
    hours: { title: "Horário:", weekdays: "Segunda - Sexta: 9:00 - 18:00", weekend: "Sábado - Domingo: Fechado" },
    copyright: "© 2025 Prosensor. Todos os direitos reservados.",
  },
  form: {
    labels: {
      name: "Nome",
      email: "Email",
      phone: "Telefone",
      company: "Empresa",
      message: "Mensagem (Opcional)",
      submit: "Enviar",
      sending: "A enviar...",
      placeholders: {
        name: "Introduza o seu nome",
        email: "Introduza o seu email",
        phone: "O seu número",
        company: "A sua empresa",
        message: "Fale-nos das suas necessidades de controlo de temperatura...",
      }
    },
    messages: {
      name_min: "O nome deve ter pelo menos 2 caracteres",
      email_invalid: "Email inválido",
      phone_min: "O telefone deve ter pelo menos 10 dígitos",
      company_min: "A empresa deve ter pelo menos 2 caracteres",
      success: "Pedido enviado com sucesso!",
      error: "Ocorreu um erro. Tente novamente.",
    }
  },
  header: { appButton: "Plataforma" },
}

const ro: Translations = {
  nav: {
    home: "Acasă",
    features: "Funcționalități",
    specs: "Specificații",
    analytics: "Analiză",
    faq: "FAQ",
    doc: "Documentație",
    contact: "Contact",
  },
  hero: {
    title_highlight: "Compost",
    title_rest: "Sondă de temperatură pentru",
    subtitle_line1: "Prosensor îmbunătățește monitorizarea compostării cu sonde de temperatură fiabile.",
    subtitle_line2: "Cu o interfață intuitivă, optimizați procesul și asigurați o calitate constantă.",
    cta: "Solicită o demonstrație",
    features: [
      { iconKey: "thermometer", label: "Măsurare precisă" },
      { iconKey: "bell", label: "Alerte SMS / Email" },
      { iconKey: "map", label: "Atribuire pe locație" },
    ],
  },
  features: {
    heading: "Funcționalități cheie pentru a simplifica",
    heading_highlight: " producția dvs.",
    subheading: "Descoperiți monitorizarea temperaturii în procesul de compostare cu GreenSensor",
    cta: "Solicită o demonstrație",
    cards: [
      { iconKey: "thermometer", title: "Măsurare precisă", desc: "Obțineți citiri precise ale temperaturii pentru compostul dvs." },
      { iconKey: "bell", title: "Alerte personalizate", desc: "Configurați alerte prin email/SMS când pragurile sunt depășite." },
      { iconKey: "shield", title: "Igienă", desc: "Asigurați că compostul atinge temperatura necesară de siguranță." },
      { iconKey: "chart", title: "Analiza datelor", desc: "Analizați tendințele de temperatură pentru optimizarea producției." },
    ],
  },
  keyFeatures: {
    heading: "Funcționalități",
    heading_highlight: "Cheie",
    connector: "pentru",
    paragraph: "Crearea campaniilor de fermentare sau maturare, atribuirea sondelor la grămezi, urmărirea obiectivelor, export de date, rapoarte și alerte SMS/Email în caz de anomalie.",
    items: [
      { iconKey: "thermometer", label: "Măsurare" },
      { iconKey: "chart", label: "Analiză" },
      { iconKey: "bell", label: "Alerte" },
      { iconKey: "lock", label: "Securitate", highlight: true },
    ],
    cta: "Solicită o demonstrație",
  },
  faq: {
    heading: "Întrebări",
    heading_highlight: "Frecvente",
    items: [
      { q: "Care este vizibilitatea sondei?", a: "Sonda a fost optimizată pentru vizibilitate. Consultați fișa tehnică pentru detalii." },
      { q: "Câți senzori are fiecare sondă?", a: "Fiecare sondă include 2 senzori, validați de echipa noastră tehnică." },
      { q: "Se pot comenta punctele de date?", a: "Da, această funcționalitate este disponibilă." },
      { q: "Se poate schimba sonda în timpul unei campanii?", a: "Da, această funcționalitate este validată." },
      { q: "Ce este certificatul de calibrare?", a: "Confirmă precizia măsurării în condițiile de utilizare prevăzute." },
      { q: "Dacă biroul este la mai puțin de 2 km, mai este necesar routerul?", a: "Depinde de configurația locației și de obstacole." },
      { q: "Câte routere per cont sunt posibile?", a: "Se pot gestiona mai multe locații într-un singur cont." },
      { q: "Există reduceri pentru volume mari?", a: "Da, există tarife descrescătoare în funcție de cantitate." },
      { q: "Cum se face schimbarea bateriei?", a: "Autonomia este ridicată, iar înlocuirea poate fi planificată cu suport Prosensor." },
      { q: "Există limită de sonde per router?", a: "Nu există limită fixă; depinde de dimensionare." },
      { q: "Taxa de activare se aplică pe cont, router sau sondă?", a: "Activarea se aplică per cont/locație de facturare." },
      { q: "Numărul de routere per cont este limitat?", a: "Pot exista limite tehnice în funcție de proiect." },
    ],
    cta: "Solicită o demonstrație",
  },
  demo: {
    heading: "Solicitați o",
    heading_highlight: "Demonstrație",
    paragraph: "Vedeți Prosensor în acțiune și cum sondele noastre vă pot optimiza procesul de compostare.",
    hq_title: "Sediu: ",
    hq_company: "Prosensor",
    address: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur",
    contact_title: "Contact",
    phone_label: "Telefon:",
    phone_value: "+33 3 87 53 53 53",
    email_label: "Email:",
    email_value: "info@prosensor.com",
  },
  download: {
    heading: "Soluție pentru",
    heading_highlight: "Monitorizarea Compostării",
    paragraph: "Sistemul nostru integrează sonde de înaltă precizie, conectivitate securizată și platformă cloud pentru monitorizare în timp real.",
    bullets: [
      "Sonde wireless precise la ±0,5°C",
      "Transmitere securizată și fiabilă a datelor",
      "Alerte și rapoarte automate",
    ],
    cta: "Solicită o demonstrație",
  },
  run: {
    heading_line1: "Optimizați-vă",
    heading_highlight: "producția",
    heading_line2: "de compost",
    paragraph_line1: "Prosensor oferă toate instrumentele pentru a simplifica procesul",
    paragraph_line2: "și a automatiza sarcinile repetitive cu o calitate constantă.",
    advantages: [
      "Măsurare precisă până la ±0,5°C",
      "Interfață intuitivă în timp real",
      "Alerte personalizabile pe etape",
      "Rapoarte și export de campanii",
      "Instalare rapidă și simplă",
    ],
    image_alt: "Sondă Prosensor în operare la compostare",
  },
  footer: {
    description: "GreenSensor este o soluție inovatoare pentru monitorizarea temperaturii în procesul de compostare.",
    useful_links: "Linkuri utile",
    legal_info: "Informații legale",
    nav: { home: "Acasă", features: "Funcționalități", specs: "Specificații", analytics: "Analiză", faq: "FAQ", doc: "Documentație", contact: "Contact" },
    legal: { mentions: "Mențiuni legale", privacy: "Politica de confidențialitate", terms: "Termeni de utilizare", prosensor_site: "Site Prosensor" },
    hours: { title: "Program:", weekdays: "Luni - Vineri: 9:00 - 18:00", weekend: "Sâmbătă - Duminică: Închis" },
    copyright: "© 2025 Prosensor. Toate drepturile rezervate.",
  },
  form: {
    labels: {
      name: "Nume",
      email: "Email",
      phone: "Telefon",
      company: "Companie",
      message: "Mesaj (Opțional)",
      submit: "Trimite",
      sending: "Se trimite...",
      placeholders: {
        name: "Introduceți numele dvs.",
        email: "Introduceți emailul dvs.",
        phone: "Numărul dvs.",
        company: "Compania dvs.",
        message: "Spuneți-ne nevoile dvs. de monitorizare a temperaturii...",
      }
    },
    messages: {
      name_min: "Numele trebuie să aibă cel puțin 2 caractere",
      email_invalid: "Email invalid",
      phone_min: "Telefonul trebuie să aibă cel puțin 10 cifre",
      company_min: "Compania trebuie să aibă cel puțin 2 caractere",
      success: "Cererea a fost trimisă cu succes!",
      error: "A apărut o eroare. Încercați din nou.",
    }
  },
  header: { appButton: "Platformă" },
}

const dictionaries: Record<Language, Translations> = { fr, en, es, de, pt, ro }

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
    if (stored === "fr" || stored === "en" || stored === "es" || stored === "de" || stored === "pt" || stored === "ro") {
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
        document.documentElement.lang = lang
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


