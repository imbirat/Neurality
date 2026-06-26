import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { Reveal } from "@/components/neurality/reveal";

export const metadata: Metadata = {
  title: "Cortex 4.6 — Neurality",
  description:
    "Introducing Cortex 4.6 — a powerful model made for chatting, coding, learning, and reasoning.",
};

const CAPABILITIES = [
  {
    title: "Chatting",
    desc: "Fluid, natural conversation that holds context across long exchanges and responds with clarity.",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
      />
    ),
  },
  {
    title: "Coding",
    desc: "Write, review, and debug code across popular languages — Cortex 4.6 understands structure and intent, not just syntax.",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
      />
    ),
  },
  {
    title: "Learning",
    desc: "Break down complex topics into clear, structured explanations that help you actually understand, not just memorise.",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5"
      />
    ),
  },
  {
    title: "Reasoning",
    desc: "Step through problems methodically. Cortex 4.6 reasons through multi-step tasks and shows its work.",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 21h6M12 17v4M5 3h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 8h.01M15 8h.01M9 12h6"
      />
    ),
  },
  {
    title: "Long context",
    desc: "Work with large documents, codebases, and extended conversations without losing the thread.",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h16M4 18h10"
      />
    ),
  },
  {
    title: "One model",
    desc: "A single model that handles conversation, code, learning, and reasoning — no switching contexts.",
    icon: (
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.8 5.7 21l2.3-7.2-6-4.4h7.6z"
      />
    ),
  },
];

export default function Cortex46Page() {
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
              <h1 className="product-page-title">Cortex 4.6</h1>
            </Reveal>
            <Reveal>
              <p className="product-page-sub">
                A powerful model made for chatting, coding, learning, and
                reasoning.
              </p>
            </Reveal>
            <Reveal>
              <p className="product-page-body">
                Cortex 4.6 brings conversation, code, learning, and reasoning
                into a single capable model. Whether you&apos;re drafting ideas,
                debugging a project, exploring a new topic, or working through a
                complex problem, Cortex 4.6 keeps up.
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
                <a href="/cortexcode" className="btn btn-ghost">
                  Explore Cortex Code
                </a>
              </div>
            </Reveal>
          </div>
          <div className="hero-glow" aria-hidden="true" />
        </section>

        {/* Capabilities */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Built for what you do</h2>
              <p className="section-subtitle">
                One model, four core strengths — and the context to hold it all
                together.
              </p>
            </Reveal>

            <div className="product-features-grid">
              {CAPABILITIES.map((f, i) => (
                <Reveal key={f.title} index={i}>
                  <article className="card feature-card">
                    <div className="feature-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" width={22} height={22}>
                        {f.icon}
                      </svg>
                    </div>
                    <h3 className="feature-card-title">{f.title}</h3>
                    <p className="feature-card-desc">{f.desc}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Closing wordmark */}
        <div className="container">
          <p className="model-wordmark" aria-hidden="true">
            Cortex 4.6
          </p>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
