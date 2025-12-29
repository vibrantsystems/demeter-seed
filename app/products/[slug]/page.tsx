import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data/getProductBySlug";
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link href="/products" className="text-sm text-cyan-400 hover:underline">
        ← Back to Products
      </Link>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
          <Image
            src={product.image}
            alt={`${product.plantName} ${product.variety}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Details */}
        <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
          <h1 className="text-3xl font-semibold text-white">
            {product.plantName} – {product.variety}
          </h1>

          <p className="mt-2 text-white/70">{product.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <Detail label="Category" value={product.category} />
            <Detail label="Maturity" value={product.maturityPeriod} />
            <Detail label="Maturity Class" value={product.maturityClass} />
            <Detail label="Expected Yield" value={product.expectedYield} />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-xl font-bold text-cyan-400">
              {product.cost}
            </span>

            <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-medium hover:opacity-90 transition">
              Enquire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-white/50">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  );
}
