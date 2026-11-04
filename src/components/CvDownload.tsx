"use client";
import { Download } from "lucide-react";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { Reveal } from "./Reveal";

const files = [
  { lang: "en", href: "/cv/Nicolas-Ledezma-CV-EN.pdf" },
  { lang: "es", href: "/cv/Nicolas-Ledezma-CV-ES.pdf" },
] as const;

export function CvDownload() {
  const { t } = useLang();
  return (
    <section id="cv" aria-labelledby="cv-h" className="border-t border-line py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 md:flex-row md:items-center md:justify-between">
        <Reveal>
          <div>
            <h2 id="cv-h" className="text-2xl font-bold">{t.cv.title}</h2>
            <p className="mt-2 max-w-md text-mute">{t.cv.description}</p>
          </div>
        </Reveal>
        <ul className="flex flex-wrap gap-3">
          {files.map((f) => (
            <li key={f.lang}>
              <a
                href={f.href}
                download
                className="inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-5 transition hover:border-accent2 hover:shadow-glow"
              >
                <Download size={18} aria-hidden />
                {t.cv[f.lang]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}