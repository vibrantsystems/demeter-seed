"use client";

import { useEffect, useMemo, useState } from "react";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data/products";

const ITEMS_PER_PAGE = 6;

export default function ProductsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maturity, setMaturity] = useState("all");
  const [page, setPage] = useState(1);

  /* 🔹 derive categories dynamically */
  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return Array.from(unique);
  }, []);

  /* 🔹 filtering logic */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.plantName.toLowerCase().includes(search.toLowerCase()) ||
        product.variety.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      const matchesMaturity =
        maturity === "all" || product.maturityClass === maturity;

      return matchesSearch && matchesCategory && matchesMaturity;
    });
  }, [search, category, maturity]);

  /* 🔹 reset page when filters change */
  useEffect(() => {
    setPage(1);
  }, [search, category, maturity]);

  /* 🔹 pagination */
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  return (
    <section className="pt-32 pb-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-green-600 mb-3">
            Seed Catalogue
          </h1>
          <p className="text-gray-300">
            Filter seed varieties by crop, maturity, or name.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by crop or variety"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              px-4 py-3 rounded-xl
              bg-white/10
              border border-white/20
              text-gray-100
              placeholder-gray-400
              focus:outline-none
              focus:ring-2
              focus:ring-green-600
            "
          />

          {/* Category */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="
              px-4 py-3 rounded-xl
              bg-white/10
              border border-white/20
              text-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-green-600
            "
          >
            <option value="all" className="bg-slate-800 text-gray-100">
              All Crops
            </option>
            {categories.map((c) => (
              <option key={c} value={c} className="bg-slate-800 text-gray-100">
                {c}
              </option>
            ))}
          </select>

          {/* Maturity */}
          <select
            value={maturity}
            onChange={(e) => setMaturity(e.target.value)}
            className="
              px-4 py-3 rounded-xl
              bg-white/10
              border border-white/20
              text-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-green-600
            "
          >
            <option value="all" className="bg-slate-800 text-gray-100">
              All Maturity
            </option>
            <option value="early" className="bg-slate-800 text-gray-100">
              Early
            </option>
            <option value="medium" className="bg-slate-800 text-gray-100">
              Medium
            </option>
            <option value="late" className="bg-slate-800 text-gray-100">
              Late
            </option>
          </select>

          {/* Reset */}
          <button
            onClick={() => {
              setSearch("");
              setCategory("all");
              setMaturity("all");
            }}
            className="
              px-4 py-3 rounded-xl
              bg-green-600
              text-white
              font-semibold
              hover:bg-green-700
              transition
            "
          >
            Reset
          </button>
        </div>

        {/* Grid */}
        {paginatedProducts.length === 0 ? (
          <p className="text-center text-gray-400">
            No products match your filters.
          </p>
        ) : (
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex justify-center items-center gap-4">
            <button
              onClick={() => setPage((p) => Math.max(p - 1, 1))}
              disabled={page === 1}
              className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-40"
            >
              Previous
            </button>

            <span className="text-sm text-white">
              Page {page} of {totalPages}
            </span>

            <button
              onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              disabled={page === totalPages}
              className="px-4 py-2 rounded-lg bg-white/10 text-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
