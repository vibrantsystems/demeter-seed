import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/data/getProductBySlug";
import Image from "next/image";
import Link from "next/link";

/* ---------- Types ---------- */
interface Props {
  params: Promise<{ slug: string }>;
}

/* ---------- Page ---------- */
export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const productLabel = `${product.plantName} – ${product.variety}`;

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link href="/products" className="text-sm text-cyan-400 hover:underline">
        ← Back to Products
      </Link>

      {/* Main */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image (fixed-size container = hydration-safe) */}
        <div className="flex justify-center md:justify-start">
          <div className="relative aspect-square w-40 md:w-48 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <Image
              src={product.image}
              alt={productLabel}
              fill
              sizes="(max-width: 768px) 160px, 192px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Details */}
        <div className="rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
          <h1 className="text-3xl font-semibold text-white">{productLabel}</h1>

          <p className="mt-2 text-white/70">{product.description}</p>

          <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
            <Detail label="Category" value={product.category} />
            <Detail label="Maturity Period" value={product.maturityPeriod} />
            <Detail label="Maturity Class" value={product.maturityClass} />
            <Detail label="Expected Yield" value={product.expectedYield} />
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-xl font-bold text-cyan-400">
              {product.cost}
            </span>

            <Link
              href={`/contact?product=${encodeURIComponent(productLabel)}`}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-black font-medium hover:opacity-90 transition"
            >
              Buy / Enquire
            </Link>
          </div>
        </div>
      </div>

      {/* Agronomy */}
      <div className="mt-12 rounded-2xl p-6 bg-white/5 backdrop-blur border border-white/10">
        <h2 className="text-2xl font-semibold text-white mb-6">
          How to Grow {product.plantName}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <GuideItem
            title="Planting Time"
            text={product.agronomy.plantingTime}
          />
          <GuideItem title="Spacing" text={product.agronomy.spacing} />
          <GuideItem title="Fertilizer" text={product.agronomy.fertilizer} />
          <GuideItem title="Weed Control" text={product.agronomy.weedControl} />
          <GuideItem title="Harvesting" text={product.agronomy.harvesting} />
          <GuideItem title="Storage" text={product.agronomy.storage} />
        </div>
      </div>
    </section>
  );
}

/* ---------- Static helpers (hydration-safe) ---------- */

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-white/50">{label}</p>
      <p className="text-white">{value}</p>
    </div>
  );
}

function GuideItem({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="font-semibold text-green-500 mb-1">{title}</p>
      <p className="text-white/80">{text}</p>
    </div>
  );
}
