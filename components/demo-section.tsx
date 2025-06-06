"use client"

import { Button } from "@/components/ui/button"
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"
import { DemoForm } from "./demo-form"

export function DemoSection() {
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
              Demandez une <span className="text-[#3eab35]">Présentation</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-xl">
              Découvrez la puissance de ProSensor en action. Demandez une présentation pour voir comment nos sondes de chaleur peuvent révolutionner votre production de compost et optimiser vos processus.
            </p>
            <motion.div 
              className="space-y-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div>
                <h3 className="font-semibold mb-1 text-gray-800">Siège Social : <b>Prosensor</b></h3>
                <p className="text-gray-600">
                  EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-gray-800">Coordonnées</h3>
                <p className="text-gray-600">Téléphone: +33 3 87 53 53 53</p>
                <p className="text-gray-600">
                  Email:{" "}
                  <a
                    href="mailto:contact@prosensor.com"
                    className="text-[#3eab35] hover:underline"
                  >
                    info@prosensor.com
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

