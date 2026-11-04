"use client";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { projects } from "@/data/projects";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
export function Projects() {
  const { t } = useLang();
  return (
    <Section id="projects" title={t.projects.title}>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (<li key={p.id}><Reveal delay={i * 0.07} className="h-full"><ProjectCard project={p} /></Reveal></li>))}
      </ul>
    </Section>
  );
}
