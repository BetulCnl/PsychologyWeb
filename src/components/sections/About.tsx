import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { about } from "@/data/site";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <Section id="hakkimda" tone="light" labelledBy="hakkimda-baslik">
      <SectionHeading
        overline="Hakkımda"
        title={about.heading}
        titleId="hakkimda-baslik"
      />

      <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Portrait with framed composition */}
        <Reveal x={-32} className="relative mx-auto w-full max-w-sm lg:sticky lg:top-28">
          <div
            aria-hidden
            className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border border-moss-500/30"
          />
          <div className="relative overflow-hidden rounded-[2rem] shadow-lifted">
            <Image
              src="/images/office.jpg"
              alt="Ayşe Eda Şahin danışmanlık ofisinde"
              width={1500}
              height={2000}
              sizes="(max-width: 1024px) 90vw, 35vw"
              className="h-auto w-full object-cover"
            />
          </div>
          <figure className="absolute -bottom-7 left-1/2 w-[85%] -translate-x-1/2 rounded-2xl border border-forest-600/8 bg-cream-100/95 px-6 py-4 text-center shadow-lifted backdrop-blur-sm">
            <blockquote className="font-display text-sm italic leading-relaxed text-forest-600">
              &ldquo;Her danışan, kendi hikâyesinin uzmanıdır; ben yalnızca
              yol arkadaşıyım.&rdquo;
            </blockquote>
          </figure>
        </Reveal>

        {/* Narrative */}
        <div className="pt-8 lg:pt-0">
          {about.paragraphs.map((paragraph, index) => (
            <Reveal key={index} delay={index * 0.08}>
              <p className="mb-6 text-base leading-[1.85] text-forest-500/85 md:text-[1.0625rem]">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={0.1}>
            <ul className="mt-8 space-y-4">
              {about.values.map((value) => (
                <li key={value.title} className="flex gap-3.5">
                  <CheckCircle2
                    aria-hidden
                    className="mt-0.5 h-5 w-5 shrink-0 text-moss-500"
                  />
                  <p className="text-sm leading-relaxed text-forest-500/85 md:text-base">
                    <strong className="font-semibold text-forest-600">
                      {value.title}.
                    </strong>{" "}
                    {value.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Fact strip */}
          <Reveal delay={0.15}>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-forest-600/8 bg-forest-600/8 shadow-soft sm:grid-cols-4">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col bg-cream-50 px-5 py-6 text-center"
                >
                  <dt className="order-2 mt-2 block text-[11px] font-medium uppercase tracking-wider text-forest-500/60">
                    {fact.label}
                  </dt>
                  <dd className="font-display text-3xl font-semibold text-moss-600">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
