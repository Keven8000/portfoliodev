import {Code2, Server, Bot } from "lucide-react";


export const educationData = [
  {
    course: "CS50: Introduction to Computer Science",
    institution: "Harvard University",
  },
  {
    course: "Desenvolvimento Web Full Stack",
    institution: "B7Web",
  },
  {
    course: "UX/UI Design",
    institution: "Google / Coursera",
  },
  {
    course: "Fundamentos (Python, JS, SQL, HTML, CSS)",
    institution: "Curso em Vídeo (Prof. Gustavo Guanabara)",
  },
  {
    course: "Análise e Desenvolvimento de Sistemas (1 ano cursado)",
    institution: "UNINASSAU",
  },
];

export const techCategories = [
  {
    title: "Frontend & E-commerce",
    badge: "Profissional",
    icon: Code2,
    items: [
      "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", 
      "HTML", "CSS", "Eleventy", "Liquid", "E-commerces"
    ]
  },
  {
    title: "Backend & Infraestrutura",
    badge: "Profissional",
    icon: Server,
    items: ["Node.js", "APIs REST", "Git", "GitHub", "Vercel", "Netlify"]
  },
  {
    title: "Laboratório & Automação",
    badge: "Projetos Pessoais",
    icon: Bot,
    items: ["Docker", "n8n", "Evolution API", "Chatwoot", "Webhooks", "TablePlus"]
  }
];