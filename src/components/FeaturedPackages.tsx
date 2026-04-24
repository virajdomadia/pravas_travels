import { packages } from "@/lib/data";
import PackageCard from "./PackageCard";
import Link from "next/link";

export default function FeaturedPackages() {
  const featured = packages.slice(0, 3);

  return (
    <section className="py-20 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured Packages
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Handpicked destinations and experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {featured.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/packages"
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 inline-block"
          >
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
