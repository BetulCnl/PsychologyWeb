import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  children: ReactNode;
  /** Alternate background tones to give the page rhythm. */
  tone?: "cream" | "light" | "forest";
  className?: string;
  labelledBy?: string;
}

const tones: Record<NonNullable<SectionProps["tone"]>, string> = {
  cream: "bg-cream-100",
  light: "bg-cream-50",
  forest: "bg-forest-600 text-cream-100",
};

export default function Section({
  id,
  children,
  tone = "cream",
  className = "",
  labelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`scroll-mt-24 py-20 md:py-28 ${tones[tone]} ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
