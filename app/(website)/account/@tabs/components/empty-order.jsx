import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function EmptyOrder() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-[273px] flex flex-col items-center space-y-3">
        <Image
          src={`/assets/icons/empty-state.png`}
          width={64}
          height={64}
          alt="Empty Order"
        />

        <p className="text-sm text-secondary">
          Your order history is waiting to be filled.
        </p>
        <Link href="/products" className={cn(buttonVariants({}))}>
          Start Shopping <MoveRight size={18} />
        </Link>
      </div>
    </div>
  );
}
