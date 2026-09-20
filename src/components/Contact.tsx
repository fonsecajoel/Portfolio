import { Reveal, SectionHead } from "./Reveal";
import { CONTACT } from "../data";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon, PhoneIcon } from "./icons";

const CARDS = [
  { icon: MailIcon, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { icon: PhoneIcon, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phoneHref}` },
  { icon: MapPinIcon, label: "Location", value: CONTACT.location, href: null },
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
              <span className="section-eyebrow">// Contact</span>
              <h2 className="contact-title">
                Where to <em>find me</em>
              </h2>
              <p className="contact-sub">
                Thanks for checking out my work — everything is on GitHub and in the PDF CV.
                If you'd like to talk, just send an email.
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