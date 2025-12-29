import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-24 pb-16 flex items-center justify-center px-8">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-600 mb-5">
            Quality Seed for Productive Farming
          </h1>

          <p className="text-base text-gray-300 mb-8 leading-relaxed">
            Demeter Seed supplies certified, high-performance seed varieties
            developed to support sustainable agriculture, resilience, and food
            security across Malawi and the region.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/products"
              className="px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
            >
              Browse Seed Catalogue
            </Link>

            <Link
              href="/contact"
              className="px-8 py-4 rounded-full border border-white/30 text-white hover:bg-white/10 transition"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="pt-8 pb-16 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-green-600 mb-3">
              Certified Quality
            </h3>
            <p className="text-sm text-gray-300">
              All seed varieties are quality-tested to ensure high germination,
              purity, and consistent performance in the field.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-green-600 mb-3">
              Agronomic Expertise
            </h3>
            <p className="text-sm text-gray-300">
              Our products are backed by agronomic knowledge to help farmers
              achieve optimal yields across diverse conditions.
            </p>
          </div>

          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8">
            <h3 className="text-lg font-bold text-green-600 mb-3">
              Trusted Supply
            </h3>
            <p className="text-sm text-gray-300">
              A reliable seed supplier serving farmers, agro-dealers, and
              institutions nationwide.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
