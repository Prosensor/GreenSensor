import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();

  if (!data.email || !data.nom || !data.telephone || !data.entreprise) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: "mail81.lwspanel.com", // <-- remplace ici
    port: 465,
    secure: true,
    auth: {
      user: "contact@greensensor.fr",
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Site GreenSensor" <contact@greensensor.fr>',
    to: "info@prosensor.com",
    subject: "Nouvelle demande de présentation de la solution GreenSensor",
    text: `\nNom: ${data.nom}\nEmail: ${data.email}\nTéléphone: ${data.telephone}\nEntreprise: ${data.entreprise}\nMessage: ${data.message || "(aucun message)"}\n`,
    html: `
      <div style="font-family: Arial, sans-serif; background: #f6f6f6; padding: 32px;">
        <div style="max-width: 500px; margin: auto; background: #fff; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 32px;">
          <h2 style="color: #3eab35; margin-bottom: 16px;">Nouvelle demande de présentation</h2>
          <table style="width: 100%; font-size: 16px; color: #222;">
            <tr><td style="font-weight: bold; padding: 8px 0;">Nom :</td><td>${data.nom}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Email :</td><td><a href="mailto:${data.email}" style="color: #3eab35; text-decoration: underline;">${data.email}</a></td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Téléphone :</td><td><a href="tel:${data.telephone}" style="color: #3eab35; text-decoration: underline;">${data.telephone}</a></td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0;">Entreprise :</td><td>${data.entreprise}</td></tr>
            <tr><td style="font-weight: bold; padding: 8px 0; vertical-align: top;">Message :</td><td style="white-space: pre-line;">${data.message || "(aucun message)"}</td></tr>
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