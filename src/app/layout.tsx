import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Viewport } from "next";
import LayoutWrapper from "@/components/LayoutWrapper";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.pravaasholidays.com";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: "%s | Pravaas Holidays",
    default: "Pravaas Holidays | Curated Luxury Travel for Couples",
  },
  description:
    "Premium, curated travel experiences for couples and luxury travelers. Honeymoon packages, anniversary getaways — planned by dedicated travel experts. Enquire today.",
  keywords: [
    "luxury travel",
    "honeymoon packages",
    "couple travel",
    "premium tours",
    "Pravaas Holidays",
    "international tour packages",
    "domestic tour packages India",
    "honeymoon packages from India",
    "Bali honeymoon",
    "Paris couple trip",
    "Kerala backwaters",
    "Rajasthan tour",
    "Maldives overwater villa",
  ],
  authors: [{ name: "Pravaas Holidays", url: SITE_URL }],
  creator: "Pravaas Holidays",
  publisher: "Pravaas Holidays",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Pravaas Holidays",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    site: "@pravaasholidays",
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
