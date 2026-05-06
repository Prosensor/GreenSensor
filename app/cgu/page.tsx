import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { CguContent } from "@/components/legal/cgu-content"
import { cookies } from "next/headers"

// metadata is generated dynamically below

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const cookieLang = cookieStore.get('language')?.value
  const lang = cookieLang === 'en' ? 'en' : cookieLang === 'es' ? 'es' : cookieLang === 'de' ? 'de' : cookieLang === 'pt' ? 'pt' : cookieLang === 'ro' ? 'ro' : 'fr'
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
  if (lang === 'es') {
    return {
      title: "Condiciones de uso - GreenSensor",
      description: "Condiciones de uso del sitio GreenSensor: acceso, propiedad intelectual, responsabilidad y ley aplicable.",
      openGraph: {
        title: "Condiciones de uso - GreenSensor",
        description: "Condiciones de uso del sitio GreenSensor: acceso, propiedad intelectual, responsabilidad y ley aplicable.",
        url: "https://greensensor.fr/cgu",
        siteName: "GreenSensor",
        locale: "es_ES",
        type: "article",
      },
    }
  }
  if (lang === 'de') {
    return {
      title: "Nutzungsbedingungen - GreenSensor",
      description: "Nutzungsbedingungen der GreenSensor-Website: Zugang, geistiges Eigentum, Haftung und anwendbares Recht.",
      openGraph: {
        title: "Nutzungsbedingungen - GreenSensor",
        description: "Nutzungsbedingungen der GreenSensor-Website: Zugang, geistiges Eigentum, Haftung und anwendbares Recht.",
        url: "https://greensensor.fr/cgu",
        siteName: "GreenSensor",
        locale: "de_DE",
        type: "article",
      },
    }
  }
  if (lang === 'pt') {
    return {
      title: "Condições de utilização - GreenSensor",
      description: "Condições de utilização do site GreenSensor: acesso, propriedade intelectual, responsabilidade e lei aplicável.",
      openGraph: {
        title: "Condições de utilização - GreenSensor",
        description: "Condições de utilização do site GreenSensor: acesso, propriedade intelectual, responsabilidade e lei aplicável.",
        url: "https://greensensor.fr/cgu",
        siteName: "GreenSensor",
        locale: "pt_PT",
        type: "article",
      },
    }
  }
  if (lang === 'ro') {
    return {
      title: "Termeni de utilizare - GreenSensor",
      description: "Termeni de utilizare ai site-ului GreenSensor: acces, proprietate intelectuală, responsabilitate și lege aplicabilă.",
      openGraph: {
        title: "Termeni de utilizare - GreenSensor",
        description: "Termeni de utilizare ai site-ului GreenSensor: acces, proprietate intelectuală, responsabilitate și lege aplicabilă.",
        url: "https://greensensor.fr/cgu",
        siteName: "GreenSensor",
        locale: "ro_RO",
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