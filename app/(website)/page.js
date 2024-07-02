import { buttonVariants } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { MoveRight, ShieldCheck, TicketCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Newsletter from "./components/newsletter";
import ProductCard from "./components/product-card";

export const metadata = {
  title: "Fashio Ecommerce",
  description: "Fashio Ecommerce",
};

export default function Page() {
  return (
    <div className="">
      {/* Banner */}
      <div className="bg-[#F6F6F6] lg:pt-20 lg:py-0 py-20">
        <div className="container flex items-center justify-between responsive">
          <div className="lg:space-y-5 space-y-2">
            <h2 className="text-4xl text-primary font-semibold">
              Fresh Arrivals Online
            </h2>
            <p className="text-sm text-secondary">
              Shop the latest arrivals from your favorite brands.
            </p>
            <div className="lg:pt-7 pt-3">
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
          <div className="lg:block hidden">
            <Image
              src={"/assets/images/banner.png"}
              width={344}
              height={344}
              alt="Banner"
            />
          </div>
        </div>
      </div>

      <div className="container grid lg:grid-cols-3 grid-cols-1 lg:gap-28 lg:py-24 lg:pt-24 pt-20 responsive">
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

      <div className="container responsive py-20">
        <div className="text-center">
          <p className="text-sm text-secondary">Shop Now</p>
          <h2 className="text-primary text-2xl font-semibold">Best Selling</h2>
        </div>

        {/* Products */}
        <div className="grid lg:grid-cols-4 md:grid-col-2 grid-cols-1 gap-8 mt-20">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>

      <div className="bg-gradient-light py-7">
        <div className="container grid lg:grid-cols-2 grid-cols-1 items-center gap-5 flex-wrap responsive">
          <div>
            <h2 className="text-2xl text-primary font-semibold">
              Browse Our Fashion Paradise!
            </h2>
            <p className="text-sm text-secondary">
              Step into a world of style and explore our diverse collection of
              clothing categories.
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
                Start Browsing <MoveRight size={20} />
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center  w-full">
            <Image
              src={"/assets/images/category.png"}
              width={225}
              height={325}
              alt="category"
              className="h-[325]"
            />
          </div>
        </div>
      </div>

      <div className="container responsive py-24">
        <Tabs defaultValue="featured">
          <div className="flex items-center justify-center">
            <TabsList className="bg-white space-x-5">
              <TabsTrigger
                value="featured"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border rounded-full text-sm"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="latest"
                className="data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:border rounded-full text-sm"
              >
                Latest
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="mt-10">
            <div className="grid lg:grid-cols-4 md:grid-col-2 grid-cols-1 gap-8">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </TabsContent>
          <TabsContent value="latest" className="mt-10">
            <div className="grid lg:grid-cols-4 md:grid-col-2 grid-cols-1 gap-8">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Newsletter />
    </div>
  );
}
