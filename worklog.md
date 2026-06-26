---
Task ID: 1
Agent: main (Z.ai Code)
Task: Remove old UI and build the Neurality website in Next.js with pages /home, /terms, /privacy, /cortex, /cortex4.6, /cortexcode using a cream/coral design system.

Work Log:
- Inspected uploaded `/home/z/my-project/upload/Neurality-updated.zip` — contained a previous Neurality implementation with logo.png/svg, components, and a cream/coral CSS design system matching the requested color spec.
- Copied public assets (logo.png, logo.svg, favicon.ico, robots.txt) from extracted zip into `public/`.
- Wrote `src/app/neurality.css` — full design system (cream #f7f3ee bg, dark brown #1c1814 text, coral #e8755a accent, gray #5a5249 soft text). Adapted navbar to flex layout (logo left / actions right) and footer to 3-column grid. Added `.coming-soon-*`, `.whats-new-*`, and `.product-page-*` styles.
- Updated `src/app/layout.tsx` with Neurality metadata + imported neurality.css.
- Wrote neurality components: `reveal.tsx`, `back-to-top.tsx`, `navbar.tsx` (logo+Neurality left; Try Cortex button + Docs external link right), `hero.tsx`, `product-card.tsx`, `products.tsx` (Cortex + Axion), `faq.tsx` (6 FAQs), `cta-strip.tsx` ("Want to follow along?"), `footer.tsx` (Neurality | Products: Cortex/Cortex 4.6/Cortex Code/Axion | Legal: Terms/Privacy | © 2026).
- Wrote pages: `/` (home), `/home` (redirect to /), `/cortex` (big "Coming soon" in coral gradient), `/cortex4.6` (Introducing Cortex 4.6 + chatting/coding/learning/reasoning capabilities), `/cortexcode` (Introducing Cortex Code + "What's new?" checklist: sub-agents, built for coding, Cortex 4.7 Code model, new best model), `/terms`, `/privacy`.
- Ran `bun run lint` — clean, no errors.
- Verified all routes return 200 (/home returns 307 redirect).
- Agent Browser verification: home renders all sections; FAQ accordion works; navigation between /cortex, /cortex4.6, /cortexcode works; /terms and /privacy render; design tokens confirmed (cream bg, coral accent, dark text); mobile layout collapses to single column; Docs + Axion links point to https://axionbot.qzz.io (new tab); no console/hydration errors.

Stage Summary:
- All 6 requested pages filled and verified end-to-end via Agent Browser.
- Design system exactly matches requested colors (beige/cream bg, dark brown text, coral accent, medium-gray descriptive text).
- Navbar matches spec: logo+Neurality left, Try Cortex (/cortex) + Docs (https://axionbot.qzz.io) right.
- Footer matches spec: 3-column with Products (Cortex, Cortex 4.6, Cortex code, Axion) and Legal (Terms, Privacy), © 2026 Neurality-Inc.
- Production-ready, responsive, accessible, lint-clean.
