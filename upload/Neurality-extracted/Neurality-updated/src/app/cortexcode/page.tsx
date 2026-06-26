import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { Reveal } from "@/components/neurality/reveal";

export const metadata: Metadata = {
  title: "Cortex Code — Neurality",
  description:
    "Introducing Cortex Code — a new model and code mode built for subagents, deep repo context, and fast iteration.",
};

export default function CortexCodePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="product-page-hero">
          <div className="container hero-inner">
            <Reveal>
              <span className="badge badge-online" style={{ marginBottom: 28 }}>
                <span className="badge-dot" />
                Now available
              </span>
            </Reveal>
            <Reveal>
              <h1 className="product-page-title">Introducing Cortex Code</h1>
            </Reveal>
            <Reveal>
              <p className="product-page-sub">
                A new model and code mode has arrived.
              </p>
            </Reveal>
            <Reveal>
              <p className="product-page-body">
                {/*
                  NOTE: "and more…" below resolved with placeholder specifics.
                  Replace with the real feature list before launch.
                */}
                Cortex 4.7 Code supports subagents and more — including deeper
                repository awareness that spans files and history, and a faster
                iteration loop so you spend less time waiting and more time
                building.
              </p>
            </Reveal>
            <Reveal>
              <div style={{ marginTop: 32 }}>
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
              </div>
            </Reveal>
          </div>
          <div className="hero-glow" aria-hidden="true" />
        </section>

        {/* Feature cards */}
        {/* NOTE: placeholder feature cards — replace with real verified specs before launch */}
        <section className="section">
          <div className="container">
            <Reveal className="section-head">
              <span className="section-tag">What&apos;s new in 4.7</span>
              <h2 className="section-title">Code mode, upgraded</h2>
              <p className="section-subtitle">
                Cortex Code goes beyond autocomplete — it understands your
                project and works alongside you.
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
                        d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.8 5.7 21l2.3-7.2-6-4.4h7.6z"
                      />
                    </svg>
                  </div>
                  <h3 className="feature-card-title">Subagents</h3>
                  <p className="feature-card-desc">
                    Spin up focused subagents to tackle specific parts of a
                    task in parallel — Cortex Code coordinates and consolidates
                    the results.
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
                        d="M3 7h18M3 12h18M3 17h12"
                      />
                    </svg>
                  </div>
                  <h3 className="feature-card-title">Repo-aware context</h3>
                  <p className="feature-card-desc">
                    Understands your repository across files, branches, and
                    history — so suggestions are grounded in your actual
                    codebase, not generic patterns.
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
                        d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                      />
                    </svg>
                  </div>
                  <h3 className="feature-card-title">Faster code mode</h3>
                  <p className="feature-card-desc">
                    Optimised for low latency during active editing sessions.
                    Get results quickly without sacrificing depth when it
                    matters.
                  </p>
                </article>
              </Reveal>
            </div>
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
