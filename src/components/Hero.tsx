"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import EnquiryModal from "./EnquiryModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="relative w-full min-h-[92vh] flex items-center overflow-hidden" aria-label="Hero section">
      {/* Background image */}
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=85"
        alt="Couple travelling"
        fill
        priority
        className="absolute inset-0 object-cover"
        sizes="100vw"
      />
      {/* Overlay — deep navy → navy-deep gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy-deep/55 to-navy/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-xl">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4 animate-slide-down">
            Curated luxury travel
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Travel, perfected<br />by Pravaas.
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Curated luxury travel experiences for couples — every detail handled, every moment crafted.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center justify-center bg-cta hover:bg-cta-hover text-white font-semibold px-8 py-4 rounded-full text-sm btn-animate hover-lift transition-colors"
            >
              Enquire Now
            </button>
            <Link
              href="/international"
              className="inline-flex items-center justify-center border border-white/50 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-sm hover-lift"
            >
              Explore Packages
            </Link>
          </div>

          <EnquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-surface to-transparent" />
    </section>
  );
}
