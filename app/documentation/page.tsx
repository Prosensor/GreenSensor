import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { DocumentationContent } from "@/components/documentation/documentation-content"
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
    canonical: "https://greensensor.fr/documentation",
    languages: {
      "fr-FR": "https://greensensor.fr/documentation?lang=fr",
      "en-US": "https://greensensor.fr/documentation?lang=en",
      "es-ES": "https://greensensor.fr/documentation?lang=es",
      "de-DE": "https://greensensor.fr/documentation?lang=de",
      "pt-PT": "https://greensensor.fr/documentation?lang=pt",
      "ro-RO": "https://greensensor.fr/documentation?lang=ro",
      "x-default": "https://greensensor.fr/documentation",
    },
  }

  if (lang === "en") {
    return {
      title: "Technical documentation - Gateway and network connection | GreenSensor",
      description: "Complete GreenSensor documentation: LoRaWAN LPS8-V2 gateway, network connection (WiFi, Ethernet), Web UI, LED indicators and troubleshooting.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Technical documentation - GreenSensor",
        description: "Gateway and network connection documentation for the GreenSensor solution.",
        url: "https://greensensor.fr/documentation",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "article",
      },
    }
  }
  if (lang === "es") {
    return {
      title: "Documentación técnica - Pasarela y conexión de red | GreenSensor",
      description: "Documentación completa de GreenSensor: pasarela LoRaWAN LPS8-V2, conexión de red (WiFi, Ethernet), interfaz Web UI, indicadores LED y soporte.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Documentación técnica - GreenSensor",
        description: "Documentación de pasarela y conexión de red para la solución GreenSensor.",
        url: "https://greensensor.fr/documentation",
        siteName: "GreenSensor",
        locale: "es_ES",
        type: "article",
      },
    }
  }
  if (lang === "de") {
    return {
      title: "Technische Dokumentation - Gateway und Netzwerkverbindung | GreenSensor",
      description: "Vollständige GreenSensor-Dokumentation: LoRaWAN LPS8-V2 Gateway, Netzwerkverbindung (WLAN, Ethernet), Web UI, LED-Anzeigen und Fehlerbehebung.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Technische Dokumentation - GreenSensor",
        description: "Dokumentation für Gateway- und Netzwerkverbindung der GreenSensor-Lösung.",
        url: "https://greensensor.fr/documentation",
        siteName: "GreenSensor",
        locale: "de_DE",
        type: "article",
      },
    }
  }
  if (lang === "pt") {
    return {
      title: "Documentação técnica - Gateway e ligação de rede | GreenSensor",
      description: "Documentação completa GreenSensor: gateway LoRaWAN LPS8-V2, ligação de rede (WiFi, Ethernet), interface Web UI, indicadores LED e resolução de problemas.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Documentação técnica - GreenSensor",
        description: "Documentação de gateway e ligação de rede para a solução GreenSensor.",
        url: "https://greensensor.fr/documentation",
        siteName: "GreenSensor",
        locale: "pt_PT",
        type: "article",
      },
    }
  }
  if (lang === "ro") {
    return {
      title: "Documentație tehnică - Gateway și conexiune de rețea | GreenSensor",
      description: "Documentație completă GreenSensor: gateway LoRaWAN LPS8-V2, conexiune de rețea (WiFi, Ethernet), interfață Web UI, indicatori LED și depanare.",
      robots: { index: true, follow: true },
      alternates,
      openGraph: {
        title: "Documentație tehnică - GreenSensor",
        description: "Documentație gateway și conexiune de rețea pentru soluția GreenSensor.",
        url: "https://greensensor.fr/documentation",
        siteName: "GreenSensor",
        locale: "ro_RO",
        type: "article",
      },
    }
  }

  return {
    title: "Documentation technique - Passerelle et connexion réseau | GreenSensor",
    description: "Documentation complète GreenSensor : passerelle LoRaWAN LPS8-V2, connexion réseau (WiFi, Ethernet), interface Web UI, indicateurs LED, dépannage. Référence pour les clients.",
    robots: { index: true, follow: true },
    alternates,
    openGraph: {
      title: "Documentation technique - GreenSensor",
      description: "Documentation passerelle et connexion réseau pour la solution GreenSensor.",
      url: "https://greensensor.fr/documentation",
      siteName: "GreenSensor",
      locale: "fr_FR",
      type: "article",
    },
  }
}

export default function DocumentationPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gray-50/50">
        <DocumentationContent />
      </main>
      <SiteFooter />
    </>
  )
}
