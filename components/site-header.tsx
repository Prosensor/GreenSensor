"use client"

import { useState, useCallback, type ChangeEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { motion, AnimatePresence } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"

const navIds = [
  { key: "home", id: "hero" },
  { key: "features", id: "fonctionnalites" },
  { key: "specs", id: "specifications" },
  { key: "analytics", id: "analyse" },
  { key: "faq", id: "faq" },
  { key: "contact", id: "demo" },
]

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage, t } = useI18n()

  const handleLanguageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'fr' | 'en'
    setLanguage(value)
    try {
      document.cookie = `language=${value}; path=/; max-age=31536000`
    } catch {}
  }

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }, [])

  return (
    <motion.header 
      className="sticky top-0 py-4 z-50 w-full bg-white shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/GreenSensor_Logo.png"
                alt="Green Sensor Logo"
                width={175}
                height={70}
              />
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex justify-end flex-1">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-4">
                  {navIds.map((item, index) => (
                    <motion.div
                      key={item.key}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <NavigationMenuItem>
                        <Link href={`/#${item.id}`} className="text-sm font-medium text-primary hover:text-[#3eab35] transition-colors">
                          {t.nav[item.key as keyof typeof t.nav]}
                        </Link>
                      </NavigationMenuItem>
                    </motion.div>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <div className="hidden md:block">
              <label htmlFor="language-select" className="sr-only">Langue</label>
              <select
                id="language-select"
                value={language}
                onChange={handleLanguageChange}
                className="border border-gray-200 rounded-md text-sm px-2 py-1 text-primary hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eab35]/30 focus:border-[#3eab35] bg-white"
              >
                <option value="fr">FR</option>
                <option value="en">EN</option>
              </select>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-primary hover:text-primary/80"
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
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
              {navIds.map((item, index) => (
                <motion.div
                  key={item.key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={`/#${item.id}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary/80 hover:bg-gray-50"
                  >
                    {t.nav[item.key as keyof typeof t.nav]}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-2 px-3">
                <label htmlFor="language-select-mobile" className="block text-sm text-gray-600 mb-1">Langue</label>
                <select
                  id="language-select-mobile"
                  value={language}
                  onChange={handleLanguageChange}
                  className="w-full border border-gray-200 rounded-md text-sm px-2 py-2 text-primary hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3eab35]/30 focus:border-[#3eab35] bg-white"
                >
                  <option value="fr">Français (FR)</option>
                  <option value="en">English (EN)</option>
                </select>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

