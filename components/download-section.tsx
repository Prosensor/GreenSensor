"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { PlayIcon, Thermometer, BarChart, Bell } from 'lucide-react'
import Image from 'next/image'
import { AnimatedSection } from "./animated-section"
import { motion } from "framer-motion"

const fonctionnalites = [
  { icon: Thermometer, titre: "Contrôle Précis", description: "Surveillez la température de vos compost en temps réel" },
  { icon: BarChart, titre: "Analyse de Données", description: "Obtenez des insights pour optimiser votre production" },
  { icon: Bell, titre: "Alertes Instantanées", description: "Soyez notifié immédiatement en cas d'anomalie" },
]

const ArrierePlanVideo = () => {
  const [erreurVideo, setErreurVideo] = React.useState(false)

  React.useEffect(() => {
    const video = document.querySelector('video')
    if (video) {
      video.addEventListener('error', () => {
        console.error('Échec du chargement de la vidéo')
        setErreurVideo(true)
      })
    }
  }, [])

  if (erreurVideo) {
    return (
      <Image
        src="/image.jpg"
        alt="Arrière-plan de production de compost"
        layout="fill"
        objectFit="cover"
      />
    )
  }

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover"
    >
      <source src="/232561_medium.mp4" type="video/mp4" />
      Votre navigateur ne prend pas en charge la balise vidéo.
    </video>
  )
}

export function DownloadSection() {
  return (
    <AnimatedSection className="relative py-24 overflow-hidden" id="demonstration">
      {/* Arrière-plan Vidéo */}
      <div className="absolute inset-0 w-full h-full">
        <ArrierePlanVideo />
        <div className="absolute inset-0 bg-black bg-opacity-70" />
      </div>

      {/* Conteneur de Contenu */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-white lg:text-5xl mb-6">
            Optimisez Votre Production de Compost
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Transformez votre processus de production avec ProSensor. 
            Surveillez, analysez et améliorez la qualité de vos compost comme jamais auparavant.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button size="lg" className="bg-[#3eab35] text-white hover:bg-[#dd234b]">
              <PlayIcon className="w-5 h-5 mr-2" />
              Voir la Démonstration
            </Button>
          </motion.div>
        </motion.div>

        {/* Grille de Fonctionnalités */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {fonctionnalites.map((fonctionnalite, index) => (
            <motion.div 
              key={index} 
              className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <fonctionnalite.icon className="w-12 h-12 text-[#3eab35] mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{fonctionnalite.titre}</h3>
              <p className="text-gray-300">{fonctionnalite.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

