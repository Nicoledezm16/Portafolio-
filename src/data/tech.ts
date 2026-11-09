import {
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiVite, SiNextdotjs,
  SiFigma, SiTailwindcss, SiNodedotjs, SiSupabase, SiDocker, SiGit, SiEthereum,
  SiSolidity,SiFramer,SiVercel
} from "react-icons/si";
import {
  Code2, Palette, Wrench, Compass, PenTool, LayoutGrid, Plug, Wallet, FileCode2, Layers,
} from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";

export type Skill = { name: string; icon: IconType | LucideIcon; color: string };

export const categories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Vite", icon: SiVite, color: "#A78BFA" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Framer Motion", icon: SiFramer, color: "#E879F9" },
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
    ],
  },
  {
    title: "Styling & design",
    icon: Palette,
    skills: [
      { name: "Figma", icon: SiFigma, color: "#F24E1E" },
      { name: "Prototyping", icon: PenTool, color: "#A78BFA" },
      { name: "Design Systems", icon: LayoutGrid, color: "#C4B5FD" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    title: "Tools & backend",
    icon: Wrench,
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#68A063" },
      { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
      { name: "REST APIs", icon: Plug, color: "#A78BFA" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
    ],
  },
  {
    title: "Web3",
    icon: Compass,
    skills: [
      { name: "Web3", icon: SiEthereum, color: "#8C8CFF" },
      { name: "Wallet integration", icon: Wallet, color: "#A78BFA" },
    ],
    exploring: [
      { name: "Solidity", icon: SiSolidity, color: "#7DD3FC" },
      { name: "Smart Contracts", icon: FileCode2, color: "#22D3EE" },
      { name: "Base", icon: Layers, color: "#0052FF" },
    ],
  },
];