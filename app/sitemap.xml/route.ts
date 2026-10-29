import { NextResponse } from "next/server";
import { getAllArticleSlugs } from "@/lib/articles";

export async function GET() {
  const baseUrl = "https://greensensor.fr";
  const staticPages = [
    "",
    "/contact",
    "/documentation",
    "/faq",
    "/articles",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgu",
  ];

  const articlePaths = getAllArticleSlugs().map((slug) => `/articles/${slug}`);

  const urls = [...staticPages, ...articlePaths]
    .map(
      (path) => `\n  <url>\n    <loc>${baseUrl}${path}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
} 