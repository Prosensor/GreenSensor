/**
 * Informations d'identification de l'éditeur et de l'hébergeur, communes aux trois pages légales
 * (mentions légales, CGU, politique de confidentialité) et aux six langues.
 */
export const FACTS = {
  name: "Prosensor",
  brand: "GreenSensor",
  address: "EcoParc, 5 rue Maud Fontenoy, 57140 Norroy-le-Veneur, France",
  rcs: "Metz 451 740 187",
  siret: "451 740 187 00047",
  phone: "+33 3 87 53 53 53",
  email: "info@prosensor.com",
  site: "greensensor.fr",
  host: "Vercel Inc.",
  hostAddress: "440 N Barranca Ave #4133, Covina, CA 91723",
  hostUrl: "https://vercel.com",
} as const

export type LegalLang = "fr" | "en" | "es" | "de" | "pt" | "ro"

/** Un bloc de texte : paragraphe, liste, tableau de couples libellé / valeur, ou remarque mise en évidence. */
export type LegalBlock = { p: string } | { ul: string[] } | { rows: [string, string][] } | { note: string }

export type LegalSection = { title: string; blocks: LegalBlock[] }

export type LegalDoc = {
  title: string
  subtitle: string
  /** Date de dernière mise à jour, déjà formatée dans la langue. */
  updated: string
  sections: LegalSection[]
}

export type LegalDocKey = "mentions" | "cgu" | "privacy"
