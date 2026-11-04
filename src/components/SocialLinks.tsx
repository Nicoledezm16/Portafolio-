import { Github, Linkedin, Instagram } from "lucide-react";
import { site } from "@/data/site";

function XIcon({ size = 20 }: { size?: number }) {
  return (<svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.5 8.6L23 22h-6.8l-5.3-6.9L4.8 22H1.7l8-9.2L1.3 2h7l4.8 6.3L18.9 2Zm-1.2 18h1.9L6.7 3.9H4.7L17.7 20Z" /></svg>);
}
const icons = { github: Github, linkedin: Linkedin, instagram: Instagram, x: XIcon } as const;

export function SocialLinks({ only }: { only?: string[] }) {
  const list = site.socials.filter((s) => s.href && (!only || only.includes(s.id)));
  return (
    <ul className="flex items-center gap-2">
      {list.map((s) => {
        const Icon = icons[s.id];
        return (
          <li key={s.id}>
            <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
              className="grid h-11 w-11 place-items-center rounded-full border border-line text-mute transition hover:border-accent2 hover:text-ink hover:shadow-glow">
              <Icon size={20} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
