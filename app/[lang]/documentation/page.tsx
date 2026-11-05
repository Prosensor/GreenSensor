import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { pageSeo } from "@/i18n/page-seo"
import { isLang } from "@/lib/i18n-routing"
import { pageMetadata } from "@/lib/seo"
import { DocumentationContent } from "@/components/documentation/documentation-content"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return pageMetadata(lang, "/documentation", pageSeo.documentation[lang], { type: "article" })
}

export default function DocumentationPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <DocumentationContent />
      </main>
      <SiteFooter />
    </>
  )
}
