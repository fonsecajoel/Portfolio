import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CONTACT } from "../data";
import { scrollToId } from "../lib/scroll";
import { asset } from "../lib/assets";
import { ArrowRightIcon, CheckIcon, DownloadIcon, GithubIcon } from "./icons";
import { CountUp, useTypewriter } from "../hooks";
import { EASE } from "./Reveal";

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
              Disponível para novos projetos
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
              Fala comigo
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
          <motion.div
            className="photo-card"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="photo-ring" />
            <img src={asset("assets/img/joel.png")} alt="Joel Fonseca" width={340} height={380} />
          </motion.div>

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
            docker · CI/CD
          </motion.span>
          <motion.span
            className="float-chip chip-3"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            nestjs · react
          </motion.span>
          <motion.span
            className="float-chip chip-4"
            animate={{ y: [0, 9, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
          >
            monorepo + pnpm
          </motion.span>

          <ul className="hero-quicklist">
            <li>
              <CheckIcon size={15} />
              Monorepo TypeScript: 6 apps · 8 packages
            </li>
            <li>
              <CheckIcon size={15} />
              Backoffice, CRM &amp; micromobility
            </li>
            <li>
              <CheckIcon size={15} />
              DevOps: Docker, GitHub Actions, Grafana
            </li>
            <li>
              <CheckIcon size={15} />
              Segurança: RBAC, JWT, auditoria
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