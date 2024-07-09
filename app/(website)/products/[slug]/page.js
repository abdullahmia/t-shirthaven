import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ellipsis, Star, StarIcon } from "lucide-react";
import AddToCart from "./components/add-to-cart";
import ImageGallery from "./components/image-gallery";
import ProductShare from "./components/product-share";
import Reviews from "./components/reviews";

export const metadata = {
  title: "Product Detail",
  description: "Product Detail page",
};

export default function ProductDetail() {
  return (
    <div className="pt-10">
      <GenerateBreadcrumb variant="" />

      <div className="container responsive">
        <div class="py-6">
          <div class="flex flex-col lg:flex-row lg:gap-32 gap-10">
            <ImageGallery />

            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-2xl font-semibold text-primary">
                  Raw Black T-Shirt Lineup
                </h2>
                <ProductShare />
              </div>

              <div className="flex items-center gap-4 mt-3">
                <div className="text-secondary bg-secondary flex items-center gap-1 px-4 text-xs font-semibold border text-center py-1 rounded-full">
                  <Star size={18} color="#5c5f6a" />
                  4.2 — 54 Reviews
                </div>
                <div className="text-secondary text-xs font-semibold border text-center py-1 px-4 rounded-full">
                  IN STOCK
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-primary font-semibold text-[18px]">
                  $75.00
                </h3>
              </div>

              <AddToCart />
            </div>
          </div>
        </div>
      </div>

      <div className="container responsive lg:mt-20 mt-10">
        <Tabs
          defaultValue="details"
          className="flex gap-8 items-start lg:flex-row flex-col"
        >
          <div className="lg:w-[200px]">
            <TabsList className="w-full bg-white lg:space-y-5 space-y-0 lg:flex-col flex-row items-center lg:pt-20">
              <TabsTrigger
                value="details"
                className="data-[state=active]:bg-[#F6F6F6] data-[state=active]:text-primary w-full text-sm flex items-center justify-start py-2 gap-2"
              >
                <Ellipsis size={20} />
                Details
              </TabsTrigger>

              <TabsTrigger
                value="reviews"
                className="data-[state=active]:bg-[#F6F6F6] data-[state=active]:text-primary w-full text-sm flex items-center justify-start py-2 gap-2"
              >
                <StarIcon size={20} />
                Reviews
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1">
            <TabsContent value="details" className="flex-1 mt-0 pt-0">
              <div className="w-full">
                <h2 className="text-primary text-[16px] font-semibold">
                  Detail
                </h2>

                <div className="mt-5 space-y-2">
                  <p className="text-sm text-secondary">
                    Elevate your everyday style with our Men's Black T-Shirts,
                    the ultimate wardrobe essential for modern men. Crafted with
                    meticulous attention to detail and designed for comfort,
                    these versatile black tees are a must-have addition to your
                    collection. The classic black color never goes out of style.
                    Whether you're dressing up for a special occasion or keeping
                    it casual, these black t-shirts are the perfect choice,
                    effortlessly complementing any outfit.
                  </p>

                  <p className="text-sm text-secondary">
                    Elevate your everyday style with our Men's Black T-Shirts,
                    the ultimate wardrobe essential for modern men. Crafted with
                    meticulous attention to detail and designed for comfort,
                    these versatile black tees are a must-have addition to your
                    collection. The classic black color never goes out of style.
                    Whether you're dressing up for a special occasion or keeping
                    it casual, these black t-shirts are the perfect choice,
                    effortlessly complementing any outfit.
                  </p>

                  <p className="text-sm text-secondary">
                    Elevate your everyday style with our Men's Black T-Shirts,
                    the ultimate wardrobe essential for modern men. Crafted with
                    meticulous attention to detail and designed for comfort,
                    these versatile black tees are a must-have addition to your
                    collection. The classic black color never goes out of style.
                    Whether you're dressing up for a special occasion or keeping
                    it casual, these black t-shirts are the perfect choice,
                    effortlessly complementing any outfit.
                  </p>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="flex-1 mt-0 pt-0">
              <Reviews />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
