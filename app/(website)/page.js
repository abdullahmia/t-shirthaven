import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MoveRight, ShieldCheck, TicketCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Fashio Ecommerce",
  description: "Fashio Ecommerce",
};

export default function Page() {
  return (
    <div className="">
      {/* Banner */}
      <div className="bg-[#F6F6F6] pt-20">
        <div className="container flex items-center justify-between">
          <div className="space-y-5">
            <h2 className="text-4xl text-primary font-semibold">
              Fresh Arrivals Online
            </h2>
            <p className="text-sm text-secondary">
              Shop the latest arrivals from your favorite brands.
            </p>
            <div className="pt-7">
              <Link
                href="/products"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    padding: "lg",
                  })
                )}
              >
                View Collection <MoveRight size={20} />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={"/assets/images/banner.png"}
              width={344}
              height={344}
              alt="Banner"
            />
          </div>
        </div>
      </div>

      <div className="container grid lg:grid-cols-3 grid-cols-1 lg:gap-28 lg:py-24 responsive">
        <div className="text-start space-y-6">
          <div className="bg-secondary w-16 h-16 flex items-center justify-center rounded-full">
            <Truck size={30} color="#5c5f6a" />
          </div>
          <div className="space-y-2">
            <h2 className="text-md font-semibold text-primary">
              Free Shipping
            </h2>
            <p className="text-sm text-secondary">
              Upgrade your style today and get FREE shipping on all orders!
              Don&apos;t miss out.
            </p>
          </div>
        </div>

        <div className="text-start space-y-6">
          <div className="bg-secondary w-16 h-16 flex items-center justify-center rounded-full">
            <TicketCheck size={30} color="#5c5f6a" />
          </div>
          <div className="space-y-2">
            <h2 className="text-md font-semibold text-primary">
              Satisfaction Guarantee
            </h2>
            <p className="text-sm text-secondary">
              Shop confidently with our Satisfaction Guarantee: Love it or get a
              refund.
            </p>
          </div>
        </div>

        <div className="text-start space-y-6">
          <div className="bg-secondary w-16 h-16 flex items-center justify-center rounded-full">
            <ShieldCheck size={30} color="#5c5f6a" />
          </div>
          <div className="space-y-2">
            <h2 className="text-md font-semibold text-primary">
              Secure Payment
            </h2>
            <p className="text-sm text-secondary">
              Your security is our priority. Your payments are secure with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
