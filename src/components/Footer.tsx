"use client";
import { Logo } from "./logo";
import { SocialLinks } from "./SocialLinks";
import { useLang } from "@/lib/i18n/LanguageProvider";

const links = [
  ["home", "#home"],
  ["about", "#about"],
  ["projects", "#projects"],
  ["contact", "#contact"],
] as const;

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="border-t border-line bg-bg2 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center">
        <div className="space-y-3">
          <Logo/>
          <p className="text-sm text-mute">{t.footer.built}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-mute">
            {links.map(([k, h]) => (
              <li key={k}>
                <a href={h} className="hover:text-ink">
                  {t.nav[k]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <SocialLinks only={["github", "linkedin", "instagram"]} />
      </div>
      <p className="mx-auto mt-8 max-w-6xl px-5 text-xs text-mute">
        © {new Date().getFullYear()} Nicolas Ledezma. {t.footer.rights}
      </p>
    </footer>
  );
}