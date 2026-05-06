"use client"

import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { DemoForm } from "./demo-form"
import { useI18n } from "@/i18n/i18n-provider"

export function DemoSection() {
  const { t, language } = useI18n()
  const demoT = (t as any).demo as {
    heading: string
    heading_highlight: string
    paragraph: string
    hq_title: string
    hq_company: string
    address: string
    contact_title: string
    phone_label: string
    phone_value: string
    email_label: string
    email_value: string
  }
  return (
    <AnimatedSection id="demo" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-3xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center rounded-full border border-[#3eab35]/20 bg-[#3eab35]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#2f8a29] mb-4">
            {language === "fr" ? "Contact" : language === "es" ? "Contacto" : language === "de" ? "Kontakt" : language === "pt" ? "Contacto" : language === "ro" ? "Contact" : "Contact"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {demoT.heading} <span className="text-[#3eab35]">{demoT.heading_highlight}</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl">
            {demoT.paragraph}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <motion.div 
            className="space-y-6 lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold mb-2 text-gray-800">{demoT.hq_title}<b>{demoT.hq_company}</b></h3>
                <p className="text-gray-600 leading-relaxed">
                  {demoT.address}
                </p>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                <h3 className="font-semibold mb-2 text-gray-800">{demoT.contact_title}</h3>
                <p className="text-gray-600">{demoT.phone_label} <span className="font-medium text-gray-800">{demoT.phone_value}</span></p>
                <p className="text-gray-600 mt-1">
                  {demoT.email_label}{" "}
                  <a
                    href="mailto:contact@prosensor.com"
                    className="text-[#3eab35] hover:underline font-medium"
                  >
                    {demoT.email_value}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-[0_20px_45px_-30px_rgba(15,23,42,0.35)] lg:col-span-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <DemoForm />
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

