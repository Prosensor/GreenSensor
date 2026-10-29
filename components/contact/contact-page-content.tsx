"use client"

import Link from "next/link"
import { Check, Mail, MapPin, Phone } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { contactPageCopy, type ContactLang } from "@/i18n/contact-page"
import { Container } from "@/components/ui/container"
import { DemoForm } from "@/components/demo-form"

/**
 * Page Contact : le formulaire est la première chose qu'on voit. À gauche, ce que le visiteur obtient et les
 * autres moyens de nous joindre ; à droite, le formulaire en une étape sur une carte blanche.
 */
export function ContactPageContent() {
  const { language, t } = useI18n()
  const c = contactPageCopy[language as ContactLang]
  const demo = t.demo

  return (
    <section aria-labelledby="contact-title" className="on-dark relative isolate overflow-hidden bg-forest-950 pb-16 pt-10 text-white md:pb-24 md:pt-14">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -right-48 -top-24 -z-10 size-[680px] rounded-full opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(236,106,28,0.18), rgba(62,171,53,0.10) 55%, transparent)" }}
      />

      <Container className="flex flex-col gap-10">
        <nav aria-label="Breadcrumb" className="text-sm text-white/60">
          <Link href="/" className="transition-colors hover:text-white">
            {c.home}
          </Link>
          <span className="mx-2">/</span>
          <span className="font-medium text-white/90">{c.title}</span>
        </nav>

        <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 id="contact-title" className="font-display text-[34px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[44px] lg:text-[50px]">
                {c.title}
              </h1>
              <p className="max-w-md font-alt text-base leading-[1.6] text-white/80 md:text-lg">{c.lead}</p>
            </div>

            <ul className="flex flex-col gap-3.5">
              {c.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-base leading-relaxed text-white/90">
                  <span aria-hidden className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-mint">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 border-t border-white/15 pt-6">
              <p className="font-display text-base font-extrabold">{c.callTitle}</p>
              <ul className="flex flex-col gap-3.5 text-[15px]">
                <li className="flex items-center gap-3">
                  <Phone aria-hidden className="size-5 shrink-0 text-mint" />
                  <a href={`tel:${demo.phone_value.replace(/\s/g, "")}`} className="font-semibold hover:underline">
                    {demo.phone_value}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail aria-hidden className="size-5 shrink-0 text-mint" />
                  <a href={`mailto:${demo.email_value}`} className="font-semibold hover:underline">
                    {demo.email_value}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-mint" />
                  <span className="text-white/80">
                    <span className="sr-only">{c.addressTitle} : </span>
                    {demo.address}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-panel bg-white p-6 text-ink shadow-[0_40px_90px_-30px_rgba(0,0,0,0.7)] sm:p-9">
            <h2 className="mb-6 font-display text-xl font-extrabold text-ink-strong">{c.formTitle}</h2>
            <DemoForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
