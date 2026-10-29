"use client"

import { useEffect, type CSSProperties } from "react"
import { ArrowDown, ArrowRight, Bell, BellRing, Gauge, Leaf, Mail, Menu, Recycle, Settings, Sprout, Thermometer, User } from "lucide-react"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { ProbePhoto } from "@/components/probe-photo"
import { clamp, heatColor } from "@/lib/compost"
import { useClock, useInView, useReducedMotionFlag } from "@/lib/use-clock"
import { cn } from "@/lib/utils"

/**
 * Boucle de la démo : trois étapes de 6,5 s. La sonde envoie une mesure toutes les ~2 s (en vrai : toutes
 * les heures). Le graphique démarre déjà haut et reçoit les mesures une à une ; à 13,8 s la mesure franchit
 * le seuil de 85 °C, l'encart « Alertes » passe à 1 et la notification arrive.
 */
const STEP = 6.5
const LOOP = STEP * 3
const THRESHOLD = 85
const BEFORE = [67, 69, 71, 72.5]
const MEASURES = [
  { at: 1.2, value: 74 },
  { at: 3.3, value: 76.5 },
  { at: 5.4, value: 78.5 },
  { at: 7.5, value: 80.5 },
  { at: 9.6, value: 82 },
  { at: 11.7, value: 83.5 },
  { at: 13.8, value: 86 },
  { at: 15.9, value: 88.5 },
  { at: 18.0, value: 76 },
]
const SLOTS = BEFORE.length + MEASURES.length
const ALERT_AT = MEASURES[6].at + 0.5

const NAV_ICONS = [Gauge, Recycle, Sprout, Leaf, Thermometer, Settings]

/** Graphique des mesures : le même dessin en deux largeurs, pour que les chiffres restent lisibles. */
function HeroChart({ w, h, series, label, threshold }: { w: number; h: number; series: number[]; label: string; threshold: string }) {
  const g = { l: 46, r: 14, t: 12, b: 26, lo: 50, hi: 100 }
  const x = (i: number) => g.l + (i / (SLOTS - 1)) * (w - g.l - g.r)
  const y = (v: number) => g.t + ((g.hi - v) / (g.hi - g.lo)) * (h - g.t - g.b)
  const path = series.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ")
  const font = w > 500 ? 11 : 12.5

  return (
    <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="block w-full">
      {[50, 60, 70, 80, 90, 100].map((v) => (
        <g key={v}>
          <line x1={g.l} x2={w - g.r} y1={y(v)} y2={y(v)} stroke="#e8eee3" />
          <text x={g.l - 8} y={y(v) + 4} textAnchor="end" fontSize={font} fill="#7a887e">
            {v}°C
          </text>
        </g>
      ))}
      {[0, 3, 6, 9, 12].map((i) => (
        <text key={i} x={x(i)} y={h - 7} textAnchor="middle" fontSize={font} fill="#7a887e">
          {6 + i}h
        </text>
      ))}
      <line x1={g.l} x2={w - g.r} y1={y(THRESHOLD)} y2={y(THRESHOLD)} stroke="#d4450f" strokeWidth="1.4" strokeDasharray="6 5" />
      <text x={w - g.r - 4} y={y(THRESHOLD) - 6} textAnchor="end" fontSize={font} fontWeight="600" fill="#d4450f">
        {threshold}
      </text>
      <path d={path} fill="none" stroke="#2f6f2a" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
      {series.map((v, i) => (
        <circle
          key={i}
          className={i === series.length - 1 && i >= BEFORE.length ? "pt-in" : undefined}
          cx={x(i)}
          cy={y(v)}
          r={i === series.length - 1 ? 6 : 4.2}
          fill={heatColor(v)}
          stroke="#fff"
          strokeWidth="2"
        />
      ))}
    </svg>
  )
}

/**
 * Hero : le titre et les actions en haut ; dessous, un seul bloc. À gauche la sonde sur le terrain, collée à
 * l'interface GreenSensor qui reçoit ses mesures (même mise en page que la vraie application) ; en bas, les
 * trois étapes. Valeurs simulées.
 */
export function LiveHero() {
  const copy = useHomeCopy()
  const lab = copy.lab
  const reduced = useReducedMotionFlag()
  const [ref, inView] = useInView<HTMLDivElement>(0.15)
  const { t: clock, seek } = useClock(inView && !reduced, LOOP, { fps: 15 })

  // Mouvement réduit : la démo reste sur l'étape de l'alerte, on change d'étape au clic.
  useEffect(() => {
    if (reduced) seek(LOOP - 3)
  }, [reduced, seek])

  const step = Math.min(2, Math.floor(clock / STEP))
  const taken = MEASURES.filter((m) => clock >= m.at).length
  const series = [...BEFORE, ...MEASURES.slice(0, taken).map((m) => m.value)]
  const core = series[series.length - 1]
  const air = 13.5 + 0.4 * taken
  const alerted = clock >= ALERT_AT && clock < LOOP - 0.05
  const alertCount = alerted ? 1 : 0

  const stepBar = (i: number) => (i < step ? 1 : i === step ? clamp((clock - i * STEP) / STEP) : 0)

  const kpis = [
    { label: lab.kpi.campaigns, value: 2, icon: Recycle, tone: "text-moss-700" },
    { label: lab.kpi.probes, value: 3, icon: Thermometer, tone: "text-ink-strong" },
    { label: lab.kpi.alerts, value: alertCount, icon: Bell, tone: alerted ? "text-orange-cta" : "text-red-500" },
  ]
  const chartLabel = `${lab.probe} 3, ${Math.round(core)} °C`

  return (
    <section id="hero" aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-forest-950 pb-14 pt-10 text-white md:pb-16 md:pt-12">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute -right-48 -top-24 -z-10 size-[760px] rounded-full opacity-70"
        style={{ background: "radial-gradient(closest-side, rgba(236,106,28,0.20), rgba(62,171,53,0.10) 55%, transparent)" }}
      />

      <Container className="flex flex-col gap-8 md:gap-10">
        <div className="flex flex-col gap-4">
          <h1
            id="hero-title"
            className="hero-in font-display text-[32px] font-extrabold leading-[1.1] tracking-[-0.02em] sm:text-[40px] lg:whitespace-nowrap lg:text-[46px] xl:text-[54px]"
          >
            {copy.hero.title}
          </h1>
          <p className="hero-in max-w-[44rem] font-alt text-base leading-[1.6] text-white/75 md:text-lg" style={{ "--hero-delay": "80ms" } as CSSProperties}>
            {copy.hero.lead}
          </p>
        </div>

        <div ref={ref} className="hero-in flex flex-col gap-6" style={{ "--hero-delay": "200ms" } as CSSProperties}>
          <div className="grid items-stretch lg:grid-cols-[minmax(0,3fr)_72px_minmax(0,7fr)]">
            {/* La sonde sur le terrain */}
            <figure className="relative h-80 overflow-hidden rounded-[18px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10 lg:h-auto">
              <ProbePhoto core={core} air={air} pulseKey={taken} title={`${lab.probe} 3 : ${Math.round(core)} °C`} className="absolute inset-0" />
              <div aria-hidden className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
              <figcaption className="absolute bottom-3 left-4 font-display text-sm font-bold text-white">{lab.probe} 3</figcaption>
            </figure>

            {/* La mesure part de la sonde et arrive dans l'interface : un espace marque la démarcation */}
            <div aria-hidden className="flex h-16 items-center justify-center lg:h-auto">
              <span className="relative flex size-10 items-center justify-center rounded-full bg-moss-400 text-forest-950">
                <span key={taken} className="seam-ripple absolute inset-0 rounded-full bg-moss-400 motion-reduce:hidden" />
                <ArrowDown className="relative size-5 lg:hidden" strokeWidth={2.5} />
                <ArrowRight className="relative hidden size-5 lg:block" strokeWidth={2.5} />
              </span>
            </div>

            {/* L'interface GreenSensor, comme la vraie */}
            <div
              className={cn(
                "relative min-w-0 overflow-hidden rounded-[18px] bg-white text-ink transition-shadow duration-500 ease-out-strong",
                alerted
                  ? "shadow-[0_0_0_2px_#d4450f,0_0_0_9px_rgba(212,69,15,0.22),0_40px_90px_-30px_rgba(0,0,0,0.75)]"
                  : "shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10",
              )}
            >
              <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3 py-2">
                <span aria-hidden className="flex gap-1.5">
                  <span className="size-2.5 rounded-full bg-mute/60" />
                  <span className="size-2.5 rounded-full bg-mute/60" />
                  <span className="size-2.5 rounded-full bg-mute/60" />
                </span>
                <span className="min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 font-sans text-xs text-slate">greensensor.prosensor.fr</span>
                <span className="hidden font-display text-xs font-bold text-orange-cta sm:inline">{lab.simulation}</span>
              </div>

              <div className="grid sm:grid-cols-[168px_minmax(0,1fr)]">
                <aside aria-hidden className="hidden flex-col gap-0.5 bg-[#2d7a32] px-2.5 py-3 text-white sm:flex">
                  <p className="mb-3 flex items-center gap-1.5 px-2 font-display text-[14px] font-extrabold">
                    <Recycle className="size-4" />
                    GreenSensor
                  </p>
                  {lab.nav.map((label, i) => {
                    const Icon = NAV_ICONS[i]
                    return (
                      <span key={label} className={cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-[12.5px] font-medium", i === 0 ? "bg-white/20" : "text-white/80")}>
                        <Icon className="size-3.5 shrink-0" />
                        <span className="truncate">{label}</span>
                      </span>
                    )
                  })}
                </aside>

                <div className="relative min-w-0 bg-[#f4f6f3]">
                  <div aria-hidden className="flex items-center justify-between border-b border-line bg-white px-4 py-2 text-slate">
                    <Menu className="size-[18px]" />
                    <span className="flex items-center gap-3.5">
                      <Gauge className="size-4 text-moss-600" />
                      <Thermometer className="size-4" />
                      <Bell className="size-4" />
                      <span className="relative">
                        <Mail className="size-4" />
                        <span
                          className={cn(
                            "absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-[#e0312a] text-[9px] font-bold text-white transition-transform duration-300 ease-out-strong",
                            alerted ? "scale-100" : "scale-0",
                          )}
                        >
                          1
                        </span>
                      </span>
                      <Settings className="size-4" />
                      <User className="size-4" />
                    </span>
                  </div>

                  <div className="p-3 sm:p-4">
                    <div className="flex items-center justify-between gap-3">
                      <p className="font-display text-lg font-extrabold text-ink-strong">{lab.kpi.title}</p>
                      <span aria-hidden className="inline-flex items-center gap-2 rounded-md bg-[#1b2128] px-3 py-1.5 font-display text-xs font-bold text-white">
                        <span className="text-sm leading-none">+</span>
                        {lab.campaign}
                      </span>
                    </div>

                    {/* Les trois encarts : l'encart Alertes s'incrémente à l'étape 3 */}
                    <ul className="mt-3 grid grid-cols-3 gap-2.5">
                      {kpis.map((k) => (
                        <li
                          key={k.label}
                          className={cn(
                            "flex items-start justify-between gap-2 rounded-lg border bg-white px-3 py-2.5 transition-colors duration-300",
                            k.value > 0 && k.icon === Bell ? "border-orange-cta bg-orange-soft" : "border-line",
                          )}
                        >
                          <span className="min-w-0">
                            <span className="block text-[11px] font-semibold leading-tight text-slate">{k.label}</span>
                            <span key={k.value} className={cn("mt-0.5 block origin-left font-display text-2xl font-extrabold tabular-nums leading-none", k.tone, k.icon === Bell && alerted && "animate-pop-in")}>
                              {k.value}
                            </span>
                          </span>
                          <k.icon aria-hidden className={cn("size-5 shrink-0", k.tone)} />
                        </li>
                      ))}
                    </ul>

                    {/* Le graphique : les mesures arrivent une à une */}
                    <div className="mt-3 overflow-hidden rounded-lg border border-line bg-white">
                      <div className="flex items-center justify-between gap-3 border-b border-moss-600/70 px-4 py-2">
                        <p className="font-display text-[13px] font-bold text-ink-strong">{lab.kpi.chart}</p>
                        <span aria-hidden className="rounded border border-line px-2 py-0.5 text-[11px] font-medium text-slate">
                          24 h
                        </span>
                      </div>
                      <div className="hidden sm:block">
                        <HeroChart w={640} h={176} series={series} label={chartLabel} threshold={`${lab.threshold} : ${THRESHOLD} °C`} />
                      </div>
                      <div className="sm:hidden">
                        <HeroChart w={340} h={200} series={series} label={chartLabel} threshold={`${THRESHOLD} °C`} />
                      </div>
                    </div>
                  </div>

                  {/* Notification de l'application : en bas à droite, dans la zone vide du graphique, sans masquer les boutons */}
                  <aside
                    aria-label={copy.hero.alert.label}
                    className={cn("absolute bottom-10 right-3 z-20 w-[calc(100%-1.5rem)] max-w-[390px] sm:bottom-10 sm:right-5", alerted ? "notif-in" : "pointer-events-none opacity-0")}
                  >
                    <div className="flex items-center gap-3 rounded-xl bg-white p-2.5 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.55)] ring-1 ring-line">
                      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-orange-cta text-white">
                        {alerted && <span aria-hidden className="notif-ripple absolute inset-0 rounded-full bg-orange-cta" />}
                        <BellRing aria-hidden className="notif-bell relative size-5" />
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-base font-extrabold leading-tight text-ink-strong">
                          {lab.alert} {lab.probe} 3
                        </p>
                        <p className="mt-0.5 text-[12.5px] leading-snug text-body">
                          {Math.round(MEASURES[6].value)} °C. {copy.hero.alert.text}
                        </p>
                      </div>
                    </div>
                  </aside>
                </div>
              </div>
            </div>
          </div>

          {/* Les trois étapes : chacune se lit, se choisit et avance seule */}
          <ol className="grid grid-cols-3 gap-4 sm:gap-6">
            {lab.steps.map((s, i) => (
              <li key={s.name}>
                <button
                  type="button"
                  onClick={() => seek(i * STEP + 0.01)}
                  aria-current={i === step ? "step" : undefined}
                  className="group block w-full text-left"
                >
                  <span aria-hidden className="block h-[3px] overflow-hidden rounded-full bg-white/15">
                    <span
                      className="block h-full origin-left rounded-full bg-moss-400"
                      style={{ transform: `scaleX(${stepBar(i)})`, transition: "transform 120ms linear" }}
                    />
                  </span>
                  <span
                    className={cn(
                      "mt-2.5 block font-display text-[13px] font-bold leading-snug transition-colors sm:text-sm",
                      i === step ? "text-white" : "text-white/55 group-hover:text-white/85",
                    )}
                  >
                    <span aria-hidden className="mr-1.5 text-moss-400">
                      {i + 1}
                    </span>
                    {s.name}
                  </span>
                  <span className={cn("mt-1 hidden text-xs leading-snug transition-colors md:block", i === step ? "text-white/70" : "text-white/35")}>
                    {s.desc}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  )
}
