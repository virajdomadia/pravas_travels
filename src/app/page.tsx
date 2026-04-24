import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhyChooseUs from "@/components/WhyChooseUs";
import PopularDestinations from "@/components/PopularDestinations";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <FeaturedPackages />
      <WhyChooseUs />
      <PopularDestinations />
      <Testimonials />
      <ContactForm />
      <CTABanner />
      <Footer />
    </div>
  );
}
