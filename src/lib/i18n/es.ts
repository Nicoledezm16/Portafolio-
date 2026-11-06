import type { Dictionary } from "./en";
export const es: Dictionary = {
  nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", blog: "Blog", contact: "Contacto", talk: "Hablemos", menu: "Abrir menú", close: "Cerrar menú", skip: "Saltar al contenido" },
  hero: {
    badge: "Desarrollador Frontend", title: "Hola, soy Nicolas Ledezma.", subtitle: "Frontend Developer - Product Designer",
    description: "Desarrollo experiencias digitales modernas, responsivas y centradas en el usuario, combinando código limpio con diseño intuitivo.",
    cta1: "Ver mis proyectos", cta2: "Contáctame", tagline: ["Código.", "Diseño.", "Innovación."], portraitAlt: "Retrato de Nicolas Ledezma",
  },
  about: {
    title: "Convirtiendo ideas en productos digitales.",
    description: "Soy desarrollador frontend y diseñador de producto. Diseño interfaces en Figma y las construyo con React, TypeScript y Next.js, para que ningún detalle se pierda entre el prototipo y la producción. He creado un CRM SaaS, una interfaz fintech para un hackathon y una plataforma de ahorro Web3, he mentoreado a estudiantes en programación y actualmente estoy aprendiendo Solidity y contratos inteligentes",
    interests: ["Desarrollo Frontend", "Diseño de producto (UI/UX)", "Web3 y Blockchain", "Mentoría de programación"],
  },
  tech: {
    title: "Tecnologías con las que trabajo.", exploring: "Explorando",
    groups: { frontend: "Frontend", styling: "Estilos y diseño", tools: "Herramientas y backend", interests: "Web3" },
  },
  projects: {
    title: "Algo de mi trabajo.", code: "Código", live: "Ver demo", soon: "Demo no disponible",
    items: {
      healthRosca: { name: "Health ROSCA", description: "Una plataforma Web3 de ahorro comunitario pensada para ayudar a las personas a acceder a apoyo financiero durante emergencias médicas." },
      realEstate: { name: "Sitio inmobiliario", description: "Un sitio web inmobiliario moderno enfocado en descubrir propiedades, presentarlas con profesionalismo y generar contactos." },
      tanooki: { name: "Tanooki Arena", description: "Un sitio web para una arena gamer que presenta experiencias de juego, equipos y servicios." },
      tripleFirma: { name: "Triple FIRMA", description: "Proyecto de hackathon: interfaz web responsive para una solución fintech que automatiza decisiones sobre facturas, con reglas de negocio y flujos de aprobación humana." },
      clientFlow: { name: "ClientFlow", description: "Un CRM SaaS para gestionar clientes, oportunidades, tareas y analítica, con un pipeline comercial Kanban con drag-and-drop." },
    },
  },
  blog: {
    title: "Ideas, tutoriales y experimentos.", demo: "Contenido de ejemplo", read: "Leer artículo",
    description: "Un espacio donde comparto lo que aprendo, construyo y exploro en tecnología.",
    items: {
      "modern-uis": "Cómo crear interfaces modernas con Next.js",
      tailwind: "Por qué me encanta Tailwind CSS",
      web3: "Primeros pasos en Web3",
    },
  },
  contact: {
    title: "¿Tienes una idea? Construyamos algo juntos.",
    description: "Estoy abierto a nuevas oportunidades, proyectos freelance, colaboraciones e ideas interesantes.",
    successTitle: "¡Mensaje enviado!", successText: "Gracias por escribirme. Te responderé lo antes posible.", sendAnother: "Enviar otro mensaje",
    name: "Nombre", email: "Correo electrónico", subject: "Asunto", message: "Mensaje", send: "Enviar mensaje", sending: "Enviando…",
    success: "Mensaje enviado. Te responderé pronto.", error: "No se pudo enviar el mensaje. Inténtalo de nuevo en un momento.",
    errors: { name: "Escribe tu nombre (2 caracteres o más).", email: "Escribe un correo válido.", subject: "Escribe un asunto (3 caracteres o más).", message: "Escribe un mensaje de al menos 10 caracteres." },
  },
  cv: { title: "Descarga mi CV", description: "Disponible en inglés y español.", en: "Inglés (PDF)", es: "Español (PDF)" },
  footer: { built: "Diseñado y desarrollado por Nicolas Ledezma.", rights: "Todos los derechos reservados." },
  lang: { label: "Idioma" },
};