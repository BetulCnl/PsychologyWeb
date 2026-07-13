import { Award, BadgeCheck } from "lucide-react";
import { certificates } from "@/data/certificates";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Certificates() {
  return (
    <Section id="sertifikalar" labelledBy="sertifikalar-baslik">
      <SectionHeading
        overline="Sertifikalar"
        title="Sürekli öğrenme, sürekli gelişim"
        titleId="sertifikalar-baslik"
        description="Alanında öncü isimlerden aldığım eğitimler ve uluslararası akreditasyonlu sertifikalar."
      />

      <ul className="grid gap-4 sm:grid-cols-2">
        {certificates.map((certificate, index) => (
          <li key={certificate.title} className="h-full">
            <Reveal delay={Math.min((index % 2) * 0.07, 0.14)} className="h-full">
              <article className="flex h-full items-start gap-4 rounded-2xl border border-forest-600/8 bg-cream-50 p-6 shadow-soft transition-all duration-300 hover:border-moss-500/30 hover:shadow-lifted">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-moss-100 text-moss-700">
                  <Award aria-hidden className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-[15px] font-semibold leading-snug text-forest-600">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-sm text-forest-500/70">
                    {certificate.issuer}
                  </p>
                  {certificate.accredited && (
                    <p className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-moss-700">
                      <BadgeCheck aria-hidden className="h-3.5 w-3.5" />
                      {certificate.accredited}
                    </p>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
