import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="
        w-[96%]
        mx-auto
        mt-24
        backdrop-blur-xl
        bg-white/10
        border border-white/20
        rounded-t-3xl
        shadow-[0_-8px_24px_rgba(0,0,0,0.25)]
      "
    >
      <div className="max-w-7xl mx-auto px-8 py-10">
        {/* Brand */}
        <div className="flex flex-col items-center text-center space-y-3">
          <Image
            src="/logo.jpg"
            alt="Demeter Seed"
            width={120}
            height={120}
            className="object-contain"
          />

          <h3 className="text-2xl font-extrabold tracking-tight text-green-600">
            Demeter Seed
          </h3>

          <p className="max-w-xl text-sm text-gray-200 leading-relaxed">
            Supplying certified, high-quality seed varieties to support
            sustainable agriculture, productivity, and food security.
          </p>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-white/20" />

        {/* Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              Navigation
            </h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="/products"
                className="text-gray-200 hover:text-green-500 transition"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-gray-200 hover:text-green-500 transition"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-200 hover:text-green-500 transition"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              Contact
            </h4>
            <p className="text-sm text-gray-200">info@demeterseed.com</p>
            <p className="text-sm text-gray-200">+265 XXX XXX XXX</p>
          </div>

          {/* Promise */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide">
              Our Promise
            </h4>
            <p className="text-sm text-gray-200">
              Quality-tested seed varieties backed by agronomic expertise and
              responsible sourcing.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-xs text-gray-300">
          © {new Date().getFullYear()} Demeter Seed. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
