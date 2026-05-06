import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FaqPageContent } from "@/components/faq/faq-page-content"
import { cookies } from "next/headers"

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const cookieLang = cookieStore.get("language")?.value
  const lang =
    cookieLang === "en"
      ? "en"
      : cookieLang === "es"
      ? "es"
      : cookieLang === "de"
      ? "de"
      : cookieLang === "pt"
      ? "pt"
      : cookieLang === "ro"
      ? "ro"
      : "fr"

  const alternates = {
    canonical: "https://greensensor.fr/faq",
    languages: {
      "fr-FR": "https://greensensor.fr/faq?lang=fr",
      "en-US": "https://greensensor.fr/faq?lang=en",
      "es-ES": "https://greensensor.fr/faq?lang=es",
      "de-DE": "https://greensensor.fr/faq?lang=de",
      "pt-PT": "https://greensensor.fr/faq?lang=pt",
      "ro-RO": "https://greensensor.fr/faq?lang=ro",
      "x-default": "https://greensensor.fr/faq",
    },
  }

  if (lang === "en") {
    return {
      title: "GreenSensor FAQ - Frequently asked questions for connected composting",
      description: "All answers about GreenSensor: installation, compliance, alerts, router, reporting and field operations for composting.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "GreenSensor FAQ",
        description: "Complete GreenSensor FAQ: connected probes, compliance, alerts and composting monitoring.",
        url: "https://greensensor.fr/faq",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "article",
      },
    }
  }
  if (lang === "es") {
    return {
      title: "FAQ GreenSensor - Preguntas frecuentes sobre compostaje conectado",
      description: "Todas las respuestas sobre GreenSensor: instalación, cumplimiento, alertas, router, informes y operación en campo para compostaje.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "FAQ GreenSensor",
        description: "FAQ completa de GreenSensor: sondas conectadas, cumplimiento, alertas y seguimiento del compostaje.",
        url: "https://greensensor.fr/faq",
        siteName: "GreenSensor",
        locale: "es_ES",
        type: "article",
      },
    }
  }
  if (lang === "de") {
    return {
      title: "GreenSensor FAQ - Häufige Fragen zur vernetzten Kompostierung",
      description: "Alle Antworten zu GreenSensor: Installation, Compliance, Warnungen, Router, Berichte und Einsatz im Feld.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "GreenSensor FAQ",
        description: "Vollständige GreenSensor-FAQ: vernetzte Sonden, Compliance, Warnungen und Kompostierungsüberwachung.",
        url: "https://greensensor.fr/faq",
        siteName: "GreenSensor",
        locale: "de_DE",
        type: "article",
      },
    }
  }
  if (lang === "pt") {
    return {
      title: "FAQ GreenSensor - Perguntas frequentes sobre compostagem conectada",
      description: "Todas as respostas sobre GreenSensor: instalação, conformidade, alertas, router, relatórios e operação no terreno.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "FAQ GreenSensor",
        description: "FAQ completa GreenSensor: sondas conectadas, conformidade, alertas e monitorização da compostagem.",
        url: "https://greensensor.fr/faq",
        siteName: "GreenSensor",
        locale: "pt_PT",
        type: "article",
      },
    }
  }
  if (lang === "ro") {
    return {
      title: "FAQ GreenSensor - Întrebări frecvente despre compostarea conectată",
      description: "Toate răspunsurile despre GreenSensor: instalare, conformitate, alerte, router, rapoarte și operare în teren.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "FAQ GreenSensor",
        description: "FAQ complet GreenSensor: sonde conectate, conformitate, alerte și monitorizarea compostării.",
        url: "https://greensensor.fr/faq",
        siteName: "GreenSensor",
        locale: "ro_RO",
        type: "article",
      },
    }
  }

  return {
    title: "FAQ GreenSensor - Questions fréquentes compostage connecté",
    description: "Toutes les réponses sur GreenSensor : installation, conformité, alertes, routeur, rapports et exploitation terrain pour le compostage.",
    robots: { index: true, follow: true },
    alternates,
    openGraph: {
      title: "FAQ GreenSensor",
      description: "FAQ complète GreenSensor : sondes connectées, conformité, alertes et suivi du compostage.",
      url: "https://greensensor.fr/faq",
      siteName: "GreenSensor",
      locale: "fr_FR",
      type: "article",
    },
  }
}

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gray-50/50">
        <FaqPageContent />
      </main>
      <SiteFooter />
    </>
  )
}

