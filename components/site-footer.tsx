"use client"


import Link from "next/link"
import { Thermometer } from 'lucide-react'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Youtube } from 'lucide-react'
import { DottedWorldMap } from "./dotted-world-map"
import Image from "next/image"
import { useCallback } from "react"


const liensFooter = [
  { titre: "À propos", href: "#" },
  { titre: "Nous contacter", href: "#" },
  { titre: "Politique de confidentialité", href: "#" },
  { titre: "Conditions générales", href: "#" },
]

const liensSociaux = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: LinkedIn, href: "#" },
  { icon: Youtube, href: "#" },
]

export function SiteFooter() {
  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo et Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/GreenSensor_Logo.png"
                alt="Green Sensor Logo"
                width={150}
                height={80}
              />
            </Link>
            <p className="text-sm">
              GreenSensor est une solution innovante pour le suivi des températures dans le processus de compostage.
            </p>
          </div>

          {/* Liens utiles */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#hero" className="hover:text-[#3eab35] transition-colors">Accueil</Link>
              </li>
              <li>
                <Link href="/#fonctionnalites" className="hover:text-[#3eab35] transition-colors">Fonctionnalités</Link>
              </li>
              <li>
                <Link href="/#specifications" className="hover:text-[#3eab35] transition-colors">Spécifications</Link>
              </li>
              <li>
                <Link href="/#analyse" className="hover:text-[#3eab35] transition-colors">Analyse</Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-[#3eab35] transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/#demo" className="hover:text-[#3eab35] transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Liens légaux */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Informations légales</h3>
            <Link href="/mentions-legales" className="hover:text-[#3eab35] transition-colors block">Mentions légales</Link>
            <Link href="/politique-confidentialite" className="hover:text-[#3eab35] transition-colors block">Politique de confidentialité</Link>
            <Link href="/cgu" className="hover:text-[#3eab35] transition-colors block">Conditions Générales d'Utilisation</Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-center">
            © 2025 ProSensor. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

