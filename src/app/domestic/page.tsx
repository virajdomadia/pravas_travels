import type { Metadata } from "next";
import Image from "next/image";
import { packages } from "@/lib/data";
import DomesticPackagesClient from "@/components/DomesticPackagesClient";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pravaasholidays.com";

export const metadata: Metadata = {
  title: "Domestic Tour Packages India — Kerala, Rajasthan, Andaman & More",
  description:
    "Explore India's finest destinations with Pravaas Holidays — Kerala backwaters, Rajasthan forts, Andaman beaches, Himachal hills, Goa. Honeymoon & couple packages starting ₹12,999.",
  openGraph: {
    title: "Domestic Tour Packages India | Pravaas Holidays",
    description:
      "Kerala backwaters to Rajasthan forts, Andaman beaches to Himalayan meadows — India's finest curated for you. Starting ₹12,999 per person.",
    url: "/domestic",
    images: [
      {
        url: "https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Domestic travel packages India",
      },
    ],
  },
  twitter: {
    title: "Domestic Tour Packages India | Pravaas Holidays",
    description: "Kerala, Rajasthan, Andaman, Himachal, Goa — couple packages from ₹12,999.",
    images: ["https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1200&q=80"],
  },
  alternates: { canonical: "/domestic" },
};

export default function DomesticPage() {
  const domesticPackages = packages.filter((p) => p.category === "domestic");

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Domestic Tour Packages India | Pravaas Holidays",
    description: "India's finest destinations curated for couples and travelers",
    numberOfItems: domesticPackages.length,
    itemListElement: domesticPackages.map((pkg, idx) => ({
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
          src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=1200&q=80"
          alt="Domestic travel India"
          fill
          className="absolute inset-0 object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Discover India
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Domestic Packages
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            From Kerala backwaters to Rajasthan forts, Andaman beaches to Himalayan meadows — India&apos;s finest, curated for you.
          </p>
        </div>
      </section>

      <DomesticPackagesClient />
    </>
  );
}
