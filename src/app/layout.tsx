import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";
import { Viewport } from "next";

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
  title: "Pravaas Holidays | Curated Luxury Travel for Couples",
  description:
    "Premium, curated travel experiences for couples and luxury travelers. Honeymoon packages, anniversary getaways — planned by dedicated travel experts. Enquire today.",
  keywords: ["luxury travel", "honeymoon packages", "couple travel", "premium tours", "Pravaas Holidays"],
  icons: {
    icon: "/favicon.png",
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
      <body className="min-h-screen flex flex-col font-body antialiased">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
