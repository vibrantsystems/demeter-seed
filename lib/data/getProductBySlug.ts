import { products } from "@/lib/data/products";

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
