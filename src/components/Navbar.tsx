import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT } from "../data";
import { scrollToId } from "../lib/scroll";
import { DownloadIcon, MoonIcon, SunIcon } from "./icons";
import { useTheme } from "../hooks";

const LINKS = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "competencias", label: "Competências" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("inicio");
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    scrollToId(id);
  };

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <a
            className="brand"
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              go("inicio");
            }}
            aria-label="Joel Fonseca — Início"
          >
            <span className="brand-mark">JF</span>
            <span className="brand-text">
              Joel <span className="brand-last">Fonseca</span>
            </span>
          </a>

          <nav className="nav" aria-label="Navegação principal">
            {LINKS.map((l) => (
              <button
                key={l.id}
                className="nav-link"
                onClick={() => go(l.id)}
                aria-current={active === l.id ? "true" : undefined}
              >
                {active === l.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="nav-link-label">{l.label}</span>
              </button>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="icon-btn"
              onClick={toggle}
              aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
            >
              {theme === "dark" ? <SunIcon size={19} /> : <MoonIcon size={19} />}
            </button>
            <a
              className="btn btn-primary btn-sm btn-cv"
              href={CONTACT.cvUrl}
              download
              aria-label="Baixar o CV em PDF"
            >
              <DownloadIcon size={17} />
              <span>CV</span>
            </a>
            <button
              className={`menu-btn${open ? " is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {LINKS.map((l) => (
              <button key={l.id} className="mobile-nav-link" onClick={() => go(l.id)}>
                {l.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}