"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";

export default function AdminNav() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      router.push("/admin/login");
    } catch (err) {
      alert("Logout failed");
    } finally {
      setIsLoggingOut(false);
    }
  };

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path);

  const navLinks = [
    { href: "/admin", label: "Packages" },
    { href: "/admin/inquiries", label: "Inquiries" },
  ];

  return (
    <nav className="border-b border-navy/20 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/admin" className="text-lg sm:text-xl font-bold text-navy whitespace-nowrap">
            Admin Panel
          </Link>

          {/* Desktop Menu */}
          <div className="hidden sm:flex gap-4 sm:gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isActive(link.href)
                    ? "text-cta font-medium"
                    : "text-navy hover:text-cta"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/" className="text-sm text-navy hover:text-cta transition">
              Back to Site
            </Link>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="text-sm text-red-600 hover:text-red-700 transition font-medium disabled:opacity-50"
            >
              {isLoggingOut ? "..." : "Logout"}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="sm:hidden flex flex-col gap-1 p-2"
          >
            <div className="w-6 h-0.5 bg-navy"></div>
            <div className="w-6 h-0.5 bg-navy"></div>
            <div className="w-6 h-0.5 bg-navy"></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="sm:hidden border-t border-navy/10 py-3 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-2 text-sm rounded transition ${
                  isActive(link.href)
                    ? "bg-navy/10 text-cta font-medium"
                    : "text-navy hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-2 text-sm text-navy hover:bg-gray-50 rounded transition"
            >
              Back to Site
            </Link>
            <button
              onClick={() => {
                handleLogout();
                setIsMobileMenuOpen(false);
              }}
              disabled={isLoggingOut}
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded transition font-medium disabled:opacity-50"
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
