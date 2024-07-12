import ProductTable from "./components/product-table";

export const metadata = {
  title: "Products inventory",
  description:
    "Manage products inventory. Add, edit, delete products. Manage stock",
};

export default function AdminProducts() {
  return (
    <div>
      <ProductTable />
    </div>
  );
}
