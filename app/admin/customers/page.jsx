import CustomerTable from './components/customer-table';

export const metadata = {
  title: 'Customer Management',
  description: 'Manage customers. View, update, delete customers.',
};

export default function CustomerManagement() {
  return (
    <div>
      <CustomerTable />
    </div>
  );
}
