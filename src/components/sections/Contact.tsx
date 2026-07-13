"use client";

import {
  AtSign,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  XCircle,
} from "lucide-react";
import { useState, type FormEvent } from "react";
import { site } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

type FormStatus = "idle" | "loading" | "success" | "error";

const contactChannels = [
  {
    icon: Mail,
    label: "E-posta",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "Telefon",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: AtSign,
    label: "Instagram",
    value: site.instagram,
    href: site.instagramUrl,
  },
  {
    icon: MapPin,
    label: "Konum",
    value: site.location,
  },
];

const inputClasses =
  "w-full rounded-xl border border-forest-600/12 bg-cream-50 px-4.5 py-3.5 text-sm text-forest-600 placeholder:text-forest-500/40 transition-colors focus:border-moss-500 focus:outline-none focus:ring-2 focus:ring-moss-500/25";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          company: formData.get("company"), // honeypot
        }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(data.error ?? "Mesaj gönderilemedi.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Beklenmedik bir hata oluştu. Lütfen tekrar deneyin."
      );
    }
  }

  return (
    <Section id="iletisim" tone="light" labelledBy="iletisim-baslik">
      <SectionHeading
        overline="İletişim"
        title="Birlikte bir adım atalım"
        titleId="iletisim-baslik"
        description="Randevu, atölye iş birliği veya sorularınız için bana ulaşabilirsiniz. En kısa sürede dönüş yapıyorum."
      />

      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        {/* Channels */}
        <Reveal x={-24}>
          <ul className="space-y-4">
            {contactChannels.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <>
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-moss-100 text-moss-700 transition-colors group-hover:bg-moss-500 group-hover:text-cream-100">
                    <Icon aria-hidden className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.16em] text-forest-500/55">
                      {channel.label}
                    </span>
                    <span className="mt-0.5 block text-[15px] font-semibold text-forest-600">
                      {channel.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={channel.label}>
                  {channel.href ? (
                    <a
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        channel.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="group flex items-center gap-4 rounded-2xl border border-forest-600/8 bg-cream-100 p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lifted"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 rounded-2xl border border-forest-600/8 bg-cream-100 p-5 shadow-soft">
                      {content}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 rounded-2xl bg-moss-100/70 p-6">
            <p className="text-sm leading-relaxed text-moss-800">
              <strong className="font-semibold">Çalışma alanlarım:</strong>{" "}
              çocuk, ergen ve yetişkinlerle bireysel görüşmeler; ebeveyn
              danışmanlığı; okul ve kurumlara yönelik atölye ve eğitimler.
            </p>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal x={24}>
          <form
            onSubmit={handleSubmit}
            noValidate={false}
            className="rounded-3xl border border-forest-600/8 bg-cream-100 p-7 shadow-soft sm:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-forest-600"
                >
                  Ad Soyad
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Adınız Soyadınız"
                  className={inputClasses}
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-forest-600"
                >
                  E-posta
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  autoComplete="email"
                  placeholder="ornek@eposta.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-semibold text-forest-600"
              >
                Konu
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                minLength={3}
                maxLength={150}
                placeholder="Randevu talebi, atölye iş birliği…"
                className={inputClasses}
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-semibold text-forest-600"
              >
                Mesajınız
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={10}
                maxLength={3000}
                rows={5}
                placeholder="Size nasıl yardımcı olabilirim?"
                className={`${inputClasses} resize-y`}
              />
            </div>

            {/* Honeypot — hidden from real users */}
            <div className="sr-only" aria-hidden="true">
              <label htmlFor="contact-company">
                Bu alanı boş bırakın
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-600 px-8 py-3.5 text-sm font-semibold text-cream-100 shadow-soft transition-all hover:bg-forest-500 hover:shadow-lifted disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 aria-hidden className="h-4 w-4 animate-spin" />
                    Gönderiliyor…
                  </>
                ) : (
                  <>
                    <Send aria-hidden className="h-4 w-4" />
                    Mesajı Gönder
                  </>
                )}
              </button>

              <div aria-live="polite" className="text-sm">
                {status === "success" && (
                  <p className="inline-flex items-center gap-1.5 font-medium text-moss-700">
                    <CheckCircle2 aria-hidden className="h-4 w-4" />
                    Mesajınız iletildi, teşekkürler!
                  </p>
                )}
                {status === "error" && (
                  <p className="inline-flex items-center gap-1.5 font-medium text-red-700">
                    <XCircle aria-hidden className="h-4 w-4 shrink-0" />
                    {errorMessage}
                  </p>
                )}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
