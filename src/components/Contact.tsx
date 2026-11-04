"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Send, Mail, MessageCircle } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { useLang } from "@/lib/i18n/LanguageProvider";
import { Section } from "./Section";
import { SocialLinks } from "./SocialLinks";
import { site } from "@/data/site";

type Status = "idle" | "ok" | "error";
type FieldName = "name" | "email" | "subject" | "message";

const inputCls =
  "w-full min-h-12 rounded-xl border border-line bg-card px-4 py-3 text-ink placeholder:text-mute/60 focus:border-accent2";
const contactIcons = { email: Mail, whatsapp: MessageCircle, telegram: Send } as const;

// Puntos de la "explosión" (posiciones fijas, calculadas una sola vez)
const particles = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const dist = 72 + (i % 3) * 20;
  return {
    x: Math.cos(angle) * dist,
    y: Math.sin(angle) * dist,
    size: 6 + (i % 3) * 2,
    cls: i % 2 ? "bg-hi" : "bg-accent2",
  };
});

function SuccessPanel({ onReset }: { onReset: () => void }) {
  const { t } = useLang();
  const reduce = useReducedMotion();

  return (
    <motion.div
      role="status"
      initial={reduce ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="flex min-h-[26rem] flex-col items-center justify-center px-2 text-center"
    >
      <div className="relative grid h-28 w-28 place-items-center">
        {/* Ondas de luz */}
        {!reduce &&
          [0, 1].map((i) => (
            <motion.span
              key={i}
              aria-hidden
              className="absolute inset-0 rounded-full border border-hi"
              initial={{ scale: 1, opacity: 0.6 }}
              animate={{ scale: 2, opacity: 0 }}
              transition={{ duration: 1.4, delay: 0.55 + i * 0.45, ease: "easeOut" }}
            />
          ))}

        {/* Explosión de puntos */}
        {!reduce && (
          <div aria-hidden className="pointer-events-none absolute inset-0 grid place-items-center">
            {particles.map((p, i) => (
              <motion.span
                key={i}
                className={`absolute rounded-full ${p.cls}`}
                style={{ width: p.size, height: p.size }}
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: p.x, y: p.y, opacity: 0, scale: 0.3 }}
                transition={{ duration: 0.9, delay: 0.55, ease: "easeOut" }}
              />
            ))}
          </div>
        )}

        {/* Círculo + check que se dibujan */}
        <svg viewBox="0 0 96 96" className="relative h-28 w-28" aria-hidden>
          <motion.circle
            cx="48"
            cy="48"
            r="40"
            transform="rotate(-90 48 48)"
            style={{ fill: "rgb(var(--accent) / 0.14)", stroke: "rgb(var(--hi))" }}
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          />
          <motion.path
            d="M30 50 L43 63 L67 36"
            fill="none"
            style={{ stroke: "rgb(var(--ink))" }}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: reduce ? 1 : 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.45, delay: reduce ? 0 : 0.55, ease: "easeOut" }}
          />
        </svg>
      </div>

      <motion.h3
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: reduce ? 0 : 0.8 }}
        className="mt-6 text-2xl font-bold tracking-tight"
      >
        {t.contact.successTitle}
      </motion.h3>

      <motion.p
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: reduce ? 0 : 0.9 }}
        className="mt-2 max-w-xs text-mute"
      >
        {t.contact.successText}
      </motion.p>

      <motion.button
        type="button"
        onClick={onReset}
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: reduce ? 0 : 1 }}
        className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-full border border-line px-6 text-sm font-medium transition hover:border-hi hover:text-hi"
      >
        <Send size={16} aria-hidden />
        {t.contact.sendAnother}
      </motion.button>
    </motion.div>
  );
}

export function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactInput) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  };

  // Función normal (no componente) para que los inputs no se recreen al escribir.
  const renderField = (name: FieldName, label: string, area = false) => {
    const err = errors[name];
    const id = `c-${name}`;
    const common = {
      id,
      "aria-invalid": !!err,
      "aria-describedby": err ? `${id}-e` : undefined,
      className: inputCls,
      ...register(name),
    };
    return (
      <div>
        <label htmlFor={id} className="mb-2 block text-sm text-mute">{label}</label>
        {area ? (
          <textarea rows={5} {...common} />
        ) : (
          <input type={name === "email" ? "email" : "text"} autoComplete={name} {...common} />
        )}
        {err && (
          <p id={`${id}-e`} role="alert" className="mt-1.5 text-sm text-red-400">
            {t.contact.errors[name]}
          </p>
        )}
      </div>
    );
  };

  const contacts = site.contacts.filter((c) => c.href);

  return (
    <Section id="contact" title={t.contact.title}>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="max-w-md text-lg leading-relaxed text-mute">{t.contact.description}</p>

          {contacts.length > 0 && (
            <ul className="mt-8 space-y-3">
              {contacts.map((c) => {
                const Icon = contactIcons[c.id];
                return (
                  <li key={c.id}>
                    <a
                      href={c.href}
                      target={c.id === "email" ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center gap-3 rounded-xl border border-line bg-card px-4 transition hover:border-accent2"
                    >
                      <Icon size={18} className="text-accent2" aria-hidden />
                      <span>
                        <span className="block text-xs text-mute">{c.label}</span>
                        {c.value}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          <div className="mt-8"><SocialLinks /></div>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-line bg-card/60 p-6">
          <AnimatePresence mode="wait" initial={false}>
            {status === "ok" ? (
              <SuccessPanel key="ok" onReset={() => setStatus("idle")} />
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-5"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {renderField("name", t.contact.name)}
                  {renderField("email", t.contact.email)}
                </div>
                {renderField("subject", t.contact.subject)}
                {renderField("message", t.contact.message, true)}

                {/* Honeypot anti-spam: invisible para personas */}
                <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                  <label>Website<input tabIndex={-1} autoComplete="off" {...register("website")} /></label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-accent px-6 font-medium shadow-glow transition hover:bg-strong disabled:opacity-60"
                >
                  <Send size={18} aria-hidden />
                  {isSubmitting ? t.contact.sending : t.contact.send}
                </button>

                <div aria-live="polite">
                  {status === "error" && <p className="text-sm text-red-400">{t.contact.error}</p>}
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}