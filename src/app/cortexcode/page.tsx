import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { Reveal } from "@/components/neurality/reveal";

export const metadata: Metadata = {
  title: "Cortex Code — Neurality",
  description:
    "Introducing Cortex Code — a new code mode with sub-agents, a dedicated Cortex 4.7 Code model, and more.",
};

const WHATS_NEW = [
  {
    title: "Can use sub-agents",
    desc: "Spin up focused sub-agents to tackle parts of a task in parallel, then consolidate the results.",
  },
  {
    title: "Built for coding",
    desc: "A dedicated code mode designed from the ground up for development workflows.",
  },
  {
    title: "A new model for code mode only — Cortex 4.7 Code",
    desc: "A purpose-built model tuned exclusively for code mode performance.",
  },
  {
    title: "New best model",
    desc: "Our most capable model yet, raising the bar across the board.",
  },
];

export default function CortexCodePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="product-page-hero">
          <div className="container hero-inner">
            <Reveal>
              <span className="badge badge-dev" style={{ marginBottom: 28 }}>
                <span className="badge-dot" />
                Introducing
              </span>
            </Reveal>
            <Reveal>
              <h1 className="product-page-title">Cortex Code</h1>
            </Reveal>
            <Reveal>
              <p className="product-page-sub">
                A new mode has arrived — called code mode.
              </p>
            </Reveal>
            <Reveal>
              <p className="product-page-body">
                Cortex Code is a brand-new mode built specifically for
                developers. It pairs a dedicated code model with sub-agent
                support so you can move faster and build more.
              </p>
            </Reveal>
            <Reveal>
              <div className="cta-buttons" style={{ marginTop: 32 }}>
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
                <a href="/cortex4.6" className="btn btn-ghost">
                  Explore Cortex 4.6
                </a>
              </div>
            </Reveal>
          </div>
          <div className="hero-glow" aria-hidden="true" />
        </section>

        {/* What's new */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="section-tag">What&apos;s new?</span>
              <h2 className="section-title">Everything new in Cortex Code</h2>
              <p className="section-subtitle">
                The biggest additions to the new code mode.
              </p>
            </Reveal>

            <div className="whats-new">
              {WHATS_NEW.map((item, i) => (
                <Reveal key={item.title} index={i}>
                  <article className="card whats-new-item">
                    <span className="whats-new-check" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width={18} height={18}>
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={2.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 6L9 17l-5-5"
                        />
                      </svg>
                    </span>
                    <span className="whats-new-text">
                      {item.title}
                      <span
                        style={{
                          display: "block",
                          fontWeight: 400,
                          color: "var(--text-soft)",
                          fontSize: "0.92rem",
                          marginTop: 4,
                        }}
                      >
                        {item.desc}
                      </span>
                    </span>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing wordmark */}
        <div className="container">
          <p className="model-wordmark" aria-hidden="true">
            Cortex Code
          </p>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
