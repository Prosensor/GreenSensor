"use client"

import { Thermometer, Bell, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"
import { SiteHeader } from "./site-header"

const iconMap = {
  thermometer: Thermometer,
  bell: Bell,
  map: MapPin,
} as const

export function HeroSection() {
  const { t, language } = useI18n()

  const scrollToDemo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const demoSection = document.getElementById("demo")
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" })
    }
  }, [])

  return (
    <AnimatedSection
      id="hero"
      className="relative flex items-center overflow-hidden bg-black min-h-screen"
    >
      <SiteHeader overlay />

      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[position:78%_center] sm:bg-[position:74%_center] lg:bg-[position:70%_center] xl:bg-[position:66%_center]"
        style={{
          backgroundImage: "url('/2026_greensensor_BanWeb2.jpg')",
        }}
      />

      {/* Dégradé pour la lisibilité du texte */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/20" />

      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-10 md:pt-36 md:pb-16">
          <div className="max-w-4xl space-y-7">
              <motion.span
                className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs md:text-sm font-medium tracking-wide text-white/95 backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                {language === "fr" ? "Monitoring intelligent pour compostage et fermentation" : language === "es" ? "Monitoreo inteligente para compostaje y fermentación" : language === "de" ? "Intelligentes Monitoring für Kompostierung und Fermentation" : language === "pt" ? "Monitorização inteligente para compostagem e fermentação" : language === "ro" ? "Monitorizare inteligentă pentru compostare și fermentare" : "Smart monitoring for composting and fermentation"}
              </motion.span>

              <motion.h1
                className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.5 }}
              >
                {t.hero.title_rest}{" "}
                <span className="text-[#6fdc63]">{t.hero.title_highlight}</span>
              </motion.h1>

              <motion.p
                className="text-base md:text-xl text-gray-100/95 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {t.hero.subtitle_line1}{" "}
                {t.hero.subtitle_line2}
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-2.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45, duration: 0.5 }}
              >
                {t.hero.features.map((feature: any) => (
                  <span
                    key={`chip-${feature.label}`}
                    className="inline-flex items-center rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-xs md:text-sm text-white/95 backdrop-blur-sm"
                  >
                    {feature.label}
                  </span>
                ))}
              </motion.div>

              <motion.div
                className="pt-1"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Button
                  size="lg"
                  className="bg-[#3eab35] text-white hover:bg-[#2f8a29] shadow-lg shadow-black/40 rounded-full px-8"
                  onClick={scrollToDemo}
                >
                  {t.hero.cta}
                </Button>
              </motion.div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

