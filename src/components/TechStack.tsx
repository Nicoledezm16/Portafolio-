"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { techGroups } from "@/data/tech";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

const chip =
  "rounded-lg border border-accent2/20 bg-gradient-to-b from-accent/15 to-accent/5 px-3 py-1.5 text-sm text-ink/90 transition-all duration-200 hover:border-accent2/60 hover:from-accent/25 hover:to-accent/10 hover:text-ink hover:shadow-[0_0_18px_rgb(var(--accent)/0.3)]";
const chipExploring =
  "rounded-lg border border-dashed border-hi/50 px-3 py-1.5 text-sm text-hi transition-all duration-200 hover:border-hi hover:bg-hi/10 hover:shadow-[0_0_18px_rgb(var(--hi)/0.25)]";

export function TechStack() {
  const { t } = useLang();

  return (
    <Section id="tech" title={t.tech.title} className="bg-bg2">
      <div className="grid gap-6 md:grid-cols-2">
        {techGroups.map((g, gi) => {
          const using = g.items.filter((i) => i.status === "using");
          const exploring = g.items.filter((i) => i.status === "exploring");
          const Icon = g.icon;
          const headingId = `tech-${g.id}`;

          return (
            <Reveal key={g.id} delay={gi * 0.06} className="h-full">
              <section
                aria-labelledby={headingId}
                className="group relative h-full overflow-hidden rounded-2xl border border-line bg-card p-6 transition-shadow hover:shadow-glow"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent2/60 to-transparent"
                />

                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-accent/10 text-accent2">
                    <Icon size={20} aria-hidden />
                  </span>
                  <h3 id={headingId} className="text-lg font-semibold">
                    {t.tech.groups[g.id]}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2">
                  {using.map((it) => (
                    <motion.li key={it.name} whileHover={{ y: -2 }} className={chip}>
                      {it.name}
                    </motion.li>
                  ))}
                </ul>

                {exploring.length > 0 && (
                  <div className="mt-5 border-t border-line pt-4">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-mute">
                      {t.tech.exploring}
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {exploring.map((it) => (
                        <motion.li key={it.name} whileHover={{ y: -2 }} className={chipExploring}>
                          {it.name}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}