"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Mail, MapPin, Phone } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { aboutPageCopy, type AboutLang, type AboutPageCopy } from "@/i18n/about-page"
import { FACTS } from "@/i18n/legal-facts"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/section-heading"
import { TrustBand } from "@/components/trust-band"
import { Reveal, itemDelay } from "@/components/reveal"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Page « Qui sommes-nous » : la suite de « Pourquoi choisir GreenSensor ? » sur l'accueil. Elle montre qui fabrique la
 * sonde (Prosensor, son usine, son savoir-faire), comment elle arrive jusqu'à l'andain, ce qui guide l'équipe, et
 * surtout comment la joindre. Fonds alternés sombre / clair, comme l'accueil.
 */
export function AboutPageContent() {
  const { language, t } = useI18n()
  const c = aboutPageCopy[language as AboutLang]

  return (
    <>
      <AboutHero c={c} crumb={t.nav.about} />
      <TrustBand />
      <CraftSection c={c} />
      <ChainSection c={c} />
      <ValuesSection c={c} />
      <TeamSection c={c} />
    </>
  )
}

function AboutHero({ c, crumb }: { c: AboutPageCopy; crumb: string }) {
  return (
    <section id="hero" aria-labelledby="about-title" className="on-dark relative isolate overflow-hidden bg-forest-950 pb-14 pt-10 text-white md:pb-20 md:pt-14">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -right-48 -top-24 -z-10 size-[680px] rounded-full opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(236,106,28,0.16), rgba(62,171,53,0.10) 55%, transparent)" }}
      />

      <Container className="flex flex-col gap-10 md:gap-14">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <Link href="/" className="transition-colors hover:text-white">
            {c.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-white/90">{crumb}</span>
        </nav>

        <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div className="flex flex-col gap-5">
            <h1 id="about-title" className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[44px] lg:text-[50px]">
              {c.title}
            </h1>
            <p className="max-w-lg font-alt text-base leading-[1.6] text-white/80 md:text-lg">{c.lead}</p>
          </div>

          <figure className="relative isolate aspect-[4/3] overflow-hidden sm:aspect-[16/10] rounded-[18px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
            <Image
              src="/usine-prosensor.jpg"
              alt={c.photoAlt}
              fill
              priority
              sizes="(min-width: 1024px) 680px, 100vw"
              className="-z-10 object-cover object-[60%_50%]"
            />
            <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-[#0b2314]/90 via-[#0b2314]/45 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 max-w-md p-4 text-sm font-medium leading-snug text-white sm:p-6 sm:text-[15px]">
              {c.photoCaption}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}

function CraftSection({ c }: { c: AboutPageCopy }) {
  return (
    <section aria-labelledby="craft-title" className="bg-surface py-16 md:py-24">
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <div className="flex flex-col gap-5">
          <h2 id="craft-title" className="font-display text-[28px] font-extrabold leading-[1.2] text-ink-strong md:text-[36px]">
            {c.craft.title}
          </h2>
          {c.craft.text.map((paragraph) => (
            <p key={paragraph} className="max-w-xl font-alt text-base leading-[1.7] text-body md:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="rounded-panel bg-white p-6 ring-1 ring-line sm:p-8">
          <h3 className="font-heading text-lg font-extrabold text-ink-strong">{c.craft.sectorsTitle}</h3>
          <Reveal as="ul" className="mt-5 grid gap-x-6 sm:grid-cols-2">
            {c.craft.sectors.map((sector, index) => (
              <li
                key={sector}
                className="reveal-item flex items-center gap-3 border-t border-line py-3 text-[15px] font-semibold text-ink"
                style={itemDelay(index, 0, 40)}
              >
                <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-moss-600" />
                {sector}
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function ChainSection({ c }: { c: AboutPageCopy }) {
  return (
    <section aria-labelledby="chain-about-title" className="bg-white py-16 md:py-24">
      <Container className="flex flex-col gap-10 md:gap-14">
        <SectionHeading id="chain-about-title" title={c.chain.title} lead={c.chain.lead} align="left" />

        <div className="grid grid-cols-[minmax(0,1fr)] items-stretch gap-10 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
          <div className="relative aspect-[5/6] overflow-hidden rounded-panel ring-1 ring-line lg:aspect-auto">
            <Image src="/sonde-sur-tas.jpg" alt={c.chain.photoAlt} fill sizes="(min-width: 1024px) 440px, 100vw" className="object-cover object-[50%_40%]" />
          </div>

          <Reveal as="ol" className="flex flex-col">
            {c.chain.steps.map((step, index) => (
              <li
                key={step.name}
                className="reveal-item grid grid-cols-[3rem_minmax(0,1fr)] gap-4 border-t border-line py-6 last:border-b sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:py-7"
                style={itemDelay(index, 0, 90)}
              >
                <span aria-hidden className="font-display text-[28px] font-extrabold leading-none text-moss-600 sm:text-[34px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-extrabold text-ink-strong">{step.name}</h3>
                  <p className="mt-1.5 max-w-xl text-base leading-relaxed text-body">{step.desc}</p>
                </div>
              </li>
            ))}
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

function ValuesSection({ c }: { c: AboutPageCopy }) {
  return (
    <section aria-labelledby="values-title" className="on-dark relative isolate overflow-hidden bg-forest-950 py-16 text-white md:py-24">
      <Image src="/visu.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover object-[50%_75%] opacity-35" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-b from-forest-950/60 via-forest-950/85 to-forest-950" />

      <Container className="flex flex-col gap-12 md:gap-16">
        <div className="flex max-w-3xl flex-col gap-5">
          <h2 id="values-title" className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] md:text-[52px]">
            {c.values.quote}
          </h2>
          <p className="font-alt text-base leading-[1.6] text-white/80 md:text-lg">{c.values.mission}</p>
        </div>

        <Reveal as="ul" className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {c.values.items.map((value, index) => (
            <li key={value.name} className="reveal-item border-t border-white/20 pt-6" style={itemDelay(index, 0, 90)}>
              <h3 className="font-heading text-lg font-extrabold leading-snug">{value.name}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">{value.desc}</p>
            </li>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}

function TeamSection({ c }: { c: AboutPageCopy }) {
  const { team } = c
  const rowClass = "flex items-start gap-4 border-t border-line py-4"
  const iconClass = "mt-0.5 size-5 shrink-0 text-moss-600"
  const labelClass = "block text-sm text-slate"

  return (
    <section aria-labelledby="team-title" className="bg-surface py-16 md:py-24">
      <Container className="grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 id="team-title" className="font-display text-[28px] font-extrabold leading-[1.2] text-ink-strong md:text-[36px]">
              {team.title}
            </h2>
            <p className="max-w-xl font-alt text-base leading-[1.6] text-body md:text-lg">{team.lead}</p>
          </div>

          <Reveal as="dl">
            {team.moments.map((moment, index) => (
              <div
                key={moment.name}
                className="reveal-item grid gap-1 border-t border-line py-5 last:border-b sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6"
                style={itemDelay(index, 0, 90)}
              >
                <dt className="font-heading text-lg font-extrabold text-forest">{moment.name}</dt>
                <dd className="text-base leading-relaxed text-body">{moment.desc}</dd>
              </div>
            ))}
          </Reveal>
        </div>

        <div className="rounded-panel bg-white p-6 shadow-[0_30px_70px_-44px_rgba(15,42,24,0.5)] ring-1 ring-line sm:p-8">
          <h3 className="mb-2 font-display text-xl font-extrabold text-ink-strong">{team.reach}</h3>
          <ul className="text-[15px]">
            <li className={rowClass}>
              <Phone aria-hidden className={iconClass} />
              <span>
                <span className={labelClass}>{team.phone}</span>
                <a href={`tel:${FACTS.phone.replace(/\s/g, "")}`} className="font-display text-lg font-bold text-ink-strong hover:underline">
                  {FACTS.phone}
                </a>
              </span>
            </li>
            <li className={rowClass}>
              <Mail aria-hidden className={iconClass} />
              <span>
                <span className={labelClass}>{team.email}</span>
                <a href={`mailto:${FACTS.email}`} className="font-semibold text-ink-strong hover:underline">
                  {FACTS.email}
                </a>
              </span>
            </li>
            <li className={rowClass}>
              <Clock aria-hidden className={iconClass} />
              <span>
                <span className={labelClass}>{team.hours}</span>
                <span className="font-semibold text-ink-strong">{team.hoursValue}</span>
              </span>
            </li>
            <li className={cn(rowClass, "border-b")}>
              <MapPin aria-hidden className={iconClass} />
              <span>
                <span className={labelClass}>{team.address}</span>
                <span className="font-semibold text-ink-strong">{FACTS.address}</span>
                <span className="mt-1 block text-sm leading-relaxed text-slate">{team.where}</span>
              </span>
            </li>
          </ul>
          <Link href="/contact" className={cn(buttonVariants({ variant: "cta" }), "mt-6 w-full gap-2 sm:w-auto")}>
            {team.cta}
            <ArrowRight aria-hidden className="size-4" />
          </Link>
        </div>
      </Container>
    </section>
  )
}
