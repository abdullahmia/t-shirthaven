import { getCategories } from "@/services/category/service";
import ProductForm from "../components/product-form";

export const metadata = {
  title: "Add Product",
  description: "Add a new product to the inventory",
};

export default async function AddProduct() {
  const categories = await getCategories();
  const categoryOptions = categories?.length
    ? categories.map((category) => ({
        label: category.name,
        value: category.id,
      }))
    : [];

  return (
    <div>
      <ProductForm categoryOptions={categoryOptions} />
    </div>
  );
}
