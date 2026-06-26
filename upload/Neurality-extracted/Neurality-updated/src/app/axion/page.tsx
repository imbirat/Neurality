import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { ProductPageLayout } from "@/components/neurality/product-page";

export const metadata: Metadata = {
  title: "Axion — Neurality",
  description:
    "Axion is a free Discord bot with automod, anti-nuke protection, and powerful server management tools — built by Neurality.",
};

const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22}>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        />
      </svg>
    ),
    title: "Anti-nuke protection",
    description:
      "Detects and responds to mass bans, mass channel deletion, and permission escalation in real time. Axion rolls back damage and quarantines the offending account before the attack can finish.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22}>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    title: "Automod",
    description:
      "Automatically flags and removes spam, scam links, slurs, and unwanted content. Configure thresholds and allowed domains per-server — Axion adapts to your community's rules.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width={22} height={22}>
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
        />
      </svg>
    ),
    title: "Server management",
    description:
      "Moderation commands, role management, logging, and welcome messages — everything you need to run a healthy server, in one bot, completely free.",
  },
];

export default function AxionPage() {
  return (
    <>
      <Navbar />
      <ProductPageLayout
        name="Axion"
        tagline="Powerful Discord bot with automod, anti-nuke, and more — for free."
        description={
          <>
            Axion keeps your Discord community safe without asking you to pay
            for it. Drop it into your server and get immediate protection
            against raids, nukes, and spam. Fully configurable, always free.
          </>
        }
        status="online"
        features={FEATURES}
        cta={{
          label: "Add Axion to Discord",
          href: "https://discord.com/oauth2/authorize?client_id=axion",
          primary: true,
        }}
        ctaSecondary={{
          label: "← Back to Products",
          href: "/#products",
        }}
      />
      <Footer />
      <BackToTop />
    </>
  );
}
