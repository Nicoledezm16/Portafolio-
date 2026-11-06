"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useLang } from "@/lib/i18n/LanguageProvider";

const tiltSpring = { stiffness: 150, damping: 18, mass: 0.4 };
const handles = [[0, 0], [50, 0], [100, 0], [0, 50], [100, 50], [0, 100], [50, 100], [100, 100]];

// Cada línea del código: [clase de color, texto]
type Token = [string, string];
const snippet: Token[][] = [
  [["text-accent2", "const"], ["text-ink", " nico"], ["text-mute", " = {"]],
  [["text-mute", "  role: "], ["text-emerald-300", '"Frontend"'], ["text-mute", ","]],
  [["text-mute", "  ui: "], ["text-emerald-300", '"Figma"'], ["text-mute", ","]],
  [["text-mute", "  stack: ["], ["text-emerald-300", '"React"'], ["text-mute", ", "], ["text-emerald-300", '"TS"'], ["text-mute", "],"]],
  [["text-mute", "  learning: "], ["text-emerald-300", '"Solidity"'], ["text-mute", ","]],
  [["text-mute", "};"]],
];

// Posiciones (fracción del ancho/alto) por las que pasea el cursor cuando está solo
const spots = [[0.8, 1.0], [-0.04, 0.86], [0.62, -0.04]] as const;

export function PortraitTilt({ src, alt }: { src: string; alt: string }) {
  const { lang } = useLang();
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [showCode, setShowCode] = useState(false);
  const [hover, setHover] = useState(false);
  const [size, setSize] = useState({ w: 0, h: 0 });

  // Inclinación según el mouse (-0.5 a 0.5)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const flip = useSpring(0, { stiffness: 90, damping: 14 });
  const tiltY = useSpring(useTransform(x, [-0.5, 0.5], [-14, 14]), tiltSpring);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), tiltSpring);
  const rotateY = useTransform([flip, tiltY], (v: number[]) => v[0] + v[1]);

  // Reflejo que sigue al cursor
  const shineX = useTransform(x, [-0.5, 0.5], [20, 80]);
  const shineY = useTransform(y, [-0.5, 0.5], [20, 80]);
  const shine = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(168,85,247,0.38), transparent 55%)`;

  // Cursor estilo Figma
  const cx = useSpring(0, { stiffness: 110, damping: 15 });
  const cy = useSpring(0, { stiffness: 110, damping: 15 });

  const t =
    lang === "es"
      ? { design: "Diseño", code: "Código", view: "Vista" }
      : { design: "Design", code: "Code", view: "View" };

  // Mide el tamaño real para la etiqueta "304 × 304"
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setSize({ w: Math.round(el.offsetWidth), h: Math.round(el.offsetHeight) });
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Giro Diseño <-> Código
  useEffect(() => {
    if (!reduce) flip.set(showCode ? 180 : 0);
  }, [showCode, reduce, flip]);

  // El cursor pasea solo cuando el mouse no está encima
  useEffect(() => {
    if (hover || size.w === 0) return;
    let i = 0;
    const go = () => {
      const [fx, fy] = spots[i % spots.length];
      cx.set(fx * size.w);
      cy.set(fy * size.h);
      i += 1;
    };
    go();
    if (reduce) return;
    const id = setInterval(go, 3200);
    return () => clearInterval(id);
  }, [hover, size.w, size.h, reduce, cx, cy]);

  const onPointerEnter = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse") setHover(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    if (!reduce) {
      x.set(px / r.width - 0.5);
      y.set(py / r.height - 0.5);
    }
    cx.set(px + 10);
    cy.set(py + 10);
  };
  const onPointerLeave = () => {
    setHover(false);
    x.set(0);
    y.set(0);
  };

  const hidden = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" } as const;
  const frontStyle = reduce ? { opacity: showCode ? 0 : 1 } : hidden;
  const backStyle = reduce ? { opacity: showCode ? 1 : 0 } : { ...hidden, transform: "rotateY(180deg)" };

  return (
    <div>
      <motion.div
        ref={ref}
        className="relative"
        onPointerEnter={onPointerEnter}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        animate={reduce ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Brillo de fondo */}
        <div aria-hidden className="absolute inset-0 -z-10 rounded-full bg-accent/30 blur-3xl" />

        {/* Marco de selección + tiradores */}
        <div
          aria-hidden
          className={`pointer-events-none absolute -inset-3 z-10 border transition-all duration-300 ${
            hover || showCode ? "border-accent2 opacity-100" : "border-accent2/40 opacity-70"
          }`}
        >
          {handles.map(([lx, ly]) => (
            <span
              key={`${lx}-${ly}`}
              style={{ left: `${lx}%`, top: `${ly}%` }}
              className={`absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 border border-accent2 bg-bg transition duration-300 ${
                hover || showCode ? "scale-100 opacity-100" : "scale-75 opacity-60"
              }`}
            />
          ))}
        </div>

        {/* Foto / código con inclinación y giro 3D */}
        <div style={{ perspective: 900 }}>
          <motion.div
            onClick={() => setShowCode((v) => !v)}
            style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
            whileHover={reduce ? undefined : { scale: 1.03 }}
            whileTap={reduce ? undefined : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative cursor-pointer"
          >
            {/* Cara frontal: tu foto */}
            <div
              style={frontStyle}
              aria-hidden={showCode}
              className="relative overflow-hidden rounded-full border-2 border-accent2/40 bg-card shadow-glow"
            >
              <Image
                src={src}
                alt={alt}
                width={720}
                height={1280}
                priority
                sizes="(min-width:1024px) 19rem, 17rem"
                className="aspect-square w-full object-cover object-[50%_42%]"
              />
              {!reduce && (
                <motion.div
                  aria-hidden
                  style={{ background: shine }}
                  className="pointer-events-none absolute inset-0 mix-blend-screen"
                />
              )}
            </div>

            {/* Cara trasera: código */}
            <div
              style={backStyle}
              aria-hidden={!showCode}
              className="absolute inset-0 grid place-items-center overflow-hidden rounded-full border-2 border-accent2/40 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.28),#101019_70%)] shadow-glow"
            >
              <code className="block whitespace-pre text-left font-mono text-[11px] leading-5 sm:text-xs sm:leading-6">
                {snippet.map((line, i) => (
                  <span key={i} className="block">
                    {line.map(([cls, text], j) => (
                      <span key={j} className={cls}>{text}</span>
                    ))}
                  </span>
                ))}
              </code>
            </div>
          </motion.div>
        </div>

        {/* Etiqueta de tamaño, como en Figma */}
        {size.w > 0 && (
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[calc(100%+1.1rem)] -translate-x-1/2 whitespace-nowrap rounded bg-accent px-2 py-0.5 font-mono text-[11px] text-ink"
          >
            {size.w} × {size.h}
          </span>
        )}

        {/* Cursor con tu nombre */}
        <motion.div
          aria-hidden
          style={{ x: cx, y: cy }}
          className="pointer-events-none absolute left-0 top-0 z-20 flex items-start gap-1"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path d="M4 2l16 8-7 2-2 7L4 2z" fill="#A855F7" stroke="#050507" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
          <span className="mt-3 whitespace-nowrap rounded-md bg-accent px-2 py-0.5 text-xs font-medium text-ink shadow-glow">
            {showCode ? "Backend" : "Frontend"}
          </span>
        </motion.div>
      </motion.div>

      {/* Interruptor accesible Diseño / Código */}
      <div role="group" aria-label={t.view} className="mx-auto mt-14 flex w-fit rounded-full border border-line p-0.5 text-xs">
        {([false, true] as const).map((isCode) => (
          <button
            key={String(isCode)}
            type="button"
            onClick={() => setShowCode(isCode)}
            aria-pressed={showCode === isCode}
            className={`min-h-9 rounded-full px-4 font-medium transition ${
              showCode === isCode ? "bg-accent text-ink" : "text-mute hover:text-ink"
            }`}
          >
            {isCode ? t.code : t.design}
          </button>
        ))}
      </div>
    </div>
  );
}