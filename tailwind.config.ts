import type { Config } from "tailwindcss";

// Los colores viven en globals.css como variables RGB.
const c = (v: string) => `rgb(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: c("bg"),
        bg2: c("bg2"),
        card: c("card"),
        accent: c("accent"),
        accent2: c("accent2"),
        strong: c("strong"),
        hi: c("hi"),
        ink: c("ink"),
        mute: c("mute"),
      },
      borderColor: { line: "rgb(var(--accent2) / 0.18)" },
      boxShadow: { glow: "0 0 32px rgb(var(--accent) / 0.35)" },
      fontFamily: { sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;