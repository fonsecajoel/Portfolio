export type ProjectCategory = "fullstack" | "react" | "astro-next";

export interface GitHubProject {
  name: string;
  title: string;
  lang: string;
  kind: string;
  desc: string;
  stack: string[];
  category: ProjectCategory;
  demo: string | null;
}

export const GITHUB_USER = "fonsecajoel";
export const repoLink = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const LANGS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Astro: "#ff5a03",
  Next: "#9aa7bd",
};

export const PROJECTS: GitHubProject[] = [
  {
    name: "AssitenciaTecnica",
    title: "Assistência Técnica — Plataforma de Gestão",
    lang: "TypeScript",
    kind: "Full-Stack · Monorepo",
    desc: "Monorepo Turborepo + pnpm com <strong>apps backend, backoffice e mobile</strong> para equipas técnicas, packages partilhados e Docker Compose.",
    stack: ["Turborepo", "pnpm", "NestJS", "React", "Expo", "Docker"],
    category: "fullstack",
    demo: null,
  },
  {
    name: "AppCasa",
    title: "AppCasa — Gestão de Propriedades & IA",
    lang: "TypeScript",
    kind: "Full-Stack · AI",
    desc: "Gestão de propriedades, inquilinos e finanças com <strong>assistente de IA (Gemini)</strong>, painéis Recharts, Firebase e API Express.",
    stack: ["React", "Vite", "shadcn/ui", "Firebase", "Express", "Gemini AI"],
    category: "fullstack",
    demo: "https://app-casa-seven.vercel.app",
  },
  {
    name: "boasaude",
    title: "Boa Saúde — E-commerce de Saúde",
    lang: "HTML",
    kind: "Web · E-commerce",
    desc: "Loja multi-marca de produtos de saúde com catálogo, páginas de marca, <strong>checkout, login e blog</strong> — schema SQL próprio.",
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
    category: "fullstack",
    demo: "https://boasaude.vercel.app",
  },
  {
    name: "website12",
    title: "Aela Store — Loja Online (Next.js)",
    lang: "Next",
    kind: "Web · Next.js",
    desc: "Loja online completa construída com <strong>Next.js, TypeScript e TailwindCSS</strong>.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    category: "astro-next",
    demo: "https://website12-theta.vercel.app",
  },
  {
    name: "Viagem",
    title: "Viagem — Cruzeiros em Espanha",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Plataforma de viagens e cruzeiros com itinerários, em <strong>React + Vite + Tailwind + React-Bootstrap</strong>.",
    stack: ["React", "Vite", "TailwindCSS", "Bootstrap"],
    category: "react",
    demo: "https://viagem-omega.vercel.app",
  },
  {
    name: "maria",
    title: "Maria — Website com 3D",
    lang: "TypeScript",
    kind: "Web · React",
    desc: "Website imersivo com <strong>experiência 3D (Three.js)</strong> e animações ricas.",
    stack: ["React", "TypeScript", "Three.js", "TailwindCSS"],
    category: "react",
    demo: "https://maria-sooty.vercel.app",
  },
  {
    name: "APIJaime",
    title: "API Jaime — Dashboard de Gestão",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Dashboard web de <strong>gestão e monitorização de API</strong>, deployado na Vercel.",
    stack: ["React", "Vite", "TailwindCSS", "Vercel"],
    category: "react",
    demo: "https://api-jaime.vercel.app",
  },
  {
    name: "appcarla",
    title: "App Carla — Gestão Clínica",
    lang: "JavaScript",
    kind: "Web · Saúde",
    desc: "Aplicação de <strong>gestão clínica</strong> — agenda e pacientes — em React com React Router.",
    stack: ["React", "Vite", "React Router"],
    category: "react",
    demo: "https://appcarla.vercel.app",
  },
  {
    name: "Assul-website",
    title: "Assul — Website + Firebase",
    lang: "TypeScript",
    kind: "Web · Full-Stack",
    desc: "Website institucional com <strong>Firebase (auth + Firestore) e API Express</strong>.",
    stack: ["React", "Vite", "Firebase", "Express", "TailwindCSS"],
    category: "fullstack",
    demo: "https://assul-website.vercel.app",
  },
  {
    name: "PaulinhoWebsite",
    title: "Paulinho — Website com shadcn/ui",
    lang: "TypeScript",
    kind: "Web · React",
    desc: "Website moderno construído sobre <strong>shadcn/ui, Tailwind e Express</strong>.",
    stack: ["React", "Vite", "shadcn/ui", "Express"],
    category: "react",
    demo: "https://paulinho-website.vercel.app",
  },
  {
    name: "websitever",
    title: "Santo Salto — Website Astro",
    lang: "Astro",
    kind: "Web · Astro",
    desc: "Website institucional de marca construído com <strong>Astro + TailwindCSS</strong>.",
    stack: ["Astro", "TailwindCSS"],
    category: "astro-next",
    demo: "https://websitever.vercel.app",
  },
  {
    name: "4ubarcelona",
    title: "4U Barcelona — Programa 4U",
    lang: "Astro",
    kind: "Web · Astro",
    desc: "Website do programa <strong>4U em Barcelona</strong>, estático e rápido com Astro.",
    stack: ["Astro", "TailwindCSS"],
    category: "astro-next",
    demo: "https://4ubarcelona.vercel.app",
  },
  {
    name: "voltel",
    title: "VölTel — Landing Page",
    lang: "Astro",
    kind: "Web · Astro",
    desc: "Landing page de marca em <strong>Astro + TailwindCSS</strong>.",
    stack: ["Astro", "TailwindCSS"],
    category: "astro-next",
    demo: "https://voltel.vercel.app",
  },
  {
    name: "website22",
    title: "Agência Web — Website com 3D",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Website de agência com <strong>animações 3D (Three.js)</strong> em React.",
    stack: ["React", "Vite", "Three.js"],
    category: "react",
    demo: "https://website22-xi.vercel.app",
  },
  {
    name: "manuelpowerpoint",
    title: "Manuel PowerPoint — Website",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Website pessoal desenvolvido em <strong>React + Vite + Tailwind</strong>.",
    stack: ["React", "Vite", "TailwindCSS"],
    category: "react",
    demo: "https://manuelpowerpoint.vercel.app",
  },
];

export const FILTERS = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "react", label: "React" },
  { id: "astro-next", label: "Astro / Next" },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];

export interface SkillGroup {
  title: string;
  color: string;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  { title: "Frontend", color: "#61dafb", items: ["React", "React Native", "Next.js", "Expo", "TypeScript", "JavaScript", "TailwindCSS", "React Router"] },
  { title: "Backend & Dados", color: "#e0234e", items: ["NestJS", "Node.js", "Prisma", "PostgreSQL", "Redis", "ASP.NET", ".NET", "Java", "REST APIs"] },
  { title: "Plataforma & Arquitetura", color: "#8b5cf6", items: ["Turborepo", "pnpm workspaces", "Domain-Driven Design", "Shared Packages", "E2E Testing"] },
  { title: "DevOps & Cloud", color: "#22d3ee", items: ["Docker", "GitHub Actions", "AWS", "Azure", "Grafana", "Git", "VMware", "JIRA", "Vercel"] },
  { title: "Práticas", color: "#34d399", items: ["RBAC", "JWT Auth", "System Design", "Observability", "Agile", "Technical Documentation"] },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  flags?: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: "Software Engineer · DevOps & Systems Architect",
    company: "DoutorVida Seguros e Créditos · Leiria, Portugal",
    period: "Abr 2026 — Presente",
    flags: "6 apps · 8 packages · 48+ módulos backend · 14+ serviços",
    bullets: [
      "<strong>Arquitetura & entrega:</strong> sistema desenhado num monorepo TypeScript multi-app — API NestJS, processos worker/eventos, backoffice React e packages de domínio/API partilhados.",
      "<strong>Backoffice & CRM:</strong> lifecycle de clientes, pipelines de leads, fluxos documentais e CRM embebido usados diariamente pelas equipas.",
      "<strong>Inteligência documental:</strong> pipeline OCR que extrai dados de documentos, junta scans em PDFs verificados e reduz passos manuais em contexto regulado.",
      "<strong>DevOps & fiabilidade:</strong> pipelines Docker (dev → staging → prod), CI/CD GitHub Actions e observabilidade Grafana.",
      "<strong>Segurança:</strong> RBAC em 48+ módulos, boundaries com JWT e histórico de auditoria.",
    ],
  },
  {
    role: "Software Developer (Freelance)",
    company: "Self-employed · Remote",
    period: "Mai 2022 — Presente",
    bullets: [
      "Aplicações web e sistemas de gestão para PMEs em saúde, eventos e serviços profissionais.",
      "Ciclo de vida completo: requisitos, desenho de sistema, desenvolvimento, testes e entrega.",
      "React, Next.js, Node.js, TypeScript, PostgreSQL e deploys cloud-hosted.",
    ],
  },
  {
    role: "Junior Programmer",
    company: "Autoridade Tributária e Aduaneira · Lisboa",
    period: "Mai 2024 — Nov 2024",
    bullets: [
      "Sistemas internos e plataformas web de apoio a operações fiscais à escala nacional.",
      "Serviços backend e integrações de base de dados em ambiente regulado e de alta exigência.",
      "Workflows Git e práticas DevOps em equipa de engenharia do setor público.",
    ],
  },
  {
    role: "Software Developer",
    company: "InforTucano · Oeiras, Portugal",
    period: "Ago 2023 — Jan 2024",
    bullets: [
      "Plataformas web empresariais e ferramentas internas para operações de negócio.",
      "Lógica backend, camadas de base de dados e integração frontend em ambiente ágil.",
    ],
  },
  {
    role: "Computer Technician",
    company: "Fractalia · Madrid, Espanha (Remote)",
    period: "Mar 2022 — Jun 2023",
    bullets: [
      "Resolução de incidentes em microcomputação, redes e gestão de sistemas para clientes empresariais.",
      "Workflows de ticketing e resolução orientada a SLA — a base que mais tarde suportou o trabalho em DevOps.",
    ],
  },
];

export interface Cert {
  org: string;
  title: string;
  date: string;
}

export const CERTS: Cert[] = [
  { org: "Harvard University", title: "CS50 — Introdução à Cybersecurity", date: "Jul 2025" },
  { org: "Harvard University", title: "CS50 — Introdução à IA com Python", date: "Mai 2024" },
  { org: "Harvard University", title: "CS50 — Introdução à Ciência da Computação", date: "Jan 2023" },
  { org: "Bootcamp online", title: "The Web Developer Bootcamp", date: "2024" },
  { org: "Udemy", title: "RPA com UiPath & SQL Server", date: "Jan 2024" },
];

export const MARQUEE_ITEMS = [
  "TypeScript", "NestJS", "React", "Next.js", "React Native", "Expo",
  "Node.js", "PostgreSQL", "Redis", "Prisma", "Supabase", "Docker",
  "GitHub Actions", "Grafana", "AWS", "Azure", "Turborepo", "pnpm",
  "TailwindCSS", "Vercel",
];

export const BORA_SCREENS = [
  { src: asset("assets/img/bora/06-descobrir.png"), alt: "Bora — ecrã Descobrir" },
  { src: asset("assets/img/bora/01-mapa.png"), alt: "Bora — mapa social" },
  { src: asset("assets/img/bora/03-vilamoura.png"), alt: "Bora — mapa Vilamoura" },
  { src: asset("assets/img/bora/05-evento.png"), alt: "Bora — página de evento" },
  { src: asset("assets/img/bora/10-momentos.png"), alt: "Bora — momentos" },
  { src: asset("assets/img/bora/23-inbox-conversas.png"), alt: "Bora — chat" },
];

export const CONTACT = {
  email: "fonsecaajoel@gmail.com",
  phone: "+351 937 754 496",
  phoneHref: "+351937754496",
  location: "Portugal",
  github: "https://github.com/fonsecajoel",
  linkedin: "https://www.linkedin.com/in/joel-fonseca-aa58201bb/",
  cvUrl: asset("assets/cv/Joel_Fonseca_CV.pdf"),
};