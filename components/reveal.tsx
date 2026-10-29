"use client"

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react"

/** Écart entre deux éléments d'un groupe : 60 ms, dans la fourchette 30–80 ms. */
export const STAGGER = 60

/** Retard d'un élément `reveal-item` ou `reveal-pop` : `base` + rang × STAGGER. */
export const itemDelay = (index: number, base = 0, step = STAGGER): CSSProperties => ({
  transitionDelay: `${base + index * step}ms`,
})

type RevealProps = {
  as?: ElementType
  className?: string
  children: ReactNode
}

/**
 * Déclenche une seule fois les entrées de ses descendants `.reveal-item` / `.reveal-pop`
 * (voir globals.css) quand le groupe entre à l'écran.
 *
 * Le contenu est visible par défaut (rendu serveur, sans JavaScript). Il n'est masqué qu'après le
 * montage, et seulement s'il est sous la ligne de flottaison : ce qui est déjà à l'écran ne clignote jamais.
 */
export function Reveal({ as: Tag = "div", className, children }: RevealProps) {
  const ref = useRef<HTMLElement>(null)
  const [state, setState] = useState<"hidden" | "shown" | undefined>(undefined)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { top, bottom } = el.getBoundingClientRect()
    if (top < window.innerHeight * 0.92 && bottom > 0) return

    setState("hidden")
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown")
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} data-reveal={state} className={className}>
      {children}
    </Tag>
  )
}
