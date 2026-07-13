import Reveal from "./Reveal";

interface SectionHeadingProps {
  overline: string;
  title: string;
  titleId?: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  overline,
  title,
  titleId,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""} mb-14 md:mb-20`}
    >
      <p
        className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-moss-600 ${
          isCenter ? "justify-center" : ""
        }`}
      >
        <span aria-hidden className="h-px w-8 bg-moss-400" />
        {overline}
        {isCenter && <span aria-hidden className="h-px w-8 bg-moss-400" />}
      </p>
      <h2
        id={titleId}
        className="mt-4 font-display text-3xl font-medium leading-[1.15] text-forest-600 md:text-[2.6rem]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-forest-500/80 md:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
