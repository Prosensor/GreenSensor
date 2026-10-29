/**
 * Campagne fictive de 80 jours : une phase de fermentation, puis une phase de maturation.
 * Chaque phase a des objectifs que l'utilisateur définit (« 14 jours ≥ 55 °C »). L'avancement est
 * calculé pour de vrai à partir de la courbe : c'est la plus longue période continue qui compte.
 */
export const CAMPAIGN_DAYS = 80
const STEP = 0.1

const smooth = (x: number) => {
  const c = Math.min(1, Math.max(0, x))
  return c * c * (3 - 2 * c)
}

/** Température au cœur de l'andain, jour par jour (illustrative). */
export function campaignTemp(d: number) {
  let b: number
  if (d < 2) b = 18 + 46 * smooth(d / 2)
  else if (d < 3.5) b = 64 + 8 * smooth((d - 2) / 1.5)
  else if (d < 5) b = 72 - 1 * smooth((d - 3.5) / 1.5)
  else if (d < 7) b = 71 - 5 * smooth((d - 5) / 2)
  else if (d < 13) b = 66 - 5 * ((d - 7) / 6)
  else if (d < 17) b = 61 - 4 * ((d - 13) / 4)
  else if (d < 24) b = 57 - 15 * smooth((d - 17) / 7)
  else if (d < 45) b = 42 - 12 * smooth((d - 24) / 21)
  else b = 30 - 4 * smooth((d - 45) / 35)
  return b + 0.6 * Math.sin(d * 5.1) * Math.min(1, d / 3)
}

export type Objective = { temp: number; days: number; kind: "min" | "max" }

export const PHASES: { objectives: Objective[] }[] = [
  {
    objectives: [
      { temp: 55, days: 14, kind: "min" },
      { temp: 60, days: 7, kind: "min" },
      { temp: 65, days: 3, kind: "min" },
      { temp: 70, days: 1, kind: "min" },
    ],
  },
  { objectives: [{ temp: 40, days: 50, kind: "max" }] },
]

const SAMPLES = Array.from({ length: Math.round(CAMPAIGN_DAYS / STEP) + 1 }, (_, i) => campaignTemp(i * STEP))
const ok = (o: Objective, temp: number) => (o.kind === "min" ? temp >= o.temp : temp <= o.temp)

/** Plus longue période continue, en jours, qui respecte l'objectif entre `from` et `day`. */
export function bestRun(o: Objective, day: number, from = 0) {
  const end = Math.min(SAMPLES.length - 1, Math.round(day / STEP))
  let best = 0
  let run = 0
  for (let i = Math.round(from / STEP); i <= end; i++) {
    run = ok(o, SAMPLES[i]) ? run + 1 : 0
    best = Math.max(best, run)
  }
  return (best * STEP) / 1
}

export const progress = (o: Objective, day: number, from = 0) => {
  const done = Math.min(o.days, bestRun(o, day, from))
  return { done, pct: Math.min(100, Math.round((done / o.days) * 100)) }
}

/** Jour où tous les objectifs de la première phase sont atteints : la phase se termine seule. */
export const FIRST_PHASE_END = (() => {
  for (let d = 0; d <= CAMPAIGN_DAYS; d += STEP) {
    if (PHASES[0].objectives.every((o) => progress(o, d).pct >= 100)) return Math.round(d * 10) / 10
  }
  return CAMPAIGN_DAYS
})()
