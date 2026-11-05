import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ContactPageContent } from "@/components/contact/contact-page-content"
import { contactPageCopy } from "@/i18n/contact-page"
import { isLang } from "@/lib/i18n-routing"
import { pageMetadata } from "@/lib/seo"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  const c = contactPageCopy[lang]
  return pageMetadata(lang, "/contact", { title: c.seoTitle, description: c.seoDescription })
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
