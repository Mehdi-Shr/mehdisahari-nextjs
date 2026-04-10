import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await request.json();
  const { name, email, company, service, budget, message } = body;

  if (!name || !email || !service || !budget || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Contact <contact@mehdisahari.fr>",
      to: "mehdi.shr@outlook.fr",
      replyTo: email,
      subject: `Nouveau projet — ${service} (${budget})`,
      html: `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background:#f0f5ff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Inter,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 16px;">
    <tr><td align="center">
      <table width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;">
        <tr><td style="background:linear-gradient(135deg,#0f172a 0%,#1e3a5f 60%,#1d4ed8 100%);border-radius:16px 16px 0 0;padding:32px;">
          <p style="margin:20px 0 0;color:rgba(255,255,255,0.6);font-size:13px;">Message reçu depuis <strong style="color:rgba(255,255,255,0.85);">mehdisahari.fr</strong></p>
        </td></tr>
        <tr><td style="background:white;padding:32px;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;">
          <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
            <tr>
              <td style="padding:11px 0;border-bottom:1px solid #f1f5f9;width:110px;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Nom</span></td>
              <td style="padding:11px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a;font-weight:600;">${name}</td>
            </tr>
            <tr>
              <td style="padding:11px 0;border-bottom:1px solid #f1f5f9;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Email</span></td>
              <td style="padding:11px 0;border-bottom:1px solid #f1f5f9;"><a href="mailto:${email}" style="font-size:14px;color:#2563eb;">${email}</a></td>
            </tr>
            ${company ? `<tr><td style="padding:11px 0;border-bottom:1px solid #f1f5f9;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Entreprise</span></td><td style="padding:11px 0;border-bottom:1px solid #f1f5f9;font-size:14px;color:#0f172a;">${company}</td></tr>` : ""}
            <tr>
              <td style="padding:11px 0;border-bottom:1px solid #f1f5f9;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Service</span></td>
              <td style="padding:11px 0;border-bottom:1px solid #f1f5f9;"><span style="background:#eff6ff;color:#2563eb;padding:3px 12px;border-radius:20px;font-size:13px;font-weight:600;">${service}</span></td>
            </tr>
            <tr>
              <td style="padding:11px 0;"><span style="font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Budget</span></td>
              <td style="padding:11px 0;font-size:14px;color:#0f172a;font-weight:700;">${budget}</td>
            </tr>
          </table>
          <div style="background:#f8faff;border-radius:12px;padding:20px 22px;border:1px solid #e2e8f0;border-left:3px solid #2563eb;">
            <p style="margin:0 0 10px;font-size:11px;font-weight:700;text-transform:uppercase;color:#94a3b8;">Message</p>
            <p style="margin:0;font-size:14px;color:#334155;line-height:1.7;white-space:pre-wrap;">${message}</p>
          </div>
          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}?subject=Re: Votre projet — ${service}" style="display:inline-block;background:#2563eb;color:white;text-decoration:none;padding:14px 32px;border-radius:10px;font-size:14px;font-weight:700;">Répondre à ${name} →</a>
          </div>
        </td></tr>
        <tr><td style="background:#f8faff;border-radius:0 0 16px 16px;padding:20px 32px;border:1px solid #e2e8f0;border-top:none;text-align:center;">
          <p style="margin:0;font-size:12px;color:#94a3b8;"><a href="https://mehdisahari.fr" style="color:#2563eb;">mehdisahari.fr</a> · © 2026 Mehdi Sahari</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
    });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur lors de l'envoi" }, { status: 500 });
  }
}
