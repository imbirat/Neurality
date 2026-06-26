export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand column */}
          <div>
            <div className="footer-brand">
              <img
                src="/logo.png"
                alt="Neurality logo"
                className="footer-logo"
                width={36}
                height={36}
              />
              <span>Neurality</span>
            </div>
            <p className="footer-brand-tag">
              Building AI chatbot platforms, Discord bots, and modern web
              applications.
            </p>
          </div>

          {/* Products column */}
          <div className="footer-links-col">
            <span className="footer-links-heading">Products</span>
            <a href="/cortex">Cortex</a>
            <a href="/cortex4.6">Cortex 4.6</a>
            <a href="/cortexcode">Cortex Code</a>
            <a
              href="https://axionbot.qzz.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Axion
            </a>
          </div>

          {/* Legal column */}
          <div className="footer-links-col">
            <span className="footer-links-heading">Legal</span>
            <a href="/terms">Terms of Service</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>

        <p className="footer-copy">
          © 2026 Neurality-Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
