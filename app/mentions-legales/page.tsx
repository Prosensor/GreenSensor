import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { MentionsContent } from "@/components/legal/mentions-content"
import { cookies } from "next/headers"

// metadata is generated dynamically below

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('language')?.value === 'en' ? 'en' : 'fr'
  if (lang === 'en') {
    return {
      title: "Legal Notice - GreenSensor",
      description: "Legal notice for the GreenSensor website: publisher, hosting, intellectual property, liability, and contact.",
      openGraph: {
        title: "Legal Notice - GreenSensor",
        description: "Legal notice for the GreenSensor website: publisher, hosting, intellectual property, liability, and contact.",
        url: "https://greensensor.fr/mentions-legales",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "article",
      },
    }
  }
  return {
    title: "Mentions Légales GreenSensor - Informations Éditeur et Hébergement | Prosensor",
    description: "Consultez les mentions légales complètes du site GreenSensor par Prosensor. Découvrez nos informations éditeur, hébergement, propriété intellectuelle et responsabilité pour une transparence totale sur nos services IoT.",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Mentions légales - GreenSensor",
      description: "Consultez les mentions légales du site GreenSensor : éditeur, hébergeur, propriété intellectuelle, responsabilité et contact.",
      url: "https://greensensor.fr/mentions-legales",
      siteName: "GreenSensor",
      locale: "fr_FR",
      type: "article",
    },
  }
}

export default function MentionsLegales() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl py-16 px-4">
        <MentionsContent />
      </main>
      <SiteFooter />
    </>
  )
}