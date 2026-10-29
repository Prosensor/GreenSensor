"use client"

import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useI18n } from "@/i18n/i18n-provider"
import { useHomeCopy, joinTitle } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { FaqAnswer } from "@/components/faq/faq-answer"

/** Quatre questions que se posent vraiment les futurs utilisateurs ; toutes les autres sont sur la page FAQ. */
export function FaqSection() {
  const { t, language } = useI18n()
  const copy = useHomeCopy()

  return (
    <section id="faq" aria-labelledby="faq-title" className="bg-white py-16 md:py-24">
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16">
        <div className="flex flex-col items-start gap-5">
          <h2 id="faq-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-ink-strong md:text-[40px]">
            {joinTitle(language, t.faq.heading, t.faq.heading_highlight)}
          </h2>
          <Link href="/faq" className="font-display text-sm font-bold text-forest underline underline-offset-4 transition-colors hover:text-moss-700">
            {copy.faqAll}
          </Link>
        </div>

        <Accordion type="single" collapsible className="flex w-full flex-col">
          {copy.faqHome.map((faq, index) => (
            <AccordionItem key={faq.q} value={`item-${index}`} className="border-b border-line first:border-t">
              <AccordionTrigger className="gap-4 py-5 text-left font-heading text-[17px] font-extrabold leading-snug text-ink-strong hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="pb-7 pt-0 text-base text-body">
                <FaqAnswer text={faq.a} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  )
}
