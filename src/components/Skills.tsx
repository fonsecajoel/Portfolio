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
          eyebrow="// Skills"
          title={
            <>
              Stack &amp; <em>practices</em>
            </>
          }
          sub="The tools I use to take an idea to a system in production, with security and observability."
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
                <h3>Technology is a means, not an end</h3>
              </div>
              <p>
                Every tool in an architecture is there because it solves a real problem —
                a requirement, an operation or a security one.
              </p>
              <button className="btn btn-primary" onClick={() => scrollToId("projetos")}>
                See real projects
                <ArrowRightIcon size={16} />
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}