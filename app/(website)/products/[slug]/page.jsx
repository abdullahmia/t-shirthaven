import ClientWrapper from '@/components/client-wrapper';
import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { getProductBySlug } from '@/services/product/service';
import { Ellipsis, Star, StarIcon } from 'lucide-react';
import CartOptions from './components/cart-options';
import ImageGallery from './components/image-gallery';
import ProductShare from './components/product-share';
import Reviews from './components/reviews';

export const metadata = {
  title: 'Product Detail',
  description: 'Product Detail page',
};

export default async function ProductDetail({ params: { slug } }) {
  const product = await getProductBySlug(slug);

  return (
    <div className="pt-10">
      <GenerateBreadcrumb variant="" />

      <div className="responsive container">
        <div class="py-6">
          <div class="flex flex-col gap-10 lg:flex-row lg:gap-32">
            <ImageGallery images={product?.images} />

            <div className="w-full lg:w-1/2">
              <div className="flex items-center justify-between">
                <h2 className="flex-1 text-2xl font-semibold text-primary">
                  {product?.title}
                </h2>
                <ClientWrapper>
                  <ProductShare />
                </ClientWrapper>
              </div>
              <div className="mt-3 flex items-center gap-4">
                <div className="flex items-center gap-1 rounded-full border bg-secondary px-4 py-1 text-center text-xs font-semibold text-secondary">
                  <Star size={18} color="#5c5f6a" />
                  4.2 — 54 Reviews
                </div>
                <div className="rounded-full border px-4 py-1 text-center text-xs font-semibold uppercase text-secondary">
                  {product?.stockStatus}
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-[18px] font-semibold text-primary">
                  ${product?.price}
                </h3>
              </div>

              {/* Cart */}
              <CartOptions product={product} />
            </div>
          </div>
        </div>
      </div>

      <div className="responsive container mt-10 lg:mt-20">
        <Tabs
          defaultValue="details"
          className="flex flex-col items-start gap-8 lg:flex-row"
        >
          <div className="lg:w-[200px]">
            <TabsList className="w-full flex-row items-center space-y-0 bg-white lg:flex-col lg:space-y-5 lg:pt-20">
              <TabsTrigger
                value="details"
                className="flex w-full items-center justify-start gap-2 py-2 text-sm data-[state=active]:bg-[#F6F6F6] data-[state=active]:text-primary"
              >
                <Ellipsis size={20} />
                Details
              </TabsTrigger>

              <TabsTrigger
                value="reviews"
                className="flex w-full items-center justify-start gap-2 py-2 text-sm data-[state=active]:bg-[#F6F6F6] data-[state=active]:text-primary"
              >
                <StarIcon size={20} />
                Reviews
              </TabsTrigger>
            </TabsList>
          </div>

          <div className="flex-1">
            <TabsContent value="details" className="mt-0 flex-1 pt-0">
              <div className="w-full">
                <h2 className="text-[16px] font-semibold text-primary">
                  Detail
                </h2>

                <div className="mt-5 space-y-2">
                  <div
                    dangerouslySetInnerHTML={{ __html: product?.description }}
                  ></div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-0 flex-1 pt-0">
              <Reviews />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
}
