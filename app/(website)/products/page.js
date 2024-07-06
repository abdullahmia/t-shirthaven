import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import ProductCard from "../components/product-card";
import ProductFilters from "./components/product-filters";
import ProductPagination from "./components/product-pagination";
import ProductSort from "./components/product-sort";

export const metadata = {
  title: "Products",
  description: "Products page",
};

export default function ProductPage() {
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
          <ProductSort />

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          {/* Pagination */}
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}
