import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { Reveal } from "@/components/neurality/reveal";

export const metadata: Metadata = {
  title: "Cortex — Coming Soon | Neurality",
  description:
    "Cortex is coming soon. The AI chatbot platform from Neurality — rebranded from Axion AI to Cortex AI.",
};

export default function CortexPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="coming-soon-page">
          <div className="hero-glow" aria-hidden="true" />
          <Reveal>
            <span className="coming-soon-eyebrow">
              <span className="pulse-dot" aria-hidden="true" />
              Cortex
            </span>
          </Reveal>
          <Reveal>
            <h1 className="coming-soon-big">Coming soon</h1>
          </Reveal>
          <Reveal>
            <p className="coming-soon-sub">
              An AI chatbot platform from Neurality. Rebranded from Axion AI to
              Cortex AI — we&apos;re putting the finishing touches on it.
            </p>
          </Reveal>
          <Reveal className="coming-soon-cta">
            <a href="/cortex4.6" className="btn btn-ghost">
              Explore Cortex 4.6
            </a>
            <a href="/#products" className="btn btn-ghost">
              ← Back to Products
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
