"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useI18n } from "@/i18n/i18n-provider"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

/**
 * Sur mobile, le bouton du header est masqué : cette barre garde l'action principale à portée de pouce.
 * Elle monte depuis le bord bas une fois le hero passé, et repart par le même bord sur le formulaire
 * de contact et le pied de page (où elle ferait doublon).
 */
export function MobileCta() {
  const { t } = useI18n()
  const [show, setShow] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("hero")
    const covered: Element[] = []
    const demo = document.getElementById("demo")
    const footer = document.querySelector("footer")
    if (demo) covered.push(demo)
    if (footer) covered.push(footer)
    let heroPassed = false
    const overlapping = new Set<Element>()

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) {
          heroPassed = !entry.isIntersecting && entry.boundingClientRect.top < 0
        } else if (entry.isIntersecting) {
          overlapping.add(entry.target)
        } else {
          overlapping.delete(entry.target)
        }
      }
      setShow(heroPassed && overlapping.size === 0)
    })

    if (hero) observer.observe(hero)
    covered.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-[transform,visibility] duration-300 ease-drawer sm:hidden",
        show ? "visible translate-y-0" : "invisible translate-y-full",
      )}
    >
      <Link href="/contact" className={cn(buttonVariants({ variant: "cta", size: "lg" }), "w-full")}>
        {t.hero.cta}
      </Link>
    </div>
  )
}
