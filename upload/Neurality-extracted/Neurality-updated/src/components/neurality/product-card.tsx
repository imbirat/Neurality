"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type Status = "online" | "dev" | "archived";

type ProductCardProps = {
  name: string;
  description: ReactNode;
  status: Status;
  statusLabel: string;
  icon: ReactNode;
  index: number;
  href?: string;
};

const STATUS_CLASS: Record<Status, string> = {
  online: "badge badge-online",
  dev: "badge badge-dev",
  archived: "badge badge-archived",
};

export function ProductCard({
  name,
  description,
  status,
  statusLabel,
  icon,
  index,
  href,
}: ProductCardProps) {
  const router = useRouter();
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !("IntersectionObserver" in window);
  });

  // Scroll reveal
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Pointer-follow glow
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  const handleClick = () => {
    if (href) router.push(href);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (href && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      router.push(href);
    }
  };

  return (
    <article
      ref={ref as any}
      className={`card product-card reveal${visible ? " visible" : ""}${href ? " product-card--link" : ""}`}
      onMouseMove={handleMove}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{ "--i": index } as CSSProperties}
      role={href ? "link" : undefined}
      tabIndex={href ? 0 : undefined}
      aria-label={href ? `Learn more about ${name}` : undefined}
    >
      <div className="product-top">
        <div className="product-icon" aria-hidden="true">
          {icon}
        </div>
        <span className={STATUS_CLASS[status]}>
          <span className="badge-dot" />
          {statusLabel}
        </span>
      </div>
      <h3 className="product-name">{name}</h3>
      <p className="product-desc">{description}</p>
      {href && (
        <span className="product-link-hint" aria-hidden="true">
          Learn more
          <svg viewBox="0 0 24 24" width={13} height={13}>
            <path
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14M13 6l6 6-6 6"
            />
          </svg>
        </span>
      )}
    </article>
  );
}
