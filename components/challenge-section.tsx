"use client"

import { Check, X } from "lucide-react"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { SectionHeading } from "@/components/section-heading"
import { cn } from "@/lib/utils"

/**
 * « Pourquoi une solution connectée ? » : un avant / après. Chaque problème d'aujourd'hui est
 * mis en face de l'avantage GreenSensor qui y répond, ligne à ligne.
 */
export function ChallengeSection() {
  const { challenge } = useHomeCopy()
  const last = challenge.problems.length - 1

  return (
    <section id="constat" aria-labelledby="challenge-title" className="bg-surface py-16 md:py-24">
      <Container className="flex flex-col gap-10 md:gap-12">
        <SectionHeading id="challenge-title" title={challenge.title} />

        <div className="overflow-hidden rounded-panel shadow-[0_30px_70px_-44px_rgba(15,42,24,0.5)] ring-1 ring-line">
          {/* En-têtes de colonnes (sur mobile, chaque cellule porte son propre libellé) */}
          <div aria-hidden className="hidden lg:grid lg:grid-cols-2">
            <p className="border-b border-line bg-white px-8 py-5 font-display text-lg font-extrabold text-slate">{challenge.today}</p>
            <p className="bg-forest px-8 py-5 font-display text-lg font-extrabold text-white">{challenge.with}</p>
          </div>

          <ul>
            {challenge.problems.map((problem, i) => {
              const after = challenge.after[i]
              return (
                <li key={problem} className="grid lg:grid-cols-2">
                  <div className={cn("flex flex-col justify-center bg-white px-6 py-5 lg:px-8 lg:py-7", i < last && "border-b border-line")}>
                    <span className="mb-3 block font-display text-xs font-bold text-slate lg:sr-only">{challenge.today}</span>
                    <div className="flex items-center gap-4">
                      <span aria-hidden className="flex size-9 shrink-0 items-center justify-center rounded-full bg-orange-soft text-orange-cta">
                        <X className="size-[18px]" strokeWidth={2.5} />
                      </span>
                      <p className="font-heading text-lg font-bold leading-snug text-body">{problem}</p>
                    </div>
                  </div>

                  <div className={cn("flex flex-col justify-center bg-forest px-6 py-5 text-white lg:px-8 lg:py-7", i < last && "border-b border-white/10")}>
                    <span className="mb-3 block font-display text-xs font-bold text-mint lg:sr-only">{challenge.with}</span>
                    <div className="flex items-start gap-4">
                      <span aria-hidden className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-mint">
                        <Check className="size-[18px]" strokeWidth={2.5} />
                      </span>
                      <div>
                        <h3 className="font-heading text-lg font-extrabold leading-snug">{after.name}</h3>
                        <p className="mt-1 text-[15px] leading-relaxed text-white/75">{after.desc}</p>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </Container>
    </section>
  )
}
