"use client";
import { motion } from "framer-motion";
import { categories, type Skill } from "@/data/tech";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04 } },
};
const item = {
  hidden: { opacity: 0, y: 8, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.3 } },
};

function Chip({ skill, dashed = false }: { skill: Skill; dashed?: boolean }) {
  const Icon = skill.icon;
  return (
    <motion.li
      variants={item}
      whileHover={{ y: -3 }}
      style={{ "--c": skill.color } as React.CSSProperties}
      className={`group relative flex items-center gap-2 rounded-lg border px-3 py-1.5 text-sm
        transition-all duration-300 cursor-default
        ${dashed
          ? "border-dashed border-cyan-400/40 bg-cyan-400/5 text-cyan-300"
          : "border-white/10 bg-white/[0.03] text-zinc-200"}
        hover:border-[var(--c)]/60 hover:bg-[var(--c)]/10
        hover:shadow-[0_0_20px_-4px_var(--c)]`}
    >
      <Icon
        size={16}
        className="shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ color: skill.color }}
      />
      {skill.name}
    </motion.li>
  );
}

  export function TechStack() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="grid gap-5 md:grid-cols-2">
        {categories.map((cat, i) => {
          const CatIcon = cat.icon;
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-white/10
                bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-6 backdrop-blur
                transition-colors duration-300 hover:border-violet-400/40"
            >
              {/* línea de luz superior */}
              <div className="pointer-events-none absolute inset-x-8 top-0 h-px
                bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />
              {/* glow de fondo */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40
                rounded-full bg-violet-500/10 blur-3xl" />

              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl
                  border border-violet-400/30 bg-violet-500/15 text-violet-300">
                  <CatIcon size={18} />
                </div>
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>

              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((s) => <Chip key={s.name} skill={s} />)}
              </motion.ul>

              {cat.exploring && (
                <div className="mt-5 border-t border-white/10 pt-4">
                  <p className="mb-3 text-[11px] font-medium uppercase tracking-widest text-zinc-500">
                    Exploring
                  </p>
                  <motion.ul
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex flex-wrap gap-2"
                  >
                    {cat.exploring.map((s) => <Chip key={s.name} skill={s} dashed />)}
                  </motion.ul>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}