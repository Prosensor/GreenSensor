import type { Metadata } from "next"
import { cookies } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { MobileCta } from "@/components/mobile-cta"
import { AboutPageContent } from "@/components/about/about-page-content"
import { aboutPageCopy, type AboutLang } from "@/i18n/about-page"

const LANGS: AboutLang[] = ["fr", "en", "es", "de", "pt", "ro"]
const LOCALES: Record<AboutLang, string> = { fr: "fr_FR", en: "en_US", es: "es_ES", de: "de_DE", pt: "pt_PT", ro: "ro_RO" }

export async function generateMetadata(): Promise<Metadata> {
  const cookieLang = (await cookies()).get("language")?.value as AboutLang | undefined
  const lang: AboutLang = cookieLang && LANGS.includes(cookieLang) ? cookieLang : "fr"
  const c = aboutPageCopy[lang]
  const url = "https://greensensor.fr/qui-sommes-nous"

  return {
    title: c.seoTitle,
    description: c.seoDescription,
    robots: { index: true, follow: true },
    alternates: {
      canonical: url,
      languages: {
        "fr-FR": `${url}?lang=fr`,
        "en-US": `${url}?lang=en`,
        "es-ES": `${url}?lang=es`,
        "de-DE": `${url}?lang=de`,
        "pt-PT": `${url}?lang=pt`,
        "ro-RO": `${url}?lang=ro`,
        "x-default": url,
      },
    },
    openGraph: {
      title: c.seoTitle,
      description: c.seoDescription,
      url,
      siteName: "GreenSensor",
      locale: LOCALES[lang],
      type: "website",
      images: [{ url: "https://greensensor.fr/usine-prosensor.jpg", width: 1792, height: 1024, alt: c.photoAlt }],
    },
  }
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="flex-1">
        <AboutPageContent />
      </main>
      <SiteFooter />
      <MobileCta />
    </div>
  )
}
