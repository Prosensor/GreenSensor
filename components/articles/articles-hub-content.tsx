"use client"

import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { getArticleList, resolveArticleBody, resolveReadingMinutes } from "@/lib/articles"

function excerpt(text: string, max = 180) {
  const t = text.replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  return `${t.slice(0, max).trim()}…`
}

export function ArticlesHubContent() {
  const { language, t } = useI18n()
  const ah = t.articlesHub
  const list = getArticleList()

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

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
      <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-[#3eab35] transition-colors">
          {t.nav.home}
        </Link>
        <span className="mx-2" aria-hidden>
          /
        </span>
        <span className="text-gray-700 font-medium">{t.nav.articles}</span>
      </nav>

      <header className="rounded-3xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex items-start gap-4">
          <div className="hidden sm:flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#3eab35]/10 text-[#3eab35]">
            <BookOpen className="h-6 w-6" aria-hidden />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{ah.heading}</h1>
            <p className="text-[#3eab35] mt-2 font-medium">{ah.subtitle}</p>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-3xl">{ah.intro}</p>
            <p className="mt-4 text-sm text-gray-600">
              {list.length} {ah.countSuffix}
            </p>
          </div>
        </div>
      </header>

      {list.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-gray-300 bg-white px-6 py-12 text-center text-gray-600">
          {ah.empty}
        </p>
      ) : (
        <ul className="grid gap-6 lg:grid-cols-2">
          {list.map((article) => {
            const body = resolveArticleBody(article, language)
            const mins = resolveReadingMinutes(article, language)
            const dateStr = new Intl.DateTimeFormat(dateLocale, {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(article.publishedAt))

            return (
              <li key={article.slug} className="flex">
                <article className="flex flex-col w-full rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-sm hover:border-[#3eab35]/40 hover:shadow-md transition-all">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 mb-3">
                    <time dateTime={article.publishedAt}>
                      {ah.published} {dateStr}
                    </time>
                    <span aria-hidden>·</span>
                    <span>
                      {mins} {ah.minRead}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link
                      href={`/articles/${article.slug}`}
                      className="hover:text-[#3eab35] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3eab35]/40 rounded-sm"
                    >
                      {body.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-5 text-sm sm:text-base flex-1">
                    {excerpt(body.intro)}
                  </p>
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#3eab35] hover:text-[#2f8a29] transition-colors mt-auto"
                  >
                    {ah.readMore}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </article>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
