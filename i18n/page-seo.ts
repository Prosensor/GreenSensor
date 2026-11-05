import type { Lang } from "@/lib/i18n-routing"
import type { PageSeo } from "@/lib/seo"

/** Titres et descriptions de référencement des pages, par langue. Les pages « Qui sommes-nous » et « Contact » ont les leurs dans leur fichier de textes. */
export type SeoPage = "home" | "faq" | "articles" | "documentation" | "mentions" | "cgu" | "privacy"

export const pageSeo: Record<SeoPage, Record<Lang, PageSeo>> = {
  home: {
    fr: {
      title: "GreenSensor - Sonde de température pour le compostage",
      description: "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques.",
    },
    en: {
      title: "GreenSensor - Temperature probe for composting",
      description: "Discover GreenSensor, the temperature probe for composting and fermentation. Connected probes, cloud platform and automated alerts.",
    },
    es: {
      title: "GreenSensor - Sonda de temperatura para compostaje",
      description: "Descubre GreenSensor, la sonda de temperatura para compostaje y fermentación. Sondas conectadas, plataforma cloud y alertas automáticas.",
    },
    de: {
      title: "GreenSensor - Temperaturfühler für Kompostierung",
      description: "Entdecken Sie GreenSensor, den Temperaturfühler für Kompostierung und Fermentation. Vernetzte Sonden, Cloud-Plattform und automatische Warnungen.",
    },
    pt: {
      title: "GreenSensor - Sonda de temperatura para compostagem",
      description: "Descubra o GreenSensor, a sonda de temperatura para compostagem e fermentação. Sondas conectadas, plataforma cloud e alertas automáticos.",
    },
    ro: {
      title: "GreenSensor - Sondă de temperatură pentru compostare",
      description: "Descoperiți GreenSensor, sonda de temperatură pentru compostare și fermentare. Sonde conectate, platformă cloud și alerte automate.",
    },
  },
  faq: {
    fr: {
      title: "FAQ GreenSensor - Loi AGEC, tri biodéchets et compostage connecté",
      description: "Toutes les réponses sur GreenSensor et la loi AGEC : tri des biodéchets, obligations entreprises et collectivités, installation, conformité, alertes et exploitation terrain.",
      ogTitle: "FAQ GreenSensor",
      ogDescription: "FAQ complète GreenSensor : loi AGEC, tri des biodéchets, sondes connectées, conformité, alertes et suivi du compostage.",
    },
    en: {
      title: "GreenSensor FAQ - Frequently asked questions for connected composting",
      description: "All answers about GreenSensor: installation, compliance, alerts, router, reporting and field operations for composting.",
      ogTitle: "GreenSensor FAQ",
      ogDescription: "Complete GreenSensor FAQ: connected probes, compliance, alerts and composting monitoring.",
    },
    es: {
      title: "FAQ GreenSensor - Preguntas frecuentes sobre compostaje conectado",
      description: "Todas las respuestas sobre GreenSensor: instalación, cumplimiento, alertas, router, informes y operación en campo para compostaje.",
      ogTitle: "FAQ GreenSensor",
      ogDescription: "FAQ completa de GreenSensor: sondas conectadas, cumplimiento, alertas y seguimiento del compostaje.",
    },
    de: {
      title: "GreenSensor FAQ - Häufige Fragen zur vernetzten Kompostierung",
      description: "Alle Antworten zu GreenSensor: Installation, Compliance, Warnungen, Router, Berichte und Einsatz im Feld.",
      ogTitle: "GreenSensor FAQ",
      ogDescription: "Vollständige GreenSensor-FAQ: vernetzte Sonden, Compliance, Warnungen und Kompostierungsüberwachung.",
    },
    pt: {
      title: "FAQ GreenSensor - Perguntas frequentes sobre compostagem conectada",
      description: "Todas as respostas sobre GreenSensor: instalação, conformidade, alertas, router, relatórios e operação no terreno.",
      ogTitle: "FAQ GreenSensor",
      ogDescription: "FAQ completa GreenSensor: sondas conectadas, conformidade, alertas e monitorização da compostagem.",
    },
    ro: {
      title: "FAQ GreenSensor - Întrebări frecvente despre compostarea conectată",
      description: "Toate răspunsurile despre GreenSensor: instalare, conformitate, alerte, router, rapoarte și operare în teren.",
      ogTitle: "FAQ GreenSensor",
      ogDescription: "FAQ complet GreenSensor: sonde conectate, conformitate, alerte și monitorizarea compostării.",
    },
  },
  articles: {
    fr: {
      title: "Articles - compostage, capteurs et exploitation | GreenSensor",
      description: "Articles sur le compostage connecté, la mesure terrain et le pilotage de production, autour de GreenSensor.",
      ogTitle: "Articles GreenSensor",
      ogDescription: "Ressources sur le suivi du compostage et l’exploitation connectée.",
    },
    en: {
      title: "Articles - composting, sensors and operations | GreenSensor",
      description: "Articles on connected composting, field measurement, temperature and gas monitoring, aligned with GreenSensor.",
      ogTitle: "GreenSensor articles",
      ogDescription: "Resources on composting monitoring and connected operations.",
    },
    es: {
      title: "Artículos - compostaje, sensores y operación | GreenSensor",
      description: "Artículos sobre compostaje conectado, medición en campo y monitorización, en el ecosistema GreenSensor.",
      ogTitle: "Artículos GreenSensor",
      ogDescription: "Recursos sobre compostaje conectado y operación.",
    },
    de: {
      title: "Artikel - Kompostierung, Sensoren und Betrieb | GreenSensor",
      description: "Artikel zu vernetztem Kompostieren, Feldmessung und Monitoring im GreenSensor-Ökosystem.",
      ogTitle: "GreenSensor Artikel",
      ogDescription: "Ressourcen zu Kompostüberwachung und vernetztem Betrieb.",
    },
    pt: {
      title: "Artigos - compostagem, sensores e operação | GreenSensor",
      description: "Artigos sobre compostagem ligada, medição em campo e monitorização no ecossistema GreenSensor.",
      ogTitle: "Artigos GreenSensor",
      ogDescription: "Recursos sobre monitorização da compostagem.",
    },
    ro: {
      title: "Articole - compostare, senzori și exploatare | GreenSensor",
      description: "Articole despre compostarea conectată, măsurători în teren și monitorizare în ecosistemul GreenSensor.",
      ogTitle: "Articole GreenSensor",
      ogDescription: "Resurse despre monitorizarea compostării.",
    },
  },
  documentation: {
    fr: {
      title: "Documentation technique - Passerelle et connexion réseau | GreenSensor",
      description: "Documentation complète GreenSensor : brancher la passerelle, la connecter à Internet, allumer et planter la sonde, puis créer vos objectifs, phases et campagnes.",
      ogTitle: "Documentation technique - GreenSensor",
      ogDescription: "Documentation passerelle et connexion réseau pour la solution GreenSensor.",
    },
    en: {
      title: "Technical documentation - Gateway and network connection | GreenSensor",
      description: "Complete GreenSensor documentation: plug in the gateway, connect it to the Internet, switch on and push in the probe, then create your objectives, phases and campaigns.",
      ogTitle: "Technical documentation - GreenSensor",
      ogDescription: "Gateway and network connection documentation for the GreenSensor solution.",
    },
    es: {
      title: "Documentación técnica - Pasarela y conexión de red | GreenSensor",
      description: "Documentación completa de GreenSensor: conectar la pasarela, conectarla a Internet, encender y clavar la sonda, y crear sus objetivos, fases y campañas.",
      ogTitle: "Documentación técnica - GreenSensor",
      ogDescription: "Documentación de pasarela y conexión de red para la solución GreenSensor.",
    },
    de: {
      title: "Technische Dokumentation - Gateway und Netzwerkverbindung | GreenSensor",
      description: "Vollständige GreenSensor-Dokumentation: Gateway anschließen, mit dem Internet verbinden, Sonde einschalten und einstecken, dann Ziele, Phasen und Kampagnen anlegen.",
      ogTitle: "Technische Dokumentation - GreenSensor",
      ogDescription: "Dokumentation für Gateway- und Netzwerkverbindung der GreenSensor-Lösung.",
    },
    pt: {
      title: "Documentação técnica - Gateway e ligação de rede | GreenSensor",
      description: "Documentação completa GreenSensor: ligar o gateway, ligá-lo à Internet, ligar e cravar a sonda, e criar os seus objetivos, fases e campanhas.",
      ogTitle: "Documentação técnica - GreenSensor",
      ogDescription: "Documentação de gateway e ligação de rede para a solução GreenSensor.",
    },
    ro: {
      title: "Documentație tehnică - Gateway și conexiune de rețea | GreenSensor",
      description: "Documentație completă GreenSensor: conectarea gateway-ului, conectarea la internet, pornirea și înfigerea sondei, apoi crearea obiectivelor, fazelor și campaniilor.",
      ogTitle: "Documentație tehnică - GreenSensor",
      ogDescription: "Documentație gateway și conexiune de rețea pentru soluția GreenSensor.",
    },
  },
  mentions: {
    fr: {
      title: "Mentions Légales GreenSensor - Informations Éditeur et Hébergement | Prosensor",
      description: "Consultez les mentions légales complètes du site GreenSensor par Prosensor. Découvrez nos informations éditeur, hébergement, propriété intellectuelle et responsabilité pour une transparence totale sur nos services IoT.",
      ogTitle: "Mentions légales - GreenSensor",
      ogDescription: "Consultez les mentions légales du site GreenSensor : éditeur, hébergeur, propriété intellectuelle, responsabilité et contact.",
    },
    en: {
      title: "Legal Notice - GreenSensor",
      description: "Legal notice for the GreenSensor website: publisher, hosting, intellectual property, liability, and contact.",
    },
    es: {
      title: "Aviso legal - GreenSensor",
      description: "Aviso legal del sitio GreenSensor: editor, alojamiento, propiedad intelectual, responsabilidad y contacto.",
    },
    de: {
      title: "Impressum - GreenSensor",
      description: "Impressum der GreenSensor-Website: Herausgeber, Hosting, geistiges Eigentum, Haftung und Kontakt.",
    },
    pt: {
      title: "Aviso legal - GreenSensor",
      description: "Aviso legal do site GreenSensor: editor, alojamento, propriedade intelectual, responsabilidade e contacto.",
    },
    ro: {
      title: "Mențiuni legale - GreenSensor",
      description: "Mențiuni legale ale site-ului GreenSensor: editor, găzduire, proprietate intelectuală, responsabilitate și contact.",
    },
  },
  cgu: {
    fr: {
      title: "CGU GreenSensor - Conditions Générales d'Utilisation | Prosensor",
      description: "Consultez les conditions générales d'utilisation complètes du site GreenSensor par Prosensor. Découvrez nos règles d'accès, propriété intellectuelle, responsabilité et droit applicable pour une utilisation transparente de nos services IoT.",
      ogTitle: "Conditions Générales d'Utilisation - GreenSensor",
      ogDescription: "Consultez les conditions générales d'utilisation du site GreenSensor : accès, propriété intellectuelle, responsabilité, droit applicable.",
    },
    en: {
      title: "Terms of Use - GreenSensor",
      description: "Terms of use for the GreenSensor website: access, IP, liability, governing law.",
    },
    es: {
      title: "Condiciones de uso - GreenSensor",
      description: "Condiciones de uso del sitio GreenSensor: acceso, propiedad intelectual, responsabilidad y ley aplicable.",
    },
    de: {
      title: "Nutzungsbedingungen - GreenSensor",
      description: "Nutzungsbedingungen der GreenSensor-Website: Zugang, geistiges Eigentum, Haftung und anwendbares Recht.",
    },
    pt: {
      title: "Condições de utilização - GreenSensor",
      description: "Condições de utilização do site GreenSensor: acesso, propriedade intelectual, responsabilidade e lei aplicável.",
    },
    ro: {
      title: "Termeni de utilizare - GreenSensor",
      description: "Termeni de utilizare ai site-ului GreenSensor: acces, proprietate intelectuală, responsabilitate și lege aplicabilă.",
    },
  },
  privacy: {
    fr: {
      title: "Politique de Confidentialité GreenSensor - Protection des Données RGPD | Prosensor",
      description: "Découvrez la politique de confidentialité complète de GreenSensor par Prosensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT pour le compostage.",
      ogTitle: "Politique de Confidentialité GreenSensor - Protection des Données RGPD",
      ogDescription: "Découvrez la politique de confidentialité complète de GreenSensor par Prosensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT.",
    },
    en: {
      title: "Privacy Policy - GreenSensor",
      description: "GreenSensor privacy policy: GDPR compliance, user rights, security and data handling.",
    },
    es: {
      title: "Política de privacidad - GreenSensor",
      description: "Política de privacidad de GreenSensor: cumplimiento RGPD, derechos de usuarios, seguridad y tratamiento de datos.",
    },
    de: {
      title: "Datenschutzerklärung - GreenSensor",
      description: "Datenschutzerklärung von GreenSensor: DSGVO-Konformität, Nutzerrechte, Sicherheit und Datenverarbeitung.",
    },
    pt: {
      title: "Política de privacidade - GreenSensor",
      description: "Política de privacidade da GreenSensor: conformidade RGPD, direitos dos utilizadores, segurança e tratamento de dados.",
    },
    ro: {
      title: "Politica de confidențialitate - GreenSensor",
      description: "Politica de confidențialitate GreenSensor: conformitate RGPD, drepturile utilizatorilor, securitate și prelucrarea datelor.",
    },
  },
}
