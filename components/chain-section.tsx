"use client"

import { Cloud, MonitorSmartphone, Router } from "lucide-react"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { useClock, useInView, useReducedMotionFlag } from "@/lib/use-clock"
import { clamp } from "@/lib/compost"
import { cn } from "@/lib/utils"

const LOOP = 8
const TRAVEL = 7
/** Mesure d'exemple qui voyage de la sonde à l'écran. */
const reading = 56

/** Pictogramme de la sonde : poignée en T, boîtier à antenne, tube. */
function ProbeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 56" fill="none" aria-hidden className={className}>
      <path d="M20 2v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <rect x="14" y="12" width="12" height="14" rx="2.5" stroke="currentColor" strokeWidth="2" />
      <path d="M5 31h30" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M20 26v26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const icons = [ProbeIcon, Router, Cloud, MonitorSmartphone]

/**
 * De la sonde à l'écran : une mesure part de la sonde, traverse la passerelle et le serveur, puis
 * arrive sur la plateforme. L'étape traversée s'allume ; un clic sur une étape arrête la démo dessus.
 */
export function ChainSection() {
  const copy = useHomeCopy()
  const { chain, figures } = copy
  const reduced = useReducedMotionFlag()
  const [ref, inView] = useInView<HTMLDivElement>(0.3)
  const { t, seek } = useClock(inView && !reduced, LOOP, { fps: 20 })

  const p = clamp(t / TRAVEL)
  const active = Math.min(3, Math.round(p * 3))

  const select = (i: number) => {
    seek((i / 3) * TRAVEL)
  }

  return (
    <section id="fonctionnalites" aria-labelledby="chain-title" className="on-dark relative isolate overflow-hidden bg-forest-950 py-16 text-white md:py-24">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-70" />
      <Container className="flex flex-col gap-12 md:gap-14">
        <h2 id="chain-title" className="max-w-2xl font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[40px]">
          {chain.title}
        </h2>

        <div ref={ref} className="relative">
          {/* Trait de liaison : horizontal sur grand écran, vertical sur mobile */}
          <div aria-hidden className="absolute left-[12.5%] right-[12.5%] top-[44px] hidden h-px bg-white/20 lg:block">
            <span className="absolute left-0 top-0 h-px bg-moss-400" style={{ width: `${p * 100}%` }} />
            <span
              className="absolute left-[16.7%] top-1/2 -translate-x-1/2 -translate-y-1/2 bg-forest-950 px-2 font-display text-xs font-bold text-mint"
            >
              {figures[2].value}
            </span>
            <span
              className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
              style={{ left: `${p * 100}%` }}
            >
              <span className="whitespace-nowrap rounded-md bg-orange-cta px-2.5 py-1 font-display text-xs font-extrabold tabular-nums text-white shadow-[0_8px_20px_-6px_rgba(212,69,15,0.8)]">
                {reading} °C
              </span>
            </span>
          </div>
          <div aria-hidden className="absolute bottom-[44px] left-[43px] top-[44px] w-px bg-white/20 lg:hidden">
            <span className="absolute left-0 top-0 w-px bg-moss-400" style={{ height: `${p * 100}%` }} />
            <span
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-orange-cta px-2.5 py-1 font-display text-xs font-extrabold tabular-nums text-white"
              style={{ top: `${p * 100}%` }}
            >
              {reading} °C
            </span>
          </div>

          <ol className="relative grid gap-6 lg:grid-cols-4 lg:gap-6">
            {chain.steps.map((step, i) => {
              const Icon = icons[i]
              const on = i === active
              return (
                <li key={step.name}>
                  <button
                    type="button"
                    onClick={() => select(i)}
                    aria-current={on ? "step" : undefined}
                    className="group flex w-full gap-5 text-left lg:flex-col lg:items-center lg:gap-6 lg:text-center"
                  >
                    <span
                      className={cn(
                        "relative z-10 flex size-[88px] shrink-0 items-center justify-center rounded-2xl border transition-[background-color,border-color,color,transform] duration-300 ease-out-strong",
                        on
                          ? "scale-105 border-moss-400 bg-[#1d4a2b] text-mint"
                          : "border-white/15 bg-forest-950 text-white/60 group-hover:border-white/35",
                      )}
                    >
                      <Icon className={i === 0 ? "h-12 w-auto" : "size-10"} />
                    </span>
                    <span className="min-w-0 pt-1 lg:pt-0">
                      <span className={cn("block font-heading text-lg font-extrabold transition-colors", on ? "text-white" : "text-white/80")}>
                        <span aria-hidden className="mr-2 text-moss-400">
                          {i + 1}
                        </span>
                        {step.name}
                      </span>
                      <span className="mt-1.5 block text-[15px] leading-relaxed text-white/60">{step.desc}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
        </div>

      </Container>
    </section>
  )
}
