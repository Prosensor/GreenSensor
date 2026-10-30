import type { MetadataRoute } from "next"
import { getArticleList } from "@/lib/articles"

const BASE_URL = "https://greensensor.fr"
const LANGS = ["fr", "en", "es", "de", "pt", "ro"] as const
const HREFLANG: Record<(typeof LANGS)[number], string> = {
  fr: "fr-FR",
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  pt: "pt-PT",
  ro: "ro-RO",
}

type Entry = MetadataRoute.Sitemap[number]

// Même jeu d'alternates que les `alternates.languages` des pages.
function withLanguages(path: string): Entry["alternates"] {
  const languages: Record<string, string> = Object.fromEntries(
    LANGS.map((lang) => [HREFLANG[lang], `${BASE_URL}${path}?lang=${lang}`])
  )
  languages["x-default"] = `${BASE_URL}${path}`
  return { languages }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const pageDefs: (Pick<Entry, "priority" | "changeFrequency"> & { path: string })[] = [
    { path: "", priority: 1, changeFrequency: "weekly" },
    { path: "/documentation", priority: 0.8, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.8, changeFrequency: "monthly" },
    { path: "/articles", priority: 0.8, changeFrequency: "weekly" },
    { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
  ]

  const pages: Entry[] = pageDefs.map(({ path, ...rest }) => ({
    url: `${BASE_URL}${path}`,
    alternates: withLanguages(path),
    ...rest,
  }))

  const legal: Entry[] = ["/mentions-legales", "/politique-confidentialite", "/cgu"].map(
    (path) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency: "yearly",
      priority: 0.3,
    })
  )

  const articles: Entry[] = getArticleList().map((article) => ({
    url: `${BASE_URL}/articles/${article.slug}`,
    lastModified: article.publishedAt,
    alternates: withLanguages(`/articles/${article.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
  }))

  return [...pages, ...articles, ...legal]
}
