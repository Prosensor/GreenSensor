import type { Metadata, Viewport } from "next";
import { Archivo, Inter, Manrope, Sora } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/i18n-provider";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

// Mêmes familles que le site principal Prosensor : Archivo (titres), Sora (navigation, boutons),
// Inter (texte), Manrope (chapôs et légendes).
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin", "latin-ext"], weight: ["700", "800"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin", "latin-ext"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"], display: "swap" });

export const metadata: Metadata = {
  title: "GreenSensor - Sonde de température pour le compostage",
  description: "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques.",
  keywords: [
    "GreenSensor",
    "compostage",
    "sonde température",
    "IoT",
    "agriculture",
    "suivi compost",
    "analyse compost",
    "plateforme cloud",
    "alertes température",
    "rapport compost",
    "Prosensor"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "GreenSensor - Sonde de température pour le compostage",
    description: "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques.",
    url: "https://greensensor.fr",
    siteName: "GreenSensor",
    images: [
      {
        url: "https://greensensor.fr/GreenSensor_Logo.jpg",
        width: 800,
        height: 600,
        alt: "GreenSensor Logo",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenSensor - Sonde de température pour le compostage",
    description: "Découvrez GreenSensor, la sonde de température pour le compostage et la fermentation. Sondes connectées, plateforme cloud et alertes automatiques.",
    images: ["https://greensensor.fr/GreenSensor_Logo.jpg"],
    creator: "@greensensor",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#1b4a2a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${archivo.variable} ${sora.variable} ${inter.variable} ${manrope.variable} antialiased`}
      >
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-1068513425"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', 'AW-1068513425');
          `}
        </Script>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
