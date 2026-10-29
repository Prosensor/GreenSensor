"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { EthernetPort, Globe, Mail, Phone, Power } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { docCopy, docSteps, type DocLang } from "@/i18n/documentation"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/** Les cinq étapes de l'installation, dans l'ordre de lecture. */
const IDS = ["power", "connect", "check", "probe", "campaign"] as const

/** Les trois voyants de la passerelle, tels qu'ils doivent apparaître une fois la connexion établie. */
const LEDS = [
  { key: "eth", Icon: EthernetPort, color: "bg-[#3eab35]" },
  { key: "net", Icon: Globe, color: "bg-[#3eab35]" },
  { key: "power", Icon: Power, color: "bg-[#e5342b]" },
] as const

/** Liste d'étapes numérotées : le numéro n'est là que parce que l'ordre compte. */
function Steps({ items, className }: { items: string[]; className?: string }) {
  return (
    <ol className={cn("flex flex-col gap-3", className)}>
      {items.map((step, i) => (
        <li key={i} className="flex items-start gap-3.5 text-[15px] leading-relaxed text-body">
          <span aria-hidden className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-forest font-display text-xs font-bold text-white">
            {i + 1}
          </span>
          <span className="pt-0.5">{step}</span>
        </li>
      ))}
    </ol>
  )
}

const card = "rounded-panel bg-white p-6 ring-1 ring-line sm:p-7"
const h2 = "font-display text-2xl font-extrabold leading-tight tracking-[-0.01em] text-ink-strong md:text-[28px]"

/** Titre d'une étape de l'installation : le grand numéro situe le lecteur dans la procédure. */
function StepHeading({ id, n, title }: { id: string; n: number; title: string }) {
  return (
    <h2 id={id} className={cn(h2, "flex items-center gap-4")}>
      <span aria-hidden className="flex size-10 shrink-0 items-center justify-center rounded-full bg-forest font-display text-lg font-bold text-white">
        {n}
      </span>
      {title}
    </h2>
  )
}

/**
 * Documentation : une seule procédure, dans l'ordre réel de l'installation (passerelle, connexion, vérification,
 * sonde, objectifs / phases / campagne).
 */
export function DocumentationContent() {
  const { language, t } = useI18n()
  const d = docCopy[language as DocLang]
  const x = docSteps[language as DocLang]
  const [active, setActive] = useState(0)

  const titles = [x.power.title, x.connect.title, x.check.title, x.probe.title, x.campaign.title]

  useEffect(() => {
    const els = IDS.map((s) => document.getElementById(`doc-${s}`)).filter(Boolean) as HTMLElement[]
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (hit) setActive(IDS.indexOf(hit.target.id.replace("doc-", "") as (typeof IDS)[number]))
      },
      { rootMargin: "-20% 0px -65% 0px" },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <section aria-labelledby="doc-title" className="on-dark relative isolate overflow-hidden bg-forest-950 pb-14 pt-10 text-white md:pb-20 md:pt-14">
        <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute -right-48 -top-24 -z-10 size-[620px] rounded-full opacity-60"
          style={{ background: "radial-gradient(closest-side, rgba(62,171,53,0.16), transparent)" }}
        />
        <Container className="flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              {d.home}
            </Link>
            <span className="mx-2">/</span>
            <span className="font-medium text-white/90">{d.title}</span>
          </nav>
          <h1 id="doc-title" className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[44px] lg:text-[52px]">
            {d.title}
          </h1>
          <p className="max-w-2xl font-alt text-base leading-[1.6] text-white/75 md:text-lg">{d.lead}</p>
        </Container>
      </section>

      <section className="bg-surface py-12 md:py-16">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-14">
          <nav aria-label={d.toc} className="hidden lg:block">
            <div className="sticky top-28">
              <p className="mb-3 font-display text-sm font-bold text-slate">{x.stepsLabel}</p>
              <ol className="flex flex-col gap-0.5">
                {IDS.map((id, i) => (
                  <li key={id}>
                    <a
                      href={`#doc-${id}`}
                      aria-current={active === i ? "true" : undefined}
                      className={cn(
                        "flex items-baseline gap-2.5 rounded-md px-3 py-2 text-[15px] leading-snug transition-colors",
                        active === i ? "bg-moss-100 font-semibold text-forest" : "text-body hover:bg-surface-2 hover:text-ink-strong",
                      )}
                    >
                      <span aria-hidden className="w-4 shrink-0 tabular-nums">
                        {i + 1}
                      </span>
                      {titles[i]}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </nav>

          <div className="flex min-w-0 flex-col gap-14">
            {/* 1. Brancher la passerelle */}
            <section id="doc-power" aria-labelledby="h-power" className="scroll-mt-28">
              <StepHeading id="h-power" n={1} title={x.power.title} />
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-body">{x.power.text}</p>
            </section>

            {/* 2. La connecter à Internet */}
            <section id="doc-connect" aria-labelledby="h-connect" className="scroll-mt-28">
              <StepHeading id="h-connect" n={2} title={x.connect.title} />
              <p className="mt-4 text-base text-body">{x.connect.lead}</p>
              <div className={cn(card, "mt-5")}>
                <Steps items={x.connect.ethernetSteps} />
              </div>
            </section>

            {/* 3. Vérifier */}
            <section id="doc-check" aria-labelledby="h-check" className="scroll-mt-28">
              <StepHeading id="h-check" n={3} title={x.check.title} />
              <p className="mt-4 text-base text-body">{x.check.lead}</p>
              <ul className="mt-5 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
                {LEDS.map(({ key, Icon, color }) => (
                  <li key={key} role="img" aria-label={x.check.leds[key]} className="flex flex-col items-center gap-4 rounded-panel bg-white px-3 py-6 ring-1 ring-line">
                    <Icon aria-hidden className="size-10 text-ink-strong sm:size-12" strokeWidth={1.75} />
                    <span aria-hidden className={cn("size-3.5 rounded-full shadow-[0_0_0_4px_rgba(0,0,0,0.05)]", color)} />
                  </li>
                ))}
              </ul>
            </section>

            {/* 4. Planter la sonde */}
            <section id="doc-probe" aria-labelledby="h-probe" className="scroll-mt-28">
              <StepHeading id="h-probe" n={4} title={x.probe.title} />
              <p className="mt-4 text-base text-body">{x.probe.lead}</p>
              <div className={cn(card, "mt-5")}>
                <ul className="flex flex-col gap-3">
                  {x.probe.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-[15px] leading-relaxed text-body">
                      <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-moss-600" />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 5. Objectifs, phases et campagne */}
            <section id="doc-campaign" aria-labelledby="h-campaign" className="scroll-mt-28">
              <StepHeading id="h-campaign" n={5} title={x.campaign.title} />
              <div className={cn(card, "mt-5")}>
                <Steps items={x.campaign.steps} />
              </div>
            </section>

          </div>
        </Container>
      </section>

      <section aria-labelledby="doc-cta" className="on-dark bg-forest py-14 text-white md:py-16">
        <Container className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <h2 id="doc-cta" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[34px]">
              {d.cta.title}
            </h2>
            <p className="mt-3 font-alt text-base leading-[1.6] text-white/80 md:text-lg">{d.cta.text}</p>
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
