import { getCategories } from "@/services/category/service";
import { getProducts } from "@/services/product/service";
import ProductTable from "./components/product-table";

export const metadata = {
  title: "Products inventory",
  description:
    "Manage products inventory. Add, edit, delete products. Manage stock",
};

export default async function AdminProducts({
  searchParams: { category, size, price },
}) {
  const categories = await getCategories();
  const allProduct = await getProducts();

  // Filter products by category, size, price
  const products = allProduct?.filter((product) => {
    if (category && product?.category?.id !== category) return false;
    if (size && product?.size !== size) return false;
    if (price && (product?.price < price[0] || product?.price > price[1]))
      return false;
    return true;
  });

  return (
    <div>
      <ProductTable products={products} categories={categories} />
    </div>
  );
}
