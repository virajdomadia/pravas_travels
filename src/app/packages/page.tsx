"use client";

import { packages } from "@/lib/data";
import PackageCard from "@/components/PackageCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function PackagesPage() {
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedBudget, setSelectedBudget] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");

  const filteredPackages = packages.filter((pkg) => {
    if (
      selectedDestination &&
      !pkg.location.toLowerCase().includes(selectedDestination.toLowerCase())
    ) {
      return false;
    }

    if (selectedBudget) {
      const budget = parseInt(selectedBudget);
      if (budget === 1 && pkg.price > 20000) return false;
      if (budget === 2 && (pkg.price <= 20000 || pkg.price > 35000)) return false;
      if (budget === 3 && pkg.price <= 35000) return false;
    }

    if (selectedDuration) {
      const days = parseInt(selectedDuration);
      const pkgDays = parseInt(pkg.duration.split("D")[0]);
      if (pkgDays !== days) return false;
    }

    return true;
  });

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <div className="pt-24 pb-12 bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h1>
          <p className="text-xl text-blue-100">
            Explore our collection of carefully curated travel experiences
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Filters */}
          <div className="bg-white rounded-2xl p-6 shadow-md mb-12">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Filter Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Destination */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destination
                </label>
                <input
                  type="text"
                  placeholder="Search location..."
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget
                </label>
                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Budgets</option>
                  <option value="1">Budget (Up to 20K)</option>
                  <option value="2">Mid-range (20K - 35K)</option>
                  <option value="3">Luxury (35K+)</option>
                </select>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <select
                  value={selectedDuration}
                  onChange={(e) => setSelectedDuration(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">All Durations</option>
                  <option value="4">4 Days</option>
                  <option value="5">5 Days</option>
                  <option value="6">6 Days</option>
                  <option value="7">7 Days</option>
                </select>
              </div>

              {/* Reset */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSelectedDestination("");
                    setSelectedBudget("");
                    setSelectedDuration("");
                  }}
                  className="w-full py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="mb-8">
            <p className="text-gray-600 font-medium">
              Showing {filteredPackages.length} of {packages.length} packages
            </p>
          </div>

          {/* Grid */}
          {filteredPackages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPackages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-gray-600">
                No packages match your filters. Try adjusting your criteria.
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
