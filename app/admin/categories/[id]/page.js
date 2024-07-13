import CategoryForm from "../components/category-form";

export const metadata = {
  title: "Edit Category",
  description: "This is the form to edit a category",
};

export default function EditProduct() {
  return (
    <div>
      <CategoryForm isEdit={true} />
    </div>
  );
}
