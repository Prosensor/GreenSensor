import { LiveHero } from "@/components/live-hero"
import { TrustBand } from "@/components/trust-band"
import { ChallengeSection } from "@/components/challenge-section"
import { ChainSection } from "@/components/chain-section"
import { CurveSection } from "@/components/curve-section"
import { ReportSection } from "@/components/report-section"
import { SpecsSection } from "@/components/specs-section"
import { PlatformSection } from "@/components/platform-section"
import { WhySection } from "@/components/why-section"
import { FaqSection } from "@/components/faq-section"
import { DemoSection } from "@/components/demo-section"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"
import type { Metadata, Viewport } from "next"
import { cookies } from "next/headers"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        <LiveHero />
        <TrustBand />
        <ChallengeSection />
        <ChainSection />
        <CurveSection />
        <ReportSection />
        <SpecsSection />
        <PlatformSection />
        <WhySection />
        <FaqSection />
        <DemoSection />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  )
}

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

  const common = {
    alternates: {
      canonical: "https://greensensor.fr",
      languages: {
        "fr-FR": "https://greensensor.fr/?lang=fr",
        "en-US": "https://greensensor.fr/?lang=en",
        "es-ES": "https://greensensor.fr/?lang=es",
        "de-DE": "https://greensensor.fr/?lang=de",
        "pt-PT": "https://greensensor.fr/?lang=pt",
        "ro-RO": "https://greensensor.fr/?lang=ro",
        "x-default": "https://greensensor.fr",
      },
    },
    twitter: {
      card: "summary_large_image" as const,
      images: ["https://greensensor.fr/GreenSensor_Logo.jpg"],
      creator: "@greensensor",
    },
    openGraphImage: [{ url: "https://greensensor.fr/GreenSensor_Logo.jpg", width: 800, height: 600, alt: "GreenSensor Logo" }],
  }

  if (lang === "en") {
    const title = "GreenSensor - Temperature probe for composting"
    const description = "Discover GreenSensor, the temperature probe for composting and fermentation. Connected probes, cloud platform and automated alerts."
    return {
      title,
      description,
      alternates: common.alternates,
      openGraph: { title, description, url: "https://greensensor.fr", siteName: "GreenSensor", images: common.openGraphImage, locale: "en_US", type: "website" },
      twitter: { ...common.twitter, title, description },
    }
  }
  if (lang === "es") {
    const title = "GreenSensor - Sonda de temperatura para compostaje"
    const description = "Descubre GreenSensor, la sonda de temperatura para compostaje y fermentación. Sondas conectadas, plataforma cloud y alertas automáticas."
    return {
      title,
      description,
      alternates: common.alternates,
      openGraph: { title, description, url: "https://greensensor.fr", siteName: "GreenSensor", images: common.openGraphImage, locale: "es_ES", type: "website" },
      twitter: { ...common.twitter, title, description },
    }
  }
  if (lang === "de") {
    const title = "GreenSensor - Temperaturfühler für Kompostierung"
    const description = "Entdecken Sie GreenSensor, den Temperaturfühler für Kompostierung und Fermentation. Vernetzte Sonden, Cloud-Plattform und automatische Warnungen."
    return {
      title,
      description,
      alternates: common.alternates,
      openGraph: { title, description, url: "https://greensensor.fr", siteName: "GreenSensor", images: common.openGraphImage, locale: "de_DE", type: "website" },
      twitter: { ...common.twitter, title, description },
    }
  }
  if (lang === "pt") {
    const title = "GreenSensor - Sonda de temperatura para compostagem"
    const description = "Descubra o GreenSensor, a sonda de temperatura para compostagem e fermentação. Sondas conectadas, plataforma cloud e alertas automáticos."
    return {
      title,
      description,
      alternates: common.alternates,
      openGraph: { title, description, url: "https://greensensor.fr", siteName: "GreenSensor", images: common.openGraphImage, locale: "pt_PT", type: "website" },
      twitter: { ...common.twitter, title, description },
    }
  }
  if (lang === "ro") {
    const title = "GreenSensor - Sondă de temperatură pentru compostare"
    const description = "Descoperiți GreenSensor, sonda de temperatură pentru compostare și fermentare. Sonde conectate, platformă cloud și alerte automate."
    return {
      title,
      description,
      alternates: common.alternates,
      openGraph: { title, description, url: "https://greensensor.fr", siteName: "GreenSensor", images: common.openGraphImage, locale: "ro_RO", type: "website" },
      twitter: { ...common.twitter, title, description },
    }
  }

  const title = "GreenSensor - Sonde de température pour le compostage"
  const description = "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques."
  return {
    title,
    description,
    alternates: common.alternates,
    openGraph: { title, description, url: "https://greensensor.fr", siteName: "GreenSensor", images: common.openGraphImage, locale: "fr_FR", type: "website" },
    twitter: { ...common.twitter, title, description },
  }
}

export function generateViewport(): Viewport {
  return {
    themeColor: "#1b4a2a",
  }
}

