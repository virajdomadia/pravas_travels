import type { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us — Plan Your Trip",
  description:
    "Get in touch with Pravaas Holidays. Drop a message or chat on WhatsApp. We respond within 2 hours. Mumbai-based travel experts for couples and luxury travelers.",
  openGraph: {
    title: "Contact Pravaas Holidays — Plan Your Trip",
    description:
      "Drop us a message or chat on WhatsApp. Our travel expert responds within 2 hours. No bots, no call centres — just real, personalised service.",
    url: "/contact",
    images: [
      {
        url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Contact Pravaas Holidays",
      },
    ],
  },
  twitter: {
    title: "Contact Pravaas Holidays",
    description: "Drop a message or chat on WhatsApp. We respond within 2 hours.",
    images: ["https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop"],
  },
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
