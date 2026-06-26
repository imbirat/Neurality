import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { ProductPageLayout } from "@/components/neurality/product-page";

export const metadata: Metadata = {
  title: "birat.gg — Neurality",
  description:
    "birat.gg is a powerful music bot for Discord, currently in development by Neurality.",
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
          d="M9 18V6l11-2v12"
        />
        <circle cx={6} cy={18} r={3} fill="currentColor" />
        <circle cx={17} cy={16} r={3} fill="currentColor" />
      </svg>
    ),
    title: "Music playback",
    description:
      "Stream music directly into your Discord voice channels. Queue tracks, skip, pause, and control playback — all from chat commands.",
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
          d="M4 6h16M4 12h16M4 18h10"
        />
      </svg>
    ),
    title: "Queue management",
    description:
      "Build shared playlists collaboratively. Multiple users can add tracks, view the upcoming queue, and vote to skip — keeping the whole server in control.",
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
          d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
        />
      </svg>
    ),
    title: "High-quality audio",
    description:
      "Optimised for low-latency, high-quality audio streaming. birat.gg aims to sound as good as a dedicated music service, without leaving Discord.",
  },
];

export default function BiratGgPage() {
  return (
    <>
      <Navbar />
      <ProductPageLayout
        name="birat.gg"
        tagline="Powerful music bot for Discord."
        description={
          <>
            birat.gg brings rich music playback to your Discord server.
            Search and stream tracks, build shared queues, and control
            playback without ever leaving your voice channel. Currently
            in active development — expect early access details soon.
          </>
        }
        status="dev"
        statusNote="birat.gg is in active development. Features described here reflect our current plans and are subject to change. We will announce availability when the bot is ready for wider use."
        features={FEATURES}
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
