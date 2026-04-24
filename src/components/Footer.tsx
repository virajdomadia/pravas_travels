import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="text-lg font-semibold mb-4">Pravas</div>
            <p className="text-sm text-gray-400">
              Travel experiences, thoughtfully planned
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/packages" className="hover:text-white">Packages</Link></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Help</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">FAQs</a></li>
              <li><a href="#" className="hover:text-white">Policies</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:info@pravas.com" className="hover:text-white">info@pravas.com</a></li>
              <li><a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="hover:text-white">+91 98765 43210</a></li>
              <li>New Delhi, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2024 Pravas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
