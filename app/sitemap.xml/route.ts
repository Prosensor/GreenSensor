import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://greensensor.fr";
  const staticPages = [
    "",
    "/mentions-legales",
    "/politique-confidentialite",
    "/cgu",
  ];

  const urls = staticPages
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