import { Reveal, SectionHead } from "./Reveal";
import { CONTACT } from "../data";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

const CARDS = [
  { icon: MailIcon, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: PhoneIcon, label: "Telefone", value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
  { icon: MapPinIcon, label: "Localização", value: CONTACT.location, href: null },
];

export default function Contact() {
  return (
    <section className="section section-contact" id="contacto">
      <div className="container">
        <Reveal>
          <div className="contact-panel">
            <div className="orb orb-a" />
            <div className="orb orb-b" />

            <div className="contact-head">
              <span className="section-eyebrow">// Contacto</span>
              <h2 className="contact-title">
                Onde me <em>encontras</em>
              </h2>
              <p className="contact-sub">
                Obrigado por veres o meu trabalho — está tudo no GitHub e no CV em PDF.
                Se quiseres falar comigo, envia um email.
              </p>
            </div>

            <div className="contact-cards">
              {CARDS.map((c) =>
                c.href ? (
                  <a key={c.label} className="contact-card" href={c.href}>
                    <span className="contact-icon">
                      <c.icon size={22} />
                    </span>
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                  </a>
                ) : (
                  <div key={c.label} className="contact-card">
                    <span className="contact-icon">
                      <c.icon size={22} />
                    </span>
                    <span className="contact-label">{c.label}</span>
                    <span className="contact-value">{c.value}</span>
                  </div>
                )
              )}
            </div>

            <div className="contact-socials">
              <a className="btn btn-primary" href={CONTACT.github} target="_blank" rel="noreferrer">
                <GithubIcon size={17} />
                GitHub
              </a>
              <a className="btn btn-ghost" href={CONTACT.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={17} />
                LinkedIn
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}