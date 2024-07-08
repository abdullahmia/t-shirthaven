import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Order Successfull",
  description: "Order Successfull",
};

export default function OrderSuccessfull() {
  return (
    <div>
      <GenerateBreadcrumb variant="success" title="Successful Order" />

      <div className="container responsive flex items-center justify-center lg:py-36 py-20">
        <div className="lg:w-2/6 text-center space-y-2">
          <Image
            src="/assets/images/payment-success.png"
            width={143}
            height={122}
            alt="Payment Success"
            className="m-auto"
          />
          <h2 className="text-2xl text-primary font-semibold">
            Thank you for shopping
          </h2>
          <p className="text-sm text-secondary pb-8">
            Your order has been successfully placed and is now being processed.
          </p>
          <Link
            href="/account"
            className={`${cn(
              buttonVariants({})
            )} text-sm font-light px-8 rounded-sm`}
          >
            Go to my account
            <MoveRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
