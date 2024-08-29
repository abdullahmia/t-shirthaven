import { getCategories } from '@/services/category/service';
import { getProductById } from '@/services/product/service';
import ProductForm from '../components/product-form';

export const metadata = {
  title: 'Edit Product',
  description: 'This is the form to edit a product',
};

export default async function EditProduct({ params: { id } }) {
  const product = await getProductById(id);
  const categories = await getCategories();
  const categoryOptions = categories?.length
    ? categories.map((category) => ({
        label: category.name,
        value: category.id,
      }))
    : [];
  return (
    <div>
      <ProductForm
        isEdit={true}
        product={product}
        categoryOptions={categoryOptions}
      />
    </div>
  );
}
