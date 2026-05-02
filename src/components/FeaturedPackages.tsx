import { packages } from "@/lib/data";
import PackageCard from "./PackageCard";
import Link from "next/link";

export default function FeaturedPackages() {
  const international = packages.filter((p) => p.category === "international" && p.featured).slice(0, 3);
  const domestic = packages.filter((p) => p.category === "domestic" && p.featured).slice(0, 3);

  return (
    <section className="py-20 bg-surface" aria-label="Featured packages">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14 animate-slide-down">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3 animate-slide-right">
            Handpicked for you
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy animate-scale-in" style={{ animationDelay: '0.1s' }}>
            Featured Packages
          </h2>
          <p className="text-slate mt-3 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Curated international getaways and domestic escapes — each designed for an unforgettable experience.
          </p>
        </div>

        {/* International */}
        <section className="mb-14" aria-label="International packages">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-semibold text-navy">International</h3>
            <Link href="/international" className="text-cta text-sm font-medium hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {international.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>

        {/* Domestic */}
        <section aria-label="Domestic packages">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-heading text-xl font-semibold text-navy">Domestic</h3>
            <Link href="/domestic" className="text-cta text-sm font-medium hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domestic.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
