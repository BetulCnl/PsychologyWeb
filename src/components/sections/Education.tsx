import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Education() {
  return (
    <Section id="egitim" labelledBy="egitim-baslik">
      <SectionHeading
        overline="Eğitim"
        title="Akademik yolculuk"
        titleId="egitim-baslik"
        description="Lisans eğitimimi Yüksek Onur derecesiyle tamamladım; klinik psikoloji alanındaki lisansüstü çalışmalarım sürüyor."
      />

      <ol className="grid gap-6 md:grid-cols-3">
        {education.map((item, index) => (
          <li key={item.institution} className="h-full">
            <Reveal delay={index * 0.1} className="h-full">
              <article className="group relative flex h-full flex-col rounded-3xl border border-forest-600/8 bg-cream-50 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lifted">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-moss-100 text-moss-700 transition-colors group-hover:bg-moss-500 group-hover:text-cream-100">
                    <GraduationCap aria-hidden className="h-6 w-6" />
                  </span>
                  {item.status === "devam" && (
                    <span className="rounded-full bg-moss-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-moss-700">
                      Devam ediyor
                    </span>
                  )}
                </div>
                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-moss-600">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold leading-snug text-forest-600">
                  {item.institution}
                </h3>
                <p className="mt-1.5 text-sm font-medium text-forest-500/80">
                  {item.degree}
                </p>
                {item.detail && (
                  <p className="mt-4 text-sm leading-relaxed text-forest-500/70">
                    {item.detail}
                  </p>
                )}
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
