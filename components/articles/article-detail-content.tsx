"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import {
  getArticleBySlug,
  resolveArticleBody,
  resolveReadingMinutes,
  type ArticleSlug,
} from "@/lib/articles"

type ArticleDetailContentProps = {
  slug: ArticleSlug
}

export function ArticleDetailContent({ slug }: ArticleDetailContentProps) {
  const { language, t } = useI18n()
  const ah = t.articlesHub
  const def = getArticleBySlug(slug)
  if (!def) return null

  const body = resolveArticleBody(def, language)
  const mins = resolveReadingMinutes(def, language)

  const dateLocale =
    language === "fr"
      ? "fr-FR"
      : language === "es"
        ? "es-ES"
        : language === "de"
          ? "de-DE"
          : language === "pt"
            ? "pt-PT"
            : language === "ro"
              ? "ro-RO"
              : "en-US"

  const dateStr = new Intl.DateTimeFormat(dateLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(def.publishedAt))

  const related = def.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter(Boolean)
    .map((a) => ({
      slug: a!.slug,
      title: resolveArticleBody(a!, language).title,
    }))

  return (
    <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 max-w-3xl">
      <Link
        href="/articles"
        className="inline-flex items-center gap-2 text-sm font-medium text-[#3eab35] hover:text-[#2f8a29] mb-8 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        {ah?.back ?? "All articles"}
      </Link>

      <header className="mb-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-4">
          <time dateTime={def.publishedAt}>
            {ah?.published ?? "Published"} {dateStr}
          </time>
          <span aria-hidden>·</span>
          <span>
            {mins} {ah?.minRead ?? "min read"}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-primary tracking-tight leading-tight">
          {body.title}
        </h1>
      </header>

      <div className="max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed mb-8">{body.intro}</p>

        {body.sections.map((section) => (
          <section key={section.heading} className="mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">{section.heading}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={`${section.heading}-${i}`} className="text-gray-700 leading-relaxed mb-4 last:mb-0">
                {p}
              </p>
            ))}
          </section>
        ))}

        <p className="text-gray-800 leading-relaxed font-medium border-l-4 border-[#6fdc63] pl-4 py-1 my-10">
          {body.conclusion}
        </p>
      </div>

      {related.length > 0 && (
        <aside className="mt-14 pt-10 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-primary mb-4">{ah?.related ?? "Related articles"}</h2>
          <ul className="space-y-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/articles/${r.slug}`}
                  className="text-[#3eab35] hover:text-[#2f8a29] font-medium transition-colors"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  )
}
