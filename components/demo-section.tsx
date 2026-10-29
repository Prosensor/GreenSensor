"use client"

import { Mail, MapPin, Phone } from "lucide-react"
import { DemoForm } from "./demo-form"
import { useI18n } from "@/i18n/i18n-provider"
import { useHomeCopy, joinTitle } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"

/** Demande de présentation : un titre, une phrase, les coordonnées, et un formulaire en une étape. */
export function DemoSection() {
  const { t, language } = useI18n()
  const { contact } = useHomeCopy()
  const demo = t.demo

  return (
    <section id="demo" aria-labelledby="demo-title" className="on-dark bg-forest py-16 text-white md:py-24">
      <Container className="grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-16">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 id="demo-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[40px]">
              {joinTitle(language, demo.heading, demo.heading_highlight)}
            </h2>
            <p className="max-w-md font-alt text-base leading-[1.6] text-white/80 md:text-lg">{contact.lead}</p>
          </div>

          <ul className="flex flex-col gap-4 text-[15px]">
            <li className="flex items-start gap-3">
              <Phone aria-hidden className="mt-0.5 size-5 shrink-0 text-mint" />
              <a href={`tel:${demo.phone_value.replace(/\s/g, "")}`} className="hover:underline">
                {demo.phone_value}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-mint" />
              <a href={`mailto:${demo.email_value}`} className="hover:underline">
                {demo.email_value}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin aria-hidden className="mt-0.5 size-5 shrink-0 text-mint" />
              <span className="text-white/80">{demo.address}</span>
            </li>
          </ul>
        </div>

        <div className="rounded-panel bg-white p-6 text-ink shadow-[0_30px_60px_-34px_rgba(0,0,0,0.55)] sm:p-8">
          <DemoForm />
        </div>
      </Container>
    </section>
  )
}
