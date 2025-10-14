import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { CguContent } from "@/components/legal/cgu-content"
import { cookies } from "next/headers"

// metadata is generated dynamically below

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const lang = cookieStore.get('language')?.value === 'en' ? 'en' : 'fr'
  if (lang === 'en') {
    return {
      title: "Terms of Use - GreenSensor",
      description: "Terms of use for the GreenSensor website: access, IP, liability, governing law.",
      openGraph: {
        title: "Terms of Use - GreenSensor",
        description: "Terms of use for the GreenSensor website: access, IP, liability, governing law.",
        url: "https://greensensor.fr/cgu",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "article",
      },
    }
  }
  return {
    title: "CGU GreenSensor - Conditions Générales d'Utilisation | Prosensor",
    description: "Consultez les conditions générales d'utilisation complètes du site GreenSensor par Prosensor. Découvrez nos règles d'accès, propriété intellectuelle, responsabilité et droit applicable pour une utilisation transparente de nos services IoT.",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Conditions Générales d'Utilisation - GreenSensor",
      description: "Consultez les conditions générales d'utilisation du site GreenSensor : accès, propriété intellectuelle, responsabilité, droit applicable.",
      url: "https://greensensor.fr/cgu",
      siteName: "GreenSensor",
      locale: "fr_FR",
      type: "article",
    },
  }
}

export default function CGU() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl py-16 px-4">
        <CguContent />
      </main>
      <SiteFooter />
    </>
  )
}