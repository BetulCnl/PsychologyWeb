# PsychologyWeb

Psikolog Ayşe Eda Şahin için hazırlanan tek sayfalık kişisel web sitesi.

Bölümler: giriş, hakkında, eğitim, deneyim, yetkinlikler, projeler/atölyeler, sertifikalar, iletişim formu.

## Teknolojiler

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, kaydırma animasyonları için Framer Motion, ikonlar için Lucide. İletişim formu e-postayı [Resend](https://resend.com) üzerinden gönderiyor.

## Çalıştırma

```bash
npm install
npm run dev      # http://localhost:3000
```

Canlıya almak için:

```bash
npm run build
npm start
```

## İçeriği düzenlemek

Sitedeki bütün metinler `src/data/` altında. Bileşenler sadece bu verileri ekrana basıyor, yani yazıları değiştirmek için genelde sadece bu dosyalara dokunmak yeterli:

| Dosya | İçerik |
|---|---|
| `site.ts` | isim, iletişim bilgileri, giriş ve hakkında metinleri |
| `education.ts` | eğitim bilgileri |
| `experience.ts` | iş deneyimi |
| `skills.ts` | yetkinlikler |
| `projects.ts` | projeler ve atölyeler |
| `certificates.ts` | sertifikalar |
| `navigation.ts` | menü bağlantıları |
| `types.ts` | bu dosyaların ortak tipleri |

Fotoğraflar `public/images/` içinde (`profile.jpg`, `office.jpg`).

## İletişim formu

Form `src/app/api/contact/route.ts` adresine istek atar. Bu route girdiyi Zod ile doğrular, botlar için gizli bir tuzak alanı (honeypot) kontrol eder, HTML'i kaçışlar ve mesajı Resend ile gönderir.

`.env.local` dosyasına:

| Değişken | Zorunlu mu | Varsayılan |
|---|---|---|
| `RESEND_API_KEY` | evet | yok. Tanımlı değilse form 503 döner ve kullanıcıya e-posta adresini gösterir |
| `CONTACT_TO_EMAIL` | hayır | `site.ts` içindeki e-posta |
| `CONTACT_FROM_EMAIL` | hayır | `Portfolyo <onboarding@resend.dev>` |

Resend'in test göndericisi (`onboarding@resend.dev`) sadece Resend hesabını açan adrese mail atabilir. Başka adreslere göndermek için doğrulanmış bir alan adı gerekir.

## Klasör yapısı

```
src/app/            layout, sayfa, global stiller, iletişim API'si
src/components/
  layout/           Navbar, Footer
  sections/         her sayfa bölümü için bir bileşen
  ui/               Section, SectionHeading, Reveal (animasyon sarmalayıcısı)
src/data/           sitenin bütün metinleri
public/images/      fotoğraflar
```

## Yapılacaklar

- Online randevu alma
