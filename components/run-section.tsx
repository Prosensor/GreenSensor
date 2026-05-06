"use client"

import Image from "next/image"
import { Check } from 'lucide-react'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { useI18n } from "@/i18n/i18n-provider"

export function RunSection() {
  const { t, language } = useI18n()
  const runT = (t as any).run as {
    heading_line1: string
    heading_highlight: string
    heading_line2: string
    paragraph_line1: string
    paragraph_line2: string
    advantages: string[]
    image_alt: string
  }
  return (
    <AnimatedSection id="specifications" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mb-12 md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#3eab35]/20 bg-[#3eab35]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2f8a29] mb-4">
            {language === "fr" ? "Spécifications" : language === "es" ? "Especificaciones" : language === "de" ? "Spezifikationen" : language === "pt" ? "Especificações" : language === "ro" ? "Specificații" : "Specifications"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            {runT.heading_line1} <span className="text-[#3eab35]">{runT.heading_highlight}</span> {runT.heading_line2}
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <motion.div
            className="lg:col-span-6 relative min-h-[360px] md:min-h-[460px] lg:min-h-[560px] overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/sonde-action.jpg"
              alt={runT.image_alt}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute left-4 right-4 bottom-4 rounded-xl border border-white/20 bg-black/40 backdrop-blur-sm p-4">
              <p className="text-white/95 text-sm md:text-base leading-relaxed">
                {runT.paragraph_line1} {runT.paragraph_line2}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 rounded-2xl border border-gray-100 bg-gray-50/80 p-5 md:p-7"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="text-sm font-semibold tracking-wide uppercase text-gray-500 mb-5">
              {language === "fr" ? "Avantages terrain" : language === "es" ? "Ventajas en campo" : language === "de" ? "Vorteile im Einsatz" : language === "pt" ? "Vantagens no terreno" : language === "ro" ? "Avantaje pe teren" : "Field advantages"}
            </p>
            <motion.ul
              className="grid gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {runT.advantages.map((avantage, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3"
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.25 + index * 0.06 }}
                >
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-[#3eab35] flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 leading-relaxed">{avantage}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

