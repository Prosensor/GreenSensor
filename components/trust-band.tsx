"use client"

import Image from "next/image"
import { useHomeCopy } from "@/i18n/home-copy"

/** Logos fournis par les entreprises elles-mêmes (leurs sites) ; chacun est réglé à l'œil pour peser pareil. */
const LOGOS = [
  { name: "Veolia", src: "/logos/veolia.svg", width: 170, height: 42, className: "h-9" },
  { name: "Paprec", src: "/logos/paprec.jpg", width: 300, height: 122, className: "h-16 mix-blend-multiply" },
  { name: "Agriculteurs Composteurs de France", src: "/logos/agriculteurs-composteurs-de-france.svg", width: 394, height: 167, className: "h-14" },
  { name: "Cler Verts", src: "/logos/cler-verts.png", width: 143, height: 212, className: "h-16" },
  { name: "Compost du Gâtinais", src: "/logos/compost-du-gatinais.png", width: 704, height: 229, className: "h-14" },
  { name: "Normandie Terre d'Énergies", src: "/logos/normandie-terre-denergies.png", width: 158, height: 165, className: "h-20" },
  { name: "Compomar", src: "/logos/compomar.png", width: 167, height: 103, className: "h-14" },
] as const

/** Deux exemplaires par moitié : une moitié couvre un écran large, et la boucle (-50 %) reste sans saut. */
const HALF = 3

/**
 * « Ils nous ont fait confiance » : les logos défilent sous le hero. Le survol arrête le
 * défilement ; avec « mouvement réduit » ils restent fixes, sur plusieurs lignes.
 * Seul le premier exemplaire de chaque logo est lu par les lecteurs d'écran.
 */
export function TrustBand() {
  const copy = useHomeCopy()

  const half = (halfIndex: number) =>
    Array.from({ length: HALF }, (_, copyIndex) =>
      LOGOS.map((logo) => {
        const duplicate = halfIndex > 0 || copyIndex > 0
        return (
          <li
            key={`${halfIndex}-${copyIndex}-${logo.name}`}
            aria-hidden={duplicate || undefined}
            className={`flex shrink-0 items-center pr-16 md:pr-24 lg:pr-32 ${duplicate ? "motion-reduce:hidden" : ""}`}
          >
            <Image src={logo.src} alt={duplicate ? "" : logo.name} width={logo.width} height={logo.height} className={`${logo.className} w-auto`} />
          </li>
        )
      }),
    )

  return (
    <section aria-labelledby="trust-title" className="border-b border-line bg-white py-8 lg:py-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        {/* Le titre est collé au bord gauche de l'écran ; les logos prennent tout le reste de la largeur */}
        <h2
          id="trust-title"
          className="shrink-0 px-4 font-display text-lg font-extrabold text-ink-strong sm:px-6 lg:whitespace-nowrap lg:pr-0 lg:text-xl"
          style={{ paddingLeft: "max(1rem, calc((100vw - 1264px) / 2 - 1rem))" }}
        >
          {copy.trust}
        </h2>

        <div className="marquee min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_5%,#000_95%,transparent)] motion-reduce:[mask-image:none]">
          <ul className="marquee-track flex w-max items-center motion-reduce:w-auto motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-6">
            {half(0)}
            {half(1)}
          </ul>
        </div>
      </div>
    </section>
  )
}
