import type { Metadata } from "next"
import { pageSeo } from "@/i18n/page-seo"
import { isLang } from "@/lib/i18n-routing"
import { pageMetadata } from "@/lib/seo"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FaqPageContent } from "@/components/faq/faq-page-content"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return pageMetadata(lang, "/faq", pageSeo.faq[lang], { type: "article" })
}

export default function FaqPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <FaqPageContent />
      </main>
      <SiteFooter />
    </>
  )
}

