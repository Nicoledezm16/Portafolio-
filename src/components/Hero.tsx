"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { SocialLinks } from "./SocialLinks";
import { PortraitTilt } from "./PortraitTilt";
import { site } from "@/data/site";

export function Hero() {
  const { t } = useLang();
  const reduce = useReducedMotion();
  const item = (i: number) =>
    ({
      initial: reduce ? false : { opacity: 0, y: 24 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6, delay: 0.1 * i, ease: "easeOut" },
    }) as const;

  return (
    <section id="home" className="relative isolate overflow-hidden pt-16">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute -right-40 top-0 -z-10 h-[34rem] w-[34rem] rounded-full bg-accent/25 blur-[140px]" />

      <div className="mx-auto grid min-h-[min(44rem,100svh)] max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <motion.h1 {...item(0)} className="text-balance text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.title}
          </motion.h1>

          <motion.p {...item(1)} className="mt-5 text-xl font-medium text-accent2 sm:text-2xl">
            {t.hero.subtitle}
          </motion.p>

          <motion.p {...item(2)} className="mt-4 max-w-xl text-lg leading-relaxed text-mute">
            {t.hero.description}
          </motion.p>

          <motion.div {...item(3)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium shadow-glow transition hover:bg-accent2">
              {t.hero.cta1}
              <ArrowRight size={18} />
            </a>
            <a href="#contact" className="inline-flex min-h-12 items-center rounded-full border border-line px-6 font-medium transition hover:border-accent2">
              {t.hero.cta2}
            </a>
          </motion.div>

          <motion.div {...item(4)} className="mt-8">
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div {...item(2)} className="mx-auto w-full max-w-[15rem] sm:max-w-[17rem] lg:max-w-[19rem]">
          <PortraitTilt src={site.portrait} alt={t.hero.portraitAlt} />
        </motion.div>
      </div>
    </section>
  );
}