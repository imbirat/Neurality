"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** stagger index (used inside grids for sequential reveal) */
  index?: number;
  style?: CSSProperties;
  as?: keyof JSX.IntrinsicElements;
};

/**
 * Wraps content and fades/slides it into view when it enters the viewport.
 * Uses IntersectionObserver. Renders hidden first, then adds the `visible`
 * class once intersecting.
 */
export function Reveal({
  children,
  className = "",
  index,
  style,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !("IntersectionObserver" in window);
  });

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

  const combinedStyle: CSSProperties = {
    ...(typeof index === "number" ? ({ "--i": index } as CSSProperties) : {}),
    ...style,
  };

  const Component = Tag as any;
  return (
    <Component
      ref={ref as any}
      className={`reveal${visible ? " visible" : ""}${className ? ` ${className}` : ""}`}
      style={combinedStyle}
    >
      {children}
    </Component>
  );
}
