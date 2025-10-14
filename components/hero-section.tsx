"use client"

import Image from "next/image"
import { Thermometer, Bell, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useCallback } from 'react'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"

const iconMap = {
  thermometer: Thermometer,
  bell: Bell,
  map: MapPin,
} as const

export function HeroSection() {
  const { t } = useI18n()
  const scrollToDemo = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const demoSection = document.getElementById('demo')
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <AnimatedSection className="relative py-20 overflow-hidden bg-gray-100">
      <div id="hero" className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1 
              className="text-4xl font-bold tracking-tight text-gray-900 lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {t.hero.title_rest} <span className="text-[#3eab35]">{t.hero.title_highlight}</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {t.hero.subtitle_line1}
              {" "}
              {t.hero.subtitle_line2}
            </motion.p>
            <div className="flex flex-wrap gap-6">
              {t.hero.features.map((feature, index) => {
                const Icon = iconMap[feature.iconKey]
                return (
                <motion.div
                  key={feature.label}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d5f5e3] text-[#186a3b]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {feature.label}
                  </span>
                </motion.div>
                )
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-[#3eab35] text-white hover:bg-[#dd234b]"
                onClick={scrollToDemo}
              >
                {t.hero.cta}
              </Button>
            </motion.div>
          </div>
          <motion.div 
            className="relative h-[600px] lg:h-[700px]"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Image
              src="/sonde hero.png"
              alt="Sonde ProSensor pour compote"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-50 -z-10" />
    </AnimatedSection>
  )
}

