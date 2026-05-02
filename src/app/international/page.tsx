"use client";

import { useState, useMemo } from "react";
import { packages } from "@/lib/data";
import PackageCard from "@/components/PackageCard";
import CTASection from "@/components/CTASection";

const BUDGETS = [
  { label: "All budgets", min: 0, max: Infinity },
  { label: "Under ₹30,000", min: 0, max: 30000 },
  { label: "₹30,000 – ₹45,000", min: 30000, max: 45000 },
  { label: "₹45,000+", min: 45000, max: Infinity },
];

const DURATIONS = ["All", "4D/3N", "5D/4N", "6D/5N", "7D/6N"];

export default function InternationalPage() {
  const [budgetIdx, setBudgetIdx] = useState(0);
  const [duration, setDuration] = useState("All");

  const base = packages.filter((p) => p.category === "international");

  const filtered = useMemo(() => {
    const { min, max } = BUDGETS[budgetIdx];
    return base.filter(
      (p) =>
        p.price >= min &&
        p.price <= max &&
        (duration === "All" || p.duration === duration)
    );
  }, [budgetIdx, duration, base]);

  return (
    <>
      {/* Hero banner */}
      <section className="relative bg-navy py-20 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
          alt="International travel"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Explore the world
          </p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            International Packages
          </h1>
          <p className="text-gray-300 max-w-xl mx-auto">
            Bali to Paris, Dubai to Japan — curated international experiences for couples and luxury travelers.
          </p>
        </div>
      </section>

      {/* Filters + Grid */}
      <section className="py-14 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter bar */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 mb-10 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
            <div>
              <p className="text-xs font-semibold text-muted uppercase mb-2">Budget</p>
              <div className="flex flex-wrap gap-2">
                {BUDGETS.map((b, i) => (
                  <button
                    key={i}
                    onClick={() => setBudgetIdx(i)}
                    className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
                      budgetIdx === i
                        ? "bg-navy text-white border-navy"
                        : "border-gray-200 text-slate hover:border-navy hover:text-navy"
                    }`}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="sm:border-l sm:border-gray-200 sm:pl-5">
              <p className="text-xs font-semibold text-muted uppercase mb-2">Duration</p>
              <div className="flex flex-wrap gap-2">
                {DURATIONS.map((d) => (
                  <button
                    key={d}
                    onClick={() => setDuration(d)}
                    className={`text-xs px-4 py-1.5 rounded-full border transition-colors ${
                      duration === d
                        ? "bg-navy text-white border-navy"
                        : "border-gray-200 text-slate hover:border-navy hover:text-navy"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Result count */}
          <p className="text-sm text-muted mb-6">
            {filtered.length} package{filtered.length !== 1 ? "s" : ""} found
          </p>

          {/* Cards */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filtered.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-muted">
              <p className="text-lg font-semibold mb-2">No packages match your filters</p>
              <p className="text-sm">Try adjusting your budget or duration selection.</p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
