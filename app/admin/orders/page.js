import OrderTable from "./components/order-table";

export const metadata = {
  title: "Order Management",
  description:
    "Manage orders. View, update, delete orders. Manage order status",
};

export default function OrderManagement() {
  return (
    <div>
      <OrderTable />
    </div>
  );
}
