import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { PrivacyContent } from "@/components/legal/privacy-content"
import { cookies } from "next/headers"

// metadata is generated dynamically below

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('language')?.value === 'en' ? 'en' : 'fr'
  if (lang === 'en') {
    return {
      title: "Privacy Policy - GreenSensor",
      description: "GreenSensor privacy policy: GDPR compliance, user rights, security and data handling.",
      openGraph: {
        title: "Privacy Policy - GreenSensor",
        description: "GreenSensor privacy policy: GDPR compliance, user rights, security and data handling.",
        url: "https://greensensor.fr/politique-confidentialite",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "article",
      },
    }
  }
  return {
    title: "Politique de Confidentialité GreenSensor - Protection des Données RGPD | ProSensor",
    description: "Découvrez la politique de confidentialité complète de GreenSensor par ProSensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT pour le compostage.",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Politique de Confidentialité GreenSensor - Protection des Données RGPD",
      description: "Découvrez la politique de confidentialité complète de GreenSensor par ProSensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT.",
      url: "https://greensensor.fr/politique-confidentialite",
      siteName: "GreenSensor",
      locale: "fr_FR",
      type: "article",
    },
  }
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl py-16 px-4">
        <PrivacyContent />
      </main>
      <SiteFooter />
    </>
  )
}
