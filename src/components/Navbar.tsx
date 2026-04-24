import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-gray-800 bg-black sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-lg font-semibold">
            Pravas
          </Link>

          <div className="hidden md:flex gap-12">
            <Link href="/" className="text-sm text-gray-400 hover:text-white">
              Home
            </Link>
            <Link href="/packages" className="text-sm text-gray-400 hover:text-white">
              Packages
            </Link>
            <Link href="/#about" className="text-sm text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="/#contact" className="text-sm text-gray-400 hover:text-white">
              Contact
            </Link>
          </div>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 border border-gray-700 rounded hover:bg-gray-900"
          >
            Enquire
          </a>
        </div>
      </div>
    </nav>
  );
}
