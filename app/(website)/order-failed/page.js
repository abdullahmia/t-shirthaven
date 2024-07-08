import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Order failed",
  description: "Your order has failed. Please try again.",
};

export default function OrderFailed() {
  return (
    <div>
      <GenerateBreadcrumb variant="danger" title="Failed Order" />

      <div className="container responsive flex items-center justify-center lg:py-36 py-20">
        <div className="lg:w-2/6 text-center space-y-2">
          <Image
            src="/assets/images/payemnt-failed.png"
            width={143}
            height={122}
            alt="Payment Success"
            className="m-auto"
          />
          <h2 className="text-2xl text-primary font-semibold">
            Oops! There was an issue
          </h2>
          <p className="text-sm text-secondary pb-8">
            Oops! There was a problem processing your order. Please review the
            details and try again.
          </p>
          <Link
            href="/checkout"
            className={`${cn(
              buttonVariants({})
            )} text-sm font-light px-8 rounded-sm`}
          >
            Reorder
            <MoveRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
