import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

type SolutionSummary = {
  resume: string
  lignes: string[]
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000
const RATE_LIMIT_MAX_REQUESTS = 6
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

const demoRequestSchema = z.object({
  nom: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  telephone: z.string().trim().min(6).max(40),
  entreprise: z.string().trim().min(2).max(160),
  message: z.string().trim().max(3000).optional().or(z.literal("")),
  internet_site: z.enum(["oui", "non"]).optional(),
  achat_ou_location: z.enum(["acheter", "louer"]).optional(),
  longueur_sondes: z.enum(["1000", "1500", "2000"]).optional(),
  type_pack: z.enum(["pack2", "pack3", "unite"]).optional(),
  distance_passerelle: z.enum(["plus_2km", "moins_2km"]).optional(),
})

function getClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for")
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown"
  return req.headers.get("x-real-ip") || "unknown"
}

function isRateLimited(ip: string) {
  const now = Date.now()
  const current = rateLimitStore.get(ip)

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return false
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true
  }

  current.count += 1
  rateLimitStore.set(ip, current)
  return false
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}

function buildSolutionSummary(data: any): SolutionSummary | null {
  const internet_site = data.internet_site as string | undefined
  const achat_ou_location = data.achat_ou_location as string | undefined
  const longueur_sondes = data.longueur_sondes as string | undefined
  const type_pack = data.type_pack as string | undefined
  const distance_passerelle = data.distance_passerelle as string | undefined

  if (!internet_site && !achat_ou_location && !longueur_sondes && !type_pack && !distance_passerelle) {
    return null
  }

  const lignes: string[] = []
  const refs: string[] = []

  const isBuy = achat_ou_location === "acheter"
  const isRent = achat_ou_location === "louer"

  let resume = ""

  const achatLabel = isBuy ? "Achat" : isRent ? "Location" : ""
  let longueurLabel = ""
  if (longueur_sondes === "1000") longueurLabel = "Lg 1000"
  if (longueur_sondes === "1500") longueurLabel = "Lg 1500"
  if (longueur_sondes === "2000") longueurLabel = "Lg 2000"

  let packLabel = ""
  if (type_pack === "pack2") packLabel = "Pack 2 sondes"
  if (type_pack === "pack3") packLabel = "Pack 3 sondes"
  if (type_pack === "unite") packLabel = "Sonde(s) à l'unité"

  if (achatLabel && longueurLabel && packLabel) {
    resume = `${achatLabel} – ${packLabel} ${longueurLabel}`
  }

  if (isBuy) {
    if (longueur_sondes === "1000") {
      if (type_pack === "pack2") {
        lignes.push("Pack 2 sondes Lg 1000 + routeur (IOTP0007)")
        refs.push("IOTP0007")
      } else if (type_pack === "pack3") {
        lignes.push("Pack 3 sondes Lg 1000 + routeur (IOTP0008)")
        refs.push("IOTP0008")
      } else if (type_pack === "unite") {
        lignes.push("Sonde supplémentaire Lg 1000 à l'unité (IOTP0001)")
        refs.push("IOTP0001")
      }
    } else if (longueur_sondes === "1500") {
      if (type_pack === "pack2") {
        lignes.push("Pack 2 sondes Lg 1500 + routeur (IOTP0025)")
        refs.push("IOTP0025")
      } else if (type_pack === "pack3") {
        lignes.push("Pack 3 sondes Lg 1500 + routeur (IOTP0026)")
        refs.push("IOTP0026")
      } else if (type_pack === "unite") {
        lignes.push("Sonde supplémentaire Lg 1500 à l'unité (IOTP0002)")
        refs.push("IOTP0002")
      }
    } else if (longueur_sondes === "2000") {
      lignes.push("Sonde(s) Lg 2000 (IOTP0003) – quantité à préciser")
      refs.push("IOTP0003")
    }

    lignes.push("Forfait 1ère activation (IOTP0009), accès annuel plateforme (IOTP0010), frais de port et emballage (IOTP0011)")
    refs.push("IOTP0009", "IOTP0010", "IOTP0011")
  }

  if (isRent) {
    if (longueur_sondes === "1000") {
      if (type_pack === "pack2") {
        lignes.push("Pack 2 sondes Lg 1000 + routeur en location (IOTP0013)")
        refs.push("IOTP0013")
      } else if (type_pack === "pack3") {
        lignes.push("Pack 3 sondes Lg 1000 + routeur en location (IOTP0014)")
        refs.push("IOTP0014")
      } else if (type_pack === "unite") {
        lignes.push("Sonde Lg 1000 en location, à l'unité (IOTP0015)")
        refs.push("IOTP0015")
      }
    } else if (longueur_sondes === "1500") {
      lignes.push("Sonde(s) Lg 1500 en location (IOTP0016) – quantité / pack à préciser")
      refs.push("IOTP0016")
    } else if (longueur_sondes === "2000") {
      lignes.push("Sonde(s) Lg 2000 en location (IOTP0017) – quantité / pack à préciser")
      refs.push("IOTP0017")
    }

    lignes.push("Forfait 1ère activation (IOTP0009), accès annuel plateforme location (IOTP0018), frais de port et emballage (IOTP0011)")
    refs.push("IOTP0009", "IOTP0018", "IOTP0011")
  }

  if (internet_site === "oui") {
    lignes.push("Site avec Internet (box / routeur).")
  } else if (internet_site === "non") {
    lignes.push("Site sans Internet : prévoir passerelle LTE 4G (réf interne Prosensor).")
  }

  if (distance_passerelle === "plus_2km") {
    lignes.push("Distance andains / passerelle > 2 km : antenne répéteur recommandée (référence à préciser).")
  }

  if (refs.length) {
    const uniqueRefs = Array.from(new Set(refs))
    lignes.push(`Références IOTP principales : ${uniqueRefs.join(", ")}`)
  }

  if (!resume && lignes.length === 0) {
    return null
  }

  return { resume, lignes }
}

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Trop de requêtes, réessayez plus tard" }, { status: 429 });
  }

  const rawData = await req.json();
  const parsed = demoRequestSchema.safeParse(rawData)
  if (!parsed.success) {
    return NextResponse.json({ error: "Données invalides" }, { status: 400 });
  }
  const data = parsed.data

  const transporter = nodemailer.createTransport({
    host: "mail81.lwspanel.com", // <-- remplace ici
    port: 465,
    secure: true,
    auth: {
      user: "contact@greensensor.fr",
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const lib = {
    internet: data.internet_site === "oui" ? "Oui" : data.internet_site === "non" ? "Non" : data.internet_site || "-",
    achat: data.achat_ou_location === "acheter" ? "Acheter" : data.achat_ou_location === "louer" ? "Louer" : data.achat_ou_location || "-",
    pack: data.type_pack === "pack2" ? "Pack de 2 sondes" : data.type_pack === "pack3" ? "Pack de 3 sondes" : data.type_pack === "unite" ? "À l'unité" : data.type_pack || "-",
    distance: data.distance_passerelle === "plus_2km" ? "Plus de 2 km en champs libre" : data.distance_passerelle === "moins_2km" ? "Moins de 2 km en champs libre" : data.distance_passerelle || "-",
  }

  const solution = buildSolutionSummary(data)
  const safe = {
    nom: escapeHtml(data.nom),
    email: escapeHtml(data.email),
    telephone: escapeHtml(data.telephone),
    entreprise: escapeHtml(data.entreprise),
    internet: escapeHtml(lib.internet),
    achat: escapeHtml(lib.achat),
    longueur: escapeHtml(data.longueur_sondes ? `${data.longueur_sondes} mm` : "-"),
    pack: escapeHtml(lib.pack),
    distance: escapeHtml(lib.distance),
    message: escapeHtml(data.message || "(aucun message)"),
    resume: solution?.resume ? escapeHtml(solution.resume) : "",
    lignes: (solution?.lignes ?? []).map((l) => escapeHtml(l)),
  }

  const mailOptions = {
    from: '"Site GreenSensor" <contact@greensensor.fr>',
    to: "info@prosensor.com",
    subject: "Nouvelle demande de présentation de la solution GreenSensor",
    text: [
      `Nom: ${data.nom}`,
      `Email: ${data.email}`,
      `Téléphone: ${data.telephone}`,
      `Entreprise: ${data.entreprise}`,
      `Internet sur le site : ${lib.internet}`,
      `Achat ou location : ${lib.achat}`,
      `Longueur des sondes : ${data.longueur_sondes ? data.longueur_sondes + " mm" : "-"}`,
      `Type de pack : ${lib.pack}`,
      `Distance andains / passerelle : ${lib.distance}`,
      solution ? "" : "",
      solution ? "=== Configuration proposée (interne Prosensor) ===" : "",
      solution?.resume ? solution.resume : "",
      ...(solution?.lignes ?? []).map((l) => `- ${l}`),
      "",
      `Message: ${data.message || "(aucun message)"}`,
    ].filter(Boolean).join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; background: #f6f6f6; padding: 32px;">
        <div style="max-width: 500px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 32px;">
          <h2 style="color: #3eab35; margin-bottom: 16px;">Nouvelle demande de présentation</h2>
          <table style="width: 100%; font-size: 16px; color: #222;">
            <tr><td style="font-weight: bold; padding: 8px 0;">Nom :</td><td>${safe.nom}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Email :</td><td>${safe.email}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Téléphone :</td><td>${safe.telephone}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Entreprise :</td><td>${safe.entreprise}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Internet sur le site :</td><td>${safe.internet}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Achat ou location :</td><td>${safe.achat}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Longueur des sondes :</td><td>${safe.longueur}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Type de pack :</td><td>${safe.pack}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Distance andains / passerelle :</td><td>${safe.distance}</td></tr>
            ${solution ? `
            <tr><td colspan="2" style="padding-top: 16px; border-top: 1px solid #eee;"></td></tr>
            <tr><td colspan="2" style="font-weight: bold; padding: 8px 0;">Configuration proposée (interne Prosensor) :</td></tr>
            ${safe.resume ? `<tr><td style="padding: 4px 0;">Résumé :</td><td>${safe.resume}</td></tr>` : ""}
            ${safe.lignes.length ? `<tr><td style="padding: 4px 0; vertical-align: top;">Détail :</td><td><ul style="margin: 0; padding-left: 18px; font-size: 14px;">${safe.lignes.map(l => `<li>${l}</li>`).join("")}</ul></td></tr>` : ""}
            ` : ""}
            <tr><td style="font-weight: bold; padding: 8px 0; vertical-align: top;">Message :</td><td style="white-space: pre-line;">${safe.message}</td></tr>
          </table>
          <div style="margin-top: 32px; text-align: center;">
            <div style="color: #888; font-size: 13px;">Demande envoyée depuis le site GreenSensor.fr</div>
          </div>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur SMTP:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi du mail" }, { status: 500 });
  }
} 