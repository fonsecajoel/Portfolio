import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTACT, BORA_SCREENS } from "../data";
import { asset } from "../lib/assets";
import { scrollToId } from "../lib/scroll";
import { ArrowRightIcon, CheckIcon, DownloadIcon, GithubIcon } from "./icons";
import { CountUp, useTypewriter } from "../hooks";
import { EASE } from "./Reveal";

const HeroScene3D = lazy(() => import("./HeroScene3D"));

const WORDS = [
  "DevOps & Systems Architect",
  "Full-Stack Developer",
  "Creator of @Bora",
  "Fintech Platform Engineer",
];

const STATS = [
  { value: 6, suffix: "", label: "apps no monorepo" },
  { value: 48, suffix: "+", label: "módulos backend" },
  { value: 2000, suffix: "+", label: "commits no GitHub" },
  { value: 4, suffix: "+", label: "anos full-stack" },
];

const TERM_LINES: Array<{ type: "cmd" | "out"; text: string; green?: boolean }> = [
  { type: "cmd", text: "whoami" },
  { type: "out", text: "joel fonseca · software engineer" },
  { type: "cmd", text: "ls ~/portfolio --meta" },
  { type: "out", text: "monorepo/  fullstack/  devops/  web3d/" },
  { type: "cmd", text: "cat about.md" },
  { type: "out", text: "sistemas em produção desde 2022", green: true },
];

/* ── Janela de terminal Linux (escreve comandos em loop) ─────────── */
function HeroTerminal() {
  const [full, setFull] = useState(0);
  const [ch, setCh] = useState(0);

  useEffect(() => {
    if (full >= TERM_LINES.length) {
      const t = setTimeout(() => {
        setFull(0);
        setCh(0);
      }, 5200);
      return () => clearTimeout(t);
    }
    const line = TERM_LINES[full];
    if (ch < line.text.length) {
      const t = setTimeout(() => setCh((c) => c + 1), 22);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setFull((f) => f + 1);
      setCh(0);
    }, 300);
    return () => clearTimeout(t);
  }, [full, ch]);

  return (
    <div className="hero-window hero-terminal" aria-hidden="true">
      <div className="win-bar">
        <span className="win-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="win-title">joel@portfolio: ~</span>
      </div>
      <div className="terminal-body">
        {TERM_LINES.slice(0, full).map((l, i) => (
          <div className="term-line" key={i}>
            {l.type === "cmd" ? (
              <>
                <span className="term-prompt">$ </span>
                <span className="cmd">{l.text}</span>
              </>
            ) : (
              <span className={`term-out${l.green ? " g" : ""}`}>{l.text}</span>
            )}
          </div>
        ))}
        {full < TERM_LINES.length && (
          <div className="term-line">
            {TERM_LINES[full].type === "cmd" ? (
              <>
                <span className="term-prompt">$ </span>
                <span className="cmd">{TERM_LINES[full].text.slice(0, ch)}</span>
              </>
            ) : (
              <span className="term-out">{TERM_LINES[full].text.slice(0, ch)}</span>
            )}
            <span className="term-caret" />
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Gestor de ficheiros com a foto + thumbs da Bora ─────────────── */
function HeroFileManager() {
  const thumbs = [BORA_SCREENS[0].src, BORA_SCREENS[1].src, BORA_SCREENS[2].src];
  return (
    <div className="hero-window hero-fm">
      <div className="win-bar">
        <span className="win-dots">
          <i />
          <i />
          <i />
        </span>
        <span className="win-title">~/fotos — gestor de ficheiros</span>
      </div>
      <div className="fm-body">
        <div className="fm-photo">
          <img src={asset("assets/img/joel.png")} alt="Joel Fonseca" />
        </div>
        <div className="fm-thumbs">
          {thumbs.map((s, i) => (
            <img key={i} src={s} alt="Bora — screenshot" />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Taskbar estilo desktop ──────────────────────────────────────── */
function HeroTaskbar() {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);
  const time = now.toLocaleTimeString("pt-PT", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="hero-taskbar" aria-hidden="true">
      <span className="task-dot" style={{ background: "#3b82f6" }}>
        JF
      </span>
      <span className="task-dot" style={{ background: "#22d3ee" }}>
        &gt;_
      </span>
      <span className="task-dot" style={{ background: "#f59e0b" }}>
        3D
      </span>
      <span className="task-time">{time}</span>
    </div>
  );
}

export default function Hero() {
  const { text } = useTypewriter(WORDS);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, -70]);

  return (
    <section className="hero" id="inicio" ref={ref}>
      <motion.div className="hero-bg" style={{ y: yBg }}>
        <div className="orb orb-a" />
        <div className="orb orb-b" />
        <div className="orb orb-c" />
        <div className="grid-overlay" />
        <div className="noise-overlay" />
      </motion.div>

      <div className="container hero-grid">
        <motion.div
          className="hero-copy"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
          >
            <span className="badge-pill">
              <span className="pulse-dot" />
              Portfólio · Software Engineer
            </span>
          </motion.div>

          <motion.h1
            className="hero-title"
            variants={{ hidden: { opacity: 0, y: 26 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
          >
            Software Engineer &amp;<br />
            Arquiteto de <em>Sistemas</em>
          </motion.h1>

          <motion.div
            className="hero-roles"
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
            aria-label={WORDS.join(", ")}
          >
            <span className="roles-static">&gt; joel</span>
            <span className="roles-sep">@</span>
            <span className="roles-dynamic">
              {text}
              <span className="caret" />
            </span>
          </motion.div>

          <motion.p
            className="hero-lead"
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
          >
            Construo <strong>plataformas full-stack</strong> que profissionais usam todos os dias —
            do monorepo TypeScript multi-app com <strong>NestJS e React</strong>, até pipelines de{" "}
            <strong>DevOps, CI/CD e observabilidade</strong> em contexto regulado.
          </motion.p>

          <motion.div
            className="hero-cta"
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } } }}
          >
            <a href={CONTACT.cvUrl} download className="btn btn-primary btn-lg">
              <DownloadIcon size={17} />
              Download CV
            </a>
            <a href={`mailto:${CONTACT.email}`} className="btn btn-ghost btn-lg">
              Contacto
              <ArrowRightIcon size={17} />
            </a>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noreferrer"
              className="btn-lg-icon"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
          </motion.div>

          <motion.dl
            className="hero-stats"
            variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
          >
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <dt>
                  <CountUp value={s.value} suffix={s.suffix} />
                </dt>
                <dd>{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>

        <motion.div className="hero-visual" style={{ y: yPhoto }}>
          <div className="hero-3d-box">
            <Suspense fallback={<div className="hero-3d-stage" aria-hidden="true" />}>
              <HeroScene3D />
            </Suspense>

            <HeroTerminal />

            <motion.span
              className="float-chip chip-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
            >
              &lt;typescript /&gt;
            </motion.span>
            <motion.span
              className="float-chip chip-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            >
              docker · ci/cd
            </motion.span>
            <motion.span
              className="float-chip chip-3"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              nestjs · react
            </motion.span>

            <HeroFileManager />
            <HeroTaskbar />

            <motion.span
              className="float-chip chip-4"
              animate={{ y: [0, 9, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            >
              monorepo + pnpm
            </motion.span>
          </div>

          <ul className="hero-quicklist">
            <li>
              <CheckIcon size={15} />
              Monorepo: 6 apps · 8 packages
            </li>
            <li>
              <CheckIcon size={15} />
              48+ módulos · 14+ serviços
            </li>
            <li>
              <CheckIcon size={15} />
              15+ projetos públicos no GitHub
            </li>
          </ul>
        </motion.div>
      </div>

      <button className="scroll-hint" onClick={() => scrollToId("sobre")}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
        Scroll
      </button>
    </section>
  );
}