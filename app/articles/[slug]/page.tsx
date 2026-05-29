import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { cookies } from "next/headers"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ArticleDetailContent } from "@/components/articles/article-detail-content"
import {
  getAllArticleSlugs,
  getArticleBySlug,
  resolveArticleSeo,
  type ArticleLanguage,
} from "@/lib/articles"

export function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

function langFromCookie(cookieLang: string | undefined): ArticleLanguage {
  if (cookieLang === "en") return "en"
  if (cookieLang === "es") return "es"
  if (cookieLang === "de") return "de"
  if (cookieLang === "pt") return "pt"
  if (cookieLang === "ro") return "ro"
  return "fr"
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) {
    return { title: "Article | GreenSensor" }
  }

  const cookieStore = await cookies()
  const lang = langFromCookie(cookieStore.get("language")?.value)
  const seo = resolveArticleSeo(article, lang)
  const path = `https://greensensor.fr/articles/${article.slug}`

  const alternates = {
    canonical: path,
    languages: {
      "fr-FR": `${path}?lang=fr`,
      "en-US": `${path}?lang=en`,
      "es-ES": `${path}?lang=es`,
      "de-DE": `${path}?lang=de`,
      "pt-PT": `${path}?lang=pt`,
      "ro-RO": `${path}?lang=ro`,
      "x-default": path,
    },
  }

  const ogLocale =
    lang === "fr"
      ? "fr_FR"
      : lang === "es"
        ? "es_ES"
        : lang === "de"
          ? "de_DE"
          : lang === "pt"
            ? "pt_PT"
            : lang === "ro"
              ? "ro_RO"
              : "en_US"

  return {
    title: seo.title,
    description: seo.description,
    robots: { index: true, follow: true },
    alternates,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: path,
      siteName: "GreenSensor",
      locale: ogLocale,
      type: "article",
    },
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <>
      <SiteHeader />
      <main className="min-h-screen bg-gray-50/50">
        <ArticleDetailContent slug={article.slug} />
      </main>
      <SiteFooter />
    </>
  )
}
