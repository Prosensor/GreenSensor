"use client"

import Link from "next/link"
import { Fragment, useEffect, useState, type ReactNode } from "react"
import { ArrowRight, Mail, Phone } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { LEGAL_PATHS, legalDocs, legalUi, type LegalBlock, type LegalDocKey, type LegalLang } from "@/i18n/legal"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const linkClass = "font-semibold text-forest underline decoration-forest/30 underline-offset-2 transition-colors hover:decoration-forest"

/** Texte courant avec `**gras**` et `[libellé](lien)` ; les liens internes passent par next/link. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const bold = part.match(/^\*\*([^*]+)\*\*$/)
        if (bold) return <strong key={i} className="font-semibold text-ink-strong">{bold[1]}</strong>
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!link) return <Fragment key={i}>{part}</Fragment>
        const [, label, href] = link
        if (href.startsWith("/")) return <Link key={i} href={href} className={linkClass}>{label}</Link>
        const external = href.startsWith("http")
        return (
          <a key={i} href={href} className={linkClass} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
            {label}
          </a>
        )
      })}
    </>
  )
}

function Block({ block }: { block: LegalBlock }): ReactNode {
  if ("p" in block) {
    return (
      <p className="text-base leading-relaxed text-body">
        <Inline text={block.p} />
      </p>
    )
  }
  if ("ul" in block) {
    return (
      <ul className="flex flex-col gap-2.5">
        {block.ul.map((item) => (
          <li key={item} className="flex items-start gap-3 text-base leading-relaxed text-body">
            <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-moss-600" />
            <span>
              <Inline text={item} />
            </span>
          </li>
        ))}
      </ul>
    )
  }
  if ("rows" in block) {
    return (
      <dl className="overflow-hidden rounded-card bg-surface ring-1 ring-line">
        {block.rows.map(([label, value]) => (
          <div key={label} className="grid gap-0.5 border-b border-line px-4 py-3 last:border-b-0 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-4 sm:px-5">
            <dt className="text-sm font-semibold text-slate sm:pt-0.5">{label}</dt>
            <dd className="text-[15px] leading-relaxed text-ink-strong">
              <Inline text={value} />
            </dd>
          </div>
        ))}
      </dl>
    )
  }
  return (
    <p className="rounded-card bg-moss-50 px-4 py-3.5 text-[15px] leading-relaxed text-ink ring-1 ring-moss-100 sm:px-5">
      <Inline text={block.note} />
    </p>
  )
}

/**
 * Gabarit des trois pages légales (mentions légales, conditions d'utilisation, confidentialité) :
 * en-tête sombre, sommaire qui suit la lecture, sections numérotées, puis renvois vers les autres pages.
 */
export function LegalPage({ doc }: { doc: LegalDocKey }) {
  const { language, t } = useI18n()
  const lang = language as LegalLang
  const d = legalDocs[doc][lang]
  const ui = legalUi[lang]
  const [active, setActive] = useState(0)
  const others = (Object.keys(LEGAL_PATHS) as LegalDocKey[]).filter((k) => k !== doc)

  useEffect(() => {
    const els = d.sections.map((_, i) => document.getElementById(`legal-${i}`)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(Number(hit.target.id.replace("legal-", "")))
      },
      { rootMargin: "-20% 0px -65% 0px" },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [d])

  return (
    <>
      <section aria-labelledby="legal-title" className="on-dark relative isolate overflow-hidden bg-forest-950 pb-12 pt-10 text-white md:pb-16 md:pt-14">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute -right-48 -top-24 -z-10 size-[560px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(62,171,53,0.16), transparent)" }}
        />
        <Container className="flex flex-col gap-5">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              {ui.home}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-white/90">{d.title}</span>
          </nav>
          <h1 id="legal-title" className="font-display text-[32px] font-extrabold leading-[1.12] tracking-[-0.02em] sm:text-[42px] lg:text-[48px]">
            {d.title}
          </h1>
          <p className="max-w-2xl font-alt text-base leading-[1.6] text-white/75 md:text-lg">{d.subtitle}</p>
          <p className="text-sm text-white/60">
            {ui.updated} <time>{d.updated}</time>
          </p>
        </Container>
      </section>

      <section className="bg-surface py-10 md:py-16">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          <nav aria-label={ui.toc} className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-3 font-display text-sm font-bold text-slate">{ui.toc}</p>
              <ol className="flex flex-col gap-0.5">
                {d.sections.map((s, i) => (
                  <li key={s.title}>
                    <a
                      href={`#legal-${i}`}
                      aria-current={active === i ? "true" : undefined}
                      className={cn(
                        "flex items-baseline gap-2.5 rounded-md px-3 py-2 text-[15px] leading-snug transition-colors",
                        active === i ? "bg-moss-100 font-semibold text-forest" : "text-body hover:bg-surface-2 hover:text-ink-strong",
                      )}
                    >
                      <span aria-hidden className="w-5 shrink-0 tabular-nums">
                        {i + 1}
                      </span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="flex min-w-0 flex-col gap-10">
            <div className="rounded-panel bg-white px-5 py-2 ring-1 ring-line sm:px-8">
              {d.sections.map((s, i) => (
                <section key={s.title} id={`legal-${i}`} aria-labelledby={`legal-h-${i}`} className="scroll-mt-28 border-b border-line py-7 last:border-b-0 sm:py-8">
                  <h2 id={`legal-h-${i}`} className="flex items-baseline gap-3 font-display text-xl font-extrabold leading-snug tracking-[-0.01em] text-ink-strong md:text-2xl">
                    <span aria-hidden className="text-forest tabular-nums">
                      {i + 1}.
                    </span>
                    {s.title}
                  </h2>
                  <div className="mt-4 flex flex-col gap-4">
                    {s.blocks.map((b, j) => (
                      <Block key={j} block={b} />
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div>
              <h2 className="font-display text-sm font-bold text-slate">{ui.seeAlso}</h2>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2">
                {others.map((k) => (
                  <li key={k}>
                    <Link
                      href={LEGAL_PATHS[k]}
                      className="group flex items-center justify-between gap-4 rounded-card bg-white px-5 py-4 font-display text-base font-bold text-ink-strong ring-1 ring-line transition-colors hover:ring-forest/40"
                    >
                      {ui.names[k]}
                      <ArrowRight aria-hidden className="size-4 shrink-0 text-forest transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section aria-labelledby="legal-cta" className="on-dark bg-forest py-12 text-white md:py-14">
        <Container className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="legal-cta" className="font-display text-[26px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[30px]">
              {ui.contactTitle}
            </h2>
            <p className="mt-3 font-alt text-base leading-[1.6] text-white/80">{ui.contactText}</p>
            <ul className="mt-5 flex flex-col gap-3 text-[15px] sm:flex-row sm:gap-8">
              <li className="flex items-center gap-3">
                <Phone aria-hidden className="size-5 text-mint" />
                <a href={`tel:${t.demo.phone_value.replace(/\s/g, "")}`} className="hover:underline">
                  {t.demo.phone_value}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail aria-hidden className="size-5 text-mint" />
                <a href={`mailto:${t.demo.email_value}`} className="hover:underline">
                  {t.demo.email_value}
                </a>
              </li>
            </ul>
          </div>
          <Link href="/contact" className={cn(buttonVariants({ variant: "cta", size: "lg" }), "shrink-0 self-start")}>
            {t.hero.cta}
          </Link>
        </Container>
      </section>
    </>
  )
}
