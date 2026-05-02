"use client";

import { useEffect, useState } from "react";
import AdminNav from "@/components/AdminNav";

interface Inquiry {
  _id: string;
  name: string;
  email?: string;
  phone: string;
  destination?: string;
  message?: string;
  status: "new" | "contacted" | "resolved";
  createdAt: string;
}

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filterStatus, setFilterStatus] = useState<"all" | "new" | "contacted" | "resolved">("all");
  const [selectedInquiry, setSelectedInquiry] = useState<Inquiry | null>(null);

  useEffect(() => {
    fetchInquiries();
  }, []);

  const fetchInquiries = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/inquiries");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setInquiries(data);
    } catch (err) {
      setError("Failed to fetch inquiries");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: "new" | "contacted" | "resolved") => {
    try {
      const res = await fetch("/api/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status: newStatus }),
      });
      if (!res.ok) throw new Error("Failed to update");

      setInquiries(inquiries.map((i) =>
        i._id === id ? { ...i, status: newStatus } : i
      ));

      if (selectedInquiry?._id === id) {
        setSelectedInquiry({ ...selectedInquiry, status: newStatus });
      }
    } catch (err) {
      setError("Failed to update inquiry status");
    }
  };

  const deleteInquiry = async (id: string) => {
    if (!confirm("Are you sure you want to delete this inquiry?")) return;

    try {
      const res = await fetch(`/api/inquiries?id=${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete");

      setInquiries(inquiries.filter((i) => i._id !== id));
      setSelectedInquiry(null);
    } catch (err) {
      setError("Failed to delete inquiry");
    }
  };

  const filteredInquiries = inquiries.filter(
    (i) => filterStatus === "all" || i.status === filterStatus
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "bg-blue-100 text-blue-800";
      case "contacted":
        return "bg-yellow-100 text-yellow-800";
      case "resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <AdminNav />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-12">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-navy">Form Inquiries</h1>
            <p className="text-gray-600 text-sm sm:text-base mt-1">
              Total: {inquiries.length} inquiry{inquiries.length !== 1 ? "ies" : ""}
            </p>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-3 sm:px-4 py-2 sm:py-3 rounded mb-4 text-sm">
              {error}
            </div>
          )}

          {/* Status Filter */}
          <div className="bg-white rounded-lg border border-navy/10 p-3 sm:p-4 mb-6">
            <label className="block text-sm font-medium text-navy mb-2 sm:mb-3">
              Filter by Status
            </label>
            <div className="flex flex-wrap gap-2">
              {(["all", "new", "contacted", "resolved"] as const).map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition ${
                    filterStatus === status
                      ? "bg-navy text-white"
                      : "bg-gray-100 text-navy hover:bg-gray-200"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                  {status === "all"
                    ? ` (${inquiries.length})`
                    : ` (${inquiries.filter((i) => i.status === status).length})`}
                </button>
              ))}
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">Loading inquiries...</div>
          ) : filteredInquiries.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              {inquiries.length === 0
                ? "No inquiries yet"
                : "No inquiries match the selected filter"}
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Inquiry List */}
              <div className="lg:col-span-2 space-y-3 sm:space-y-4">
                {filteredInquiries.map((inquiry) => (
                  <div
                    key={inquiry._id}
                    onClick={() => setSelectedInquiry(inquiry)}
                    className={`bg-white border rounded-lg p-3 sm:p-4 cursor-pointer transition hover:shadow-md ${
                      selectedInquiry?._id === inquiry._id
                        ? "border-navy shadow-md"
                        : "border-navy/10 hover:border-navy/20"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-navy truncate text-sm sm:text-base">
                          {inquiry.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600 truncate">
                          📱 {inquiry.phone}
                        </p>
                        {inquiry.email && (
                          <p className="text-xs sm:text-sm text-gray-600 truncate">
                            📧 {inquiry.email}
                          </p>
                        )}
                        {inquiry.destination && (
                          <p className="text-xs sm:text-sm text-gray-600">
                            ✈️ {inquiry.destination}
                          </p>
                        )}
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(inquiry.createdAt).toLocaleDateString()}{" "}
                          {new Date(inquiry.createdAt).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                      <span
                        className={`px-2 sm:px-3 py-1 rounded text-xs font-medium whitespace-nowrap ${getStatusColor(
                          inquiry.status
                        )}`}
                      >
                        {inquiry.status.charAt(0).toUpperCase() + inquiry.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Detail View */}
              {selectedInquiry && (
                <div className="lg:col-span-1 bg-white rounded-lg border border-navy/10 p-3 sm:p-4 sticky top-20 h-fit">
                  <h2 className="font-bold text-navy text-base sm:text-lg mb-3 sm:mb-4">
                    Details
                  </h2>

                  <div className="space-y-3 sm:space-y-4 text-sm">
                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Name
                      </label>
                      <p className="text-navy font-medium break-words">
                        {selectedInquiry.name}
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Phone
                      </label>
                      <a
                        href={`tel:${selectedInquiry.phone}`}
                        className="text-cta hover:underline font-medium"
                      >
                        {selectedInquiry.phone}
                      </a>
                    </div>

                    {selectedInquiry.email && (
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Email
                        </label>
                        <a
                          href={`mailto:${selectedInquiry.email}`}
                          className="text-cta hover:underline break-all font-medium"
                        >
                          {selectedInquiry.email}
                        </a>
                      </div>
                    )}

                    {selectedInquiry.destination && (
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Destination
                        </label>
                        <p className="text-navy">
                          {selectedInquiry.destination}
                        </p>
                      </div>
                    )}

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1">
                        Submitted
                      </label>
                      <p className="text-navy">
                        {new Date(selectedInquiry.createdAt).toLocaleDateString()}{" "}
                        {new Date(selectedInquiry.createdAt).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>

                    {selectedInquiry.message && (
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1">
                          Message
                        </label>
                        <p className="text-navy text-xs break-words whitespace-pre-wrap max-h-32 overflow-y-auto">
                          {selectedInquiry.message}
                        </p>
                      </div>
                    )}

                    <div className="pt-2 sm:pt-4 border-t border-gray-200">
                      <label className="block text-xs font-medium text-gray-600 mb-2 sm:mb-3">
                        Status
                      </label>
                      <div className="flex flex-col gap-2">
                        {(["new", "contacted", "resolved"] as const).map((status) => (
                          <button
                            key={status}
                            onClick={() =>
                              updateStatus(selectedInquiry._id, status)
                            }
                            className={`px-3 py-2 rounded text-xs font-medium transition text-center ${
                              selectedInquiry.status === status
                                ? getStatusColor(status)
                                : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => deleteInquiry(selectedInquiry._id)}
                      className="w-full bg-red-50 text-red-600 hover:bg-red-100 px-3 py-2 rounded text-xs font-medium transition mt-4"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
