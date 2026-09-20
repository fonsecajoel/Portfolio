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
    title: "Assistência Técnica — Management Platform",
    lang: "TypeScript",
    kind: "Full-Stack · Monorepo",
    desc: "Turborepo + pnpm monorepo with <strong>backend, backoffice and mobile apps</strong> for technical teams, shared packages and Docker Compose.",
    stack: ["Turborepo", "pnpm", "NestJS", "React", "Expo", "Docker"],
    category: "fullstack",
    demo: null,
  },
  {
    name: "AppCasa",
    title: "AppCasa — Property Management & AI",
    lang: "TypeScript",
    kind: "Full-Stack · AI",
    desc: "Property, tenant and finance management with a <strong>Gemini AI assistant</strong>, Recharts dashboards, Firebase and an Express API.",
    stack: ["React", "Vite", "shadcn/ui", "Firebase", "Express", "Gemini AI"],
    category: "fullstack",
    demo: "https://app-casa-seven.vercel.app",
  },
  {
    name: "boasaude",
    title: "Boa Saúde — Health E-commerce",
    lang: "HTML",
    kind: "Web · E-commerce",
    desc: "Multi-brand health products store with a catalog, brand pages, <strong>checkout, login and blog</strong> — custom SQL schema.",
    stack: ["HTML", "CSS", "JavaScript", "SQL"],
    category: "fullstack",
    demo: "https://boasaude.vercel.app",
  },
  {
    name: "website12",
    title: "Aela Store — Online Shop (Next.js)",
    lang: "Next",
    kind: "Web · Next.js",
    desc: "Complete online store built with <strong>Next.js, TypeScript and TailwindCSS</strong>.",
    stack: ["Next.js", "TypeScript", "TailwindCSS"],
    category: "astro-next",
    demo: "https://website12-theta.vercel.app",
  },
  {
    name: "Viagem",
    title: "Viagem — Cruises in Spain",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Travel and cruises platform with itineraries in <strong>React + Vite + Tailwind + React-Bootstrap</strong>.",
    stack: ["React", "Vite", "TailwindCSS", "Bootstrap"],
    category: "react",
    demo: "https://viagem-omega.vercel.app",
  },
  {
    name: "maria",
    title: "Maria — Website with 3D",
    lang: "TypeScript",
    kind: "Web · React",
    desc: "Immersive website with a <strong>3D experience (Three.js)</strong> and rich animations.",
    stack: ["React", "TypeScript", "Three.js", "TailwindCSS"],
    category: "react",
    demo: "https://maria-sooty.vercel.app",
  },
  {
    name: "APIJaime",
    title: "API Jaime — Management Dashboard",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Web dashboard for <strong>API management and monitoring</strong>, deployed on Vercel.",
    stack: ["React", "Vite", "TailwindCSS", "Vercel"],
    category: "react",
    demo: "https://api-jaime.vercel.app",
  },
  {
    name: "appcarla",
    title: "App Carla — Clinic Management",
    lang: "JavaScript",
    kind: "Web · Health",
    desc: "Clinical <strong>management app</strong> — schedule and patients — in React with React Router.",
    stack: ["React", "Vite", "React Router"],
    category: "react",
    demo: "https://appcarla.vercel.app",
  },
  {
    name: "Assul-website",
    title: "Assul — Website + Firebase",
    lang: "TypeScript",
    kind: "Web · Full-Stack",
    desc: "Corporate website with <strong>Firebase (auth + Firestore) and an Express API</strong>.",
    stack: ["React", "Vite", "Firebase", "Express", "TailwindCSS"],
    category: "fullstack",
    demo: "https://assul-website.vercel.app",
  },
  {
    name: "PaulinhoWebsite",
    title: "Paulinho — Website with shadcn/ui",
    lang: "TypeScript",
    kind: "Web · React",
    desc: "Modern website built on <strong>shadcn/ui, Tailwind and Express</strong>.",
    stack: ["React", "Vite", "shadcn/ui", "Express"],
    category: "react",
    demo: "https://paulinho-website.vercel.app",
  },
  {
    name: "websitever",
    title: "Santo Salto — Astro Website",
    lang: "Astro",
    kind: "Web · Astro",
    desc: "Brand website built with <strong>Astro + TailwindCSS</strong>.",
    stack: ["Astro", "TailwindCSS"],
    category: "astro-next",
    demo: "https://websitever.vercel.app",
  },
  {
    name: "4ubarcelona",
    title: "4U Barcelona — 4U Program",
    lang: "Astro",
    kind: "Web · Astro",
    desc: "Website of the <strong>4U program in Barcelona</strong>, static and fast with Astro.",
    stack: ["Astro", "TailwindCSS"],
    category: "astro-next",
    demo: "https://4ubarcelona.vercel.app",
  },
  {
    name: "voltel",
    title: "VölTel — Landing Page",
    lang: "Astro",
    kind: "Web · Astro",
    desc: "Brand landing page in <strong>Astro + TailwindCSS</strong>.",
    stack: ["Astro", "TailwindCSS"],
    category: "astro-next",
    demo: "https://voltel.vercel.app",
  },
  {
    name: "website22",
    title: "Agency Website — with 3D",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Agency website with <strong>3D animations (Three.js)</strong> in React.",
    stack: ["React", "Vite", "Three.js"],
    category: "react",
    demo: "https://website22-xi.vercel.app",
  },
  {
    name: "manuelpowerpoint",
    title: "Manuel PowerPoint — Website",
    lang: "JavaScript",
    kind: "Web · React",
    desc: "Personal website built with <strong>React + Vite + Tailwind</strong>.",
    stack: ["React", "Vite", "TailwindCSS"],
    category: "react",
    demo: "https://manuelpowerpoint.vercel.app",
  },
];

export const FILTERS = [
  { id: "all", label: "All" },
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
  { title: "Backend & Data", color: "#e0234e", items: ["NestJS", "Node.js", "Prisma", "PostgreSQL", "Redis", "ASP.NET", ".NET", "Java", "REST APIs"] },
  { title: "Platform & Architecture", color: "#8b5cf6", items: ["Turborepo", "pnpm workspaces", "Domain-Driven Design", "Shared Packages", "E2E Testing"] },
  { title: "DevOps & Cloud", color: "#22d3ee", items: ["Docker", "GitHub Actions", "AWS", "Azure", "Grafana", "Git", "VMware", "JIRA", "Vercel"] },
  { title: "Practices", color: "#34d399", items: ["RBAC", "JWT Auth", "System Design", "Observability", "Agile", "Technical Documentation"] },
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
    period: "Apr 2026 — Present",
    flags: "6 apps · 8 packages · 48+ backend modules · 14+ services",
    bullets: [
      "<strong>Architecture & delivery:</strong> system designed as a multi-app TypeScript monorepo — NestJS API, worker/event processes, React backoffice and shared domain/API packages.",
      "<strong>Backoffice & CRM:</strong> customer lifecycle, lead pipelines, document workflows and an embedded CRM used daily by the teams.",
      "<strong>Document intelligence:</strong> OCR pipeline that extracts data from documents, combines scans into verified PDFs and cuts manual steps in a regulated context.",
      "<strong>DevOps & reliability:</strong> Docker pipelines (dev → staging → prod), GitHub Actions CI/CD and Grafana observability.",
      "<strong>Security:</strong> RBAC across 48+ modules, JWT boundaries and audit history.",
    ],
  },
  {
    role: "Software Developer (Freelance)",
    company: "Self-employed · Remote",
    period: "May 2022 — Present",
    bullets: [
      "Web applications and management systems for SMBs in health, events and professional services.",
      "Full lifecycle: requirements, system design, development, testing and delivery.",
      "React, Next.js, Node.js, TypeScript, PostgreSQL and cloud-hosted deployments.",
    ],
  },
  {
    role: "Junior Programmer",
    company: "Autoridade Tributária e Aduaneira · Lisboa",
    period: "May 2024 — Nov 2024",
    bullets: [
      "Internal systems and web platforms supporting fiscal operations at national scale.",
      "Backend services and database integrations in a regulated, high-demand environment.",
      "Git workflows and DevOps practices within a public-sector engineering team.",
    ],
  },
  {
    role: "Software Developer",
    company: "InforTucano · Oeiras, Portugal",
    period: "Aug 2023 — Jan 2024",
    bullets: [
      "Enterprise web platforms and internal tools for business operations.",
      "Backend logic, database layers and frontend integration in an agile environment.",
    ],
  },
  {
    role: "Computer Technician",
    company: "Fractalia · Madrid, Spain (Remote)",
    period: "Mar 2022 — Jun 2023",
    bullets: [
      "Incident resolution in micro-computing, networks and systems management for enterprise clients.",
      "Ticketing workflows and SLA-driven resolution — the foundation that later supported DevOps work.",
    ],
  },
];

export const MARQUEE_ITEMS = [
  "TypeScript", "NestJS", "React", "Next.js", "React Native", "Expo",
  "Node.js", "PostgreSQL", "Redis", "Prisma", "Supabase", "Docker",
  "GitHub Actions", "Grafana", "AWS", "Azure", "Turborepo", "pnpm",
  "TailwindCSS", "Vercel",
];

export const BORA_SCREENS = [
  { src: asset("assets/img/bora/06-descobrir.png"), alt: "Bora — Discover screen" },
  { src: asset("assets/img/bora/01-mapa.png"), alt: "Bora — social map" },
  { src: asset("assets/img/bora/03-vilamoura.png"), alt: "Bora — Vilamoura map" },
  { src: asset("assets/img/bora/05-evento.png"), alt: "Bora — event page" },
  { src: asset("assets/img/bora/10-momentos.png"), alt: "Bora — moments" },
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