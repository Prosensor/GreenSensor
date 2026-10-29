"use client"

import { useState } from "react"
import Image from "next/image"
import { Check, Sprout } from "lucide-react"
import { useI18n } from "@/i18n/i18n-provider"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { smoothstep } from "@/lib/compost"
import { useInView } from "@/lib/use-clock"
import { cn } from "@/lib/utils"

/**
 * Rapport de phase : même structure que le vrai PDF (objectifs, % atteint, périodes, courbe).
 * La courbe est fictive ; le calcul des périodes, lui, est fait pour de vrai à partir d'elle.
 */
const SEARCH_DAYS = 30
const OBJECTIVES = [
  { temp: 55, days: 14 },
  { temp: 60, days: 7 },
  { temp: 65, days: 3 },
  { temp: 70, days: 2 },
]
const W = 440
const H = 200
const PAD = { l: 36, r: 8, t: 10, b: 22 }
const T_LO = 10
const T_HI = 80

/** Courbe d'exemple : montée rapide, plateau à 72 °C, puis lente descente. */
function reportTemp(d: number) {
  let b: number
  if (d < 2) b = 18 + 44 * smoothstep(d / 2)
  else if (d < 3) b = 62 + 10 * smoothstep(d - 2)
  else if (d < 6) b = 72
  else if (d < 7) b = 72 - 9 * smoothstep(d - 6)
  else if (d < 13) b = 63 - 3.5 * ((d - 7) / 6)
  else if (d < 17) b = 59.5 - 3.5 * ((d - 13) / 4)
  else if (d < 24) b = 56 - 16 * smoothstep((d - 17) / 7)
  else b = 40 - 12 * smoothstep((d - 24) / 6)
  return b + 0.7 * Math.sin(d * 5.1) * Math.min(1, d / 3)
}

/** Première période continue au-dessus du seuil qui dure assez longtemps : c'est elle qui valide l'objectif. */
function qualifyingRun(threshold: number, days: number) {
  let from: number | null = null
  for (let d = 0; d <= SEARCH_DAYS + 1e-9; d += 0.05) {
    if (reportTemp(d) >= threshold) {
      if (from === null) from = d
      if (d - from >= days) return { from, to: from + days }
    } else from = null
  }
  return null
}

/** Chaque objectif est atteint : sa période et le jour où il l'est. La phase se termine quand le dernier l'est. */
const STATS = OBJECTIVES.map((o) => {
  const run = qualifyingRun(o.temp, o.days)
  return { ...o, from: run?.from ?? 0, to: run?.to ?? 0, pct: run ? 100 : 0 }
})
const PHASE_END = Math.max(...STATS.map((s) => s.to))

const x = (d: number) => PAD.l + (d / PHASE_END) * (W - PAD.l - PAD.r)
const y = (t: number) => PAD.t + ((T_HI - t) / (T_HI - T_LO)) * (H - PAD.t - PAD.b)

const CURVE = Array.from({ length: Math.round(PHASE_END * 8) + 1 }, (_, i) => Math.min(PHASE_END, i / 8))
const CURVE_PATH = CURVE.map((d, i) => `${i ? "L" : "M"}${x(d).toFixed(1)},${y(reportTemp(d)).toFixed(1)}`).join(" ")
const READINGS = Math.round(PHASE_END * 24)
const AVERAGE = CURVE.reduce((sum, d) => sum + reportTemp(d), 0) / CURVE.length
const fmt1 = (n: number) => n.toFixed(1).replace(".", ",")
const TICKS = [0, 1, 2, 3].map((i) => (PHASE_END * i) / 3)

/** Zone de la courbe située au-dessus du seuil, sur la période retenue. */
function periodArea(temp: number, from: number, to: number) {
  const pts = CURVE.filter((d) => d >= from && d <= to)
  if (!pts.length) return ""
  const top = pts.map((d) => `${x(d).toFixed(1)},${y(Math.max(reportTemp(d), temp)).toFixed(1)}`)
  return `M${x(pts[0]).toFixed(1)},${y(temp).toFixed(1)} L${top.join(" L")} L${x(pts[pts.length - 1]).toFixed(1)},${y(temp).toFixed(1)} Z`
}

export function ReportSection() {
  const copy = useHomeCopy()
  const { language } = useI18n()
  const { report, curve } = copy
  const p = report.paper
  const [selected, setSelected] = useState(0)
  const [ref, inView] = useInView<HTMLDivElement>(0.1)
  const sel = STATS[selected]

  const dayLabel = (d: number) => `${curve.day} ${Math.floor(d)}`
  const objectiveLabel = (o: { days: number; temp: number }) => `${o.days} ${p.days} ≥ ${o.temp} °C`
  const phaseStarted = `${p.phase} : ${language === "de" ? p.phaseStarted : p.phaseStarted.toLowerCase()}`
  // Le journal raconte la phase : démarrage, chaque objectif à sa date, fin de phase.
  const events = [
    { day: 0, text: p.started },
    { day: 0, text: phaseStarted },
    ...[...STATS].sort((a, b) => a.to - b.to).map((s) => ({ day: s.to, text: `${p.reached} : ${objectiveLabel(s)}` })),
    { day: PHASE_END, text: `${p.phase} : ${language === "de" ? p.ended : p.ended.toLowerCase()}` },
  ]

  return (
    <section id="rapports" aria-labelledby="report-title" className="bg-surface py-16 md:py-24">
      <Container className="grid items-center gap-10 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
        <div ref={ref} className="order-2 min-w-0 lg:order-1">
          <article
            aria-label={p.title}
            className="rounded-[10px] bg-white p-5 shadow-[0_40px_90px_-40px_rgba(15,42,24,0.55)] ring-1 ring-line sm:p-8"
          >
            <header className="flex items-center gap-3 border-b border-line pb-4">
              <Image src="/GreenSensor_Logo_horiz.png" alt="GreenSensor" width={140} height={56} className="h-9 w-auto" />
              <h3 className="font-display text-base font-extrabold text-ink-strong sm:text-lg">{p.title}</h3>
            </header>

            <p className="mt-4 text-[13px] text-slate">
              <span className="font-bold">{p.start} :</span> {dayLabel(0)}
            </p>
            <table className="mt-4 w-full border border-line text-left text-[12px]">
              <caption className="pb-2 text-left font-display text-[13px] font-bold text-ink-strong">{p.log}</caption>
              <thead>
                <tr className="border-b border-line bg-surface">
                  <th className="px-2.5 py-1.5 font-semibold">{p.date}</th>
                  <th className="px-2.5 py-1.5 font-semibold">{p.event}</th>
                </tr>
              </thead>
              <tbody className="text-slate">
                {events.map((event) => (
                  <tr key={event.text} className="border-b border-line/70 last:border-0">
                    <td className="whitespace-nowrap px-2.5 py-1.5">{dayLabel(event.day)}</td>
                    <td className="px-2.5 py-1.5">{event.text}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h4 className="mt-6 flex items-center gap-2 border-b border-line pb-2 font-display text-base font-extrabold text-forest">
              <Sprout aria-hidden className="size-5" />
              {p.phase}
            </h4>
            <p className="mt-3 text-[13px] text-slate">
              <span className="font-display text-lg font-extrabold text-ink-strong">1</span> ({READINGS} {p.readings}) - {p.average} : {fmt1(AVERAGE)} °C
            </p>

            <div role="radiogroup" aria-label={p.objective} className="mt-3 overflow-hidden rounded-md border border-line text-[12px]">
              <div className="grid grid-cols-[minmax(0,1.1fr)_70px_minmax(0,1.6fr)] border-b border-line bg-surface px-2.5 py-1.5 font-semibold">
                <span>{p.objective}</span>
                <span className="text-center">{p.achieved}</span>
                <span className="hidden sm:block">{p.periods}</span>
              </div>
              {STATS.map((s, i) => {
                const on = selected === i
                const reached = s.pct >= 100
                return (
                  <button
                    key={s.temp}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    onClick={() => setSelected(i)}
                    className={cn(
                      "grid w-full grid-cols-[minmax(0,1.1fr)_70px_minmax(0,1.6fr)] items-center border-b border-line/70 px-2.5 py-2 text-left transition-colors last:border-0",
                      on ? "bg-moss-50" : "hover:bg-surface",
                    )}
                  >
                    <span className="font-medium text-ink-strong">
                      {objectiveLabel(s)}
                    </span>
                    <span className="flex flex-col items-center gap-1">
                      <span className={cn("font-display text-[12px] font-extrabold tabular-nums", reached ? "text-moss-700" : "text-slate")}>
                        {inView ? s.pct : 0} %
                      </span>
                      <span aria-hidden className="block h-1 w-12 overflow-hidden rounded-full bg-surface-2">
                        <span
                          className="block h-full rounded-full bg-moss-600 transition-[width] duration-700 ease-out-strong"
                          style={{ width: `${inView ? s.pct : 0}%`, transitionDelay: `${i * 90}ms` }}
                        />
                      </span>
                    </span>
                    <span className="hidden text-[11px] font-medium text-moss-700 sm:block">
                      {`${dayLabel(s.from)} → ${dayLabel(s.to)} (${s.days}${p.dayShort})`}
                    </span>
                  </button>
                )
              })}
            </div>

            <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`${p.phase}, ${p.average} ${fmt1(AVERAGE)} °C`} className="mt-4 block w-full">
              {[20, 40, 60, 80].map((tick) => (
                <g key={tick}>
                  <line x1={PAD.l} x2={W - PAD.r} y1={y(tick)} y2={y(tick)} stroke="#e8eee3" />
                  <text x={PAD.l - 6} y={y(tick) + 3.5} textAnchor="end" fontSize="9.5" fill="#7a887e">
                    {tick}°C
                  </text>
                </g>
              ))}
              {TICKS.map((tick, i) => (
                <text key={tick} x={x(tick)} y={H - 6} textAnchor={i === 0 ? "start" : i === TICKS.length - 1 ? "end" : "middle"} fontSize="9.5" fill="#7a887e">
                  {Math.floor(tick)}
                </text>
              ))}
              {STATS.map((s, i) => (
                <line
                  key={s.temp}
                  x1={PAD.l}
                  x2={W - PAD.r}
                  y1={y(s.temp)}
                  y2={y(s.temp)}
                  stroke={i === selected ? "#2f6f2a" : "#b7c2b1"}
                  strokeWidth={i === selected ? 1.6 : 1}
                  strokeDasharray="4 3"
                  style={{ transition: "stroke 200ms ease-out" }}
                />
              ))}
              <path d={periodArea(sel.temp, sel.from, sel.to)} fill="rgba(62,171,53,0.28)" />
              <path d={CURVE_PATH} fill="none" stroke="#2f6f2a" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
          </article>
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <h2 id="report-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-ink-strong md:text-[40px]">
            {report.title}
          </h2>
          <p className="font-alt text-base leading-[1.6] text-body md:text-lg">{report.lead}</p>
          <ul className="flex flex-col gap-3.5">
            {report.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink">
                <span aria-hidden className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-moss-100 text-moss-700">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
