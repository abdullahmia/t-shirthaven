import CategoryForm from '../components/category-form';

export const metadata = {
  title: 'Add New Category',
  description: 'This is the form to add a new category',
};

export default function AddNewCategory() {
  return (
    <div>
      <CategoryForm />
    </div>
  );
}
