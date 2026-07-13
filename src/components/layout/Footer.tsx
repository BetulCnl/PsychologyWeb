import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { navLinks } from "@/data/navigation";
import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest-700 text-cream-200">
      <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-semibold text-cream-100">
              Ayşe Eda Şahin
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-moss-300">
              {site.title}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream-200/70">
              {site.description}
            </p>
          </div>

          <nav aria-label="Alt menü">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss-300">
              Sayfa
            </p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream-200/80 transition-colors hover:text-cream-100"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-moss-300">
              İletişim
            </p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-cream-100"
                >
                  <Mail aria-hidden className="h-4 w-4 text-moss-300" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone}`}
                  className="inline-flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-cream-100"
                >
                  <Phone aria-hidden className="h-4 w-4 text-moss-300" />
                  {site.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={site.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-cream-200/80 transition-colors hover:text-cream-100"
                >
                  <AtSign aria-hidden className="h-4 w-4 text-moss-300" />
                  {site.instagram}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-cream-200/80">
                <MapPin aria-hidden className="h-4 w-4 text-moss-300" />
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-cream-200/10 pt-6 text-xs text-cream-200/50 sm:flex-row sm:items-center">
          <p>
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
          <p className="italic">&ldquo;İyileşme, güvenli bir ilişkide başlar.&rdquo;</p>
        </div>
      </div>
    </footer>
  );
}
