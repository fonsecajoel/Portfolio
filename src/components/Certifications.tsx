import { Reveal, SectionHead } from "./Reveal";
import { CERTS } from "../data";

export default function Certifications() {
  return (
    <section className="section" id="certificacoes">
      <div className="container">
        <SectionHead
          eyebrow="// Formação"
          title={
            <>
              Formação &amp; <em>certificações</em>
            </>
          }
          sub="A base académica e as certificações que reforçam o trabalho do dia a dia."
        />

        <div className="edu-grid">
          <Reveal>
            <div className="edu-card edu-card-uni">
              <h3>Licenciatura em Engenharia Informática</h3>
              <p>ISCTE — Instituto Universitário de Lisboa</p>
              <span className="edu-meta">Lisboa · Portugal</span>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="edu-card">
              <h3>Curso Profissional — Gestão e Programação de Sistemas Informáticos</h3>
              <p>Escola Secundária do Monte de Caparica</p>
              <span className="edu-meta">Almada · Portugal</span>
            </div>
          </Reveal>
        </div>

        <h3 className="sub-block-title">Certificações</h3>
        <div className="certs-grid">
          {CERTS.map((cert, i) => (
            <Reveal key={cert.title} delay={i * 0.06}>
              <div className="cert-card">
                <span className="cert-org">{cert.org}</span>
                <h4>{cert.title}</h4>
                <span className="cert-date">{cert.date}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}