"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";

export function Logo() {
  const reduce = useReducedMotion();

  const draw: Variants = {
    hidden: { pathLength: reduce ? 1 : 0, opacity: reduce ? 1 : 0 },
    show: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  const left: Variants = { ...draw, hover: { x: reduce ? 0 : -2 } };
  const right: Variants = { ...draw, hover: { x: reduce ? 0 : 2 } };

  return (
    <motion.span
      className="flex items-center gap-3"
      initial="hidden"
      animate="show"
      whileHover="hover"
    >
      <svg
        viewBox="4 16 56 32"
        width="44"
        height="25"
        aria-hidden="true"
        className="shrink-0 overflow-visible text-ink"
      >
        <motion.path
          d="M17 20 L6 32 L17 44"
          fill="none"
          stroke="#A855F7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={0}
          variants={left}
        />
        <motion.path
          d="M47 20 L58 32 L47 44"
          fill="none"
          stroke="#A855F7"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={1}
          variants={right}
        />
        <motion.path
          d="M26 42 V22 L38 42 V22"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          custom={2}
          variants={draw}
        />
      </svg>
      <motion.span
        className="font-semibold tracking-tight"
        variants={{
          hidden: { opacity: reduce ? 1 : 0, x: reduce ? 0 : -6 },
          show: { opacity: 1, x: 0, transition: { duration: 0.4, delay: 0.6 } },
        }}
      >
        Nicolas Ledezma
      </motion.span>
    </motion.span>
  );
}