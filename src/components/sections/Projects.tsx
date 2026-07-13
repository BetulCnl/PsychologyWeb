import { projects } from "@/data/projects";
import Reveal from "@/components/ui/Reveal";
import Section from "@/components/ui/Section";

export default function Projects() {
  return (
    <Section id="atolyeler" tone="forest" labelledBy="atolyeler-baslik">
      <Reveal className="mb-14 max-w-2xl md:mb-20">
        <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-moss-300">
          <span aria-hidden className="h-px w-8 bg-moss-400" />
          Atölyeler & Projeler
        </p>
        <h2
          id="atolyeler-baslik"
          className="mt-4 font-display text-3xl font-medium leading-[1.15] text-cream-100 md:text-[2.6rem]"
        >
          Tasarladığım atölyeler, yürüttüğüm projeler
        </h2>
        <p className="mt-5 text-base leading-relaxed text-cream-200/70 md:text-lg">
          Anaokulundan kurumsal eğitim salonlarına; sanat, müzik ve oyunun
          iyileştirici gücünü farklı topluluklarla buluşturdum.
        </p>
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;
          return (
            <Reveal
              key={project.title}
              delay={Math.min((index % 3) * 0.08, 0.24)}
              className="h-full"
            >
              <article className="group flex h-full flex-col rounded-3xl border border-cream-200/10 bg-forest-500/40 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-moss-400/40 hover:bg-forest-500/60">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-moss-500/20 text-moss-300 transition-colors group-hover:bg-moss-500 group-hover:text-cream-100">
                  <Icon aria-hidden className="h-5 w-5" />
                </span>
                <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-moss-300">
                  {project.context}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-cream-100">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream-200/65">
                  {project.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-cream-200/15 px-3 py-1 text-[11px] font-medium text-cream-200/70"
                    >
                      {tag}
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
