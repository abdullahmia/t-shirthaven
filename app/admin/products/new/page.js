import ProductForm from "./components/product-form";

export const metadata = {
  title: "Add Product",
  description: "Add a new product to the inventory",
};

export default function AddProduct() {
  return (
    <div>
      <ProductForm />
    </div>
  );
}
