import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { Reveal } from "@/components/neurality/reveal";

export const metadata: Metadata = {
  title: "Cortex 4.6 — Neurality",
  description:
    "Introducing Cortex 4.6 — the powerful model for chatting and coding. Coming soon from Neurality.",
};

export default function CortexPage() {
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
                Coming soon
              </span>
            </Reveal>
            <Reveal>
              <h1 className="product-page-title">Introducing Cortex 4.6</h1>
            </Reveal>
            <Reveal>
              <p className="product-page-sub">
                The powerful model for chatting and coding.
              </p>
            </Reveal>
            <Reveal>
              <p className="product-page-body">
                {/* NOTE: placeholder copy — replace with real model details before launch */}
                Cortex 4.6 is designed for fast, fluid conversation and capable
                coding assistance in a single model. Whether you&apos;re drafting
                ideas, debugging code, or exploring complex topics, Cortex 4.6
                meets you where you are and keeps up.
              </p>
            </Reveal>
          </div>
          <div className="hero-glow" aria-hidden="true" />
        </section>

        {/* Feature cards */}
        {/* NOTE: placeholder feature cards — replace with verified specs before launch */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="section-tag">Capabilities</span>
              <h2 className="section-title">Built for what you do</h2>
              <p className="section-subtitle">
                A single model that handles conversation and code without
                switching contexts.
              </p>
            </Reveal>

            <div className="product-features-grid">
              <Reveal index={0}>
                <article className="card feature-card">
                  <div className="feature-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width={22} height={22}>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="feature-card-title">Natural conversation</h3>
                  <p className="feature-card-desc">
                    Engage in long, coherent discussions. Cortex 4.6 maintains
                    context across complex exchanges and responds with clarity.
                  </p>
                </article>
              </Reveal>

              <Reveal index={1}>
                <article className="card feature-card">
                  <div className="feature-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width={22} height={22}>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
                      />
                    </svg>
                  </div>
                  <h3 className="feature-card-title">Strong at code</h3>
                  <p className="feature-card-desc">
                    Write, review, and debug code across popular languages.
                    Cortex 4.6 understands structure and intent, not just syntax.
                  </p>
                </article>
              </Reveal>

              <Reveal index={2}>
                <article className="card feature-card">
                  <div className="feature-card-icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" width={22} height={22}>
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h10"
                      />
                    </svg>
                  </div>
                  <h3 className="feature-card-title">Long context</h3>
                  <p className="feature-card-desc">
                    Work with large documents, codebases, and extended
                    conversations without losing the thread.
                  </p>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Coming soon notice */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <Reveal>
              <div className="product-coming-soon">
                <p className="product-coming-soon-title">Coming soon</p>
                <p className="product-coming-soon-text">
                  Cortex 4.6 is currently in development. We&apos;ll announce
                  availability here and across our channels when it&apos;s
                  ready.
                </p>
                <a href="/#products" className="btn btn-ghost">
                  ← Back to Products
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Closing wordmark */}
        <div className="container">
          <p className="model-wordmark" aria-hidden="true">Cortex</p>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
