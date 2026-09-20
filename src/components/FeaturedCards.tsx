import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BORA_SCREENS, CONTACT } from "../data";
import { Reveal } from "./Reveal";
import { CountUp } from "../hooks";
import { ArrowRightIcon, CodeIcon, DownloadIcon, ExternalIcon, PlayIcon } from "./icons";

/* ─────────────────────────── DoutorVida ─────────────────────────── */

const DOUTOR_STATS = [
  { value: 6, suffix: "", label: "apps" },
  { value: 8, suffix: "", label: "packages" },
  { value: 48, suffix: "+", label: "módulos" },
  { value: 14, suffix: "+", label: "serviços" },
];

export function DoutorCard() {
  return (
    <Reveal>
      <article className="feature-card">
        <div className="feature-body">
          <div className="feature-tags">
            <span className="tag tag-pro">Em produção · DoutorVida</span>
            <span className="tag">Monorepo</span>
            <span className="tag">SaaS interno</span>
          </div>

          <h3 className="feature-title">DoutorVida — Sistema Corporativo de Seguros &amp; Crédito</h3>
          <p className="feature-desc">
            O sistema que <strong>sustenta operações de seguros e crédito</strong> em escala: desenhado do zero
            num monorepo TypeScript multi-app, com API NestJS, processos worker/eventos, backoffice React e
            packages de domínio/API partilhados — e pipelines Docker de dev → staging → prod.
          </p>

          <dl className="feature-stats">
            {DOUTOR_STATS.map((s) => (
              <div key={s.label}>
                <dt>
                  <CountUp value={s.value} suffix={s.suffix} />
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>

          <div className="feature-stack">
            <span>NestJS</span>
            <span>React</span>
            <span>TypeScript</span>
            <span>Turborepo</span>
            <span>Redis</span>
            <span>Docker</span>
            <span>GitHub Actions</span>
            <span>Grafana</span>
          </div>

          <ul className="feature-list">
            <li>RBAC em 48+ módulos + auditoria</li>
            <li>Pipeline OCR de documentos</li>
            <li>CRM &amp; lifecycle de clientes</li>
            <li>Backoffice usado diariamente</li>
          </ul>

          <div className="feature-links">
            <a className="btn btn-ghost btn-sm" href={CONTACT.cvUrl} download>
              <DownloadIcon size={16} />
              Detalhes no CV
            </a>
            <a className="link-arrow" href={`mailto:${CONTACT.email}`}>
              Fala comigo
              <ArrowRightIcon size={16} />
            </a>
          </div>
        </div>

        <div className="feature-visual" aria-hidden="true">
          <div className="mono-card">
            <div className="mono-head">
              <span />
              <span />
              <span />
            </div>
            <div className="mono-body">
              <div className="mono-title">~/doutorvida · monorepo (Turborepo + pnpm)</div>
              <div className="mono-apps">
                <div>
                  apps/<b>api</b>
                </div>
                <div>
                  apps/<b>worker</b>
                </div>
                <div>
                  apps/<b>admin</b>
                </div>
                <div>
                  apps/<b>events</b>
                </div>
                <div>
                  pkg/<b>domain</b>
                </div>
                <div>
                  pkg/<b>contracts</b>
                </div>
              </div>
              <div className="mono-svc">
                <span>docker-compose.yml</span>
                <span>ci.yml</span>
                <span>prisma</span>
                <span>redis</span>
                <span>grafana</span>
              </div>
              <div>
                <span className="mono-cursor">▊</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* ─────────────────────────────── Bora ────────────────────────────── */

export function BoraCard({ onPlay }: { onPlay: () => void }) {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);
  const [hovering, setHovering] = useState(false);

  const n = BORA_SCREENS.length;
  const go = (d: 1 | -1) => {
    setDir(d);
    setIndex((i) => (i + d + n) % n);
  };

  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => go(1), 3400);
    return () => clearInterval(id);
  }, [hovering]);

  return (
    <Reveal>
      <article className={`feature-card feature-bora`}>
        <div className="feature-visual">
          <div className="bora-phone">
            <div
              className="phone-frame"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              <div className="phone-notch" />
              <div className="phone-screen">
                <div className="phone-carousel">
                  <AnimatePresence initial={false} custom={dir}>
                    <motion.img
                      key={index}
                      src={BORA_SCREENS[index].src}
                      alt={BORA_SCREENS[index].alt}
                      className="carousel-slide"
                      custom={dir}
                      initial={{ x: dir * 70, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: dir * -70, opacity: 0 }}
                      transition={{ duration: 0.42, ease: "easeOut" }}
                    />
                  </AnimatePresence>
                </div>
                <button
                  className="carousel-btn carousel-prev"
                  onClick={() => go(-1)}
                  aria-label="Foto anterior"
                >
                  ‹
                </button>
                <button
                  className="carousel-btn carousel-next"
                  onClick={() => go(1)}
                  aria-label="Próxima foto"
                >
                  ›
                </button>
              </div>
            </div>
            <div className="phone-dots">
              {BORA_SCREENS.map((_, i) => (
                <button
                  key={i}
                  className={i === index ? "is-active" : ""}
                  onClick={() => {
                    setDir(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  aria-label={`Foto ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="feature-body">
          <div className="feature-tags">
            <span className="tag tag-personal">Projeto pessoal · app mobile</span>
            <span className="tag">Concept</span>
            <span className="tag">UI real</span>
          </div>

          <h3 className="feature-title">
            Bora — eventos &amp; pontos de interesse em micro-mobilidade
          </h3>
          <p className="feature-desc">
            Uma app <strong>mobile-first</strong> para descobrir <strong>eventos, cidades e histórias</strong>{" "}
            à volta de pontos de interesse — com mapa social, páginas de evento e chat integrado.
            <strong> Conceito completo desenhado e prototipado pela mão</strong>: identidade visual, fluxos e interação.
          </p>

          <ul className="feature-list">
            <li>Mapa social de pontos de interesse</li>
            <li>Páginas de eventos &amp; agenda</li>
            <li>Chat / conversas integradas</li>
            <li>Histórias &amp; momentos</li>
          </ul>

          <div className="feature-stack">
            <span>Concept</span>
            <span>UI/UX</span>
            <span>Protótipo</span>
            <span>React Native (nativo)</span>
          </div>

          <div className="feature-links">
            <button className="btn btn-primary btn-sm" onClick={onPlay}>
              <PlayIcon size={16} />
              Ver demo
            </button>
            <a
              className="link-arrow"
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon size={16} />
              Repositório (privado)
              <ExternalIcon size={14} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}