import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Pravas Travels | Premium Travel Packages & Tours",
  description:
    "Discover amazing travel packages to destinations across the world. Book your dream vacation with Pravas Travels - curated experiences, best prices, 24/7 support.",
  keywords: ["travel", "tours", "packages", "vacation", "adventure"],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-poppins">{children}</body>
    </html>
  );
}
