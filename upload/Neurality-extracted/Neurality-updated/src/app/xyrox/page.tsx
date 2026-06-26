import type { Metadata } from "next";
import { Navbar } from "@/components/neurality/navbar";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";
import { ProductPageLayout } from "@/components/neurality/product-page";

export const metadata: Metadata = {
  title: "Xyrox — Neurality",
  description:
    "Xyrox is an open-source tool that originated from the Axion team. It is no longer actively maintained but remains publicly available.",
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
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "Open source",
    description:
      "Xyrox was built in the open from day one. The full source is available for anyone to read, fork, or build on. No hidden behaviour.",
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
          d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.8 5.7 21l2.3-7.2-6-4.4h7.6z"
        />
      </svg>
    ),
    title: "Axion origins",
    description:
      "Xyrox grew directly out of tooling the Axion team built for internal use. Many of its patterns informed how Axion itself was architected.",
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
          d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
        />
      </svg>
    ),
    title: "Snapshot in time",
    description:
      "Active development has stopped. Xyrox works as last released, but will not receive new features, security patches, or bug fixes going forward.",
  },
];

export default function XyroxPage() {
  return (
    <>
      <Navbar />
      <ProductPageLayout
        name="Xyrox"
        tagline="Open-source tool, no longer actively maintained."
        description={
          <>
            Xyrox is an open-source utility that originated from the Axion
            team. It is currently operational but is not receiving active
            development. The source code remains publicly available for anyone
            who wants to fork it or build on it independently.
          </>
        }
        status="archived"
        statusNote="Xyrox is no longer actively maintained. It is provided as-is, without warranty or ongoing support. No new features, bug fixes, or security updates are planned. If you rely on Xyrox in production, we recommend reviewing the source and maintaining your own fork."
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
