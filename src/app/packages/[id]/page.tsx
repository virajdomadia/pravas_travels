"use client";

import { use, useState } from "react";
import { packages, whatsappURL } from "@/lib/data";
import Link from "next/link";
import CTASection from "@/components/CTASection";

export default function PackageDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const pkg = packages.find((p) => p.id === id);

  const [expandedDay, setExpandedDay] = useState<number | null>(0);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", destination: pkg?.title ?? "" });
  const [submitted, setSubmitted] = useState(false);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface">
        <div className="text-center px-4">
          <h1 className="font-heading text-3xl font-bold text-navy mb-4">Package not found</h1>
          <Link href="/international" className="text-cta hover:underline font-medium">
            ← Browse packages
          </Link>
        </div>
      </div>
    );
  }

  const wa = whatsappURL(
    `Hi Pravaas! I'm interested in the "${pkg.title}" package (${pkg.duration}). Can you share more details?`
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] min-h-72 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-6 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href={pkg.category === "international" ? "/international" : "/domestic"}
            className="text-white/70 hover:text-white text-sm transition-colors"
          >
            ← {pkg.category === "international" ? "International" : "Domestic"}
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-8 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex-grow">
              {pkg.perfectForCouples && (
                <span className="inline-block bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  Perfect for Couples
                </span>
              )}
              <p className="text-gray-300 text-sm mb-1">{pkg.location}</p>
              <h1 className="font-heading text-3xl md:text-5xl font-bold text-white">{pkg.title}</h1>
            </div>
            <div className="shrink-0 text-right">
              <p className="text-gray-300 text-sm">{pkg.duration}</p>
              <p className="font-heading text-3xl md:text-4xl font-bold text-white">
                ₹{pkg.price.toLocaleString()}
              </p>
              <p className="text-gray-400 text-xs">per person</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main layout: content + sidebar ───────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* ── Left: main content ───────────────────────────────── */}
          <div className="flex-grow min-w-0 space-y-14">

            {/* Overview */}
            <section className="animate-slide-up">
              <h2 className="font-heading text-2xl font-bold text-navy mb-4">Overview</h2>
              <p className="text-slate leading-relaxed">{pkg.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="flex items-center gap-1.5 bg-surface text-navy text-sm px-4 py-2 rounded-full font-medium">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1.5 bg-surface text-navy text-sm px-4 py-2 rounded-full font-medium">
                  <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                  </svg>
                  Best time: {pkg.bestTimeToVisit}
                </span>
              </div>
            </section>

            {/* Highlights */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                    <span className="text-gold mt-0.5 font-bold shrink-0">✓</span>
                    <span className="text-slate text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Itinerary */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">Itinerary</h2>
              <div className="space-y-3">
                {pkg.itinerary.map((day) => (
                  <div
                    key={day.day}
                    className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm"
                  >
                    <button
                      onClick={() => setExpandedDay(expandedDay === day.day ? null : day.day)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-surface/50 transition-colors"
                    >
                      <div>
                        <p className="text-xs font-semibold text-gold uppercase mb-0.5">Day {day.day}</p>
                        <p className="font-heading text-base font-semibold text-navy">{day.title}</p>
                      </div>
                      <svg
                        className={`w-5 h-5 text-muted transition-transform shrink-0 ${expandedDay === day.day ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedDay === day.day && (
                      <div className="px-5 pb-5 text-slate text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {day.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Inclusions & Exclusions */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">What&apos;s included</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                    Included
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate">
                        <span className="text-green-500 shrink-0 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm">
                  <h3 className="font-semibold text-navy mb-4 flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs">✕</span>
                    Not included
                  </h3>
                  <ul className="space-y-2.5">
                    {pkg.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate">
                        <span className="text-red-400 shrink-0 mt-0.5">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Gallery */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {pkg.gallery.map((img, i) => (
                  <div key={i} className="relative h-52 rounded-xl overflow-hidden group">
                    <img
                      src={img}
                      alt={`${pkg.title} photo ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">Frequently asked questions</h2>
              <div className="space-y-3">
                {pkg.faq.map((item, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl bg-white overflow-hidden shadow-sm">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-surface/50 transition-colors"
                    >
                      <span className="font-medium text-navy text-sm pr-4">{item.question}</span>
                      <svg
                        className={`w-5 h-5 text-muted transition-transform shrink-0 ${expandedFaq === i ? "rotate-180" : ""}`}
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {expandedFaq === i && (
                      <div className="px-5 pb-5 text-slate text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* ── Right: sticky conversion sidebar ─────────────────── */}
          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-24 space-y-4">

              {/* Conversion card */}
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-navy px-6 py-5 text-white">
                  <p className="text-xs text-gray-300 mb-1">{pkg.duration}</p>
                  <p className="font-heading text-2xl font-bold">₹{pkg.price.toLocaleString()}</p>
                  <p className="text-xs text-gray-400">per person</p>
                </div>

                {/* Form */}
                <div className="p-6">
                  {!submitted ? (
                    <>
                      <p className="text-sm font-semibold text-navy mb-4">Get a personalised quote</p>
                      <form onSubmit={handleSubmit} className="space-y-3">
                        <input
                          type="text"
                          placeholder="Your name"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy placeholder-gray-400"
                        />
                        <input
                          type="tel"
                          placeholder="Phone number"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy placeholder-gray-400"
                        />
                        <input
                          type="text"
                          value={form.destination}
                          onChange={(e) => setForm({ ...form, destination: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy"
                        />
                        <button
                          type="submit"
                          className="w-full bg-cta hover:bg-cta-hover text-white font-semibold py-3 rounded-full transition-colors text-sm"
                        >
                          Send Enquiry
                        </button>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-4">
                      <div className="text-green-500 text-3xl mb-2">✓</div>
                      <p className="font-semibold text-navy text-sm mb-1">Enquiry received!</p>
                      <p className="text-gray-500 text-xs">We&apos;ll reach out within 2 hours.</p>
                    </div>
                  )}

                  {/* WhatsApp CTA */}
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full transition-colors text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Trust booster */}
              <div className="bg-surface rounded-2xl p-5 border border-gray-100">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-navy rounded-full flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">Talk to a travel expert</p>
                    <p className="text-slate text-xs mt-1">
                      A dedicated planner responds within <strong>2 hours</strong> — no bots, no call centres.
                    </p>
                    <p className="text-xs text-gold mt-2 font-medium">Limited seasonal availability.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <CTASection />
    </>
  );
}
