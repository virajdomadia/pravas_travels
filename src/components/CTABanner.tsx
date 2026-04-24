import Link from "next/link";

export default function CTABanner() {
  return (
    <section className="py-20 bg-black border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Let's turn your travel dreams into reality
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/packages"
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200 font-semibold inline-block"
          >
            Browse Packages
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 rounded hover:bg-gray-900 inline-block"
          >
            Chat Now
          </a>
        </div>
      </div>
    </section>
  );
}
