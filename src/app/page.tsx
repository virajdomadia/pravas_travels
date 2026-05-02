import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhyPravaas from "@/components/WhyPravaas";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedPackages />
      <WhyPravaas />
      <Testimonials />
      <CTASection />
    </>
  );
}
