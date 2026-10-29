"use client"

import { useEffect, useState, type ChangeEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Lang = "fr" | "en" | "es" | "de" | "pt" | "ro"

const APP_URL = "https://greensensor.prosensor.fr/"

const links = [
  { key: "articles", href: "/articles" },
  { key: "faq", href: "/faq" },
  { key: "doc", href: "/documentation" },
] as const

/**
 * En-tête sombre et collant : logo, navigation, langue, accès à l'application et action principale.
 * Le fond devient plus opaque dès que la page défile, pour rester lisible au-dessus du contenu.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const reduceMotion = useReducedMotion()
  const { language, setLanguage, t } = useI18n()
  const copy = useHomeCopy()
  const pathname = usePathname()
  const appLabel = t.header?.appButton ?? "Open App"

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as Lang
    setLanguage(value)
    try {
      document.cookie = `language=${value}; path=/; max-age=31536000`
    } catch {}
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isCurrent = (href: string) => !href.startsWith("/#") && pathname === href

  return (
    <>
      <header
        className={cn(
          "on-dark sticky top-0 z-40 border-b text-white backdrop-blur transition-colors duration-200 ease-out-strong",
          scrolled ? "border-white/10 bg-forest-950/95" : "border-transparent bg-forest-950",
        )}
      >
        <Container className="flex h-16 items-center justify-between gap-3 lg:h-[72px]">
          <Link href="/" className="shrink-0 rounded-badge" aria-label="GreenSensor by Prosensor">
            <Image
              src="/logo-greensensor-by-prosensor-white.png"
              alt="GreenSensor by Prosensor"
              width={321}
              height={64}
              priority
              className="h-10 w-auto lg:h-12"
            />
          </Link>

          <nav aria-label="Principal" className="hidden xl:block">
            <ul className="flex items-center gap-1 font-display text-sm font-semibold">
              {links.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    aria-current={isCurrent(item.href) ? "page" : undefined}
                    className="inline-flex rounded-btn px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white aria-[current=page]:text-white aria-[current=page]:underline aria-[current=page]:decoration-2 aria-[current=page]:decoration-moss-400 aria-[current=page]:underline-offset-8"
                  >
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <select
              aria-label={copy.languageLabel}
              value={language}
              onChange={handleLanguageChange}
              className="hidden h-10 rounded-btn border border-white/20 bg-white/10 px-2 font-display text-sm font-semibold text-white sm:block [&>option]:text-ink"
            >
              <option value="fr">FR</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="de">DE</option>
              <option value="pt">PT</option>
              <option value="ro">RO</option>
            </select>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-1.5 rounded-btn border border-white/25 px-4 font-display text-sm font-bold text-white transition-colors hover:bg-white/10 2xl:inline-flex"
            >
              {appLabel}
              <ExternalLink aria-hidden className="size-3.5" />
              <span className="sr-only">(nouvel onglet)</span>
            </a>

            <Link href="/contact" className={cn(buttonVariants({ variant: "cta" }), "hidden h-10 px-5 sm:inline-flex")}>
              {t.hero.cta}
            </Link>

            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-btn text-white hover:bg-white/10 xl:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? copy.menuClose : copy.menuOpen}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-6" aria-hidden /> : <Menu className="size-6" aria-hidden />}
            </button>
          </div>
        </Container>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              className="absolute inset-x-0 top-full border-b border-white/10 bg-forest-950 shadow-[0_24px_40px_-24px_rgba(0,0,0,0.6)] xl:hidden"
              initial={{ opacity: 0, y: reduceMotion ? 0 : -8 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.2, ease: [0.23, 1, 0.32, 1] } }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -8, transition: { duration: 0.15, ease: [0.23, 1, 0.32, 1] } }}
            >
              <Container className="py-2">
                <nav aria-label="Principal">
                  <ul>
                    {links.map((item) => (
                      <li key={item.key} className="border-b border-white/10">
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={isCurrent(item.href) ? "page" : undefined}
                          className="block py-3.5 font-display text-base font-semibold text-white/85 aria-[current=page]:text-white"
                        >
                          {t.nav[item.key]}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="flex flex-wrap items-center gap-3 py-4">
                  <Link href="/contact" onClick={() => setOpen(false)} className={buttonVariants({ variant: "cta" })}>
                    {t.hero.cta}
                  </Link>
                  <a
                    href={APP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-btn border border-white/25 px-5 font-display text-sm font-bold text-white"
                  >
                    {appLabel}
                    <ExternalLink aria-hidden className="size-4" />
                  </a>
                  <select
                    aria-label={copy.languageLabel}
                    value={language}
                    onChange={handleLanguageChange}
                    className="h-11 rounded-btn border border-white/20 bg-white/10 px-3 font-display text-sm font-semibold text-white [&>option]:text-ink"
                  >
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                    <option value="pt">Português</option>
                    <option value="ro">Română</option>
                  </select>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
