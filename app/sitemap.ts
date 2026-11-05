import type { MetadataRoute } from "next"
import { getArticleLanguages, getArticleList } from "@/lib/articles"
import { LANGS, absoluteUrl, languageAlternates, type Lang } from "@/lib/i18n-routing"

type Entry = MetadataRoute.Sitemap[number]
type Meta = Pick<Entry, "priority" | "changeFrequency" | "lastModified">

// Une entrée par page et par langue, chacune avec l'ensemble des versions (hreflang).
function entries(path: string, meta: Meta, langs: readonly Lang[] = LANGS): Entry[] {
  const alternates = { languages: languageAlternates(path, langs) }
  return langs.map((lang) => ({ url: absoluteUrl(lang, path), alternates, ...meta }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: ({ path: string } & Meta)[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/documentation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/articles", priority: 0.8, changeFrequency: "weekly" },
    { path: "/qui-sommes-nous", priority: 0.7, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ]

  const legal = ["/mentions-legales", "/politique-confidentialite", "/cgu"]

  // Un article n'est listé que dans les langues où il est réellement rédigé.
  const articles = getArticleList().flatMap((article) =>
    entries(
      `/articles/${article.slug}`,
      { lastModified: article.publishedAt, changeFrequency: "monthly", priority: 0.7 },
      getArticleLanguages(article),
    ),
  )

  return [
    ...pages.flatMap(({ path, ...meta }) => entries(path, meta)),
    ...articles,
    ...legal.flatMap((path) => entries(path, { changeFrequency: "yearly", priority: 0.3 })),
  ]
}
