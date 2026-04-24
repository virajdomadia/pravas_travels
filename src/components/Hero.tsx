import Link from "next/link";

export default function Hero() {
  return (
    <div className="w-full bg-black pt-32 pb-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Explore the world's most stunning destinations with carefully curated travel experiences
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/packages"
            className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200"
          >
            Explore Packages
          </Link>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 rounded hover:bg-gray-900"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
