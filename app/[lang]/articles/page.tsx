import type { Metadata } from "next"
import { pageSeo } from "@/i18n/page-seo"
import { isLang } from "@/lib/i18n-routing"
import { pageMetadata } from "@/lib/seo"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticlesHubContent } from "@/components/articles/articles-hub-content"

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  if (!isLang(lang)) return {}
  return pageMetadata(lang, "/articles", pageSeo.articles[lang], { type: "website" })
}

export default function ArticlesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <ArticlesHubContent />
      </main>
      <SiteFooter />
    </>
  )
}
