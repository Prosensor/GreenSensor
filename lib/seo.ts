import type { Metadata } from "next"
import { DEFAULT_LANG, LANGS, OG_LOCALE, SITE_URL, absoluteUrl, languageAlternates, type Lang } from "@/lib/i18n-routing"

export type PageSeo = {
  title: string
  description: string
  /** Titre et description pour les aperçus de liens, quand ils diffèrent de ceux de Google. */
  ogTitle?: string
  ogDescription?: string
}

type OpenGraphImages = NonNullable<Metadata["openGraph"]>["images"]

export const DEFAULT_OG_IMAGE = { url: `${SITE_URL}/GreenSensor_Logo.jpg`, width: 800, height: 600, alt: "GreenSensor Logo" }

type Options = {
  type?: "website" | "article"
  images?: OpenGraphImages
  /**
   * Langues dans lesquelles la page existe vraiment. Seules elles figurent dans les balises hreflang ;
   * une autre langue affiche la page mais pointe en canonique vers la version anglaise (ou française).
   */
  languages?: readonly Lang[]
}

/** Métadonnées d'une page pour une langue : titre, canonique, hreflang, aperçus Open Graph et Twitter. */
export function pageMetadata(lang: Lang, path: string, seo: PageSeo, options: Options = {}): Metadata {
  const { type = "website", images = [DEFAULT_OG_IMAGE], languages = LANGS } = options
  const canonicalLang = languages.includes(lang) ? lang : languages.includes("en") ? "en" : DEFAULT_LANG
  const canonical = absoluteUrl(canonicalLang, path)
  const ogTitle = seo.ogTitle ?? seo.title
  const ogDescription = seo.ogDescription ?? seo.description

  return {
    title: seo.title,
    description: seo.description,
    robots: { index: true, follow: true },
    alternates: { canonical, languages: languageAlternates(path, languages) },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonical,
      siteName: "GreenSensor",
      locale: OG_LOCALE[lang],
      type,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [DEFAULT_OG_IMAGE.url],
      creator: "@greensensor",
    },
  }
}
