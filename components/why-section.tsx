"use client"

import Image from "next/image"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { Reveal, itemDelay } from "@/components/reveal"

/**
 * Réassurance : même langage que le hero et la fiche technique. Fond vert sombre avec grille, un grand bloc
 * arrondi (texte à gauche, vraie usine Prosensor à droite, fondue dans le bloc) et, en bas du bloc, la rangée
 * des garanties découpée comme les trois étapes du hero.
 */
export function WhySection() {
  const copy = useHomeCopy()
  const { why } = copy

  return (
    <section id="pourquoi" aria-labelledby="why-title" className="on-dark relative isolate overflow-hidden bg-forest-950 py-16 text-white md:py-24">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <Container>
        <div className="overflow-hidden rounded-[18px] bg-[#0b2314] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10">
          <div className="grid lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)]">
            <Reveal className="flex flex-col gap-8 p-6 sm:p-10 lg:p-12">
              <h2 id="why-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[40px]">
                {why.title}
              </h2>
              <ul>
                {why.items.map((item, index) => (
                  <li key={item.name} className="reveal-item border-t border-white/10 py-5 first:pt-0" style={itemDelay(index, 0, 90)}>
                    <h3 className="font-heading text-xl font-extrabold">{item.name}</h3>
                    <p className="mt-1.5 max-w-lg text-base leading-relaxed text-white/70">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </Reveal>

            <figure className="relative min-h-[280px] lg:min-h-0">
              <Image
                src="/usine-prosensor.jpg"
                alt="Prosensor"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover object-[60%_50%]"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#0b2314] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0b2314] lg:via-[#0b2314]/10 lg:to-transparent" />
              <figcaption className="absolute bottom-5 left-6 font-display text-sm font-bold text-white lg:left-10">{copy.since}</figcaption>
            </figure>
          </div>

          <ul className="grid grid-cols-2 border-t border-white/10 bg-[#091c10] sm:grid-cols-3 lg:grid-cols-5">
            {why.strip.map((label, index) => (
              <li
                key={label}
                className="flex items-center border-white/10 px-5 py-5 font-display text-[15px] lg:px-3 lg:text-sm font-bold leading-snug text-white lg:justify-center lg:border-l lg:first:border-l-0"
              >
                <span aria-hidden className="mr-3 size-1.5 shrink-0 rounded-full bg-moss-400" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
