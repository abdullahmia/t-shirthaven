import { buttonVariants } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import {
  getBestSellingProducts,
  getShopProducts,
} from '@/services/product/service';
import { MoveRight, ShieldCheck, TicketCheck, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Newsletter from './components/newsletter';
import ProductCard from './components/product-card';

export const metadata = {
  title: 'Fashio Ecommerce',
  description: 'Fashio Ecommerce',
};

export default async function Page() {
  const bestSellings = await getBestSellingProducts();
  const { products: latestProducts } = await getShopProducts(1, 4);

  return (
    <div className="">
      {/* Banner */}
      <div className="bg-[#F6F6F6] py-20 lg:py-0 lg:pt-20">
        <div className="responsive container flex items-center justify-between">
          <div className="space-y-2 lg:space-y-5">
            <h2 className="text-4xl font-semibold text-primary">
              Fresh Arrivals Online
            </h2>
            <p className="text-sm text-secondary">
              Shop the latest arrivals from your favorite brands.
            </p>
            <div className="pt-3 lg:pt-7">
              <Link
                href="/products"
                className={cn(
                  buttonVariants({
                    variant: 'default',
                    padding: 'lg',
                  }),
                )}
              >
                View Collections <MoveRight size={20} />
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src={'/assets/images/banner.png'}
              width={344}
              height={344}
              alt="Banner"
            />
          </div>
        </div>
      </div>

      <div className="responsive container grid grid-cols-1 pt-20 lg:grid-cols-3 lg:gap-28 lg:py-24 lg:pt-24">
        <div className="space-y-6 text-start">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
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

        <div className="space-y-6 text-start">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
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

        <div className="space-y-6 text-start">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
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

      <div className="responsive container py-20">
        <div className="text-center">
          <p className="text-[12px] text-secondary">Shop Now</p>
          <h2 className="text-2xl font-semibold text-primary">Best Selling</h2>
        </div>

        {/* Products */}
        <div className="md:grid-col-2 mt-20 grid grid-cols-1 gap-8 lg:grid-cols-4">
          {bestSellings?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <div className="bg-gradient-light py-7">
        <div className="responsive container grid grid-cols-1 flex-wrap items-center gap-5 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-primary">
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
                    variant: 'default',
                    padding: 'lg',
                  }),
                )}
              >
                Start Browsing <MoveRight size={20} />
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <Image
              src={'/assets/images/category.png'}
              width={225}
              height={325}
              alt="category"
              className="h-[325]"
            />
          </div>
        </div>
      </div>

      <div className="responsive container py-24">
        <Tabs defaultValue="latest">
          <div className="flex items-center justify-center">
            <TabsList className="space-x-5 bg-white">
              <TabsTrigger
                value="featured"
                className="rounded-full text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                Featured
              </TabsTrigger>
              <TabsTrigger
                value="latest"
                className="rounded-full text-sm data-[state=active]:border data-[state=active]:bg-white data-[state=active]:text-primary"
              >
                Latest
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="featured" className="mt-10">
            <div className="md:grid-col-2 grid grid-cols-1 gap-8 lg:grid-cols-4">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </TabsContent>
          <TabsContent value="latest" className="mt-10">
            <div className="md:grid-col-2 grid grid-cols-1 gap-8 lg:grid-cols-4">
              {latestProducts?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <Newsletter />
    </div>
  );
}
