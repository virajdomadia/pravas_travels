"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AdminNav from "@/components/AdminNav";
import PackageForm from "@/components/PackageForm";
import { Package } from "@/lib/data";

export default function NewPackagePage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: Package) => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/packages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Failed to create package");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-navy mb-8">Create New Package</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <PackageForm onSubmit={handleSubmit} isLoading={isLoading} />
      </div>
    </>
  );
}
