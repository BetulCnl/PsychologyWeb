"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, Leaf, Sparkles } from "lucide-react";
import Image from "next/image";
import { hero, site } from "@/data/site";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section
      id="anasayfa"
      aria-label="Tanıtım"
      className="relative overflow-hidden bg-cream-100"
    >
      {/* Quiet decorative field */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-moss-100/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-56 -left-32 h-[28rem] w-[28rem] rounded-full bg-cream-200/80 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 pb-20 pt-28 sm:px-8 md:pt-36 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-28">
        {/* Editorial copy */}
        <div className="relative z-10">
          <motion.p
            {...fadeUp(0.05)}
            className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-moss-600"
          >
            <Leaf aria-hidden className="h-4 w-4" />
            {hero.overline}
          </motion.p>

          <motion.h1
            {...fadeUp(0.15)}
            className="mt-6 font-display text-[2.75rem] font-medium leading-[1.06] tracking-tight text-forest-600 sm:text-6xl lg:text-[4.25rem]"
          >
            {hero.headline.lead}{" "}
            <em className="relative inline-block font-light italic text-moss-600">
              {hero.headline.emphasis}
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-[3px] rounded-full bg-moss-300/70"
              />
            </em>{" "}
            {hero.headline.trail}
          </motion.h1>

          <motion.p
            {...fadeUp(0.28)}
            className="mt-7 max-w-xl text-base leading-relaxed text-forest-500/85 md:text-lg"
          >
            {hero.intro}
          </motion.p>

          <motion.div {...fadeUp(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#iletisim"
              className="group inline-flex items-center gap-2 rounded-full bg-forest-600 px-7 py-3.5 text-sm font-semibold text-cream-100 shadow-soft transition-all hover:bg-forest-500 hover:shadow-lifted"
            >
              İletişime Geç
              <ArrowDownRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="#hakkimda"
              className="inline-flex items-center gap-2 rounded-full border border-forest-600/15 bg-cream-50 px-7 py-3.5 text-sm font-semibold text-forest-600 transition-all hover:border-moss-500/40 hover:bg-moss-50"
            >
              Beni Tanıyın
            </a>
          </motion.div>

          <motion.ul {...fadeUp(0.52)} className="mt-10 flex flex-wrap gap-2.5">
            {hero.badges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-moss-500/25 bg-moss-50 px-4 py-1.5 text-xs font-medium text-moss-700"
              >
                {badge}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Layered portrait composition */}
        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96, y: 20 },
                animate: { opacity: 1, scale: 1, y: 0 },
                transition: { duration: 0.9, delay: 0.3, ease },
              })}
        >
          {/* Offset moss panel behind the portrait */}
          <div
            aria-hidden
            className="absolute -left-4 top-8 h-[92%] w-full rounded-[2.5rem] rounded-tr-[7rem] bg-moss-200/70 sm:-left-6"
          />
          {/* Dotted texture */}
          <div
            aria-hidden
            className="absolute -right-8 top-16 hidden h-40 w-40 opacity-60 sm:block"
            style={{
              backgroundImage:
                "radial-gradient(circle, var(--color-moss-500) 1.5px, transparent 1.5px)",
              backgroundSize: "18px 18px",
            }}
          />

          <div className="relative overflow-hidden rounded-[2.5rem] rounded-tl-[7rem] border border-cream-50 shadow-lifted">
            <Image
              src="/images/profile.jpg"
              alt="Psikolog Ayşe Eda Şahin'in portresi"
              width={1290}
              height={1721}
              priority
              sizes="(max-width: 1024px) 90vw, 45vw"
              className="h-auto w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-forest-700/25 via-transparent to-transparent"
            />
          </div>

          {/* Floating credential card */}
          <motion.div
            {...(prefersReducedMotion
              ? {}
              : {
                  initial: { opacity: 0, y: 24 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.75, ease },
                })}
            className="absolute -bottom-6 -left-3 flex items-center gap-3.5 rounded-2xl border border-forest-600/8 bg-cream-50/95 px-5 py-4 shadow-lifted backdrop-blur-sm sm:-left-10"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-moss-500 text-cream-100">
              <Sparkles aria-hidden className="h-5 w-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-forest-600">
                Klinik Psikoloji · Yüksek Lisans
              </p>
              <p className="mt-0.5 text-xs text-forest-500/70">
                İstanbul Gedik Üniversitesi · devam ediyor
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
