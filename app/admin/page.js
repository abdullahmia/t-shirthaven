import { getOrders } from "@/services/order/order.service";
import { formatDate } from "@/utils/date";
import { BestSelling } from "./components/wizards/best-selling";
import RecentOrders from "./components/wizards/recent-orders";
import { TotalCustomers } from "./components/wizards/total-customers";
import { TotalOrders } from "./components/wizards/total-orders";
import { TotalSells } from "./components/wizards/total-sells";

export const metadata = {
  title: "Admin",
  description: "Admin page",
};

export default async function Admin() {
  /**
   * Recent orders
   */
  const orders = await getOrders();
  const recentOrders = orders.slice(0, 6)?.map((order) => {
    return {
      name: order?.products[0]?.product?.title,
      date: formatDate(order?.createdAt),
      total: order?.totalAmount,
      status: order?.orderStatus,
    };
  });
  return (
    <div className="space-y-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <TotalSells />
        <TotalCustomers />
        <TotalOrders />
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <BestSelling />
        <RecentOrders orders={recentOrders} />
      </div>
    </div>
  );
}
