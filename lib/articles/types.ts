export type ArticleSlug = "mesurer-temperature-andain-compost"

export type ArticleLanguage = "fr" | "en" | "es" | "de" | "pt" | "ro"

export type ArticleSection = {
  heading: string
  paragraphs: string[]
  /** Liste courte affichée après les paragraphes. */
  bullets?: string[]
}

export type ArticleBody = {
  title: string
  intro: string
  /** Trois à quatre points à retenir, affichés avant l'article. */
  takeaways?: string[]
  sections: ArticleSection[]
  conclusion: string
}

export type ArticleCover = {
  src: string
  /** Cadrage de l'image dans sa vignette (valeur CSS object-position). */
  position?: string
}

export type ArticleDefinition = {
  slug: ArticleSlug
  publishedAt: string
  cover: ArticleCover
  readingMinutes: Partial<Record<ArticleLanguage, number>> & { fr: number; en: number }
  relatedSlugs: ArticleSlug[]
  seo: Record<ArticleLanguage, { title: string; description: string }>
  body: Partial<Record<ArticleLanguage, ArticleBody>> & { fr: ArticleBody; en: ArticleBody }
}
