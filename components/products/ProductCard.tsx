import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/data/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.slug}`} className="block">
      <div
        className="
          backdrop-blur-xl
          bg-white/10
          border border-white/20
          rounded-2xl
          shadow-lg
          hover:shadow-xl
          hover:-translate-y-1
          transition-all
          duration-200
          h-full
        "
      >
        <div className="p-6 flex flex-col h-full">
          {/* Image */}
          <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden bg-white/20">
            <Image
              src={product.image}
              alt={product.plantName}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* Content */}
          <h3 className="text-lg font-bold text-green-600">
            {product.plantName}
          </h3>

          <p className="text-sm text-gray-200 mb-2">
            Variety: {product.variety}
          </p>

          <div className="text-sm text-gray-300 space-y-1 mb-4">
            <p>Maturity: {product.maturityPeriod}</p>
            <p>Yield: {product.expectedYield}</p>
          </div>

          {/* Footer */}
          <div className="mt-auto flex justify-between items-center">
            <span className="text-sm font-semibold text-green-500">
              {product.cost}
            </span>
            <span className="text-xs text-gray-300">View details →</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
