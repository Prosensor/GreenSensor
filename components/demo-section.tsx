"use client"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { DemoForm } from "./demo-form"
import { useI18n } from "@/i18n/i18n-provider"

export function DemoSection() {
  const { t } = useI18n()
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
    <AnimatedSection id="demo" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900">
              {demoT.heading} <span className="text-[#3eab35]">{demoT.heading_highlight}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              {demoT.paragraph}
            </p>
            <motion.div 
              className="space-y-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h3 className="font-semibold mb-1 text-gray-800">{demoT.hq_title}<b>{demoT.hq_company}</b></h3>
                <p className="text-gray-600">
                  {demoT.address}
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-800">{demoT.contact_title}</h3>
                <p className="text-gray-600">{demoT.phone_label} {demoT.phone_value}</p>
                <p className="text-gray-600">
                  {demoT.email_label}{" "}
                  <a
                    href="mailto:contact@prosensor.com"
                    className="text-[#3eab35] hover:underline"
                  >
                    {demoT.email_value}
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg"
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

