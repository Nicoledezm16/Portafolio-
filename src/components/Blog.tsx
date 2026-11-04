"use client";
import Image from "next/image";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { posts } from "@/data/posts";
import { Section } from "./Section";
import { Reveal } from "./Reveal";
export function Blog() {
  const { t, lang } = useLang();
  const fmt = new Intl.DateTimeFormat(lang === "es" ? "es-ES" : "en-US", { dateStyle: "medium", timeZone: "UTC" });
  return (
    <Section id="blog" title={t.blog.title} className="bg-bg2">
      <p className="-mt-6 mb-8 max-w-xl text-mute">{t.blog.description}</p>
      <ul className="grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={i * 0.07} className="h-full">
              <article className="h-full overflow-hidden rounded-2xl border border-line bg-card">
                <Image src={p.image} alt="" width={640} height={360} sizes="(min-width:768px) 30vw, 100vw" className="aspect-video w-full object-cover" />
                <div className="p-5">
                  <div className="flex items-center justify-between text-xs text-mute">
                    <time dateTime={p.date}>{fmt.format(new Date(p.date))}</time>
                    {p.demo && <span className="rounded-full bg-accent/20 px-2 py-0.5 text-accent2">{t.blog.demo}</span>}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{t.blog.items[p.slug as keyof typeof t.blog.items]}</h3>
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
