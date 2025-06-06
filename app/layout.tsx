import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GreenSensor - Suivi du compostage",
  description: "GreenSensor révolutionne le suivi de température et l'analyse des processus de compostage grâce à des sondes connectées et une plateforme cloud intuitive.",
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
    "ProSensor"
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  openGraph: {
    title: "GreenSensor - Suivi intelligent du compostage",
    description: "GreenSensor révolutionne le suivi de température et l'analyse des processus de compostage grâce à des sondes connectées et une plateforme cloud intuitive.",
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
    title: "GreenSensor - Suivi intelligent du compostage",
    description: "GreenSensor révolutionne le suivi de température et l'analyse des processus de compostage grâce à des sondes connectées et une plateforme cloud intuitive.",
    images: ["https://greensensor.fr/GreenSensor_Logo.jpg"],
    creator: "@greensensor",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
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
        {children}
      </body>
    </html>
  );
}
