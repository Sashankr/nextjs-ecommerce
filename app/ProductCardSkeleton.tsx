import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProductCardSkeleton() {
  return (
    <Card className="overflow-hidden rounded-2xl border bg-white shadow-sm">
      {/* Image skeleton */}
      <CardHeader className="p-0">
        <Skeleton className="aspect-video w-full" />
      </CardHeader>

      {/* Content skeleton */}
      <CardContent className="p-4 space-y-2">
        <Skeleton className="h-5 w-3/4" /> {/* Title */}
        <Skeleton className="h-4 w-full" /> {/* Description line 1 */}
        <Skeleton className="h-4 w-5/6" /> {/* Description line 2 */}
      </CardContent>

      {/* Footer skeleton */}
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Skeleton className="h-6 w-20" /> {/* Price */}
        <Skeleton className="h-9 w-28 rounded-lg" /> {/* Button */}
      </CardFooter>
    </Card>
  );
}
