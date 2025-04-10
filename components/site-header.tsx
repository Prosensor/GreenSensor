"use client"

import { useState, useCallback } from "react"
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

const navItems = [
  { name: "Accueil", id: "hero" },
  { name: "Fonctionnalités", id: "fonctionnalites" },
  { name: "Spécifications", id: "specifications" },
  { name: "Analyse", id: "analyse" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "demo" }
]

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      className="sticky top-0 z-50 w-full bg-white shadow-sm"
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
                width={150}
                height={40}
              />
            </Link>
          </motion.div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex justify-end flex-1">
              <NavigationMenu>
                <NavigationMenuList className="flex space-x-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <NavigationMenuItem>
                        <Link href={`#${item.id}`} legacyBehavior passHref>
                          <NavigationMenuLink 
                            className="text-sm font-medium text-primary hover:text-[#3eab35] transition-colors"
                            onClick={(e) => scrollToSection(e, item.id)}
                          >
                            {item.name}
                          </NavigationMenuLink>
                        </Link>
                      </NavigationMenuItem>
                    </motion.div>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
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
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:text-primary/80 hover:bg-gray-50"
                    onClick={(e) => scrollToSection(e, item.id)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

