import { Navbar } from "@/components/neurality/navbar";
import { Hero } from "@/components/neurality/hero";
import { Products } from "@/components/neurality/products";
import { Faq } from "@/components/neurality/faq";
import { CtaStrip } from "@/components/neurality/cta-strip";
import { Footer } from "@/components/neurality/footer";
import { BackToTop } from "@/components/neurality/back-to-top";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Faq />
        <CtaStrip />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
