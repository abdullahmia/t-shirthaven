import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="group">
      <Link href={`/products/${product?.slug}`}>
        <Image
          src={product?.images[0]?.url}
          width={400}
          height={312}
          alt={product?.title}
          className="w-full h-[312px] object-cover aspect-auto"
        />
      </Link>

      <div className="mt-5 space-y-2">
        <Link href={`/products/${product?.slug}`}>
          <p className="text-secondary text-xs">{product?.category?.name}</p>
          <h2 className="text-primary text-md group-hover:underline">
            {product?.title}
          </h2>
        </Link>

        <div className="text-sm flex items-center justify-between">
          <Button
            className="rounded-full text-xs text-secondary"
            variant="outline"
            size="wide"
          >
            Add to cart
          </Button>
          <p className="text-secondary">$ {product?.price}</p>
        </div>
      </div>
    </div>
  );
}
