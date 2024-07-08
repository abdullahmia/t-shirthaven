import { Button } from "@/components/ui/button";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";

export default function CartItem() {
  return (
    <div className="flex lg:flex-nowrap flex-wrap items-center justify-between lg:gap-0 gap-4">
      <div className="w-full flex items-center gap-9">
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
          <p className="text-xs text-secondary">Color: Blue — Size: M</p>
        </div>
      </div>
      <div className="w-full flex items-center lg:justify-end justify-start gap-4">
        <h3 className="text-secondary">$ 23.3</h3>
        <div className="border rounded-md flex items-center gap-3 ms-4">
          <Button variant="ghost" className="text-xs text-secondary">
            <Minus size={16} color="#5c5f6a" />
          </Button>
          <p>1</p>
          <Button variant="ghost" className="text-xs text-secondary">
            <Plus size={16} color="#5c5f6a" />
          </Button>
        </div>
        <Button variant="ghost" className="text-xs bg-secondary">
          <X />
        </Button>
      </div>
    </div>
  );
}
