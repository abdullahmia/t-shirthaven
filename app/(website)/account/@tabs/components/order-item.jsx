import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export default function OrderItem() {
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
          <p className="text-xs text-secondary">Ordered on: 27 July 2023</p>
          <p className="text-sm text-primary">$27.00</p>
        </div>
      </div>
      <div className="w-full flex items-center lg:justify-end justify-start gap-4">
        <div className="lg:mr-4">
          <p className="text-sm font-medium underline text-primary">
            Processing
          </p>
        </div>
        <Button variant="ghost" className="text-xs bg-secondary">
          <X />
        </Button>
      </div>
    </div>
  );
}
