import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { getCategories } from "@/services/category/service";
import { getProducts } from "@/services/product/service";
import ProductCard from "../components/product-card";
import ProductFilters from "./components/product-filters";
import ProductPagination from "./components/product-pagination";
import ProductSort from "./components/product-sort";

export const metadata = {
  title: "Products",
  description: "Products page",
};

export default async function ProductPage({
  searchParams: { category, size, sort },
}) {
  const allProducts = await getProducts();
  const categories = await getCategories();

  // apply filters with category, size & sort.
  const products = allProducts
    ?.filter((product) => {
      if (category) {
        return product.category?.id === category;
      }
      return true;
    })
    ?.filter((product) => {
      if (size) {
        return product.size === size;
      }
      return true;
    })
    ?.sort((a, b) => {
      if (sort === "asc") {
        return a.price - b.price;
      }
      if (sort === "desc") {
        return b.price - a.price;
      }
      return 0;
    });

  return (
    <div className="">
      {/* Breadcrumb */}
      <GenerateBreadcrumb />

      <div className="container grid grid-cols-12 gap-7 mt-10 responsive">
        <div className="lg:col-span-3 hidden lg:block">
          {/* Filters */}
          <ProductFilters categories={categories} />
        </div>
        <div className="lg:col-span-9 col-span-12">
          <ProductSort products={products} categories={categories} />

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
