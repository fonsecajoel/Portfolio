import { Reveal, SectionHead } from "./Reveal";
import { CodeIcon, LayersIcon, ShieldIcon } from "./icons";

const PILLARS = [
  {
    icon: LayersIcon,
    title: "Architecture & System",
    text: "Multi-app TypeScript monorepos with shared packages, clear boundaries and Domain-Driven Design at scale.",
  },
  {
    icon: CodeIcon,
    title: "Full-Stack",
    text: "NestJS APIs, workers and React backoffices that teams use every day — from schema to deploy.",
  },
  {
    icon: ShieldIcon,
    title: "Security & Reliability",
    text: "RBAC, JWT, auditing and CI/CD pipelines in a regulated context, with observability from day one.",
  },
];

export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <SectionHead
          eyebrow="// About me"
          title={
            <>
              From technician to platform <em>architect</em>
            </>
          }
          sub="What starts as curiosity about systems ends up as enterprise platforms used every day."
        />

        <div className="sobre-grid">
          <Reveal>
            <div className="sobre-text">
              <p>
                Today I design and deliver the <strong>insurance and credit platform</strong> behind a company in
                Portugal — a multi-app TypeScript monorepo with a NestJS API, worker/event processes,
                a React back office and shared domain/API packages, all running in production.
              </p>
              <p>
                Before the backend, I was a <strong>computer technician</strong> at Fractalia (incident resolution and networks
                at enterprise scale). That infrastructure background is what gives me end-to-end vision: design made
                for deploy, data, security and operations — not just for code that compiles.
              </p>
              <p>
                In parallel, I've built and delivered more than <strong>15 projects</strong> (some in production) that you can
                explore below — from <strong>e-commerce to clinic management</strong>, from <strong>Astro landing pages</strong> to
                <strong> 3D experiences with Three.js</strong>.
              </p>
              <div className="sobre-tags">
                <span>Leiria · Portugal</span>
                <span>PT / EN</span>
                <span>5+ years in the field</span>
                <span>15+ projects</span>
              </div>
            </div>
          </Reveal>

          <div className="sobre-cards">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="pillar-card">
                  <span className="pillar-icon">
                    <p.icon size={21} />
                  </span>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}