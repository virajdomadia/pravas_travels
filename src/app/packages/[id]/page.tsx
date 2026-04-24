"use client";

import { packages } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function PackageDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const pkg = packages.find((p) => p.id === params.id);
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  if (!pkg) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Package not found
            </h1>
            <Link
              href="/packages"
              className="text-blue-600 hover:text-blue-700 font-semibold"
            >
              ← Back to packages
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const whatsappMessage = `Hi Pravas Travels! I'm interested in the ${pkg.title} package (${pkg.duration}). Can you provide more details?`;

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section with Image */}
      <div className="relative w-full h-96 md:h-screen overflow-hidden mt-16">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Header Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-lg md:text-xl text-gray-200 mb-2">{pkg.location}</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{pkg.title}</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="bg-blue-600 px-6 py-2 rounded-full font-semibold">
              {pkg.duration}
            </span>
            <span className="text-3xl font-bold">₹{pkg.price.toLocaleString()}</span>
          </div>
        </div>

        {/* Sticky CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all">
            Enquire Now
          </button>
          <a
            href={`https://wa.me/919876543210?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {pkg.description}
            </p>
          </section>

          {/* Highlights */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Key Highlights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pkg.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <span className="text-2xl">✓</span>
                  <span className="text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Itinerary */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Itinerary</h2>
            <div className="space-y-4">
              {pkg.itinerary.map((day) => (
                <div
                  key={day.day}
                  className="border border-gray-200 rounded-lg overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setExpandedDay(expandedDay === day.day ? null : day.day)
                    }
                    className="w-full p-6 bg-gradient-to-r from-blue-50 to-teal-50 hover:from-blue-100 hover:to-teal-100 transition-colors flex items-center justify-between"
                  >
                    <div className="text-left">
                      <p className="text-sm font-medium text-blue-600">
                        Day {day.day}
                      </p>
                      <p className="text-xl font-bold text-gray-900">
                        {day.title}
                      </p>
                    </div>
                    <span
                      className={`transition-transform ${
                        expandedDay === day.day ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </button>
                  {expandedDay === day.day && (
                    <div className="p-6 bg-white border-t border-gray-200">
                      <p className="text-gray-700">{day.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Inclusions */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {pkg.inclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-500 text-2xl">✓</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  What's Not Included
                </h3>
                <ul className="space-y-3">
                  {pkg.exclusions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-red-500 text-2xl">✕</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Gallery */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pkg.gallery.map((image, idx) => (
                <div
                  key={idx}
                  className="relative h-64 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="bg-gradient-to-r from-blue-600 to-teal-500 rounded-2xl p-12 text-white mb-16">
            <h2 className="text-3xl font-bold mb-6">Package Pricing</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <p className="text-blue-100 mb-2">Duration</p>
                <p className="text-2xl font-bold">{pkg.duration}</p>
              </div>
              <div>
                <p className="text-blue-100 mb-2">Per Person Price</p>
                <p className="text-3xl font-bold">₹{pkg.price.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-blue-100 mb-2">Best For</p>
                <p className="text-xl font-semibold">Groups & Families</p>
              </div>
            </div>
            <p className="text-sm text-blue-100">
              * Prices are per person based on double occupancy. Group discounts available. Contact us for exact quotes.
            </p>
          </section>

          {/* Final CTA */}
          <section className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ready to Book?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
                Enquire Now
              </button>
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(
                  whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all transform hover:scale-105"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg p-4 z-40">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
          <div>
            <p className="font-semibold text-gray-900">{pkg.title}</p>
            <p className="text-blue-600 text-lg font-bold">
              ₹{pkg.price.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-all">
              Enquire
            </button>
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(
                whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Padding for sticky footer */}
      <div className="h-24"></div>

      <Footer />
    </div>
  );
}
