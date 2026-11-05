"use client"

import Link from "next/link"
import type { ComponentProps } from "react"
import { useI18n } from "@/i18n/i18n-provider"
import { localizePath } from "@/lib/i18n-routing"

type LocalizedLinkProps = Omit<ComponentProps<typeof Link>, "href"> & { href: string }

/** Lien interne qui garde la langue de la page : `/faq` mène à `/en/faq` sur le site en anglais. */
export function LocalizedLink({ href, ...props }: LocalizedLinkProps) {
  const { language } = useI18n()
  return <Link href={localizePath(language, href)} {...props} />
}
