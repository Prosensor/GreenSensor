import type { ArticleBody, ArticleDefinition, ArticleLanguage, ArticleSlug } from "./types"
import { ARTICLES } from "./articles-data"

export function getAllArticleSlugs(): ArticleSlug[] {
  return ARTICLES.map((a) => a.slug)
}

export function getArticleBySlug(slug: string): ArticleDefinition | undefined {
  return ARTICLES.find((a) => a.slug === slug)
}

export function getArticleList(): ArticleDefinition[] {
  return [...ARTICLES].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
}

export function resolveArticleBody(def: ArticleDefinition, lang: ArticleLanguage): ArticleBody {
  return def.body[lang] ?? def.body.en ?? def.body.fr
}

export function resolveArticleSeo(def: ArticleDefinition, lang: ArticleLanguage) {
  return def.seo[lang] ?? def.seo.en ?? def.seo.fr
}

export function resolveReadingMinutes(def: ArticleDefinition, lang: ArticleLanguage): number {
  return def.readingMinutes[lang] ?? def.readingMinutes.en ?? def.readingMinutes.fr
}
