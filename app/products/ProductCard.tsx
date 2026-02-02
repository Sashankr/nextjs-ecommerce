import { formatPrice } from "@/lib/utils";
import Image from "next/image";
import type { Product } from "../generated/prisma/client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      {/* Image */}
      <CardHeader className="p-0">
        <div className="relative aspect-video bg-gray-100">
          {product.image && (
            <Image
              src={product.image}
              alt={product.name}
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          )}
        </div>
      </CardHeader>

      {/* Content */}
      <CardContent className="p-4">
        <h3 className="line-clamp-1 text-lg font-semibold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-1 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <span className="text-xl font-bold text-gray-900">
          {formatPrice(product.price)}
        </span>

        <Button className="rounded-lg bg-black text-sm hover:bg-gray-800">
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
}
