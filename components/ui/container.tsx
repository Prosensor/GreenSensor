import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

/** Gouttière horizontale du site Prosensor : 16 px (mobile), 24 px (≥ 640), 32 px (≥ 1024). Contenu 1200 px. */
export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto w-full max-w-[1264px] px-4 sm:px-6 lg:px-8", className)} {...props} />
}
