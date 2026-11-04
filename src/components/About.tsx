"use client";
import { MonitorSmartphone, PenTool, Link2, Puzzle, BookOpen } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
const icons = [MonitorSmartphone, PenTool, Link2, Puzzle, BookOpen];
export function About() {
  const { t } = useLang();
  return (
    <Section id="about" title={t.about.title}>
      <div className="grid gap-10 md:grid-cols-2">
        <Reveal><p className="max-w-prose text-lg leading-relaxed text-mute">{t.about.description}</p></Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-3">
            {t.about.interests.map((label, i) => {
              const Icon = icons[i];
              return (
                <li key={label} className="flex items-center gap-4 rounded-xl border border-line bg-card px-4 py-3">
                  <Icon size={20} className="text-accent2" aria-hidden /><span>{label}</span>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
