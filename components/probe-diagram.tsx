"use client"

import { useId } from "react"
import { useHomeCopy } from "@/i18n/home-copy"
import { GRIP, GRIP_EDGE } from "@/lib/probe"

/**
 * La sonde avec les proportions de la vraie (0,9 px par millimètre pour la tête : boîtier 130 × 50 × 54 mm,
 * tube Ø 16 mm, d'après la fiche technique et la photo). Les pièces sont nommées directement.
 */
const VB = { w: 400, h: 690 }
const CX = 200
const STAGE = "#f3f7ef"
const INK = "#1b2b21"

/** Légendes : point sur la pièce, puis trait horizontal ou vertical jusqu'au texte. */
const NOTES = [
  { part: 0, from: [CX + 5, 92], to: [248, 92], at: [254, 92], side: "right" },
  { part: 1, from: [CX + 31, 205], to: [262, 205], at: [268, 205], side: "right" },
  { part: 2, from: [76, 326], to: [76, 372], at: [20, 380], side: "below" },
  { part: 3, from: [CX + 7, 440], to: [248, 440], at: [254, 440], side: "right" },
  { part: 4, from: [CX + 4, 640], to: [248, 640], at: [254, 640], side: "right" },
] as const

export function ProbeDiagram() {
  const copy = useHomeCopy()
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "")
  const names = copy.lab.parts

  return (
    <div className="mx-auto w-full max-w-[420px] rounded-panel p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] sm:p-6" style={{ background: `radial-gradient(120% 70% at 50% 30%, #ffffff, ${STAGE})` }}>
      <div className="relative mx-auto w-full" style={{ aspectRatio: `${VB.w} / ${VB.h}` }}>
        <svg viewBox={`0 0 ${VB.w} ${VB.h}`} role="img" aria-label={copy.specs.alt} className="absolute inset-0 size-full">
          <defs>
            <linearGradient id={`${uid}steel`} x1="0" x2="1">
              <stop offset="0" stopColor="#8d988b" />
              <stop offset="0.42" stopColor="#fbfcf9" />
              <stop offset="1" stopColor="#7d887b" />
            </linearGradient>
            <linearGradient id={`${uid}steelH`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8d988b" />
              <stop offset="0.45" stopColor="#fbfcf9" />
              <stop offset="1" stopColor="#7d887b" />
            </linearGradient>
            <linearGradient id={`${uid}grip`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#3a403c" />
              <stop offset="0.5" stopColor={GRIP} />
              <stop offset="1" stopColor="#0a0c0b" />
            </linearGradient>
            <linearGradient id={`${uid}case`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#363c37" />
              <stop offset="1" stopColor="#0f1210" />
            </linearGradient>
            <linearGradient id={`${uid}face`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#49bf43" />
              <stop offset="1" stopColor="#2a8f2a" />
            </linearGradient>
            <radialGradient id={`${uid}glow`}>
              <stop offset="0" stopColor="#ec6a1c" stopOpacity="0.5" />
              <stop offset="1" stopColor="#ec6a1c" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Antenne : ≈ 120 mm */}
          <path d={`M${CX} 150 L${CX} 40`} stroke="#171a18" strokeWidth="7" strokeLinecap="round" />

          {/* Boîtier IP68 : 130 mm de haut, 54 mm de large, avec ses quatre oreilles de fixation */}
          {[
            [CX - 30, 150],
            [CX + 24, 150],
            [CX - 30, 251],
            [CX + 24, 251],
          ].map(([x, y]) => (
            <rect key={`${x}-${y}`} x={x} y={y} width="6" height="10" rx="2" fill="#1b211c" />
          ))}
          <rect x={CX - 24.5} y="146" width="49" height="117" rx="6" fill={`url(#${uid}case)`} stroke="#4a534b" />
          <rect x={CX - 19} y="154" width="38" height="94" rx="3" fill={`url(#${uid}face)`} />
          <circle cx={CX - 10} cy="166" r="2.6" fill="#dcf7cd" />
          <rect x={CX - 19} y="196" width="38" height="24" fill="#fff" />
          <text textAnchor="middle" fontFamily="var(--font-sora), system-ui, sans-serif" fontWeight="800" fontSize="8.4" fill="#2a8f2a">
            <tspan x={CX} y="206">
              Green
            </tspan>
            <tspan x={CX} y="216">
              Sensor
            </tspan>
          </text>
          <text x={CX} y="238" textAnchor="middle" fontFamily="var(--font-sora), system-ui, sans-serif" fontWeight="800" fontSize="6.2" fill="#fff">
            Prosensor
          </text>

          {/* Raccord et poignée en T : barre de 175 mm, grips de 100 mm */}
          <rect x={CX - 11} y="263" width="22" height="40" fill={`url(#${uid}steel)`} stroke="#8d988b" strokeWidth="0.8" />
          <rect x={CX - 80} y="300" width="160" height="20" rx="4" fill={`url(#${uid}steelH)`} stroke="#8d988b" strokeWidth="0.8" />
          <rect x={CX - 18} y="295" width="36" height="30" rx="5" fill={`url(#${uid}steelH)`} stroke="#6f7b71" strokeWidth="0.9" />
          <text x={CX} y="314" textAnchor="middle" fontFamily="var(--font-sora), system-ui, sans-serif" fontWeight="700" fontSize="8" fill="#4a554c">
            316
          </text>
          <rect x={CX - 170} y="294" width="92" height="32" rx="12" fill={`url(#${uid}grip)`} stroke={GRIP_EDGE} strokeWidth="0.8" />
          <rect x={CX + 78} y="294" width="92" height="32" rx="12" fill={`url(#${uid}grip)`} stroke={GRIP_EDGE} strokeWidth="0.8" />
          {[0, 1, 2, 3, 4].map((i) => (
            <g key={i} stroke="#ffffff" strokeOpacity="0.1" strokeWidth="1">
              <line x1={CX - 160 + i * 17} y1="298" x2={CX - 160 + i * 17} y2="322" />
              <line x1={CX + 88 + i * 17} y1="298" x2={CX + 88 + i * 17} y2="322" />
            </g>
          ))}

          {/* Tube inox Ø 16 mm */}
          <rect x={CX - 7} y="325" width="14" height="305" fill={`url(#${uid}steel)`} stroke="#8d988b" strokeWidth="0.8" />

          {/* Pointe de mesure */}
          <circle cx={CX} cy="640" r="28" fill={`url(#${uid}glow)`} />
          <path d={`M${CX - 7} 630 H${CX + 7} L${CX} 650 Z`} fill="#7d887b" />
          <circle cx={CX} cy="626" r="5" fill="#ec6a1c" stroke="#fff" strokeWidth="2" />

          {/* Traits de légende */}
          <g stroke="#5b6a5e" strokeWidth="1.2" fill="#5b6a5e">
            {NOTES.map((n) => (
              <g key={n.part}>
                <line x1={n.from[0]} y1={n.from[1]} x2={n.to[0]} y2={n.to[1]} />
                <circle cx={n.from[0]} cy={n.from[1]} r="2.6" stroke="none" />
              </g>
            ))}
          </g>
        </svg>

        {NOTES.map((n) => (
          <p
            key={n.part}
            className="absolute font-display text-[13px] font-bold leading-tight text-ink-strong sm:text-sm"
            style={{
              left: `${(n.at[0] / VB.w) * 100}%`,
              top: `${(n.at[1] / VB.h) * 100}%`,
              maxWidth: n.side === "right" ? `${((VB.w - n.at[0] - 4) / VB.w) * 100}%` : "42%",
              transform: n.side === "right" ? "translateY(-50%)" : undefined,
            }}
          >
            {names[n.part].name}
          </p>
        ))}
      </div>
    </div>
  )
}
