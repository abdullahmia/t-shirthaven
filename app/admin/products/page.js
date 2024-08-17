import { getProducts } from "@/services/product/service";
import ProductTable from "./components/product-table";

export const metadata = {
  title: "Products inventory",
  description:
    "Manage products inventory. Add, edit, delete products. Manage stock",
};

export default async function AdminProducts() {
  const products = await getProducts();
  return (
    <div>
      <ProductTable products={products} />
    </div>
  );
}
