import { Reveal } from "@/components/neurality/reveal";
import type { ReactNode } from "react";

type Status = "online" | "dev" | "archived";

const STATUS_CONFIG: Record<
  Status,
  { label: string; cls: string }
> = {
  online: { label: "Online", cls: "badge badge-online" },
  dev: { label: "In Development", cls: "badge badge-dev" },
  archived: { label: "Online · Not updated", cls: "badge badge-archived" },
};

type FeatureItem = {
  icon: ReactNode;
  title: string;
  description: string;
};

type ProductPageProps = {
  name: string;
  tagline: string;
  description: ReactNode;
  status: Status;
  statusNote?: string;
  features: FeatureItem[];
  cta?: {
    label: string;
    href: string;
    primary?: boolean;
  };
  ctaSecondary?: {
    label: string;
    href: string;
  };
};

export function ProductPageLayout({
  name,
  tagline,
  description,
  status,
  statusNote,
  features,
  cta,
  ctaSecondary,
}: ProductPageProps) {
  const { label, cls } = STATUS_CONFIG[status];

  return (
    <main>
      {/* Hero */}
      <section className="product-page-hero">
        <div className="container hero-inner">
          <Reveal>
            <span className={cls} style={{ marginBottom: 28 }}>
              <span className="badge-dot" />
              {label}
            </span>
          </Reveal>
          <Reveal>
            <h1 className="product-page-title">{name}</h1>
          </Reveal>
          <Reveal>
            <p className="product-page-sub">{tagline}</p>
          </Reveal>
          <Reveal>
            <p className="product-page-body">{description}</p>
          </Reveal>
          {(cta || ctaSecondary) && (
            <Reveal>
              <div className="cta-buttons" style={{ marginTop: 32 }}>
                {cta && (
                  <a
                    href={cta.href}
                    className={cta.primary ? "btn btn-primary" : "btn btn-ghost"}
                    target={cta.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      cta.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {cta.label}
                    {cta.primary && (
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
                    )}
                  </a>
                )}
                {ctaSecondary && (
                  <a href={ctaSecondary.href} className="btn btn-ghost">
                    {ctaSecondary.label}
                  </a>
                )}
              </div>
            </Reveal>
          )}
        </div>
        <div className="hero-glow" aria-hidden="true" />
      </section>

      {/* Status note */}
      {statusNote && (
        <section className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="container">
            <Reveal>
              <div className="product-coming-soon">
                <p className="product-coming-soon-title">Status</p>
                <p className="product-coming-soon-text">{statusNote}</p>
                <a href="/#products" className="btn btn-ghost">
                  ← Back to Products
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Feature cards */}
      <section className="section">
        <div className="container">
          <div className="product-features-grid">
            {features.map((f, i) => (
              <Reveal key={f.title} index={i}>
                <article className="card feature-card">
                  <div className="feature-card-icon" aria-hidden="true">
                    {f.icon}
                  </div>
                  <h3 className="feature-card-title">{f.title}</h3>
                  <p className="feature-card-desc">{f.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
