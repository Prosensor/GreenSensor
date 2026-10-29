"use client"

import { useEffect, useId, useState } from "react"
import { Check, Pencil } from "lucide-react"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { CAMPAIGN_DAYS, FIRST_PHASE_END, PHASES, campaignTemp, progress, type Objective } from "@/lib/campaign"
import { useClock, useInView, useReducedMotionFlag } from "@/lib/use-clock"
import { cn } from "@/lib/utils"

const DAYS_PER_SECOND = 5
const fmt1 = (n: number) => n.toFixed(1).replace(".", ",")

/**
 * Campagne : à gauche les phases et les objectifs que l'utilisateur définit, à droite le suivi de la
 * campagne. L'avancement est calculé sur la courbe (plus longue période continue) : quand tous les
 * objectifs d'une phase sont atteints, la phase se termine seule et la suivante démarre.
 */
export function CurveSection() {
  const copy = useHomeCopy()
  const { curve, campaign, lab, report } = copy
  const reduced = useReducedMotionFlag()
  const sliderId = useId()
  const [playing, setPlaying] = useState(true)
  const [ref, inView] = useInView<HTMLDivElement>(0.35)
  const { t, seek } = useClock(playing && inView && !reduced, CAMPAIGN_DAYS / DAYS_PER_SECOND, { fps: 20, once: true })

  useEffect(() => {
    if (reduced) seek(12 / DAYS_PER_SECOND)
  }, [reduced, seek])

  const day = Math.min(CAMPAIGN_DAYS, t * DAYS_PER_SECOND)
  const phaseIndex = day >= FIRST_PHASE_END ? 1 : 0
  const from = phaseIndex === 1 ? FIRST_PHASE_END : 0
  const phaseNames = [report.paper.phase, curve.phases.mature]

  const label = (o: Objective) => {
    const length = o.days < 2 ? `${o.days * 24} ${campaign.hours}` : `${o.days} ${report.paper.days}`
    return `${length} ${o.kind === "min" ? "≥" : "≤"} ${o.temp} °C`
  }
  const count = (o: Objective, done: number, pct: number) =>
    o.days < 2
      ? `${Math.floor(done * 24)}h/${o.days * 24}h (${pct}%)`
      : `${Math.floor(done)}${report.paper.dayShort}/${o.days}${report.paper.dayShort} (${pct}%)`

  const step = (n: number, text: string) => (
    <p className="mb-3 flex items-center gap-3 font-display text-base font-extrabold text-ink-strong">
      <span aria-hidden className="flex size-7 items-center justify-center rounded-full bg-forest text-sm text-white">
        {n}
      </span>
      {text}
    </p>
  )

  return (
    <section id="campagnes" aria-labelledby="curve-title" className="bg-white py-16 md:py-24">
      <Container className="flex flex-col gap-10 md:gap-12">
        <div className="max-w-3xl">
          <h2 id="curve-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-ink-strong md:text-[40px]">
            {curve.title}
          </h2>
          <p className="mt-4 font-alt text-base leading-[1.6] text-body md:text-lg">{curve.lead}</p>
        </div>

        <div ref={ref} className="grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-10">
          {/* 1. Les phases et leurs objectifs, définis par l'utilisateur */}
          <div>
            {step(1, campaign.define)}
            <div className="rounded-panel border border-line bg-surface p-4 sm:p-5">
              <p className="mb-4 font-display text-lg font-extrabold text-ink-strong">{campaign.phases}</p>
              <div className="flex flex-col gap-4">
                {PHASES.map((phase, i) => (
                  <div
                    key={phaseNames[i]}
                    className={cn("overflow-hidden rounded-xl bg-white shadow-sm ring-1 transition-shadow duration-300", phaseIndex === i ? "ring-2 ring-moss-600" : "ring-line")}
                  >
                    <div className="flex items-center justify-between bg-[#2b3036] px-4 py-3 text-white">
                      <p className="font-display text-base font-bold">{phaseNames[i]}</p>
                      <Pencil aria-hidden className="size-4 text-white/55" />
                    </div>
                    <ul className="flex flex-col gap-2 p-3">
                      {phase.objectives.map((o) => (
                        <li key={label(o)} className="rounded-lg bg-surface px-4 py-2.5 font-display text-sm font-semibold text-ink-strong">
                          {label(o)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Le suivi de la campagne */}
          <div>
            {step(2, campaign.follow)}
            <div className="overflow-hidden rounded-panel border border-line bg-white shadow-[0_30px_70px_-44px_rgba(15,42,24,0.5)]">
              <div className="bg-[#006b5b] px-5 py-3 text-white">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-display text-lg font-extrabold">2026.03</p>
                  <p className="font-display text-sm font-semibold tabular-nums text-white/85">
                    {curve.day} {Math.floor(day)}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-3 bg-[#1d7a6a] px-5 py-2.5 text-white">
                <p className="font-display text-base font-bold">
                  {phaseNames[phaseIndex]} <span className="ml-1 font-semibold text-white/75">{phaseIndex + 1}/2</span>
                </p>
                <p className="font-display text-sm font-bold tabular-nums">
                  {lab.core} {fmt1(campaignTemp(day))} °C
                </p>
              </div>

              <ul key={phaseIndex} className="flex animate-step-in flex-col gap-3 p-4 sm:p-5">
                {PHASES[phaseIndex].objectives.map((o) => {
                  const { done, pct } = progress(o, day, from)
                  const reached = pct >= 100
                  return (
                    <li key={label(o)} className={cn("rounded-lg border px-4 py-3 transition-colors duration-300", reached ? "border-moss-100 bg-moss-50" : "border-line bg-surface")}>
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <p className="font-display text-base font-bold text-ink-strong">
                          {label(o)}
                          <span className="ml-3 text-xs font-semibold tabular-nums text-slate">{count(o, done, pct)}</span>
                        </p>
                        <p className={cn("text-xs font-bold", reached ? "text-moss-700" : "text-slate")}>{reached ? campaign.done : campaign.running}</p>
                      </div>
                      <span aria-hidden className="relative mt-2.5 block h-2.5 overflow-hidden rounded-full bg-surface-2">
                        <span
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: "linear-gradient(90deg,#e0312a,#f3c332,#3eab35)",
                            clipPath: `inset(0 ${100 - pct}% 0 0)`,
                            transition: "clip-path 120ms linear",
                          }}
                        />
                      </span>
                    </li>
                  )
                })}
              </ul>

              <div className="border-t border-line px-4 pb-4 pt-3 sm:px-5">
                <label htmlFor={sliderId} className="sr-only">
                  {curve.sliderLabel}
                </label>
                <input
                  id={sliderId}
                  type="range"
                  min={0}
                  max={CAMPAIGN_DAYS}
                  step={0.5}
                  value={day}
                  onChange={(e) => {
                    setPlaying(false)
                    seek(Number(e.target.value) / DAYS_PER_SECOND)
                  }}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full accent-forest"
                  style={{ background: `linear-gradient(to right, #1b4a2a ${(day / CAMPAIGN_DAYS) * 100}%, #dce4d6 ${(day / CAMPAIGN_DAYS) * 100}%)` }}
                />
                <div className="mt-2 flex justify-between gap-3 text-xs font-semibold text-slate">
                  <span>{phaseNames[0]}</span>
                  <span>{phaseNames[1]}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ul className="grid gap-5 md:grid-cols-3 md:gap-8">
          {curve.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
              <span aria-hidden className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                <Check className="size-3.5" strokeWidth={3} />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
