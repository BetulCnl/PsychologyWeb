import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Experience() {
  return (
    <Section id="deneyim" tone="light" labelledBy="deneyim-baslik">
      <SectionHeading
        overline="Deneyim"
        title="Klinikten sahaya uzanan bir pratik"
        titleId="deneyim-baslik"
        description="Hastane, sosyal hizmet, araştırma ve özel danışmanlık ortamlarında; çocuk, ergen ve yetişkinlerle çalıştım."
      />

      <ol className="relative ml-2 space-y-12 border-l border-moss-500/25 pl-8 sm:ml-4 sm:pl-12">
        {experience.map((item, index) => (
          <li key={`${item.organization}-${item.period}`} className="relative">
            {/* Timeline node */}
            <span
              aria-hidden
              className="absolute -left-[2.55rem] top-1.5 flex h-4 w-4 items-center justify-center sm:-left-[3.55rem]"
            >
              <span className="absolute h-4 w-4 rounded-full bg-moss-200" />
              <span className="relative h-2 w-2 rounded-full bg-moss-600" />
            </span>

            <Reveal delay={Math.min(index * 0.06, 0.2)}>
              <article className="rounded-3xl border border-forest-600/8 bg-cream-100 p-7 shadow-soft transition-shadow duration-300 hover:shadow-lifted sm:p-9">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="font-display text-xl font-semibold text-forest-600">
                    {item.role}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-moss-600">
                    {item.period}
                  </p>
                </div>
                <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-forest-500/80">
                  {item.organization}
                  <span className="inline-flex items-center gap-1 text-forest-500/55">
                    <MapPin aria-hidden className="h-3.5 w-3.5" />
                    {item.location}
                  </span>
                </p>
                <ul className="mt-5 space-y-2.5">
                  {item.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-forest-500/75"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-moss-400"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
