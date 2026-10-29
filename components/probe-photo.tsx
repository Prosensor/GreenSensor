"use client"

import { useId } from "react"
import Image from "next/image"
import { heatColor } from "@/lib/compost"

/** Repères de la photo (en pixels de l'image d'origine, 640 × 768). */
const IMG = { w: 640, h: 768 }
const ANTENNA = { x: 318, y: 100 }
const BOX = { x: 322, y: 270 }
const TIP = { x: 320, y: 628 }

type Props = {
  /** Température au cœur de l'andain, au bout de la sonde. */
  core: number
  /** Température de l'air, mesurée dans le boîtier. */
  air: number
  /** Change à chaque mesure : relance l'émission radio et l'onde au bout de la sonde. */
  pulseKey?: number
  title: string
  className?: string
}

/**
 * La vraie sonde plantée dans un vrai tas, avec les données par-dessus : l'émission radio au sommet
 * de l'antenne, la chaleur autour de la pointe et les deux températures. Les repères suivent le
 * recadrage de la photo (même règle « slice » que object-cover).
 */
export function ProbePhoto({ core, air, pulseKey = 0, title, className }: Props) {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "")
  const coreColor = heatColor(core)

  return (
    <div className={`${className?.includes("absolute") ? "" : "relative"} overflow-hidden bg-forest-950 ${className ?? ""}`}>
      <Image
        src="/sonde-sur-tas.jpg"
        alt=""
        fill
        priority
        sizes="(min-width: 1024px) 360px, 100vw"
        className="object-cover"
      />
      <svg viewBox={`0 0 ${IMG.w} ${IMG.h}`} preserveAspectRatio="xMidYMid slice" role="img" aria-label={title} className="absolute inset-0 size-full">
        <defs>
          <radialGradient id={`${uid}heat`} gradientUnits="userSpaceOnUse" cx={TIP.x} cy={TIP.y} r="190">
            <stop offset="0" stopColor={heatColor(core, 0.62)} />
            <stop offset="0.5" stopColor={heatColor(core - 8, 0.26)} />
            <stop offset="1" stopColor={heatColor(core - 16, 0)} />
          </radialGradient>
        </defs>

        {/* Chaleur autour de la pointe */}
        <circle cx={TIP.x} cy={TIP.y} r="190" fill={`url(#${uid}heat)`} />

        {/* Émission radio au sommet de l'antenne : une impulsion à chaque mesure */}
        <g key={pulseKey} fill="none" stroke="#ffffff" strokeWidth="6" strokeLinecap="round">
          {[26, 46, 66].map((r, i) => (
            <path
              key={r}
              className="gs-wave"
              d={`M${ANTENNA.x - r * 0.8} ${ANTENNA.y - 14 - r * 0.6} A${r} ${r} 0 0 1 ${ANTENNA.x + r * 0.8} ${ANTENNA.y - 14 - r * 0.6}`}
              style={{ animationDelay: `${i * 130}ms` }}
            />
          ))}
        </g>

        {/* Capteur de cœur */}
        <circle key={`r${pulseKey}`} className="gs-ring" cx={TIP.x} cy={TIP.y} r="34" fill="none" stroke={coreColor} strokeWidth="6" />
        <circle cx={TIP.x} cy={TIP.y} r="14" fill={coreColor} stroke="#ffffff" strokeWidth="6" />

        <g fontFamily="var(--font-sora), system-ui, sans-serif" fontWeight="800">
          <g transform={`translate(${TIP.x + 36} ${TIP.y - 30})`}>
            <rect width="150" height="64" rx="14" fill="#0f2a18" stroke={coreColor} strokeWidth="5" />
            <text x="75" y="44" textAnchor="middle" fontSize="34" fill="#fff">
              {Math.round(core)} °C
            </text>
          </g>
          <g transform={`translate(${BOX.x + 52} ${BOX.y - 70})`}>
            <rect width="130" height="54" rx="12" fill="#0f2a18" stroke="#ffffff" strokeOpacity="0.5" strokeWidth="4" />
            <text x="65" y="38" textAnchor="middle" fontSize="28" fill="#bfe3a8">
              {Math.round(air)} °C
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}
