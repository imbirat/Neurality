import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-inner">
        <Reveal>
          <span className="eyebrow">
            <span className="pulse-dot" aria-hidden="true" />
            Now building · 2026
          </span>
        </Reveal>
        <Reveal>
          <h1 className="hero-title">Neurality</h1>
        </Reveal>
        <Reveal>
          <p className="hero-description">
            We build AI tools, Discord bots, and modern web applications.
          </p>
        </Reveal>
        <Reveal className="hero-cta">
          <a href="#products" className="btn btn-primary">
            Explore Products
            <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </a>
          <a href="#about" className="btn btn-ghost">
            About Us
          </a>
        </Reveal>
      </div>
      <div className="hero-glow" aria-hidden="true" />
    </section>
  );
}
