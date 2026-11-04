"use client";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { Section } from "./Section";
import { Reveal } from "./Reveal";

type Row = { name: string; place: string; period: string };

function InfoList({ title, rows }: { title: string; rows: Row[] }) {
  return (
    <div>
      <h3 className="mb-4 text-sm font-medium text-mute">{title}</h3>
      <ul className="space-y-3">
        {rows.map((r) => (
          <li key={r.name} className="rounded-xl border border-line bg-card px-4 py-3">
            <p className="font-medium">{r.name}</p>
            <p className="text-sm text-mute">{[r.place, r.period].filter(Boolean).join(" · ")}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Experience() {
  const { t } = useLang();
  const e = t.experience;
  return (
    <Section id="experience" title={e.title} className="bg-bg2">
      <ol className="space-y-6">
        {e.items.map((it, i) => (
          <li key={it.org}>
            <Reveal delay={i * 0.06}>
              <article className="rounded-2xl border border-line bg-card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="text-lg font-semibold">{it.org}</h3>
                  <p className="text-sm text-accent2">{it.period}</p>
                </div>
                <p className="mt-1 text-mute">{it.role}</p>
                <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-mute marker:text-accent2">
                  {it.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-8 md:grid-cols-2">
        <Reveal><InfoList title={e.education} rows={e.studies} /></Reveal>
        <Reveal delay={0.06}><InfoList title={e.courses} rows={e.courseList} /></Reveal>
      </div>
    </Section>
  );
}