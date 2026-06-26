import { Reveal } from "./reveal";
import { ProductCard } from "./product-card";

const PRODUCTS = [
  {
    name: "Cortex",
    href: "/cortex",
    external: false,
    description: (
      <>
        An AI chatbot platform.{" "}
        <em>Rebranded from Axion AI to Cortex AI.</em>
      </>
    ),
    status: "dev" as const,
    statusLabel: "Coming soon",
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
    name: "Axion",
    href: "https://axionbot.qzz.io",
    external: true,
    description:
      "Powerful Discord bot with automod, anti-nuke, and more — for free.",
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
];

export function Products() {
  return (
    <section className="section" id="products">
      <div className="container">
        <Reveal className="section-head">
          <span className="section-tag">Our Products</span>
          <h2 className="section-title">What we&apos;re building</h2>
          <p className="section-subtitle">
            A growing suite of AI tools, bots, and modern applications.
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
              external={p.external}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
