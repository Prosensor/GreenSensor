import type { Metadata } from "next"
import { cookies } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactPageContent } from "@/components/contact/contact-page-content"
import { contactPageCopy, type ContactLang } from "@/i18n/contact-page"

const LANGS: ContactLang[] = ["fr", "en", "es", "de", "pt", "ro"]
const LOCALES: Record<ContactLang, string> = { fr: "fr_FR", en: "en_US", es: "es_ES", de: "de_DE", pt: "pt_PT", ro: "ro_RO" }

export async function generateMetadata(): Promise<Metadata> {
  const cookieLang = (await cookies()).get("language")?.value as ContactLang | undefined
  const lang: ContactLang = cookieLang && LANGS.includes(cookieLang) ? cookieLang : "fr"
  const c = contactPageCopy[lang]
  const url = "https://greensensor.fr/contact"

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
    openGraph: { title: c.seoTitle, description: c.seoDescription, url, siteName: "GreenSensor", locale: LOCALES[lang], type: "website" },
  }
}

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <ContactPageContent />
      </main>
      <SiteFooter />
    </>
  )
}
