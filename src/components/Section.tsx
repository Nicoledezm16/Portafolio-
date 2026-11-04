import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Section({ id, title, children, className = "" }: { id: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className={`border-t border-line py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <span aria-hidden className="mb-5 block h-[3px] w-12 rounded-full bg-hi" />
          <h2 id={`${id}-h`} className="max-w-2xl text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
        </Reveal>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}