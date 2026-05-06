"use client"

import { useState, useCallback, type ChangeEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"

const navIds = [
  { key: "home", id: "hero" },
  { key: "features", id: "fonctionnalites" },
  { key: "specs", id: "specifications" },
  { key: "analytics", id: "analyse" },
  { key: "faq", id: "faq" },
  { key: "doc", id: "documentation" },
  { key: "contact", id: "demo" },
]

type SiteHeaderProps = {
  overlay?: boolean
}

export function SiteHeader({ overlay = false }: SiteHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()
  const pathname = usePathname()
  const appButtonLabel = (t as any).header?.appButton ?? (language === 'fr' ? 'Interface' : language === 'es' ? 'Plataforma' : language === 'de' ? 'Plattform' : language === 'pt' ? 'Plataforma' : language === 'ro' ? 'Platformă' : 'Open App')

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'fr' | 'en' | 'es' | 'de' | 'pt' | 'ro'
    setLanguage(value)
    try {
      document.cookie = `language=${value}; path=/; max-age=31536000`
    } catch {}
  }

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (pathname !== "/") return
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }, [pathname])

  const desktopHeaderSurface = overlay
    ? "rounded-2xl bg-black/25 backdrop-blur-md border border-white/20"
    : "rounded-2xl bg-white shadow-sm border border-gray-100"

  return (
    <motion.header 
      className={`top-0 py-4 z-50 w-full ${
        overlay
          ? "absolute left-0 bg-transparent"
          : "sticky bg-white shadow-sm"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`h-16 px-3 md:px-5 flex items-center justify-between gap-3 md:gap-6 ${desktopHeaderSurface}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/GreenSensor_Logo_horiz.png"
                alt="Green Sensor Logo"
                width={155}
                height={62}
                className={overlay ? "brightness-0 invert" : ""}
              />
            </Link>
          </motion.div>

          <div className="hidden lg:flex flex-1 justify-center min-w-0">
            <div className={overlay ? "rounded-full bg-black/30 px-3 py-2" : "rounded-full bg-gray-50 px-3 py-2"}>
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1 xl:gap-2">
                  {navIds.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <NavigationMenuItem>
                        <Link
                          href={item.key === "doc" ? "/documentation" : item.key === "faq" ? "/faq" : `/#${item.id}`}
                          onClick={item.key === "doc" || item.key === "faq" ? undefined : (e) => scrollToSection(e, item.id)}
                          className={`inline-flex rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                            overlay
                              ? "text-white hover:text-[#9CE66F] hover:bg-white/10"
                              : "text-primary hover:text-[#3eab35] hover:bg-white"
                          }`}
                        >
                          {t.nav[item.key as keyof typeof t.nav]}
                        </Link>
                      </NavigationMenuItem>
                    </motion.div>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 lg:gap-3 shrink-0">
            <div className="hidden lg:block">
              <label htmlFor="language-select" className="sr-only">Langue</label>
              <select
                id="language-select"
                value={language}
                onChange={handleLanguageChange}
                className={`border rounded-md text-sm px-2 py-1 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eab35]/30 focus:border-[#3eab35] ${
                  overlay
                    ? "border-white/30 text-white bg-white/10 backdrop-blur-sm"
                    : "border-gray-200 text-primary bg-white"
                }`}
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
                <option value="de">DE</option>
                <option value="pt">PT</option>
                <option value="ro">RO</option>
              </select>
            </div>

            <Link
              href="https://greensensor.prosensor.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white bg-[#3eab35] hover:bg-[#2f8a29] transition-colors rounded-md px-3 py-2"
            >
              {appButtonLabel}
            </Link>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="https://greensensor.prosensor.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-white bg-[#3eab35] hover:bg-[#2f8a29] transition-colors rounded-md px-2.5 py-2"
              >
                App
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className={`md:hidden ${
                  overlay
                    ? "text-white hover:text-white/80"
                    : "text-primary hover:text-primary/80"
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`mx-4 mt-3 rounded-xl px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg ${
              overlay ? "bg-black/80 backdrop-blur-md border border-white/20" : "bg-white border border-gray-100"
            }`}>
              {navIds.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={item.key === "doc" ? "/documentation" : item.key === "faq" ? "/faq" : `/#${item.id}`}
                    onClick={item.key === "doc" || item.key === "faq" ? () => setIsMobileMenuOpen(false) : (e) => scrollToSection(e, item.id)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      overlay
                        ? "text-white hover:text-white/90 hover:bg-white/10"
                        : "text-primary hover:text-primary/80 hover:bg-gray-50"
                    }`}
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2">
                <Link
                  href="https://greensensor.prosensor.fr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-3 py-2 rounded-md text-base font-medium text-white bg-[#3eab35] hover:bg-[#2f8a29]"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {appButtonLabel}
                </Link>
              </div>
              <div className="pt-2 px-3">
                <label htmlFor="language-select-mobile" className={`block text-sm mb-1 ${overlay ? "text-gray-200" : "text-gray-600"}`}>Langue</label>
                <select
                  id="language-select-mobile"
                  value={language}
                  onChange={handleLanguageChange}
                  className={`w-full border rounded-md text-sm px-2 py-2 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eab35]/30 focus:border-[#3eab35] ${
                    overlay
                      ? "border-white/30 text-white bg-white/10"
                      : "border-gray-200 text-primary bg-white"
                  }`}
                >
                  <option value="fr">Français (FR)</option>
                  <option value="en">English (EN)</option>
                  <option value="es">Español (ES)</option>
                  <option value="de">Deutsch (DE)</option>
                  <option value="pt">Português (PT)</option>
                  <option value="ro">Română (RO)</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

