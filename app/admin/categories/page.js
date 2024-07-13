import CategoryTable from "./components/category-table";

export const metadata = {
  title: "Categories",
  description: "Manage your categories",
};

export default function Categories() {
  return (
    <div>
      <CategoryTable />
    </div>
  );
}
