"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useHomeCopy } from "@/i18n/home-copy"
import { Container } from "@/components/ui/container"
import { Reveal, itemDelay } from "@/components/reveal"

/**
 * « Pourquoi choisir GreenSensor ? » : ce qui distingue la solution d'une autre (sonde pensée pour l'andain, suivi
 * des objectifs, rien à brancher, fabricant joignable), puis la vraie usine Prosensor en bandeau large, qui mène à la
 * page « Qui sommes-nous ».
 */
export function WhySection() {
  const { why } = useHomeCopy()

  return (
    <section id="pourquoi" aria-labelledby="why-title" className="on-dark relative isolate overflow-hidden bg-forest-950 py-16 text-white md:py-24">
      <div aria-hidden className="grid-bg absolute inset-0 -z-10 opacity-60" />
      <Container className="flex flex-col gap-12 md:gap-16">
        <h2 id="why-title" className="font-display text-[28px] font-extrabold leading-[1.15] tracking-[-0.01em] md:text-[40px]">
          {why.title}
        </h2>

        <Reveal as="ul" className="grid gap-x-16 gap-y-10 md:grid-cols-2">
          {why.items.map((item, index) => (
            <li key={item.name} className="reveal-item border-t border-white/15 pt-6" style={itemDelay(index, 0, 90)}>
              <h3 className="font-heading text-xl font-extrabold leading-snug text-mint md:text-[22px]">{item.name}</h3>
              <p className="mt-2 max-w-xl text-base leading-relaxed text-white/75">{item.desc}</p>
            </li>
          ))}
        </Reveal>

        <figure className="relative isolate min-h-[340px] overflow-hidden rounded-[18px] shadow-[0_40px_90px_-30px_rgba(0,0,0,0.75)] ring-1 ring-white/10 sm:aspect-[16/8] sm:min-h-0 lg:aspect-[21/8]">
          <Image
            src="/usine-prosensor.jpg"
            alt=""
            fill
            sizes="(min-width: 1280px) 1232px, 100vw"
            className="-z-10 object-cover object-[60%_45%]"
          />
          <div
            aria-hidden
            className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b2314] via-[#0b2314]/70 to-transparent sm:bg-gradient-to-r sm:via-[#0b2314]/55"
          />
          <figcaption className="absolute inset-x-0 bottom-0 flex max-w-lg flex-col items-start gap-2 p-6 sm:inset-y-0 sm:justify-end sm:p-10 lg:p-12">
            <p className="font-display text-xl font-extrabold leading-tight md:text-2xl">{why.place.title}</p>
            <p className="text-[15px] leading-relaxed text-white/80">{why.place.text}</p>
            <Link
              href="/qui-sommes-nous"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-btn bg-white px-5 font-display text-sm font-bold text-forest transition-colors hover:bg-mint"
            >
              {why.more}
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </figcaption>
        </figure>
      </Container>
    </section>
  )
}
