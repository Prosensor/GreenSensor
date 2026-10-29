import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/** Titre de section au format Prosensor : Sora extra-gras, centré, chapô Manrope optionnel. */
export function SectionHeading({
  id,
  title,
  lead,
  align = "center",
  className,
}: {
  id: string
  title: ReactNode
  lead?: ReactNode
  align?: "center" | "left"
  className?: string
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl", className)}>
      <h2 id={id} className="font-display text-[28px] font-extrabold leading-[1.2] text-ink-strong md:text-[36px]">
        {title}
      </h2>
      {lead ? <p className="font-alt text-base leading-[1.6] text-body md:text-lg">{lead}</p> : null}
    </div>
  )
}
