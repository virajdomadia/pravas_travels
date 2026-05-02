"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminNav from "@/components/AdminNav";
import { Package } from "@/lib/data";

export default function AdminDashboard() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [filteredPackages, setFilteredPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filters
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<"all" | "domestic" | "international">("all");
  const [featuredFilter, setFeaturedFilter] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  useEffect(() => {
    fetchPackages();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [packages, searchTerm, categoryFilter, featuredFilter, priceRange]);

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/packages");
      const data = await res.json();
      setPackages(data);
    } catch (err) {
      setError("Failed to fetch packages");
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = packages;

    // Search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.title.toLowerCase().includes(term) ||
          p.location.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    // Category filter
    if (categoryFilter !== "all") {
      filtered = filtered.filter((p) => p.category === categoryFilter);
    }

    // Featured filter
    if (featuredFilter) {
      filtered = filtered.filter((p) => p.featured);
    }

    // Price range filter
    filtered = filtered.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    setFilteredPackages(filtered);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this package?")) return;

    try {
      const res = await fetch(`/api/packages/${id}`, { method: "DELETE" });
      if (res.ok) {
        setPackages(packages.filter((p) => p.id !== id));
      }
    } catch (err) {
      setError("Failed to delete package");
    }
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-navy">Manage Packages</h1>
            <Link
              href="/admin/packages/new"
              className="bg-cta text-white px-4 sm:px-6 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base text-center"
            >
              + Add Package
            </Link>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Filters */}
          <div className="bg-white p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 border border-navy/10">
            <h2 className="text-base sm:text-lg font-semibold text-navy mb-4">Filters</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div>
                <label className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Title, location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta text-sm"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                  Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) =>
                    setCategoryFilter(e.target.value as "all" | "domestic" | "international")
                  }
                  className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta text-sm"
                >
                  <option value="all">All</option>
                  <option value="domestic">Domestic</option>
                  <option value="international">International</option>
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-navy mb-1.5 sm:mb-2">
                  Max Price: ₹{priceRange[1].toLocaleString()}
                </label>
                <input
                  type="range"
                  min="0"
                  max="100000"
                  step="5000"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full"
                />
              </div>

              <div className="flex items-end">
                <label className="flex items-center cursor-pointer gap-2">
                  <input
                    type="checkbox"
                    checked={featuredFilter}
                    onChange={(e) => setFeaturedFilter(e.target.checked)}
                    className="w-4 h-4"
                  />
                  <span className="text-xs sm:text-sm text-navy">Featured Only</span>
                </label>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading packages...</div>
          ) : filteredPackages.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {packages.length === 0
                ? "No packages found. Create your first package!"
                : "No packages match your filters."}
            </div>
          ) : (
            <>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">
                Showing {filteredPackages.length} of {packages.length} packages
              </p>
              <div className="space-y-3 sm:space-y-4">
                {filteredPackages.map((pkg) => (
                  <div
                    key={pkg.id}
                    className="bg-white border border-navy/20 rounded-lg p-3 sm:p-4 hover:shadow-lg transition"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-base sm:text-lg font-semibold text-navy truncate">
                            {pkg.title}
                          </h3>
                          <span className="text-xs bg-navy/10 text-navy px-2 py-1 rounded whitespace-nowrap">
                            {pkg.category}
                          </span>
                          {pkg.featured && (
                            <span className="text-xs bg-gold/10 text-gold px-2 py-1 rounded">
                              Featured
                            </span>
                          )}
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600 mb-1 break-words">
                          {pkg.location} • {pkg.duration} • ₹{pkg.price.toLocaleString()}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                          {pkg.description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                        <Link
                          href={`/admin/packages/${pkg.id}`}
                          className="bg-navy text-white px-3 sm:px-4 py-2 rounded hover:opacity-90 transition text-xs sm:text-sm text-center"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(pkg.id)}
                          className="bg-red-500 text-white px-3 sm:px-4 py-2 rounded hover:opacity-90 transition text-xs sm:text-sm"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
