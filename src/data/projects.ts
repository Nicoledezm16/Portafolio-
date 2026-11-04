export type Project = {
  id: "healthRosca" | "realEstate" | "tanooki" | "tripleFirma" | "clientFlow";
  image: string;
  tags: string[];
  github?: string;
  live?: string; // solo si hay una URL real
};

export const projects: Project[] = [
  { id: "healthRosca", image: "/images/health-rosca.svg", tags: ["Next.js", "React", "Solidity", "Base", "Tailwind CSS"], github: "https://github.com/Nicolasledezma/v0-health-rosca-" },
  { id: "tripleFirma", image: "/images/triple-firma.png", tags: ["React", "Vite", "UI/UX"], live: "https://triplefirma.vercel.app/" },
  { id: "clientFlow", image: "/images/clientflow.png", tags: ["React", "JavaScript", "React Router", "CSS"], github: "https://github.com/Nicoledezm16/clientflow" },
  // Para volver a mostrarlos, quita los // y tendrás que tener sus imágenes:
  // { id: "realEstate", image: "/images/real-estate.svg", tags: ["WordPress", "Elementor", "UI/UX"] },
  // { id: "tanooki", image: "/images/tanooki.svg", tags: ["React", "Tailwind CSS"] },
];