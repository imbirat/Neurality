import { Reveal } from "./reveal";
import { ProductCard } from "./product-card";

const PRODUCTS = [
  {
    name: "Axion",
    href: "/axion",
    description: "Powerful Discord bot with automod, anti-nuke, and more — for free.",
    status: "online" as const,
    statusLabel: "Online",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.8 5.7 21l2.3-7.2-6-4.4h7.6z"
        />
      </svg>
    ),
  },
  {
    name: "Cortex",
    href: "/cortex",
    description: (
      <>
        AI chat bot web application.{" "}
        <em>Rebranded from Axion AI to Cortex AI.</em>
      </>
    ),
    status: "dev" as const,
    statusLabel: "In Development",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3a4 4 0 0 1 4 4v1a4 4 0 0 1-1 7.5V18a3 3 0 0 1-6 0v-2.5A4 4 0 0 1 8 8V7a4 4 0 0 1 4-4zM9 13h6"
        />
      </svg>
    ),
  },
  {
    name: "Xyrox",
    href: "/xyrox",
    description: "Open-source tool originally from Axion.",
    status: "archived" as const,
    statusLabel: "Online · Not updated",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 4l16 16M20 4L4 20"
        />
      </svg>
    ),
  },
  {
    name: "birat.gg",
    href: "/birat.gg",
    description: "Powerful music bot for Discord.",
    status: "dev" as const,
    statusLabel: "In Development",
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 18V6l11-2v12"
        />
        <circle cx={6} cy={18} r={3} fill="currentColor" />
        <circle cx={17} cy={16} r={3} fill="currentColor" />
      </svg>
    ),
  },
];

export function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">Products</span>
          <h2 className="section-title">What we&apos;re building</h2>
          <p className="section-subtitle">
            A growing suite of bots, apps, and open-source tools.
          </p>
        </Reveal>

        <div className="products-grid">
          {PRODUCTS.map((p, i) => (
            <ProductCard
              key={p.name}
              name={p.name}
              description={p.description}
              status={p.status}
              statusLabel={p.statusLabel}
              icon={p.icon}
              index={i}
              href={p.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
