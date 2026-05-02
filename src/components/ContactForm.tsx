"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        destination: formData.get("destination"),
        message: formData.get("message"),
      };

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit inquiry");
      }

      setSubmitted(true);
      const form = e.target as HTMLFormElement;
      form.reset();

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to submit inquiry. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-black border-b border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-400">
            Have questions? We're here to help
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl mb-4">📧</div>
            <h3 className="font-semibold mb-2 text-sm">Email</h3>
            <a href="mailto:info@pravas.com" className="text-gray-400 hover:text-white text-sm">
              info@pravas.com
            </a>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-semibold mb-2 text-sm">WhatsApp</h3>
            <a
              href="https://wa.me/919167439172"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white text-sm"
            >
              +91 91674 39172
            </a>
          </div>

          <div className="text-center">
            <div className="text-3xl mb-4">📍</div>
            <h3 className="font-semibold mb-2 text-sm">Location</h3>
            <p className="text-gray-400 text-sm">Mumbai, India</p>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded focus:border-gray-700 focus:outline-none text-white placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded focus:border-gray-700 focus:outline-none text-white placeholder:text-gray-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded focus:border-gray-700 focus:outline-none text-white placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-400 mb-2">
                  Destination
                </label>
                <select
                  name="destination"
                  className="w-full px-4 py-3 bg-black border border-gray-800 rounded focus:border-gray-700 focus:outline-none text-white"
                >
                  <option value="">Select</option>
                  <option value="Asia">Asia</option>
                  <option value="Europe">Europe</option>
                  <option value="Africa">Africa</option>
                  <option value="Americas">Americas</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your travel plans..."
                rows={5}
                className="w-full px-4 py-3 bg-black border border-gray-800 rounded focus:border-gray-700 focus:outline-none text-white placeholder:text-gray-600 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Inquiry"}
            </button>

            {error && (
              <div className="p-4 bg-red-500/20 border border-red-500 rounded text-red-200 text-center text-sm">
                ✗ {error}
              </div>
            )}

            {submitted && (
              <div className="p-4 bg-green-500/20 border border-green-500 rounded text-green-200 text-center text-sm">
                ✓ Thank you! We'll be in touch soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
