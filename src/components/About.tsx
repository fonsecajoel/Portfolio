import { Reveal, SectionHead } from "./Reveal";
import { CodeIcon, LayersIcon, ShieldIcon } from "./icons";

const PILLARS = [
  {
    icon: LayersIcon,
    title: "Arquitetura & Sistema",
    text: "Monorepos TypeScript multi-app com packages partilhados, boundaries claras e Domain-Driven Design à escala.",
  },
  {
    icon: CodeIcon,
    title: "Full-Stack",
    text: "APIs NestJS, workers e backoffice React que equipas usam todos os dias — do schema até ao deploy.",
  },
  {
    icon: ShieldIcon,
    title: "Segurança & Fiabilidade",
    text: "RBAC, JWT, auditoria e pipelines de CI/CD em contexto regulado, com observabilidade desde o dia um.",
  },
];

export default function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <SectionHead
          eyebrow="// Sobre mim"
          title={
            <>
              De técnico a <em>arquiteto</em> de plataformas
            </>
          }
          sub="O que começa como curiosidade por sistemas acaba em plataformas empresariais usadas todos os dias."
        />

        <div className="sobre-grid">
          <Reveal>
            <div className="sobre-text">
              <p>
                Hoje desenho e entrego o <strong>sistema completo de seguros e crédito</strong> da DoutorVida —
                um monorepo TypeScript com <strong>6 apps</strong>: API NestJS, processos worker/eventos, backoffice React
                e <strong>8 packages de domínio e API partilhados</strong>, com <strong>48+ módulos</strong> e múltiplos serviços Docker.
              </p>
              <p>
                Antes do backend, fui <strong>técnico de sistemas</strong> na Fractalia (resolução de incidentes e redes à escala empresarial).
                Essa base em infraestrutura é o que dá uma visão de ponta a ponta: desenho pensado para deploy,
                dados, segurança e operação — não só para código que compila.
              </p>
              <p>
                Em paralelo, construo e entreguei mais de <strong>15 projetos</strong> (alguns em produção) que podes
                explorar em baixo — de <strong>e-commerce a gestão clínica</strong>, de <strong>landing pages Astro</strong> a
                experiências <strong>3D com Three.js</strong>.
              </p>
              <div className="sobre-tags">
                <span>Leiria · Portugal</span>
                <span>PT / EN</span>
                <span>Remote-friendly</span>
                <span>Full-time &amp; Freelance</span>
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