import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import type { Metadata } from "next"
import { PrivacyContent } from "@/components/legal/privacy-content"
import { cookies } from "next/headers"

// metadata is generated dynamically below

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies()
  const cookieLang = cookieStore.get('language')?.value
  const lang = cookieLang === 'en' ? 'en' : cookieLang === 'es' ? 'es' : cookieLang === 'de' ? 'de' : cookieLang === 'pt' ? 'pt' : cookieLang === 'ro' ? 'ro' : 'fr'
  if (lang === 'en') {
    return {
      title: "Privacy Policy - GreenSensor",
      description: "GreenSensor privacy policy: GDPR compliance, user rights, security and data handling.",
      openGraph: {
        title: "Privacy Policy - GreenSensor",
        description: "GreenSensor privacy policy: GDPR compliance, user rights, security and data handling.",
        url: "https://greensensor.fr/politique-confidentialite",
        siteName: "GreenSensor",
        locale: "en_US",
        type: "article",
      },
    }
  }
  if (lang === 'es') {
    return {
      title: "Política de privacidad - GreenSensor",
      description: "Política de privacidad de GreenSensor: cumplimiento RGPD, derechos de usuarios, seguridad y tratamiento de datos.",
      openGraph: {
        title: "Política de privacidad - GreenSensor",
        description: "Política de privacidad de GreenSensor: cumplimiento RGPD, derechos de usuarios, seguridad y tratamiento de datos.",
        url: "https://greensensor.fr/politique-confidentialite",
        siteName: "GreenSensor",
        locale: "es_ES",
        type: "article",
      },
    }
  }
  if (lang === 'de') {
    return {
      title: "Datenschutzerklärung - GreenSensor",
      description: "Datenschutzerklärung von GreenSensor: DSGVO-Konformität, Nutzerrechte, Sicherheit und Datenverarbeitung.",
      openGraph: {
        title: "Datenschutzerklärung - GreenSensor",
        description: "Datenschutzerklärung von GreenSensor: DSGVO-Konformität, Nutzerrechte, Sicherheit und Datenverarbeitung.",
        url: "https://greensensor.fr/politique-confidentialite",
        siteName: "GreenSensor",
        locale: "de_DE",
        type: "article",
      },
    }
  }
  if (lang === 'pt') {
    return {
      title: "Política de privacidade - GreenSensor",
      description: "Política de privacidade da GreenSensor: conformidade RGPD, direitos dos utilizadores, segurança e tratamento de dados.",
      openGraph: {
        title: "Política de privacidade - GreenSensor",
        description: "Política de privacidade da GreenSensor: conformidade RGPD, direitos dos utilizadores, segurança e tratamento de dados.",
        url: "https://greensensor.fr/politique-confidentialite",
        siteName: "GreenSensor",
        locale: "pt_PT",
        type: "article",
      },
    }
  }
  if (lang === 'ro') {
    return {
      title: "Politica de confidențialitate - GreenSensor",
      description: "Politica de confidențialitate GreenSensor: conformitate RGPD, drepturile utilizatorilor, securitate și prelucrarea datelor.",
      openGraph: {
        title: "Politica de confidențialitate - GreenSensor",
        description: "Politica de confidențialitate GreenSensor: conformitate RGPD, drepturile utilizatorilor, securitate și prelucrarea datelor.",
        url: "https://greensensor.fr/politique-confidentialite",
        siteName: "GreenSensor",
        locale: "ro_RO",
        type: "article",
      },
    }
  }
  return {
    title: "Politique de Confidentialité GreenSensor - Protection des Données RGPD | Prosensor",
    description: "Découvrez la politique de confidentialité complète de GreenSensor par Prosensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT pour le compostage.",
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title: "Politique de Confidentialité GreenSensor - Protection des Données RGPD",
      description: "Découvrez la politique de confidentialité complète de GreenSensor par Prosensor. Protection des données personnelles, conformité RGPD, droits des utilisateurs et sécurité de nos solutions IoT.",
      url: "https://greensensor.fr/politique-confidentialite",
      siteName: "GreenSensor",
      locale: "fr_FR",
      type: "article",
    },
  }
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <SiteHeader />
      <main className="container mx-auto max-w-4xl py-16 px-4">
        <PrivacyContent />
      </main>
      <SiteFooter />
    </>
  )
}
