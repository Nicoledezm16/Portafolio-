export const en = {
  nav: { home: "Home", about: "About", projects: "Projects", blog: "Blog", contact: "Contact", talk: "Let's talk", menu: "Open menu", close: "Close menu", skip: "Skip to content" },
  hero: {
    badge: "Frontend Developer", title: "Hi, I'm Nicolas Ledezma.", subtitle: "Frontend Developer & UI/UX Enthusiast.",
    description: "I build modern, responsive and user-focused digital experiences, combining clean code with thoughtful design.",
    cta1: "View My Projects", cta2: "Contact Me", tagline: ["Code.", "Design.", "Innovate."], portraitAlt: "Portrait of Nicolas Ledezma",
  },
  about: {
    title: "Turning ideas into digital products.",
    description: "I'm a frontend developer and product designer. I build responsive interfaces with React and TypeScript, and I design and prototype them in Figma. I've collaborated on digital projects, mentored students in programming and shared what I learn with tech communities.",
    interests: ["Frontend Development", "Product Design (UI/UX)", "Web3 & Blockchain", "Programming mentoring"],
  },
  tech: {
    title: "Technologies I work with.", exploring: "Exploring",
    groups: { frontend: "Frontend", styling: "Styling & design", tools: "Tools & backend", interests: "Web3" },
  },
  projects: {
    title: "Some of my work.", code: "Code", live: "Live demo", soon: "Live demo unavailable",
    items: {
      healthRosca: { name: "Health ROSCA", description: "A Web3 community savings platform designed to help people access financial support during medical emergencies." },
      realEstate: { name: "Real Estate Website", description: "A modern real estate website focused on property discovery, professional presentation and lead generation." },
      tanooki: { name: "Tanooki Arena", description: "A gaming arena website showcasing gaming experiences, equipment and services." },
      tripleFirma: { name: "Triple FIRMA", description: "Hackathon project: a responsive web interface for a fintech solution that automates invoice decisions, with business rules and human-approval flows." },
      clientFlow: { name: "ClientFlow", description: "A CRM SaaS to manage clients, opportunities, tasks and analytics, with a drag-and-drop Kanban sales pipeline." },
    },
  },
  blog: {
    title: "Thoughts, tutorials and experiments.", demo: "Demo content", read: "Read article",
    description: "A space where I share what I'm learning, building and exploring in tech.",
    items: {
      "modern-uis": "Building modern UIs with Next.js",
      tailwind: "Why I love Tailwind CSS",
      web3: "Getting started with Web3",
    },
  },
  contact: {
    title: "Have an idea? Let's build something together.",
    description: "I'm open to new opportunities, freelance projects, collaborations and interesting ideas.",
    successTitle: "Message sent!", successText: "Thanks for reaching out. I'll get back to you as soon as I can.", sendAnother: "Send another message",
    name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send message", sending: "Sending…",
    success: "Message sent. I'll get back to you soon.", error: "The message could not be sent. Please try again in a moment.",
    errors: { name: "Enter your name (2 characters or more).", email: "Enter a valid email address.", subject: "Enter a subject (3 characters or more).", message: "Write a message of at least 10 characters." },
  },
  cv: { title: "Download my CV", description: "Available in English and Spanish.", en: "English (PDF)", es: "Spanish (PDF)" },
  footer: { built: "Designed & built by Nicolas Ledezma.", rights: "All rights reserved." },
  lang: { label: "Language" },
};
export type Dictionary = typeof en;