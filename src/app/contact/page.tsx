"use client";

import { useState } from "react";
import { whatsappURL, WHATSAPP_NUMBER } from "@/lib/data";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", destination: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-3">Get in touch</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s plan your trip
          </h1>
          <p className="text-gray-300">
            Drop us a message or reach us directly on WhatsApp. We respond within 2 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* Left — contact info */}
            <div className="lg:col-span-2 space-y-6">
              {/* WhatsApp (primary) */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <p className="text-xs font-semibold text-muted uppercase mb-3">Preferred channel</p>
                <a
                  href={whatsappURL("Hi Pravaas! I'd like to plan a trip.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white rounded-xl p-4 transition-colors"
                >
                  <svg className="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">Chat on WhatsApp</p>
                    <p className="text-xs text-green-100">Fastest response — under 2 hours</p>
                  </div>
                </a>
              </div>

              {/* Other contact */}
              <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4">
                <p className="text-xs font-semibold text-muted uppercase mb-3">Other ways to reach us</p>
                <a
                  href={`tel:+${WHATSAPP_NUMBER}`}
                  className="flex items-center gap-3 text-navy hover:text-cta transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">+{WHATSAPP_NUMBER.replace("91", "91 ")}</p>
                    <p className="text-xs text-muted">Call or WhatsApp</p>
                  </div>
                </a>

                <a
                  href="mailto:hello@pravaas.in"
                  className="flex items-center gap-3 text-navy hover:text-cta transition-colors"
                >
                  <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">hello@pravaas.in</p>
                    <p className="text-xs text-muted">Email us</p>
                  </div>
                </a>

                <div className="flex items-center gap-3 text-navy">
                  <div className="w-9 h-9 rounded-full bg-surface flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium">New Delhi, India</p>
                    <p className="text-xs text-muted">Head office</p>
                  </div>
                </div>
              </div>

              {/* Response note */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-5">
                <p className="text-sm text-navy font-medium mb-1">We respond fast.</p>
                <p className="text-xs text-slate leading-relaxed">
                  Every enquiry gets a response within 2 hours during business hours. WhatsApp is the fastest path.
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                {!submitted ? (
                  <>
                    <h2 className="font-heading text-2xl font-bold text-navy mb-6">Send us a message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-slate mb-1.5">Your name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Priya Sharma"
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy placeholder-gray-400"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-slate mb-1.5">Phone number *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 98765 43210"
                            value={form.phone}
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy placeholder-gray-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate mb-1.5">Email</label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy placeholder-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate mb-1.5">Where do you want to go?</label>
                        <input
                          type="text"
                          placeholder="Bali, Paris, Kerala..."
                          value={form.destination}
                          onChange={(e) => setForm({ ...form, destination: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy placeholder-gray-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate mb-1.5">Message</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us a little about your trip — dates, group size, budget..."
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:border-navy placeholder-gray-400 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-cta hover:bg-cta-hover text-white font-semibold py-3.5 rounded-full transition-colors text-sm"
                      >
                        Send Message
                      </button>

                      <p className="text-center text-xs text-muted">
                        Or reach us instantly on{" "}
                        <a
                          href={whatsappURL("Hi Pravaas! I'd like to plan a trip.")}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-600 font-medium hover:underline"
                        >
                          WhatsApp
                        </a>
                      </p>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5">
                      <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-navy mb-2">Message received!</h3>
                    <p className="text-slate text-sm mb-6">
                      Your travel expert will reach out within 2 hours.
                    </p>
                    <a
                      href={whatsappURL("Hi Pravaas! I just submitted an enquiry on your website.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
                    >
                      Also ping us on WhatsApp
                    </a>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
