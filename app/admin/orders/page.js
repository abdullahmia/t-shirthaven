import { getOrders } from "@/services/order/order.service";
import OrderTable from "./components/order-table";

export const metadata = {
  title: "Order Management",
  description:
    "Manage orders. View, update, delete orders. Manage order status",
};

export default async function OrderManagement() {
  const orders = await getOrders();

  return (
    <div>
      <OrderTable orders={orders} />
    </div>
  );
}
