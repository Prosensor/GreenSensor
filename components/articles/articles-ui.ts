import type { ArticleLanguage } from "@/lib/articles"

/** Libellés propres aux pages articles, dans les 6 langues. */
export const ARTICLES_UI: Record<ArticleLanguage, { toc: string; takeaways: string; featured: string; ctaTitle: string; ctaText: string; locale: string }> = {
  fr: { toc: "Dans cet article", takeaways: "À retenir", featured: "À la une", ctaTitle: "Un projet de suivi de température ?", ctaText: "Un conseiller Prosensor vous présente GreenSensor et répond à vos questions.", locale: "fr-FR" },
  en: { toc: "In this article", takeaways: "Key takeaways", featured: "Featured", ctaTitle: "A temperature monitoring project?", ctaText: "A Prosensor advisor will present GreenSensor and answer your questions.", locale: "en-US" },
  es: { toc: "En este artículo", takeaways: "Lo esencial", featured: "Destacado", ctaTitle: "¿Un proyecto de seguimiento de temperatura?", ctaText: "Un asesor de Prosensor le presenta GreenSensor y responde a sus preguntas.", locale: "es-ES" },
  de: { toc: "In diesem Artikel", takeaways: "Das Wichtigste", featured: "Im Fokus", ctaTitle: "Ein Projekt zur Temperaturüberwachung?", ctaText: "Ein Prosensor-Berater stellt Ihnen GreenSensor vor und beantwortet Ihre Fragen.", locale: "de-DE" },
  pt: { toc: "Neste artigo", takeaways: "A reter", featured: "Em destaque", ctaTitle: "Um projeto de monitorização de temperatura?", ctaText: "Um consultor da Prosensor apresenta o GreenSensor e responde às suas perguntas.", locale: "pt-PT" },
  ro: { toc: "În acest articol", takeaways: "De reținut", featured: "În prim-plan", ctaTitle: "Un proiect de monitorizare a temperaturii?", ctaText: "Un consultant Prosensor vă prezintă GreenSensor și răspunde întrebărilor dvs.", locale: "ro-RO" },
}

export const formatDate = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, { year: "numeric", month: "long", day: "numeric" }).format(new Date(iso))
