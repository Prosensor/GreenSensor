import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { RunSection } from "@/components/run-section"
import { KeyFeaturesSection } from "@/components/key-features-section"
import { DownloadSection } from "@/components/download-section"
import { FaqSection } from "@/components/faq-section"
import { DemoSection } from "@/components/demo-section"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { cookies } from "next/headers"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <RunSection />
        <KeyFeaturesSection />
        <DownloadSection />
        <FaqSection />
        <DemoSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('language')?.value === 'en' ? 'en' : 'fr'
  if (lang === 'en') {
    return {
      title: "GreenSensor - Temperature probe for composting",
      description: "Discover GreenSensor: connected temperature probes, cloud platform, alerts and analytics for composting and fermentation.",
      openGraph: {
        title: "GreenSensor - Temperature probe for composting",
        description: "Discover GreenSensor: connected temperature probes, cloud platform, alerts and analytics.",
        url: "https://greensensor.fr",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: "GreenSensor - Temperature probe for composting",
        description: "Discover GreenSensor: connected temperature probes, cloud platform, alerts and analytics.",
        images: ["https://greensensor.fr/GreenSensor_Logo.jpg"],
        creator: "@greensensor",
      },
      themeColor: "#3eab35",
    }
  }
  return {
    title: "GreenSensor - Sonde de température pour le compostage",
    description: "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques.",
    openGraph: {
      title: "GreenSensor - Sonde de température pour le compostage",
      description: "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques.",
      url: "https://greensensor.fr",
      siteName: "GreenSensor",
      images: [{ url: "https://greensensor.fr/GreenSensor_Logo.jpg", width: 800, height: 600, alt: "GreenSensor Logo" }],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "GreenSensor - Sonde de température pour le compostage",
      description: "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques.",
      images: ["https://greensensor.fr/GreenSensor_Logo.jpg"],
      creator: "@greensensor",
    },
    themeColor: "#3eab35",
  }
}

