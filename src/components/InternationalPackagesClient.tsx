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

export default function InternationalPackagesClient() {
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
