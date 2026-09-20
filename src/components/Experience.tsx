import { motion } from "framer-motion";
import { Reveal, SectionHead, EASE } from "./Reveal";
import { EXPERIENCE } from "../data";

export default function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <SectionHead
          eyebrow="// Experiência"
          title={
            <>
              Onde já deixei <em>código em produção</em>
            </>
          }
          sub="Cinco anos de caminho: da operação e sistemas, ao desenho completo de plataformas empresariais."
        />

        <div className="timeline">
          <motion.div
            className="timeline-line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          {EXPERIENCE.map((item, i) => (
            <Reveal key={`${item.company}-${i}`} delay={i * 0.04}>
              <div className="tl-item">
                <span className="tl-dot" />
                <div className="tl-card">
                  <div className="tl-top">
                    <h3>{item.role}</h3>
                    <span className="tl-date">{item.period}</span>
                  </div>
                  <div className="tl-company">{item.company}</div>
                  {item.flags && <span className="tl-flags">{item.flags}</span>}
                  <ul>
                    {item.bullets.map((b) => (
                      <li key={b.slice(0, 40)} dangerouslySetInnerHTML={{ __html: b }} />
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}