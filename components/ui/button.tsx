import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Boutons de la charte Prosensor : forest (action principale), orange (demande de présentation,
 * comme « Devis » sur prosensor.fr), contour blanc (action secondaire). Texte Sora gras.
 */
const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap rounded-btn font-display font-bold transition-[transform,background-color,border-color,color] duration-150 ease-out-strong active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-forest text-white hover:bg-forest-800",
        cta: "bg-orange-cta text-white hover:bg-orange-cta-hover",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-line bg-white text-ink-strong hover:border-forest hover:text-forest",
        secondary: "bg-surface-2 text-ink hover:bg-line",
        ghost: "text-ink hover:bg-surface-2",
        link: "text-forest underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 text-sm [&_svg]:size-4",
        sm: "h-9 rounded-btn-sm px-3 text-xs [&_svg]:size-3.5",
        lg: "h-[52px] px-8 text-[15px] [&_svg]:size-[18px]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
