"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { useLang, type Lang } from "@/lib/i18n/LanguageProvider";

const links = [["home", "#home"], ["about", "#about"], ["projects", "#projects"], ["contact", "#contact"]] as const;

function LangSwitch() {
  const { lang, setLang, t } = useLang();
  return (
    <div role="group" aria-label={t.lang.label} className="flex rounded-full border border-line p-0.5 text-xs">
      {(["en", "es"] as Lang[]).map((l) => (
        <button key={l} onClick={() => setLang(l)} aria-pressed={lang === l}
          className={`min-h-8 rounded-full px-3 font-medium transition ${lang === l ? "bg-accent text-ink" : "text-mute hover:text-ink"}`}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function Navbar() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/70 backdrop-blur-xl">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-accent focus:px-3 focus:py-2">{t.nav.skip}</a>
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <a href="#home" aria-label="Nicolas Ledezma — home">< Logo /></a>
        <ul className="hidden items-center gap-7 text-sm text-mute md:flex">
          {links.map(([k, href]) => (<li key={k}><a href={href} className="transition hover:text-ink">{t.nav[k]}</a></li>))}
        </ul>
        <div className="flex items-center gap-3">
          <LangSwitch />
          <button className="grid h-11 w-11 place-items-center rounded-lg border border-line md:hidden" aria-expanded={open} aria-controls="mobile-menu"
            aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-bg2 px-5 py-3 md:hidden">
          {links.map(([k, href]) => (
            <li key={k}><a href={href} onClick={() => setOpen(false)} className="block py-3 text-lg text-ink">{t.nav[k]}</a></li>
          ))}
        </ul>
      )}
    </header>
  );
}
