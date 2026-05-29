import type { Metadata } from "next"
import { cookies } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticlesHubContent } from "@/components/articles/articles-hub-content"

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
    canonical: "https://greensensor.fr/articles",
    languages: {
      "fr-FR": "https://greensensor.fr/articles?lang=fr",
      "en-US": "https://greensensor.fr/articles?lang=en",
      "es-ES": "https://greensensor.fr/articles?lang=es",
      "de-DE": "https://greensensor.fr/articles?lang=de",
      "pt-PT": "https://greensensor.fr/articles?lang=pt",
      "ro-RO": "https://greensensor.fr/articles?lang=ro",
      "x-default": "https://greensensor.fr/articles",
    },
  }

  if (lang === "en") {
    return {
      title: "Articles - composting, sensors and operations | GreenSensor",
      description:
        "Articles on connected composting, field measurement, temperature and gas monitoring, aligned with GreenSensor.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "GreenSensor articles",
        description: "Resources on composting monitoring and connected operations.",
        url: "https://greensensor.fr/articles",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "website",
      },
    }
  }
  if (lang === "es") {
    return {
      title: "Artículos - compostaje, sensores y operación | GreenSensor",
      description:
        "Artículos sobre compostaje conectado, medición en campo y monitorización, en el ecosistema GreenSensor.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Artículos GreenSensor",
        description: "Recursos sobre compostaje conectado y operación.",
        url: "https://greensensor.fr/articles",
        siteName: "GreenSensor",
        locale: "es_ES",
        type: "website",
      },
    }
  }
  if (lang === "de") {
    return {
      title: "Artikel - Kompostierung, Sensoren und Betrieb | GreenSensor",
      description:
        "Artikel zu vernetztem Kompostieren, Feldmessung und Monitoring im GreenSensor-Ökosystem.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "GreenSensor Artikel",
        description: "Ressourcen zu Kompostüberwachung und vernetztem Betrieb.",
        url: "https://greensensor.fr/articles",
        siteName: "GreenSensor",
        locale: "de_DE",
        type: "website",
      },
    }
  }
  if (lang === "pt") {
    return {
      title: "Artigos - compostagem, sensores e operação | GreenSensor",
      description:
        "Artigos sobre compostagem ligada, medição em campo e monitorização no ecossistema GreenSensor.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Artigos GreenSensor",
        description: "Recursos sobre monitorização da compostagem.",
        url: "https://greensensor.fr/articles",
        siteName: "GreenSensor",
        locale: "pt_PT",
        type: "website",
      },
    }
  }
  if (lang === "ro") {
    return {
      title: "Articole - compostare, senzori și exploatare | GreenSensor",
      description:
        "Articole despre compostarea conectată, măsurători în teren și monitorizare în ecosistemul GreenSensor.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Articole GreenSensor",
        description: "Resurse despre monitorizarea compostării.",
        url: "https://greensensor.fr/articles",
        siteName: "GreenSensor",
        locale: "ro_RO",
        type: "website",
      },
    }
  }

  return {
    title: "Articles - compostage, capteurs et exploitation | GreenSensor",
    description:
      "Articles sur le compostage connecté, la mesure terrain et le pilotage de production, autour de GreenSensor.",
    robots: { index: true, follow: true },
    alternates,
    openGraph: {
      title: "Articles GreenSensor",
      description: "Ressources sur le suivi du compostage et l’exploitation connectée.",
      url: "https://greensensor.fr/articles",
      siteName: "GreenSensor",
      locale: "fr_FR",
      type: "website",
    },
  }
}

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gray-50/50">
        <ArticlesHubContent />
      </main>
      <SiteFooter />
    </>
  )
}
