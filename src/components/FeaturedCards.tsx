import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BORA_SCREENS, CONTACT } from "../data";
import { Reveal } from "./Reveal";
import { CountUp } from "../hooks";
import { ArrowRightIcon, CodeIcon, DownloadIcon, ExternalIcon, PlayIcon } from "./icons";

/* ─────────────────────── Company project ────────────────────────── */

const WORK_STATS = [
  { value: 6, suffix: "", label: "apps" },
  { value: 8, suffix: "", label: "packages" },
  { value: 48, suffix: "+", label: "modules" },
  { value: 14, suffix: "+", label: "services" },
];

export function DoutorCard() {
  return (
    <Reveal>
      <article className="feature-card">
        <div className="feature-body">
          <div className="feature-tags">
            <span className="tag tag-pro">Private · company project</span>
            <span className="tag">Monorepo</span>
            <span className="tag">Internal platform</span>
          </div>

          <h3 className="feature-title">Enterprise Insurance &amp; Credit Platform</h3>
          <p className="feature-desc">
            The platform behind <strong>insurance and credit operations</strong> at a company in Portugal.
            I designed it end-to-end as a multi-app TypeScript monorepo — NestJS API, worker/event
            processes, a React back office and shared domain/API packages — with Docker pipelines
            from dev to staging to prod. <em>The code is private.</em>
          </p>

          <dl className="feature-stats">
            {WORK_STATS.map((s) => (
              <div key={s.label}>
                <dt>
                  <CountUp value={s.value} suffix={s.suffix} />
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="feature-list">
            <li>Role-based access control &amp; auditing</li>
            <li>Document OCR pipeline</li>
            <li>Customer CRM &amp; lifecycle</li>
            <li>Back office used daily</li>
          </ul>

          <div className="feature-links">
            <a className="btn btn-ghost btn-sm" href={CONTACT.cvUrl} download>
              <DownloadIcon size={16} />
              Details in CV
            </a>
            <a className="link-arrow" href={`mailto:${CONTACT.email}`}>
              Contact
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
              <div className="mono-title">~/platform · monorepo (Turborepo + pnpm)</div>
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
                  aria-label="Previous photo"
                >
                  ‹
                </button>
                <button
                  className="carousel-btn carousel-next"
                  onClick={() => go(1)}
                  aria-label="Next photo"
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
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="feature-body">
          <div className="feature-tags">
            <span className="tag tag-personal">Personal project · mobile app</span>
            <span className="tag">Concept</span>
            <span className="tag">Real UI</span>
          </div>

          <h3 className="feature-title">
            Bora — events &amp; points of interest in micro-mobility
          </h3>
          <p className="feature-desc">
            A <strong>mobile-first</strong> app to discover <strong>events, cities and stories</strong>{" "}
            around points of interest — with a social map, event pages and built-in chat.
            <strong> A complete concept designed and prototyped by hand</strong>: visual identity, flows and interaction.
          </p>

          <ul className="feature-list">
            <li>Social map of points of interest</li>
            <li>Event pages &amp; schedule</li>
            <li>Built-in chat / conversations</li>
            <li>Stories &amp; moments</li>
          </ul>

          <div className="feature-stack">
            <span>Concept</span>
            <span>UI/UX</span>
            <span>Prototype</span>
            <span>React Native (native)</span>
          </div>

          <div className="feature-links">
            <button className="btn btn-primary btn-sm" onClick={onPlay}>
              <PlayIcon size={16} />
              Watch demo
            </button>
            <a
              className="link-arrow"
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
            >
              <CodeIcon size={16} />
              Repository (private)
              <ExternalIcon size={14} />
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
