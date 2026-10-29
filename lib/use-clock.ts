"use client"

import { useCallback, useEffect, useRef, useState } from "react"

/** Vrai quand l'élément est (en partie) visible : les démos s'arrêtent hors écran. */
export function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold })
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView] as const
}

/** Vrai si le visiteur a demandé moins de mouvement ; faux au rendu serveur. */
export function useReducedMotionFlag() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduced(query.matches)
    update()
    query.addEventListener("change", update)
    return () => query.removeEventListener("change", update)
  }, [])

  return reduced
}

/**
 * Horloge de démo : temps écoulé en secondes, qui reboucle sur `loop` (ou s'arrête à `loop` si
 * `once`). Elle ne tourne que si `running` est vrai et que l'onglet est visible. `seek` replace
 * l'horloge, y compris après la fin d'une lecture unique.
 */
export function useClock(running: boolean, loop: number, { fps = 15, once = false, speed = 1 } = {}) {
  const [t, setT] = useState(0)
  const elapsed = useRef(0)
  const origin = useRef(0)

  useEffect(() => {
    if (!running) return
    let raf = 0
    let last = 0
    origin.current = performance.now() - (elapsed.current / speed) * 1000

    const frame = (now: number) => {
      if (now - last >= 1000 / fps) {
        last = now
        // L'horodatage de rAF peut précéder `origin` de quelques ms : jamais de temps négatif.
        const raw = Math.max(0, ((now - origin.current) / 1000) * speed)
        const value = once ? Math.min(raw, loop) : raw % loop
        if (value !== elapsed.current) {
          elapsed.current = value
          setT(value)
        }
      }
      raf = requestAnimationFrame(frame)
    }

    const onVisibility = () => {
      cancelAnimationFrame(raf)
      if (!document.hidden) {
        origin.current = performance.now() - (elapsed.current / speed) * 1000
        raf = requestAnimationFrame(frame)
      }
    }

    document.addEventListener("visibilitychange", onVisibility)
    if (!document.hidden) raf = requestAnimationFrame(frame)
    return () => {
      cancelAnimationFrame(raf)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [running, loop, fps, once, speed])

  const seek = useCallback(
    (value: number) => {
      elapsed.current = value
      origin.current = performance.now() - (value / speed) * 1000
      setT(value)
    },
    [speed],
  )

  return { t, seek }
}
