import Link from "next/link";
import { Package } from "@/lib/data";

export default function PackageCard({ pkg }: { pkg: Package }) {
  return (
    <Link href={`/packages/${pkg.id}`}>
      <div className="bg-gray-900 rounded border border-gray-800 overflow-hidden hover:border-gray-700 cursor-pointer h-full flex flex-col">
        <div className="relative h-48 overflow-hidden bg-gray-800">
          <img
            src={pkg.image}
            alt={pkg.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-xs font-semibold border border-gray-700 rounded">
            {pkg.duration}
          </div>
        </div>

        <div className="p-6 flex-grow flex flex-col">
          <p className="text-xs text-gray-400 mb-2">{pkg.location}</p>
          <h3 className="text-lg font-semibold mb-3">{pkg.title}</h3>

          <div className="mb-4 flex-grow">
            <ul className="text-sm text-gray-400 space-y-1">
              {pkg.highlights.slice(0, 2).map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-gray-500 mt-0.5">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
              {pkg.highlights.length > 2 && (
                <li className="text-gray-500 text-xs">
                  +{pkg.highlights.length - 2} more
                </li>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-800 pt-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">From</p>
              <p className="text-xl font-semibold">
                ₹{pkg.price.toLocaleString()}
              </p>
            </div>
            <button className="px-4 py-2 bg-white text-black rounded text-sm font-semibold hover:bg-gray-100">
              View
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
