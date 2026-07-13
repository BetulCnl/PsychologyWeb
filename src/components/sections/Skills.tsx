import { skillGroups } from "@/data/skills";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Skills() {
  return (
    <Section id="uzmanlik" labelledBy="uzmanlik-baslik">
      <SectionHeading
        overline="Uzmanlık Alanları"
        title="Her yaşa ve ihtiyaca uygun yöntemler"
        titleId="uzmanlik-baslik"
        description="Kanıta dayalı terapi ekollerini; değerlendirme araçları, danışmanlık pratiği ve yaratıcı ifade yollarıyla bir arada kullanıyorum."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={(index % 2) * 0.1} className="h-full">
              <article className="group flex h-full flex-col rounded-3xl border border-forest-600/8 bg-cream-50 p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-moss-500/25 hover:shadow-lifted sm:p-9">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-forest-600 text-cream-100 transition-colors group-hover:bg-moss-600">
                    <Icon aria-hidden className="h-5.5 w-5.5" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-forest-600">
                      {group.title}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-forest-500/70">
                  {group.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-moss-500/20 bg-moss-50 px-3.5 py-1.5 text-[13px] font-medium text-moss-800"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
