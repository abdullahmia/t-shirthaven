import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ProductCard() {
  return (
    <div>
      <Image
        src={"/assets/images/product.png"}
        width={400}
        height={312}
        alt="prouct"
        className="w-full h-[312px] object-cover aspect-auto"
      />

      <div className="mt-5 space-y-2">
        <div>
          <p className="text-secondary text-xs">Dior</p>
          <h2 className="text-primary text-md">Classic Monochrome Tees</h2>
        </div>
        <div className="text-sm flex items-center justify-between">
          <Button
            className="rounded-full text-xs text-secondary"
            variant="outline"
            size="wide"
          >
            Add to cart
          </Button>
          <p className="text-secondary">$ 30</p>
        </div>
      </div>
    </div>
  );
}
