export type ArticleSlug =
  | "sonde-co2-piquer-compost"
  | "temperature-co2-compostage-complementaires"

export type ArticleLanguage = "fr" | "en" | "es" | "de" | "pt" | "ro"

export type ArticleSection = {
  heading: string
  paragraphs: string[]
}

export type ArticleBody = {
  title: string
  intro: string
  sections: ArticleSection[]
  conclusion: string
}

export type ArticleDefinition = {
  slug: ArticleSlug
  publishedAt: string
  readingMinutes: Partial<Record<ArticleLanguage, number>> & { fr: number; en: number }
  relatedSlugs: ArticleSlug[]
  seo: Record<ArticleLanguage, { title: string; description: string }>
  body: Partial<Record<ArticleLanguage, ArticleBody>> & { fr: ArticleBody; en: ArticleBody }
}
