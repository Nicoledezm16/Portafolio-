"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { useLang } from "@/lib/i18n/LanguageProvider";

export function ProjectCard({ project }: { project: Project }) {
  const { t } = useLang();
  const copy = t.projects.items[project.id];
  return (
    <motion.article whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 24 }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-shadow hover:shadow-glow">
      <Image src={project.image} alt={`${copy.name} preview`} width={800} height={450} sizes="(min-width:1024px) 22rem, (min-width:640px) 45vw, 100vw" className="aspect-video w-full object-cover" />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold">{copy.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-mute">{copy.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies">
          {project.tags.map((tag) => (<li key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-mute">{tag}</li>))}
        </ul>
        <div className="mt-5 flex items-center gap-3">
          {project.live ? (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full bg-accent px-4 text-sm font-medium"><ExternalLink size={16} aria-hidden />{t.projects.live}</a>
          ) : (
            <span aria-disabled="true" title={t.projects.soon} className="inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-full border border-line px-4 text-sm text-mute/60"><ExternalLink size={16} aria-hidden />{t.projects.live}</span>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-4 text-sm transition hover:border-accent2"><Github size={16} aria-hidden />{t.projects.code}</a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
