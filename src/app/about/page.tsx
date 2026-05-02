import CTASection from "@/components/CTASection";
import { whatsappURL } from "@/lib/data";

const differentiators = [
  {
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Faster support",
    description: "2-hour response on WhatsApp. One dedicated expert — not a call centre.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: "Better pricing",
    description: "No OTA markups. We work directly with hotels and operators — and pass the savings to you.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    title: "Curated trips",
    description: "Not templates. Every itinerary is built from scratch — tailored to your pace, preferences, and budget.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-navy py-24 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
          alt="About Pravaas"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">Our story</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            We built Pravaas because travel planning was broken.
          </h1>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">The problem we saw</h2>
              <div className="space-y-4 text-slate text-sm leading-relaxed">
                <p>
                  Couples planning a honeymoon or anniversary trip faced the same broken experience everywhere.
                  Endless tab-switching. Opaque pricing. Generic itineraries copy-pasted across thousands of clients.
                </p>
                <p>
                  OTA platforms buried real costs in footnotes. Travel agents responded in days, not hours. And after
                  booking, you were on your own — no one reachable when something went wrong at 11pm in a foreign city.
                </p>
                <p>
                  The process was stressful. The trip was supposed to be anything but.
                </p>
              </div>
            </div>
            <div>
              <h2 className="font-heading text-2xl font-bold text-navy mb-5">What Pravaas does differently</h2>
              <div className="space-y-4 text-slate text-sm leading-relaxed">
                <p>
                  We built Pravaas as a trust-first travel service. One expert handles your enquiry, builds your
                  itinerary, and stays reachable throughout — on WhatsApp, in real time.
                </p>
                <p>
                  Every package is priced transparently. No hidden add-ons, no confusing tiers, no last-minute
                  surprises. The number you see is the number you pay.
                </p>
                <p>
                  And because we work directly with properties and ground operators, we can negotiate better rates
                  and create experiences that online platforms simply can&apos;t offer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl font-bold text-navy">Why travelers choose Pravaas</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100">
                <div className="mb-5">{d.icon}</div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">{d.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              { stat: "1,000+", label: "Couples traveled" },
              { stat: "30+", label: "Destinations covered" },
              { stat: "< 2 hrs", label: "Average response time" },
            ].map((s, i) => (
              <div key={i}>
                <p className="font-heading text-4xl font-bold text-navy mb-2">{s.stat}</p>
                <p className="text-muted text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to us nudge */}
      <section className="py-14 bg-surface">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-navy font-semibold mb-4">Have a question about Pravaas?</p>
          <a
            href={whatsappURL("Hi Pravaas! I'd like to know more about how you work.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Chat with us on WhatsApp
          </a>
        </div>
      </section>

      <CTASection />
    </>
  );
}
