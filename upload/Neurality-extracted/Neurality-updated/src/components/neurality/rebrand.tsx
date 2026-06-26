import { Reveal } from "./reveal";

export function Rebrand() {
  return (
    <section className="section rebrand-section" id="about">
      <div className="container rebrand-inner">
        <Reveal className="rebrand-logo-wrap">
          <div className="rebrand-logo-ring" aria-hidden="true" />
          <img
            src="/logo.png"
            alt="Neurality logo mark"
            className="rebrand-logo"
            width={160}
            height={160}
          />
        </Reveal>
        <Reveal>
          <h2 className="rebrand-statement">
            We have rebranded from{" "}
            <span className="muted-strike">Axion-team</span> to{" "}
            <span className="accent-text">Neurality-Inc</span>
          </h2>
        </Reveal>
        <Reveal>
          <p className="rebrand-sub">
            Same team, sharper identity. We&apos;re focusing on AI tools, bots,
            and modern digital systems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
