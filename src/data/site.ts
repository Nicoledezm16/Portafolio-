export const site = {
  name: "Nicolas Ledezma",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://portafolio-seven-rust-89.vercel.app",
  // Pega aquí tus URLs. Las vacías no se muestran.
  socials: [
    { id: "github", label: "GitHub", href: "https://github.com/Nicolasledezma" },
    { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/nicolasledezma/" },
    { id: "instagram", label: "Instagram", href: "https://www.instagram.com/nicolas.ledzz/" },
    { id: "x", label: "X", href: "" },
  ],
  // Medios de contacto directos. Los que tengan href vacío no se muestran.
  contacts: [
    { id: "email", label: "Email", value: "nicoledezma.dev@gmail.com", href: "mailto:nicoledezma.dev@gmail.com" },
    { id: "whatsapp", label: "WhatsApp", value: "", href: "" },
    { id: "telegram", label: "Telegram", value: "", href: "" },
  ],
  portrait: "/images/portrait.jpg",
} as const;
export type SocialId = (typeof site.socials)[number]["id"];