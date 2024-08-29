import { getCategories } from '@/services/category/service';
import CategoryTable from './components/category-table';

export const metadata = {
  title: 'Categories',
  description: 'Manage your categories',
};

export default async function Categories() {
  const categories = await getCategories();

  return (
    <div>
      <CategoryTable categories={categories} />
    </div>
  );
}
