import Link from "next/link";
import { Package } from "@/lib/data";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link href={`/packages/${pkg.id}`} className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 h-full flex flex-col hover-lift hover-glow card-3d animate-fade-in" style={{ perspective: '1200px' }}>
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-navy text-white text-xs font-semibold px-3 py-1 rounded-full">
            {pkg.duration}
          </span>
          {pkg.perfectForCouples && (
            <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
              Couples
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-xs text-muted uppercase tracking-wide mb-1">{pkg.location}</p>
        <h3 className="font-heading text-lg font-semibold text-navy mb-3 leading-snug">{pkg.title}</h3>

        <ul className="space-y-1.5 mb-4 flex-grow">
          {pkg.highlights.slice(0, 3).map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate">
              <span className="text-gold mt-0.5 shrink-0">✓</span>
              {h}
            </li>
          ))}
        </ul>

        <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted">Starting from</p>
            <p className="text-xl font-bold text-navy">₹{pkg.price.toLocaleString()}</p>
          </div>
          <span className="bg-cta text-white text-sm font-semibold px-5 py-2 rounded-full group-hover:bg-cta-hover transition-colors">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}
