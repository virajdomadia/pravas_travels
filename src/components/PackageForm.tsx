"use client";

import { Package } from "@/lib/data";
import { useState } from "react";
import ItineraryEditor from "./ItineraryEditor";
import FAQEditor from "./FAQEditor";

interface PackageFormProps {
  initialData?: Package;
  onSubmit: (data: Package) => Promise<void>;
  isLoading?: boolean;
}

export default function PackageForm({
  initialData,
  onSubmit,
  isLoading = false,
}: PackageFormProps) {
  const [formData, setFormData] = useState<Partial<Package>>(
    initialData || {
      title: "",
      location: "",
      category: "domestic",
      duration: "",
      price: 0,
      image: "",
      description: "",
      perfectForCouples: false,
      bestTimeToVisit: "",
      featured: false,
      highlights: [],
      itinerary: [],
      inclusions: [],
      exclusions: [],
      gallery: [],
      faq: [],
    }
  );

  const [highlights, setHighlights] = useState<string>(
    (initialData?.highlights || []).join("\n")
  );
  const [inclusions, setInclusions] = useState<string>(
    (initialData?.inclusions || []).join("\n")
  );
  const [exclusions, setExclusions] = useState<string>(
    (initialData?.exclusions || []).join("\n")
  );
  const [gallery, setGallery] = useState<string>(
    (initialData?.gallery || []).join("\n")
  );
  const [itinerary, setItinerary] = useState(initialData?.itinerary || []);
  const [faq, setFAQ] = useState(initialData?.faq || []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submitData: Package = {
      ...(formData as Package),
      id: initialData?.id || Date.now().toString(),
      highlights: highlights
        .split("\n")
        .filter((h) => h.trim())
        .map((h) => h.trim()),
      inclusions: inclusions
        .split("\n")
        .filter((i) => i.trim())
        .map((i) => i.trim()),
      exclusions: exclusions
        .split("\n")
        .filter((e) => e.trim())
        .map((e) => e.trim()),
      gallery: gallery
        .split("\n")
        .filter((g) => g.trim())
        .map((g) => g.trim()),
      itinerary,
      faq,
    };

    await onSubmit(submitData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      {/* Basic Info Section */}
      <div className="border-b border-navy/10 pb-6">
        <h2 className="text-lg font-semibold text-navy mb-4">Basic Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location || ""}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Category
            </label>
            <select
              name="category"
              value={formData.category || "domestic"}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            >
              <option value="domestic">Domestic</option>
              <option value="international">International</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Duration
            </label>
            <input
              type="text"
              name="duration"
              placeholder="e.g., 5D/4N"
              value={formData.duration || ""}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Price (₹)
            </label>
            <input
              type="number"
              name="price"
              value={formData.price || 0}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Image URL
            </label>
            <input
              type="url"
              name="image"
              value={formData.image || ""}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-navy mb-2">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description || ""}
            onChange={handleChange}
            rows={3}
            required
            className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          <div className="flex items-center">
            <input
              type="checkbox"
              name="perfectForCouples"
              checked={formData.perfectForCouples || false}
              onChange={handleChange}
              className="w-4 h-4 cursor-pointer"
            />
            <label className="ml-2 text-sm text-navy">Perfect for Couples</label>
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Best Time to Visit
            </label>
            <input
              type="text"
              name="bestTimeToVisit"
              value={formData.bestTimeToVisit || ""}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured || false}
              onChange={handleChange}
              className="w-4 h-4 cursor-pointer"
            />
            <label className="ml-2 text-sm text-navy">Featured</label>
          </div>
        </div>
      </div>

      {/* Highlights, Inclusions, Exclusions */}
      <div className="border-b border-navy/10 pb-6">
        <h2 className="text-lg font-semibold text-navy mb-4">Package Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Highlights (one per line)
            </label>
            <textarea
              value={highlights}
              onChange={(e) => setHighlights(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Inclusions (one per line)
            </label>
            <textarea
              value={inclusions}
              onChange={(e) => setInclusions(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-navy mb-2">
              Exclusions (one per line)
            </label>
            <textarea
              value={exclusions}
              onChange={(e) => setExclusions(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block text-sm font-medium text-navy mb-2">
            Gallery URLs (one per line)
          </label>
          <textarea
            value={gallery}
            onChange={(e) => setGallery(e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-navy/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cta"
          />
        </div>
      </div>

      {/* Itinerary Section */}
      <div className="border-b border-navy/10 pb-6">
        <ItineraryEditor items={itinerary} onChange={setItinerary} />
      </div>

      {/* FAQ Section */}
      <div className="pb-6">
        <FAQEditor items={faq} onChange={setFAQ} />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="bg-cta text-white px-8 py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50 font-medium"
      >
        {isLoading ? "Saving..." : "Save Package"}
      </button>
    </form>
  );
}
