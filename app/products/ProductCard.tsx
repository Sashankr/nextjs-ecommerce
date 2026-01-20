import type { Product } from "@/lib/mock";
import { formatPrice } from "@/lib/utils";
import Image from "next/image";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Image */}
      <div className="relative overflow-hidden rounded-t-2xl bg-gray-100">
        <div className="relative aspect-video">
          <Image
            src={product.image}
            alt={product.name}
            className="object-cover"
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className="absolute left-3 top-3 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${formatPrice(product.price)}
          </span>

          <button className="rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
