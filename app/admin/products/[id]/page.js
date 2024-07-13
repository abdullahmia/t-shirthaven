import ProductForm from "../components/product-form";

export const metadata = {
  title: "Edit Product",
  description: "This is the form to edit a product",
};

export default function EditProduct() {
  return (
    <div>
      <ProductForm isEdit={true} />
    </div>
  );
}
