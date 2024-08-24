import { auth } from "@/lib/auth";
import { getOrdersUserId } from "@/services/order/order.service";
import EmptyOrder from "./components/empty-order";
import OrderItem from "./components/order-item";

export const metadata = {
  title: "My Account",
  description: "Account page",
};

export default async function Orders() {
  const session = await auth();

  const orders = await getOrdersUserId(session.user.id);

  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">Orders</h2>
      <div className="mt-12 space-y-3 lg:w-4/5 w-full h-[450px] overflow-y-auto no-scrollbar">
        {orders?.length > 0 ? (
          orders?.map((order) => <OrderItem key={order?.id} order={order} />)
        ) : (
          <EmptyOrder />
        )}
      </div>
    </div>
  );
}
