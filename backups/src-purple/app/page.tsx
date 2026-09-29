import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ContentStrip } from "@/components/ContentStrip";
import { Pricing } from "@/components/Pricing";
import { Sports } from "@/components/Sports";
import { Catalog, Compare, Devices, Steps, Why } from "@/components/Features";
import { Guides, Reviews } from "@/components/Social";
import { Faq } from "@/components/Faq";
import { FinalCTA, FloatingWhatsApp, Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContentStrip />
        <Pricing />
        <Sports />
        <Catalog />
        <Why />
        <Steps />
        <Compare />
        <Devices />
        <Reviews />
        <Guides />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
