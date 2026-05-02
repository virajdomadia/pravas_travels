"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import AdminNav from "@/components/AdminNav";
import PackageForm from "@/components/PackageForm";
import { Package } from "@/lib/data";

export default function EditPackagePage() {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;

  const [packageData, setPackageData] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchPackage();
  }, [id]);

  const fetchPackage = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/packages/${id}`);
      if (res.ok) {
        const data = await res.json();
        setPackageData(data);
      } else {
        setError("Package not found");
      }
    } catch (err) {
      setError("Failed to fetch package");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (data: Package) => {
    try {
      setIsSaving(true);
      const res = await fetch(`/api/packages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        router.push("/admin");
      } else {
        setError("Failed to update package");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setIsSaving(false);
    }
  };

  if (loading) return <><AdminNav /><div className="text-center py-12">Loading...</div></>;
  if (error)
    return (
      <>
        <AdminNav />
        <div className="text-center py-12 text-red-600">{error}</div>
      </>
    );
  if (!packageData)
    return (
      <>
        <AdminNav />
        <div className="text-center py-12">Package not found</div>
      </>
    );

  return (
    <>
      <AdminNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-navy mb-8">Edit Package</h1>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        <PackageForm
          initialData={packageData}
          onSubmit={handleSubmit}
          isLoading={isSaving}
        />
      </div>
    </>
  );
}
