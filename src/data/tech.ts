import { Code2, Palette, Wrench, Compass, type LucideIcon } from "lucide-react";

export type TechItem = { name: string; status: "using" | "exploring" };
export type TechGroup = {
  id: "frontend" | "styling" | "tools" | "interests";
  icon: LucideIcon;
  items: TechItem[];
};

// "using" = lo usas; "exploring" = lo estás aprendiendo.
// Next.js y Tailwind no están en tu CV: bórralos si no los usas.
export const techGroups: TechGroup[] = [
  {
    id: "frontend",
    icon: Code2,
    items: [
      { name: "HTML5", status: "using" },
      { name: "CSS", status: "using" },
      { name: "JavaScript", status: "using" },
      { name: "TypeScript", status: "using" },
      { name: "React", status: "using" },
      { name: "Vite", status: "using" },
      { name: "Next.js", status: "using" },
    ],
  },
  {
    id: "styling",
    icon: Palette,
    items: [
      { name: "Figma", status: "using" },
      { name: "Prototyping", status: "using" },
      { name: "Design Systems", status: "using" },
      { name: "Tailwind CSS", status: "using" },
    ],
  },
  {
    id: "tools",
    icon: Wrench,
    items: [
      { name: "Node.js", status: "using" },
      { name: "Supabase", status: "using" },
      { name: "REST APIs", status: "using" },
      { name: "Docker", status: "using" },
      { name: "Git & GitHub", status: "using" },
    ],
  },
  {
    id: "interests",
    icon: Compass,
    items: [
      { name: "Web3", status: "using" },
      { name: "Wallet integration", status: "using" },
      { name: "Solidity", status: "exploring" },
      { name: "Smart Contracts", status: "exploring" },
      { name: "Base", status: "exploring" },
    ],
  },
];