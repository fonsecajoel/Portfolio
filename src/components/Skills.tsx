import type { CSSProperties } from "react";
import { Reveal, SectionHead } from "./Reveal";
import { SKILL_GROUPS } from "../data";
import { ArrowRightIcon } from "./icons";
import { scrollToId } from "../lib/scroll";

export default function Skills() {
  return (
    <section className="section section-alt" id="competencias">
      <div className="container">
        <SectionHead
          eyebrow="// Competências"
          title={
            <>
              Stack &amp; <em>práticas</em>
            </>
          }
          sub="As ferramentas que uso para passar da ideia ao sistema em produção, com segurança e observabilidade."
        />

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.07}>
              <div className="skill-card" style={{ "--dot-c": group.color } as CSSProperties}>
                <div className="skill-head">
                  <span className="skill-dot" />
                  <h3>{group.title}</h3>
                </div>
                <div className="skill-chips">
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.28}>
            <div className="skill-card skill-card-cta">
              <div className="skill-head">
                <span className="skill-dot" style={{ "--dot-c": "#22d3ee" } as CSSProperties} />
                <h3>Tecnologia é meio, não fim</h3>
              </div>
              <p>
                Cada ferramenta aparece numa arquitetura porque resolve um problema real —
                de requisitos, de operação ou de segurança.
              </p>
              <button className="btn btn-primary" onClick={() => scrollToId("projetos")}>
                Ver projetos reais
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}