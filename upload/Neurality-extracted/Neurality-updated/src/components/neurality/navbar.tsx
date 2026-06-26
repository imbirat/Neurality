"use client";

import { useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "faq", label: "FAQ" },
  { id: "about", label: "About" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Navbar scrolled state + scrollspy (active nav link)
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 8);

      // Scrollspy: iterate sections in DOM order; the last one whose top
      // is above the trigger line is the active section.
      const trigger = scrollY + window.innerHeight * 0.4;
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("main section[id]")
      );
      let current = sections[0]?.id || "home";
      for (const el of sections) {
        const top = el.getBoundingClientRect().top + scrollY - 1;
        if (top <= trigger) current = el.id;
      }
      setActiveId(current);
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on resize to desktop / on Escape
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  // Smooth scroll with navbar offset (only on homepage)
  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH =
        document.querySelector<HTMLElement>(".navbar")?.offsetHeight ?? 72;
      const top =
        target.getBoundingClientRect().top + window.scrollY - navH - 12;
      window.scrollTo({ top, behavior: "smooth" });
      setMenuOpen(false);
    },
    []
  );

  return (
    <>
      <header className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container nav-inner">
          <a
            href={isHome ? "#home" : "/"}
            className="brand"
            aria-label="Neurality home"
            onClick={isHome ? (e) => handleNavClick(e, "home") : undefined}
          >
            <img
              src="/logo.png"
              alt="Neurality logo"
              className="brand-logo"
              width={40}
              height={40}
            />
            <span className="brand-name">Neurality</span>
          </a>

          <nav
            className={`nav-links${menuOpen ? " open" : ""}`}
            aria-label="Primary navigation"
          >
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={isHome ? `#${l.id}` : `/#${l.id}`}
                className={`nav-link${isHome && activeId === l.id ? " active" : ""}`}
                onClick={isHome ? (e) => handleNavClick(e, l.id) : undefined}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className={`icon-btn menu-toggle${menuOpen ? " open" : ""}`}
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="navLinks"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span className="menu-bar" />
              <span className="menu-bar" />
              <span className="menu-bar" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`menu-backdrop${menuOpen ? " show" : ""}`}
        onClick={() => setMenuOpen(false)}
        hidden={!menuOpen}
        style={menuOpen ? undefined : { display: "none" }}
      />
    </>
  );
}
