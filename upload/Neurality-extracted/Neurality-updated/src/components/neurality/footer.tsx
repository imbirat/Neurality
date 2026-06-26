"use client";

import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <img
            src="/logo.png"
            alt="Neurality logo"
            className="footer-logo"
            width={28}
            height={28}
          />
          <span>Neurality-Inc</span>
        </div>
        <p className="footer-tagline">
          Building AI tools, bots, and modern digital systems.
        </p>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href={isHome ? "#home" : "/"}>Home</a>
          <a href={isHome ? "#products" : "/#products"}>Products</a>
          <a href={isHome ? "#faq" : "/#faq"}>FAQ</a>
          <a href={isHome ? "#about" : "/#about"}>About</a>
        </nav>

        <div className="footer-divider" aria-hidden="true" />

        <div className="footer-links-grid">
          <div className="footer-links-col">
            <span className="footer-links-heading">Products</span>
            <a href="/cortex">Cortex 4.6</a>
            <a href="/cortexcode">Cortex Code</a>
          </div>
          <div className="footer-links-col">
            <span className="footer-links-heading">Legal</span>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>

        <p className="footer-copy">© 2026 Neurality-Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
