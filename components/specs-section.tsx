"use client"

import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { ProbeDiagram } from "@/components/probe-diagram"

/** Fiche technique : la sonde avec ses données à côté. */
export function SpecsSection() {
  const copy = useHomeCopy()
  const { specs } = copy

  return (
    <section id="specifications" aria-labelledby="specs-title" className="on-dark relative isolate overflow-hidden bg-[#0a1c11] py-16 text-white md:py-24">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <Container className="flex flex-col gap-10 md:gap-12">
        <div className="flex flex-col gap-10 md:gap-12">
          <div className="max-w-2xl">
            <h2 id="specs-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[40px]">
              {specs.title}
            </h2>
            <p className="mt-4 font-alt text-base leading-[1.6] text-white/70 md:text-lg">{specs.lead}</p>
          </div>

          <div className="grid grid-cols-[minmax(0,1fr)] items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-14">
            <ProbeDiagram />

            <div>
              <dl>
                {specs.rows.map((row) => (
                  <div key={row.label} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] gap-4 border-t border-white/10 py-3.5 text-[15px] leading-snug last:border-b">
                    <dt className="font-semibold text-white">{row.label}</dt>
                    <dd className="text-white/70">{row.value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 font-alt text-base leading-relaxed text-white/80">{specs.custom}</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
