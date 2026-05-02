import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import FeaturedPackages from "@/components/FeaturedPackages";
import WhyPravaas from "@/components/WhyPravaas";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pravaas Holidays | Curated Luxury Travel for Couples",
  description:
    "Premium, curated travel experiences for couples and luxury travelers. Honeymoon packages, anniversary getaways, international & domestic tours — planned by dedicated travel experts. Enquire today.",
  openGraph: {
    title: "Pravaas Holidays | Curated Luxury Travel for Couples",
    description:
      "Premium, curated travel experiences for couples and luxury travelers. Honeymoon packages, anniversary getaways — planned by dedicated travel experts.",
    url: "/",
    images: [
      {
        url: "/pravaas-logo.png",
        width: 1200,
        height: 630,
        alt: "Pravaas Holidays — Curated Luxury Travel",
      },
    ],
  },
  twitter: {
    title: "Pravaas Holidays | Curated Luxury Travel for Couples",
    description:
      "Premium, curated travel experiences for couples. Honeymoon packages, anniversary getaways — planned by dedicated travel experts.",
    images: ["/pravaas-logo.png"],
  },
  alternates: { canonical: "/" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Pravaas Holidays",
  description:
    "Premium, curated travel experiences for couples and luxury travelers. Honeymoon packages, anniversary getaways, international & domestic tours.",
  url: "https://www.pravaasholidays.com",
  telephone: "+919167439172",
  email: "holidayspravaas@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+919167439172",
    contactType: "customer service",
    availableLanguage: ["English", "Hindi"],
    contactOption: "TollFree",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "20:00",
  },
  sameAs: [
    "https://instagram.com/pravaasholidays",
    "https://facebook.com/pravaasholidays",
  ],
  areaServed: "IN",
  priceRange: "₹₹₹",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: testimonials.length.toString(),
    bestRating: "5",
  },
  review: testimonials.map((t) => ({
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: t.rating.toString(),
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: t.name,
    },
    reviewBody: t.content,
    itemReviewed: {
      "@type": "TravelAgency",
      name: "Pravaas Holidays",
    },
  })),
};

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pravaasholidays.com";

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pravaas Holidays",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/international?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero />
      <TrustBar />
      <FeaturedPackages />
      <WhyPravaas />
      <Testimonials />
      <CTASection />
    </>
  );
}
