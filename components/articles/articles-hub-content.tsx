"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { Container } from "@/components/ui/container"
import { getArticleList, resolveArticleBody, resolveReadingMinutes, type ArticleDefinition } from "@/lib/articles"
import { ARTICLES_UI, formatDate } from "@/components/articles/articles-ui"

function excerpt(text: string, max = 170) {
  const t = text.replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max)
  return `${cut.slice(0, cut.lastIndexOf(" ")).replace(/[,;:\s]+$/, "")}…`
}

/** Hub des articles : bandeau sombre, article à la une en grand, puis les autres en cartes avec photo. */
export function ArticlesHubContent() {
  const { language, t } = useI18n()
  const ah = t.articlesHub
  const ui = ARTICLES_UI[language]
  const [featured, ...others] = getArticleList()

  const meta = (a: ArticleDefinition) => `${formatDate(a.publishedAt, ui.locale)}, ${resolveReadingMinutes(a, language)} ${ah.minRead}`

  return (
    <>
      <section aria-labelledby="articles-title" className="on-dark relative isolate overflow-hidden bg-forest-950 pb-14 pt-10 text-white md:pb-20 md:pt-14">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute -right-48 -top-24 -z-10 size-[620px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(62,171,53,0.16), transparent)" }}
        />
        <Container className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              {t.nav.home}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-white/90">{t.nav.articles}</span>
          </nav>
          <h1 id="articles-title" className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[44px] lg:text-[52px]">
            {ah.heading}
          </h1>
          <p className="max-w-2xl font-alt text-base leading-[1.6] text-white/75 md:text-lg">{ah.intro}</p>
        </Container>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <Container className="flex flex-col gap-10 md:gap-12">
          {!featured ? (
            <p className="rounded-panel border border-line bg-white p-10 text-center text-body">{ah.empty}</p>
          ) : (
            <>
              <article className="grid overflow-hidden rounded-panel bg-white shadow-[0_30px_70px_-44px_rgba(15,42,24,0.5)] ring-1 ring-line lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
                <Link href={`/articles/${featured.slug}`} aria-hidden tabIndex={-1} className="relative block min-h-[260px] lg:min-h-[400px]">
                  <Image
                    src={featured.cover.src}
                    alt=""
                    fill
                    priority
                    sizes="(min-width: 1024px) 660px, 100vw"
                    className="object-cover"
                    style={{ objectPosition: featured.cover.position }}
                  />
                </Link>
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
                  <p className="font-display text-sm font-bold text-moss-700">
                    {ui.featured}, {meta(featured)}
                  </p>
                  <h2 className="font-display text-[26px] font-extrabold leading-[1.15] tracking-[-0.01em] text-ink-strong md:text-[32px]">
                    <Link href={`/articles/${featured.slug}`} className="transition-colors hover:text-forest">
                      {resolveArticleBody(featured, language).title}
                    </Link>
                  </h2>
                  <p className="text-base leading-relaxed text-body">{excerpt(resolveArticleBody(featured, language).intro, 230)}</p>
                  <Link href={`/articles/${featured.slug}`} className="inline-flex w-fit items-center gap-2 font-display text-sm font-bold text-forest hover:text-moss-700">
                    {ah.readMore}
                    <ArrowRight aria-hidden className="size-4" />
                  </Link>
                </div>
              </article>

              {others.length > 0 && (
                <ul className="grid gap-6 md:grid-cols-2">
                  {others.map((article) => {
                    const body = resolveArticleBody(article, language)
                    return (
                      <li key={article.slug} className="flex">
                        <article className="flex w-full flex-col overflow-hidden rounded-panel bg-white ring-1 ring-line">
                          <Link href={`/articles/${article.slug}`} aria-hidden tabIndex={-1} className="relative block aspect-[16/9] overflow-hidden">
                            <Image
                              src={article.cover.src}
                              alt=""
                              fill
                              sizes="(min-width: 768px) 560px, 100vw"
                              className="object-cover"
                              style={{ objectPosition: article.cover.position }}
                            />
                          </Link>
                          <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
                            <p className="text-sm font-medium text-slate">{meta(article)}</p>
                            <h2 className="font-display text-xl font-extrabold leading-snug text-ink-strong">
                              <Link href={`/articles/${article.slug}`} className="transition-colors hover:text-forest">
                                {body.title}
                              </Link>
                            </h2>
                            <p className="flex-1 text-[15px] leading-relaxed text-body">{excerpt(body.intro)}</p>
                            <Link href={`/articles/${article.slug}`} className="inline-flex w-fit items-center gap-2 font-display text-sm font-bold text-forest hover:text-moss-700">
                              {ah.readMore}
                              <ArrowRight aria-hidden className="size-4" />
                            </Link>
                          </div>
                        </article>
                      </li>
                    )
                  })}
                </ul>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  )
}
