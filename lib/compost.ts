/**
 * Modèle de température d'une campagne de compostage fictive.
 * Il alimente toutes les démos du site : ce n'est pas une mesure réelle (les pages le disent).
 */
export const DAYS = 45
export const T_MIN = 10
export const T_MAX = 100
export const THRESHOLD = 85
export const RISE_END = 7
export const THERMO_END = 24

export type Phase = "rise" | "thermo" | "mature"

export const clamp = (x: number, min = 0, max = 1) => Math.min(max, Math.max(min, x))
export const smoothstep = (x: number) => {
  const c = clamp(x)
  return c * c * (3 - 2 * c)
}

/**
 * Température au cœur de l'andain, jour par jour. La campagne fictive monte à 70 °C, puis un andain
 * s'emballe vers 88 °C (jours 12 à 14) : l'alerte à 85 °C part, le tas est retourné et la
 * température retombe, comme dans la vraie vie d'un site.
 */
export function coreTemp(day: number) {
  let base: number
  if (day <= RISE_END) {
    base = 18 + 52 * smoothstep(day / RISE_END)
  } else if (day <= 13) {
    base = 70 + 19 * smoothstep((day - RISE_END) / 6)
  } else if (day <= 15) {
    base = 89 - 25 * smoothstep((day - 13) / 2)
  } else if (day <= THERMO_END) {
    base = 64 - 6 * Math.pow((day - 15) / (THERMO_END - 15), 1.2)
  } else {
    base = 58 - 30 * smoothstep((day - THERMO_END) / (DAYS - THERMO_END))
  }
  return base + 0.9 * Math.sin(day * 1.7) * Math.min(1, day / 4)
}

/** Température de l'air, mesurée dans le boîtier de la sonde. */
export const airTemp = (day: number) => 13 + 3.2 * Math.sin(day / 2.6) + 2 * Math.sin(day * 0.4)

export const phaseAt = (day: number): Phase => (day < RISE_END ? "rise" : day < THERMO_END ? "thermo" : "mature")

/** Échelle thermique : du vert d'un tas froid au rouge brique d'un tas trop chaud (jamais de bleu). */
const HEAT_STOPS: [number, [number, number, number]][] = [
  [10, [58, 96, 44]],
  [30, [96, 154, 58]],
  [50, [196, 190, 56]],
  [65, [242, 164, 49]],
  [78, [236, 106, 28]],
  [90, [200, 50, 26]],
  [100, [150, 30, 20]],
]

export function heatColor(temp: number, alpha = 1) {
  const t = clamp(temp, HEAT_STOPS[0][0], HEAT_STOPS[HEAT_STOPS.length - 1][0])
  for (let i = 1; i < HEAT_STOPS.length; i++) {
    const [t1, c1] = HEAT_STOPS[i]
    if (t <= t1) {
      const [t0, c0] = HEAT_STOPS[i - 1]
      const k = (t - t0) / (t1 - t0)
      const rgb = c0.map((v, j) => Math.round(v + (c1[j] - v) * k))
      return alpha === 1 ? `rgb(${rgb.join(",")})` : `rgba(${rgb.join(",")},${alpha})`
    }
  }
  return "rgb(200,50,26)"
}

/** Générateur pseudo-aléatoire déterministe : les démos sont identiques à chaque visite. */
export function mulberry32(seed: number) {
  let s = seed
  return () => {
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
