"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { getArticleBySlug, resolveArticleBody, resolveReadingMinutes, type ArticleSlug } from "@/lib/articles"
import { ARTICLES_UI, formatDate } from "@/components/articles/articles-ui"
import { cn } from "@/lib/utils"

/**
 * Article : bandeau sombre (titre, date, durée), photo de couverture, puis un corps lisible avec sommaire collant
 * à gauche, « À retenir » en tête, sections, conclusion mise en valeur et articles liés.
 */
export function ArticleDetailContent({ slug }: { slug: ArticleSlug }) {
  const { language, t } = useI18n()
  const ah = t.articlesHub
  const ui = ARTICLES_UI[language]
  const def = getArticleBySlug(slug)
  const [active, setActive] = useState(0)

  const body = def ? resolveArticleBody(def, language) : null
  const count = body?.sections.length ?? 0

  useEffect(() => {
    const els = Array.from({ length: count }, (_, i) => document.getElementById(`section-${i}`)).filter(Boolean) as HTMLElement[]
    if (!els.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(Number(hit.target.id.replace("section-", "")))
      },
      { rootMargin: "-20% 0px -65% 0px" },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [count, slug])

  if (!def || !body) return null

  const mins = resolveReadingMinutes(def, language)
  const related = def.relatedSlugs.map((s) => getArticleBySlug(s)).filter((a): a is NonNullable<typeof a> => Boolean(a))

  return (
    <article>
      <header className="on-dark relative isolate overflow-hidden bg-forest-950 pb-36 pt-10 text-white md:pb-44 md:pt-14">
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
            <Link href="/articles" className="transition-colors hover:text-white">
              {t.nav.articles}
            </Link>
          </nav>
          <p className="font-display text-sm font-bold text-moss-400">
            <time dateTime={def.publishedAt}>
              {ah.published} {formatDate(def.publishedAt, ui.locale)}
            </time>
            , {mins} {ah.minRead}
          </p>
          <h1 className="max-w-4xl font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[42px] lg:text-[50px]">{body.title}</h1>
          <p className="max-w-3xl font-alt text-base leading-[1.6] text-white/75 md:text-lg">{body.intro}</p>
        </Container>
      </header>

      <div className="bg-surface pb-16 md:pb-24">
        <Container className="-mt-28 md:-mt-36">
          <div className="relative aspect-[21/9] overflow-hidden rounded-panel shadow-[0_40px_90px_-40px_rgba(15,42,24,0.6)] ring-1 ring-black/10">
            <Image
              src={def.cover.src}
              alt=""
              fill
              priority
              sizes="(min-width: 1264px) 1200px, 100vw"
              className="object-cover"
              style={{ objectPosition: def.cover.position }}
            />
          </div>
        </Container>

        <Container className="mt-12 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
          <nav aria-label={ui.toc} className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-3 font-display text-sm font-bold text-slate">{ui.toc}</p>
              <ul className="flex flex-col gap-0.5">
                {body.sections.map((s, i) => (
                  <li key={s.heading}>
                    <a
                      href={`#section-${i}`}
                      aria-current={active === i ? "true" : undefined}
                      className={cn(
                        "block rounded-md px-3 py-2 text-[15px] leading-snug transition-colors",
                        active === i ? "bg-moss-100 font-semibold text-forest" : "text-body hover:bg-surface-2 hover:text-ink-strong",
                      )}
                    >
                      {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="min-w-0 max-w-[44rem]">
            {body.takeaways && (
              <aside aria-label={ui.takeaways} className="rounded-panel bg-white p-6 ring-1 ring-line sm:p-8">
                <h2 className="font-display text-lg font-extrabold text-ink-strong">{ui.takeaways}</h2>
                <ul className="mt-4 flex flex-col gap-3">
                  {body.takeaways.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-ink">
                      <span aria-hidden className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                        <Check className="size-3.5" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {body.sections.map((section, i) => (
              <section key={section.heading} id={`section-${i}`} aria-labelledby={`heading-${i}`} className="mt-12 scroll-mt-28">
                <h2 id={`heading-${i}`} className="font-display text-2xl font-extrabold leading-tight tracking-[-0.01em] text-ink-strong md:text-[28px]">
                  {section.heading}
                </h2>
                <div className="mt-5 flex flex-col gap-5 text-[17px] leading-[1.75] text-body">
                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="flex flex-col gap-2.5">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span aria-hidden className="mt-3 size-1.5 shrink-0 rounded-full bg-moss-600" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}

            <div className="mt-14 rounded-panel bg-forest p-7 text-white sm:p-9">
              <p className="font-display text-xl font-extrabold leading-snug sm:text-2xl">{body.conclusion}</p>
            </div>
          </div>
        </Container>

        {related.length > 0 && (
          <Container className="mt-16 md:mt-20">
            <h2 className="font-display text-2xl font-extrabold text-ink-strong">{ah.related}</h2>
            <ul className="mt-6 grid gap-6 md:grid-cols-2">
              {related.map((a) => {
                const b = resolveArticleBody(a, language)
                return (
                  <li key={a.slug}>
                    <Link href={`/articles/${a.slug}`} className="group flex h-full gap-5 overflow-hidden rounded-panel bg-white p-4 ring-1 ring-line transition-shadow hover:shadow-md">
                      <span className="relative hidden aspect-square w-28 shrink-0 overflow-hidden rounded-card sm:block">
                        <Image src={a.cover.src} alt="" fill sizes="112px" className="object-cover" style={{ objectPosition: a.cover.position }} />
                      </span>
                      <span className="flex flex-col justify-center gap-2">
                        <span className="font-display text-lg font-extrabold leading-snug text-ink-strong group-hover:text-forest">{b.title}</span>
                        <span className="inline-flex items-center gap-2 font-display text-sm font-bold text-forest">
                          {ah.readMore}
                          <ArrowRight aria-hidden className="size-4" />
                        </span>
                      </span>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </Container>
        )}
      </div>

      <section aria-labelledby="article-cta" className="on-dark bg-forest py-14 text-white md:py-16">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="article-cta" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[34px]">
              {ui.ctaTitle}
            </h2>
            <p className="mt-3 font-alt text-base leading-[1.6] text-white/80 md:text-lg">{ui.ctaText}</p>
          </div>
          <Link href="/contact" className={cn(buttonVariants({ variant: "cta", size: "lg" }), "shrink-0 self-start")}>
            {t.hero.cta}
          </Link>
        </Container>
      </section>
    </article>
  )
}
