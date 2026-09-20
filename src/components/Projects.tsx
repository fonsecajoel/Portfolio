import { useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FILTERS, LANGS, PROJECTS, repoLink } from "../data";
import type { FilterId, GitHubProject } from "../data";
import { Reveal, SectionHead, EASE } from "./Reveal";
import { useTilt } from "../hooks";
import { DoutorCard, BoraCard } from "./FeaturedCards";
import VideoModal from "./VideoModal";
import { ExternalIcon, GithubIcon } from "./icons";

function ProjectCard({ project }: { project: GitHubProject }) {
  const { ref, onMove, onLeave } = useTilt(9);
  const lang = LANGS[project.lang] ?? "#9aa7bd";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.32, ease: EASE }}
      className="project-card"
    >
      <div className="project-tilt" ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}>
        <div className="tilt-glare" />
        <div className="project-top">
          <span className="lang-dot">
            <i style={{ "--lang": lang } as CSSProperties} />
            {project.lang}
          </span>
          <span className="project-kind">{project.kind}</span>
        </div>
        <h3 className="project-title">
          <a href={repoLink(project.name)} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </h3>
        <p className="project-desc" dangerouslySetInnerHTML={{ __html: project.desc }} />
        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="project-actions">
          <a href={repoLink(project.name)} target="_blank" rel="noreferrer">
            <GithubIcon size={15} />
            Repo
          </a>
          {project.demo ? (
            <a className="demo-link" href={project.demo} target="_blank" rel="noreferrer">
              <ExternalIcon size={15} />
              Demo
            </a>
          ) : (
            <span className="demo-none">Sem demo</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [videoOpen, setVideoOpen] = useState(false);

  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section className="section section-alt" id="projetos">
      <div className="container">
        <SectionHead
          eyebrow="// Projetos"
          title={
            <>
              Trabalho em <em>produção</em> &amp; side projects
            </>
          }
          sub="Os dois destaques mostram o lado profissional e o lado criativo; em baixo, tudo o que está no GitHub."
        />

        <div className="feature-grid">
          <DoutorCard />
          <BoraCard onPlay={() => setVideoOpen(true)} />
        </div>

        <div className="projects-wrap">
          <div className="filter-bar" role="tablist" aria-label="Filtrar projetos">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`filter-chip${filter === f.id ? " is-active" : ""}`}
                onClick={() => setFilter(f.id)}
                role="tab"
                aria-selected={filter === f.id}
              >
                {f.label}
              </button>
            ))}
            <Reveal className="filter-count" delay={0}>
              <span>
                {filtered.length} {filtered.length === 1 ? "projeto" : "projetos"}
              </span>
            </Reveal>
          </div>

          <motion.div layout className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProjectCard key={p.name} project={p} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <VideoModal open={videoOpen} onClose={() => setVideoOpen(false)} />
    </section>
  );
}