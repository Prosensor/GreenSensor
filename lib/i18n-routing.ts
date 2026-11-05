/**
 * Routage par langue : le français reste à la racine (`/faq`), les autres langues ont un préfixe (`/en/faq`).
 * Module sans dépendance, utilisé côté serveur (middleware, métadonnées, sitemap) comme côté client.
 */
export const LANGS = ["fr", "en", "es", "de", "pt", "ro"] as const
export type Lang = (typeof LANGS)[number]

export const DEFAULT_LANG: Lang = "fr"
export const SITE_URL = "https://greensensor.fr"

/** Cookie posé par le sélecteur de langue : un visiteur qui a choisi une langue la retrouve à l'adresse sans préfixe. */
export const LANG_COOKIE = "language"

export const HREFLANG: Record<Lang, string> = {
  fr: "fr-FR",
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
  pt: "pt-PT",
  ro: "ro-RO",
}

export const OG_LOCALE: Record<Lang, string> = {
  fr: "fr_FR",
  en: "en_US",
  es: "es_ES",
  de: "de_DE",
  pt: "pt_PT",
  ro: "ro_RO",
}

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value)
}

/**
 * Préfixe une adresse interne avec la langue : `/faq` → `/en/faq`, `/` → `/en`, `/#demo` → `/en#demo`.
 * Le français n'a pas de préfixe. Les ancres seules, les adresses externes, `mailto:` et `tel:` restent inchangés.
 */
export function localizePath(lang: Lang, href: string): string {
  if (!href.startsWith("/") || href.startsWith("//") || lang === DEFAULT_LANG) return href
  const cut = href.search(/[?#]/)
  const path = cut === -1 ? href : href.slice(0, cut)
  const rest = cut === -1 ? "" : href.slice(cut)
  return `/${lang}${path === "/" ? "" : path}${rest}`
}

/** Enlève le préfixe de langue d'un chemin : `/en/faq` → `{ lang: "en", path: "/faq" }`, `/faq` → `{ lang: null, path: "/faq" }`. */
export function stripLang(pathname: string): { lang: Lang | null; path: string } {
  const [, first, ...rest] = pathname.split("/")
  if (!isLang(first)) return { lang: null, path: pathname || "/" }
  return { lang: first, path: rest.length ? `/${rest.join("/")}` : "/" }
}

/** Adresse absolue d'une page dans une langue (sans barre finale pour l'accueil). */
export function absoluteUrl(lang: Lang, path: string): string {
  const localized = localizePath(lang, path)
  return localized === "/" ? SITE_URL : `${SITE_URL}${localized}`
}

/** Ensemble hreflang d'une page : une adresse par langue, `x-default` sur le français. */
export function languageAlternates(path: string, langs: readonly Lang[] = LANGS): Record<string, string> {
  const languages: Record<string, string> = Object.fromEntries(langs.map((l) => [HREFLANG[l], absoluteUrl(l, path)]))
  languages["x-default"] = absoluteUrl(DEFAULT_LANG, path)
  return languages
}
