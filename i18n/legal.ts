import { cguDocs } from "@/i18n/legal-cgu"
import { type LegalDoc, type LegalDocKey, type LegalLang } from "@/i18n/legal-facts"
import { mentionsDocs } from "@/i18n/legal-mentions"
import { privacyDocs } from "@/i18n/legal-privacy"

export type { LegalBlock, LegalDoc, LegalDocKey, LegalLang, LegalSection } from "@/i18n/legal-facts"

/** Pages légales, dans l'ordre d'affichage des liens « À lire aussi ». */
export const LEGAL_PATHS: Record<LegalDocKey, string> = {
  mentions: "/mentions-legales",
  cgu: "/cgu",
  privacy: "/politique-confidentialite",
}

export const legalDocs: Record<LegalDocKey, Record<LegalLang, LegalDoc>> = {
  mentions: mentionsDocs,
  cgu: cguDocs,
  privacy: privacyDocs,
}

export type LegalUi = {
  home: string
  toc: string
  updated: string
  seeAlso: string
  contactTitle: string
  contactText: string
  names: Record<LegalDocKey, string>
}

export const legalUi: Record<LegalLang, LegalUi> = {
  fr: {
    home: "Accueil",
    toc: "Sur cette page",
    updated: "Mis à jour le",
    seeAlso: "À lire aussi",
    contactTitle: "Une question ?",
    contactText: "Un conseiller Prosensor vous répond par téléphone ou par e-mail.",
    names: { mentions: "Mentions légales", cgu: "Conditions d'utilisation", privacy: "Politique de confidentialité" },
  },
  en: {
    home: "Home",
    toc: "On this page",
    updated: "Updated on",
    seeAlso: "Also read",
    contactTitle: "A question?",
    contactText: "A Prosensor advisor will answer by phone or e-mail.",
    names: { mentions: "Legal notice", cgu: "Terms of use", privacy: "Privacy policy" },
  },
  es: {
    home: "Inicio",
    toc: "En esta página",
    updated: "Actualizado el",
    seeAlso: "Lea también",
    contactTitle: "¿Una pregunta?",
    contactText: "Un asesor de Prosensor le responde por teléfono o por correo.",
    names: { mentions: "Aviso legal", cgu: "Condiciones de uso", privacy: "Política de privacidad" },
  },
  de: {
    home: "Start",
    toc: "Auf dieser Seite",
    updated: "Aktualisiert am",
    seeAlso: "Auch lesenswert",
    contactTitle: "Eine Frage?",
    contactText: "Ein Prosensor-Berater antwortet per Telefon oder E-Mail.",
    names: { mentions: "Impressum", cgu: "Nutzungsbedingungen", privacy: "Datenschutzerklärung" },
  },
  pt: {
    home: "Início",
    toc: "Nesta página",
    updated: "Atualizado em",
    seeAlso: "Leia também",
    contactTitle: "Uma questão?",
    contactText: "Um consultor da Prosensor responde por telefone ou por e-mail.",
    names: { mentions: "Aviso legal", cgu: "Condições de utilização", privacy: "Política de privacidade" },
  },
  ro: {
    home: "Acasă",
    toc: "Pe această pagină",
    updated: "Actualizat la",
    seeAlso: "Citiți și",
    contactTitle: "O întrebare?",
    contactText: "Un consultant Prosensor vă răspunde prin telefon sau e-mail.",
    names: { mentions: "Mențiuni legale", cgu: "Condiții de utilizare", privacy: "Politica de confidențialitate" },
  },
}
