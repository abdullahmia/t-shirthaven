import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function WishlistItem() {
  return (
    <div className="w-full flex items-center justify-between lg:gap-0 gap-4">
      <div className="w-full flex items-center lg:gap-9 gap-2">
        <div>
          <Image
            src={"/assets/images/product.png"}
            width={100}
            height={100}
            alt="prouct"
            className="w-[80px] h-[80px] object-cover aspect-auto"
          />
        </div>
        <div>
          <h2 className="text-sm font-medium text-primary">
            Raw Black T-Shirt Lineup
          </h2>
          <p className="text-xs text-secondary">Added on: 27 July 2023</p>
          <button className="text-xs text-primary font-semibold">
            Remove item
          </button>
        </div>
      </div>
      <div className="w-full flex items-center lg:justify-end justify-start gap-4">
        <div className="lg:mr-4">
          <p className="text-sm font-medium text-primary">$ 23.3</p>
        </div>
        <Button variant="outline" className="text-xs border-primary">
          Add to cart
        </Button>
      </div>
    </div>
  );
}
