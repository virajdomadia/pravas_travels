import type { Metadata } from "next";
import Image from "next/image";
import { packages } from "@/lib/data";
import InternationalPackagesClient from "@/components/InternationalPackagesClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pravaasholidays.com";

export const metadata: Metadata = {
  title: "International Tour Packages — Bali, Paris, Dubai & More",
  description:
    "Browse curated international holiday packages from India — Bali, Paris, Dubai, Switzerland, Japan, Maldives. Honeymoon & couple packages starting ₹24,999. Custom itineraries, transparent pricing.",
  openGraph: {
    title: "International Tour Packages | Pravaas Holidays",
    description:
      "Bali to Paris, Dubai to Maldives — curated international packages for couples and luxury travelers. Starting ₹24,999 per person.",
    url: "/international",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "International travel packages",
      },
    ],
  },
  twitter: {
    title: "International Tour Packages | Pravaas Holidays",
    description: "Bali, Paris, Dubai, Maldives — curated couple packages from ₹24,999.",
    images: ["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"],
  },
  alternates: { canonical: "/international" },
};

export default function InternationalPage() {
  const internationalPackages = packages.filter((p) => p.category === "international");

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "International Tour Packages | Pravaas Holidays",
    description: "Curated international travel packages for couples and luxury travelers",
    numberOfItems: internationalPackages.length,
    itemListElement: internationalPackages.map((pkg, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "TouristTrip",
        name: pkg.title,
        description: pkg.description,
        url: `${SITE_URL}/packages/${pkg.id}`,
        image: pkg.image,
        offers: {
          "@type": "Offer",
          price: pkg.price.toString(),
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      {/* Hero banner */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
          alt="International travel"
          fill
          className="absolute inset-0 object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Explore the world
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            International Packages
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Bali to Paris, Dubai to Japan — curated international experiences for couples and luxury travelers.
          </p>
        </div>
      </section>

      <InternationalPackagesClient />
    </>
  );
}
