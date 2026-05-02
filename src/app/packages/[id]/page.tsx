import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packages } from "@/lib/data";
import PackageDetailClient from "@/components/PackageDetailClient";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return packages.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) return {};

  const title = pkg.title;
  const description = `${pkg.description} ${pkg.duration} from ₹${pkg.price.toLocaleString()} per person. Best time to visit: ${pkg.bestTimeToVisit}. ${pkg.highlights.slice(0, 2).join(". ")}.`;
  const ogImageUrl = pkg.image.includes("?")
    ? pkg.image.replace(/w=\d+/, "w=1200").replace(/\?/, "?w=1200&h=630&fit=crop&")
    : `${pkg.image}?w=1200&h=630&fit=crop`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} | Pravaas Holidays`,
      description,
      url: `/packages/${pkg.id}`,
      type: "article",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Pravaas Holidays`,
      description,
      images: [ogImageUrl],
    },
    alternates: { canonical: `/packages/${pkg.id}` },
  };
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pravaasholidays.com";

export default async function PackageDetailPage({ params }: Props) {
  const { id } = await params;
  const pkg = packages.find((p) => p.id === id);
  if (!pkg) notFound();

  const categoryUrl = pkg.category === "international" ? "/international" : "/domestic";
  const categoryLabel = pkg.category === "international" ? "International" : "Domestic";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryLabel,
        item: `${SITE_URL}${categoryUrl}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: pkg.title,
      },
    ],
  };

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg.title,
    description: pkg.description,
    touristType: pkg.perfectForCouples ? ["Couples", "Honeymooners"] : ["Adventure Travelers"],
    itinerary: pkg.itinerary.map((day) => ({
      "@type": "City",
      name: day.title,
    })),
    offers: {
      "@type": "Offer",
      price: pkg.price.toString(),
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "TravelAgency",
        name: "Pravaas Holidays",
      },
    },
    provider: {
      "@type": "TravelAgency",
      name: "Pravaas Holidays",
      url: "https://www.pravaasholidays.com",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pkg.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PackageDetailClient pkg={pkg} />
    </>
  );
}
