import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "@/i18n/i18n-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  themeColor: "#3eab35",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
