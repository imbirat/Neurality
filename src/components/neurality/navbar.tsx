"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const DOCS_URL = "https://axionbot.qzz.io";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      ticking = false;
    };
    const handler = () => {
      if (!ticking) {
        window.requestAnimationFrame(onScroll);
        ticking = true;
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`navbar${scrolled ? " scrolled" : ""}`}>
      <div className="container nav-inner">
        {/* Left: logo + Neurality */}
        <Link href="/" className="brand" aria-label="Neurality home">
          <img
            src="/logo.png"
            alt="Neurality logo"
            className="brand-logo"
            width={40}
            height={40}
          />
          <span>Neurality</span>
        </Link>

        {/* Right: Try Cortex + Docs */}
        <nav className="nav-actions" aria-label="Primary navigation">
          <Link href="/cortex" className="btn btn-primary btn-sm">
            Try Cortex
            <svg viewBox="0 0 24 24" width={16} height={16} aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 6l6 6-6 6"
              />
            </svg>
          </Link>
          <a
            href={DOCS_URL}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
            <svg viewBox="0 0 24 24" width={14} height={14} aria-hidden="true">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 17L17 7M9 7h8v8"
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}
