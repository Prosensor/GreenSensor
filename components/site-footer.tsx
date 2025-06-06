import Link from "next/link"
import { Thermometer } from 'lucide-react'
import { Facebook, Twitter, LinkedinIcon as LinkedIn, Youtube } from 'lucide-react'
import { DottedWorldMap } from "./dotted-world-map"
import Image from "next/image"


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
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
            <div className="flex space-x-4">
              {liensSociaux.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="hover:text-blue-600 transition-colors"
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Autres Liens */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Liens utiles</h3>
            <ul className="space-y-2">
              {liensFooter.map((lien, index) => (
                <li key={index}>
                  <Link
                    href={lien.href}
                    className="hover:text-[#3eab35] transition-colors"
                  >
                    {lien.titre}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Localisation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Notre présence</h3>
            <div className="relative h-40">
              <DottedWorldMap />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-sm text-center">
            © 2025 ProSensor. Tous droits réservés.{" "}
            <Link href="#" className="text-[#3eab35] hover:underline">
              Mentions légales
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

