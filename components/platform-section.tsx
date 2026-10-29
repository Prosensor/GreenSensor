"use client"

import { useId, useState } from "react"
import { Bell, Gauge, Mail, Menu, Recycle, Settings, Sprout, Leaf, Thermometer, User } from "lucide-react"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { THRESHOLD, T_MAX, T_MIN, heatColor } from "@/lib/compost"
import { useClock, useInView, useReducedMotionFlag } from "@/lib/use-clock"
import { cn } from "@/lib/utils"

const BASE = [62.4, 58.1, 71.3, 87.6]
const NAV_ICONS = [Gauge, Recycle, Sprout, Leaf, Thermometer, Settings]
const fmt = (n: number) => n.toFixed(1).replace(".", ",")

/**
 * « Tout votre site sur un seul écran » : une seule fenêtre, celle de la vraie interface, avec les
 * températures de chaque sonde en temps réel. Le seuil d'alerte se règle, et les sondes signalées suivent.
 */
export function PlatformSection() {
  const copy = useHomeCopy()
  const { platform, lab } = copy
  const sliderId = useId()
  const reduced = useReducedMotionFlag()
  const [threshold, setThreshold] = useState(THRESHOLD)
  const [ref, inView] = useInView<HTMLDivElement>(0.2)
  const { t } = useClock(inView && !reduced, 1000, { fps: 4 })

  const temps = BASE.map((b, i) => b + 0.35 * Math.sin(t * 0.8 + i * 1.7))
  const flagged = temps.map((v) => v > threshold)
  const alertCount = flagged.filter(Boolean).length

  const kpis = [
    { label: lab.kpi.campaigns, value: "2", icon: Recycle, tone: "text-moss-700" },
    { label: lab.kpi.probes, value: String(BASE.length), icon: Thermometer, tone: "text-ink-strong" },
    { label: lab.kpi.alerts, value: String(alertCount), icon: Bell, tone: alertCount > 0 ? "text-orange-cta" : "text-red-500" },
  ]

  return (
    <section id="analyse" aria-labelledby="platform-title" className="bg-white py-16 md:py-24">
      <Container className="flex flex-col gap-8 md:gap-10">
        <div className="max-w-2xl">
          <h2 id="platform-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] text-ink-strong md:text-[40px]">
            {platform.title}
          </h2>
          <p className="mt-4 font-alt text-base leading-[1.6] text-body md:text-lg">{platform.lead}</p>
        </div>

        <div ref={ref} className="min-w-0">
          <div className="overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_40px_90px_-44px_rgba(15,42,24,0.6)]">
            <div className="flex items-center gap-3 border-b border-line bg-surface-2 px-3 py-2">
              <span aria-hidden className="flex gap-1.5">
                <span className="size-2.5 rounded-full bg-mute/60" />
                <span className="size-2.5 rounded-full bg-mute/60" />
                <span className="size-2.5 rounded-full bg-mute/60" />
              </span>
              <span className="min-w-0 flex-1 truncate rounded-md bg-white px-3 py-1 text-xs text-slate">greensensor.prosensor.fr</span>
              <span className="font-display text-xs font-bold text-orange-cta">{lab.simulation}</span>
            </div>

            <div className="grid sm:grid-cols-[200px_minmax(0,1fr)]">
              {/* Menu vert : celui de la vraie application */}
              <aside aria-hidden className="hidden flex-col gap-0.5 bg-[#2d7a32] px-3 py-3 text-white sm:flex">
                <p className="mb-3 flex items-center gap-2 px-2 font-display text-base font-extrabold">
                  <Recycle className="size-5" />
                  GreenSensor
                </p>
                {lab.nav.map((label, i) => {
                  const Icon = NAV_ICONS[i]
                  return (
                    <span key={label} className={cn("flex items-center gap-2.5 rounded-md px-2.5 py-2 text-[13px] font-medium", i === 0 ? "bg-white/20" : "text-white/80")}>
                      <Icon className="size-4 shrink-0" />
                      <span className="truncate">{label}</span>
                    </span>
                  )
                })}
              </aside>

              <div className="min-w-0 bg-[#f4f6f3]">
                <div aria-hidden className="flex items-center justify-between border-b border-line bg-white px-4 py-2.5 text-slate">
                  <Menu className="size-5" />
                  <span className="flex items-center gap-4">
                    <Gauge className="size-[18px] text-moss-600" />
                    <Thermometer className="size-[18px]" />
                    <Bell className="size-[18px]" />
                    <span className="relative">
                      <Mail className="size-[18px]" />
                      {alertCount > 0 && (
                        <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-[#e0312a] text-[9px] font-bold text-white">{alertCount}</span>
                      )}
                    </span>
                    <Settings className="size-[18px]" />
                    <User className="size-[18px]" />
                  </span>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-display text-xl font-extrabold text-ink-strong">{lab.kpi.title}</p>
                    <span aria-hidden className="inline-flex items-center gap-2 rounded-md bg-[#1b2128] px-3 py-1.5 font-display text-xs font-bold text-white">
                      <span className="text-sm leading-none">+</span>
                      {lab.campaign}
                    </span>
                  </div>

                  <ul className="mt-4 grid gap-3 sm:grid-cols-3">
                    {kpis.map((k) => (
                      <li key={k.label} className="flex items-start justify-between gap-3 rounded-lg border border-line bg-white px-4 py-3">
                        <span>
                          <span className="block text-xs font-semibold text-slate">{k.label}</span>
                          <span className={cn("mt-0.5 block font-display text-2xl font-extrabold tabular-nums", k.tone)}>{k.value}</span>
                        </span>
                        <k.icon aria-hidden className={cn("size-6 shrink-0", k.tone)} />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-lg border border-line bg-white px-4 py-3">
                    <label htmlFor={sliderId} className="font-display text-sm font-bold text-ink-strong">
                      {lab.threshold}
                    </label>
                    <input
                      id={sliderId}
                      type="range"
                      min={60}
                      max={95}
                      value={threshold}
                      onChange={(e) => setThreshold(Number(e.target.value))}
                      className="h-2 min-w-[140px] flex-1 cursor-pointer appearance-none rounded-full accent-orange-cta"
                      style={{ background: `linear-gradient(to right, #d4450f ${((threshold - 60) / 35) * 100}%, #dce4d6 ${((threshold - 60) / 35) * 100}%)` }}
                    />
                    <output htmlFor={sliderId} className="font-display text-lg font-extrabold tabular-nums text-orange-cta">
                      {threshold} °C
                    </output>
                  </div>

                  <ul className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                    {temps.map((v, i) => (
                      <li key={i} className={cn("rounded-lg border bg-white p-3 transition-colors duration-300", flagged[i] ? "border-orange-cta/70 bg-orange-soft/40" : "border-line")}>
                        <p className="flex items-center justify-between text-xs font-medium text-slate">
                          {lab.probe} {i + 1}
                          <span aria-hidden className="size-2.5 rounded-full" style={{ background: heatColor(v) }} />
                        </p>
                        <p className="mt-1 font-display text-2xl font-extrabold tabular-nums text-ink-strong">
                          {fmt(v)}
                          <span className="ml-0.5 text-xs font-semibold text-slate">°C</span>
                        </p>
                        <span aria-hidden className="mt-2 block h-1.5 overflow-hidden rounded-full bg-surface-2">
                          <span className="block h-full rounded-full transition-[width] duration-500" style={{ width: `${((v - T_MIN) / (T_MAX - T_MIN)) * 100}%`, background: heatColor(v) }} />
                        </span>
                        <span className={cn("mt-3 block font-display text-xs font-bold", flagged[i] ? "text-orange-cta" : "text-moss-700")}>
                          {flagged[i] ? lab.alert : lab.ok}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
