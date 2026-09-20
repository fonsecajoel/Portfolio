import { CONTACT } from "../data";
import { scrollToId, scrollTop } from "../lib/scroll";
import { GithubIcon, LinkedinIcon, MailIcon } from "./icons";

const NAV = [
  { id: "sobre", label: "Sobre" },
  { id: "competencias", label: "Competências" },
  { id: "experiencia", label: "Experiência" },
  { id: "projetos", label: "Projetos" },
  { id: "contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <a
              className="brand"
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                scrollTop();
              }}
            >
              <span className="brand-mark">JF</span>
              <span className="brand-text">
                Joel <span className="brand-last">Fonseca</span>
              </span>
            </a>
            <p>
              Software Engineer &amp; DevOps · Sistemas completos em produção, do desenho ao deploy.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Navegação rápida">
            {NAV.map((l) => (
              <button key={l.id} onClick={() => scrollToId(l.id)}>
                {l.label}
              </button>
            ))}
          </nav>

          <div className="footer-meta">
            <a href={`mailto:${CONTACT.email}`}>
              <MailIcon size={14} /> {CONTACT.email}
            </a>
            <a href={`tel:${CONTACT.phoneHref}`}>{CONTACT.phone}</a>
            <span>{CONTACT.location}</span>
            <div className="footer-socials">
              <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                <GithubIcon size={17} />
              </a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <LinkedinIcon size={17} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Joel Fonseca — feito à mão com <span className="heart">♥</span> e React
          </span>
          <span>React · Vite · Framer Motion · Lenis</span>
        </div>
      </div>
    </footer>
  );
}