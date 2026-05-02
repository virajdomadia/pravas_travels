"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { whatsappURL } from "@/lib/data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/international", label: "International" },
  { href: "/domestic", label: "Domestic" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/pravaas-logo.png"
              alt="Pravaas Holidays"
              width={180}
              height={60}
              priority
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-body transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-gray-700 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappURL("Hi Pravaas! I'd like to enquire about a travel package.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy hover:bg-navy/90 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Enquire Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-navy p-2"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-200 pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block px-2 py-2 text-sm rounded transition-colors ${
                  pathname === link.href
                    ? "text-gold"
                    : "text-gray-700 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={whatsappURL("Hi Pravaas! I'd like to enquire about a travel package.")}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-2 bg-cta text-white text-sm font-semibold px-5 py-2 rounded-full text-center"
            >
              Enquire Now
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
