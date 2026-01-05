"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "@/lib/data/types";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/products/${product.slug}`)}
      className="
        cursor-pointer
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
        flex flex-col
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
        <p className="text-sm text-gray-200 mb-2">Variety: {product.variety}</p>
        <div className="text-sm text-gray-300 space-y-1 mb-4">
          <p>Maturity: {product.maturityPeriod}</p>
          <p>Yield: {product.expectedYield}</p>
        </div>

        {/* Footer */}
        <div className="mt-auto flex justify-between items-center gap-3">
          <span className="text-sm font-semibold text-green-500">
            {product.cost}
          </span>

          {/* Inner Buy button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent outer card click
              router.push(
                `/contact?product=${encodeURIComponent(
                  `${product.plantName} ${product.variety}`
                )}`
              );
            }}
            className="text-xs px-4 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
