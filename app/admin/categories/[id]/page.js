import { getCategoryById } from "@/services/category/service";
import CategoryForm from "../components/category-form";

export const metadata = {
  title: "Edit Category",
  description: "This is the form to edit a category",
};

export default async function EditProduct({ params: { id } }) {
  const category = await getCategoryById(id);
  console.log("Category: ", category);
  return (
    <div>
      <CategoryForm isEdit={true} category={category} />
    </div>
  );
}
