import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Archivo, Inter, Manrope, Sora } from "next/font/google";
import "../globals.css";
import { I18nProvider } from "@/i18n/i18n-provider";
import { pageSeo } from "@/i18n/page-seo";
import { LANGS, SITE_URL, isLang } from "@/lib/i18n-routing";
import { DEFAULT_OG_IMAGE } from "@/lib/seo";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";

// Mêmes familles que le site principal Prosensor : Archivo (titres), Sora (navigation, boutons),
// Inter (texte), Manrope (chapôs et légendes).
const archivo = Archivo({ variable: "--font-archivo", subsets: ["latin", "latin-ext"], weight: ["700", "800"], display: "swap" });
const sora = Sora({ variable: "--font-sora", subsets: ["latin", "latin-ext"], weight: ["600", "700", "800"], display: "swap" });
const inter = Inter({ variable: "--font-inter", subsets: ["latin", "latin-ext"], display: "swap" });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "latin-ext"], weight: ["400", "500", "600"], display: "swap" });

// Une page par langue, générée à la compilation : /en, /es… n'existent qu'avec ces valeurs, le reste est un 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

// Valeurs par défaut du site ; chaque page fournit son propre titre, sa description et ses aperçus de liens.
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const { title, description } = pageSeo.home[lang];

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
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
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: { siteName: "GreenSensor", images: [DEFAULT_OG_IMAGE] },
  };
}

export const viewport: Viewport = {
  themeColor: "#1b4a2a",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang}>
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
        <I18nProvider lang={lang}>
          {children}
        </I18nProvider>
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
