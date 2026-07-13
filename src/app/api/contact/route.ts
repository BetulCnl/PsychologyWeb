import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { site } from "@/data/site";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Lütfen adınızı yazın.")
    .max(100, "Ad çok uzun."),
  email: z
    .string()
    .trim()
    .email("Geçerli bir e-posta adresi girin.")
    .max(200, "E-posta çok uzun."),
  subject: z
    .string()
    .trim()
    .min(3, "Lütfen bir konu belirtin.")
    .max(150, "Konu çok uzun."),
  message: z
    .string()
    .trim()
    .min(10, "Mesajınız en az 10 karakter olmalı.")
    .max(3000, "Mesaj çok uzun."),
  company: z.string().optional(), // honeypot — must stay empty
});

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Geçersiz istek gövdesi." },
      { status: 400 }
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    const firstIssue = parsed.error.issues[0];
    return NextResponse.json(
      { error: firstIssue?.message ?? "Form verileri geçersiz." },
      { status: 422 }
    );
  }

  const { name, email, subject, message, company } = parsed.data;

  // Honeypot tripped — pretend success so bots learn nothing.
  if (company) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      {
        error:
          "Mesaj servisi şu anda yapılandırılmamış. Lütfen e-posta ile ulaşın: " +
          site.email,
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const to = process.env.CONTACT_TO_EMAIL ?? site.email;
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolyo <onboarding@resend.dev>";

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Portfolyo İletişim: ${subject}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #0a3323;">
        <h2 style="border-bottom: 2px solid #839958; padding-bottom: 8px;">Yeni iletişim formu mesajı</h2>
        <p><strong>Gönderen:</strong> ${safeName}</p>
        <p><strong>E-posta:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
        <p><strong>Konu:</strong> ${safeSubject}</p>
        <div style="background: #f7f4d5; border-radius: 12px; padding: 16px; margin-top: 16px;">
          <p style="margin: 0; line-height: 1.6;">${safeMessage}</p>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Mesaj gönderilirken bir sorun oluştu. Lütfen tekrar deneyin." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
