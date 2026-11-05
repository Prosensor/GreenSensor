import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleDetailContent } from "@/components/articles/article-detail-content"
import {
  getAllArticleSlugs,
  getArticleBySlug,
  getArticleLanguages,
  resolveArticleSeo,
} from "@/lib/articles"
import { LANGS, isLang } from "@/lib/i18n-routing"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return LANGS.flatMap((lang) => getAllArticleSlugs().map((slug) => ({ lang, slug })))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}): Promise<Metadata> {
  const { lang, slug } = await params
  if (!isLang(lang)) return {}
  const article = getArticleBySlug(slug)
  if (!article) {
    return { title: "Article | GreenSensor" }
  }

  return pageMetadata(lang, `/articles/${article.slug}`, resolveArticleSeo(article, lang), {
    type: "article",
    languages: getArticleLanguages(article),
  })
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <>
      <SiteHeader />
      <main id="main">
        <ArticleDetailContent slug={article.slug} />
      </main>
      <SiteFooter />
    </>
  )
}
