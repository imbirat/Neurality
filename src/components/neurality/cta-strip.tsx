import { Reveal } from "./reveal";

export function CtaStrip() {
  return (
    <section className="section cta-section" id="follow">
      <div className="container">
        <Reveal className="cta-card">
          <h2 className="cta-title">Want to follow along?</h2>
          <p className="cta-text">
            New products, updates, and open-source releases — straight from the
            Neurality team.
          </p>
          <div className="cta-buttons">
            <a href="/cortex" className="btn btn-primary">
              Try Cortex
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
            <a href="#products" className="btn btn-ghost">
              View Products
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
