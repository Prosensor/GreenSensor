import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { MentionsContent } from "@/components/legal/mentions-content"
import { cookies } from "next/headers"

// metadata is generated dynamically below

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const cookieLang = cookieStore.get('language')?.value
  const lang = cookieLang === 'en' ? 'en' : cookieLang === 'es' ? 'es' : cookieLang === 'de' ? 'de' : cookieLang === 'pt' ? 'pt' : cookieLang === 'ro' ? 'ro' : 'fr'
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
  if (lang === 'es') {
    return {
      title: "Aviso legal - GreenSensor",
      description: "Aviso legal del sitio GreenSensor: editor, alojamiento, propiedad intelectual, responsabilidad y contacto.",
      openGraph: {
        title: "Aviso legal - GreenSensor",
        description: "Aviso legal del sitio GreenSensor: editor, alojamiento, propiedad intelectual, responsabilidad y contacto.",
        url: "https://greensensor.fr/mentions-legales",
        siteName: "GreenSensor",
        locale: "es_ES",
        type: "article",
      },
    }
  }
  if (lang === 'de') {
    return {
      title: "Impressum - GreenSensor",
      description: "Impressum der GreenSensor-Website: Herausgeber, Hosting, geistiges Eigentum, Haftung und Kontakt.",
      openGraph: {
        title: "Impressum - GreenSensor",
        description: "Impressum der GreenSensor-Website: Herausgeber, Hosting, geistiges Eigentum, Haftung und Kontakt.",
        url: "https://greensensor.fr/mentions-legales",
        siteName: "GreenSensor",
        locale: "de_DE",
        type: "article",
      },
    }
  }
  if (lang === 'pt') {
    return {
      title: "Aviso legal - GreenSensor",
      description: "Aviso legal do site GreenSensor: editor, alojamento, propriedade intelectual, responsabilidade e contacto.",
      openGraph: {
        title: "Aviso legal - GreenSensor",
        description: "Aviso legal do site GreenSensor: editor, alojamento, propriedade intelectual, responsabilidade e contacto.",
        url: "https://greensensor.fr/mentions-legales",
        siteName: "GreenSensor",
        locale: "pt_PT",
        type: "article",
      },
    }
  }
  if (lang === 'ro') {
    return {
      title: "Mențiuni legale - GreenSensor",
      description: "Mențiuni legale ale site-ului GreenSensor: editor, găzduire, proprietate intelectuală, responsabilitate și contact.",
      openGraph: {
        title: "Mențiuni legale - GreenSensor",
        description: "Mențiuni legale ale site-ului GreenSensor: editor, găzduire, proprietate intelectuală, responsabilitate și contact.",
        url: "https://greensensor.fr/mentions-legales",
        siteName: "GreenSensor",
        locale: "ro_RO",
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