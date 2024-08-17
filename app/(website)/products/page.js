import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { getProducts } from "@/services/product/service";
import ProductCard from "../components/product-card";
import ProductFilters from "./components/product-filters";
import ProductPagination from "./components/product-pagination";
import ProductSort from "./components/product-sort";

export const metadata = {
  title: "Products",
  description: "Products page",
};

export default async function ProductPage() {
  const products = await getProducts();
  return (
    <div className="">
      {/* Breadcrumb */}
      <GenerateBreadcrumb />

      <div className="container grid grid-cols-12 gap-7 mt-10 responsive">
        <div className="lg:col-span-3 hidden lg:block">
          {/* Filters */}
          <ProductFilters />
        </div>
        <div className="lg:col-span-9 col-span-12">
          <ProductSort products={products} />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            {products?.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}
