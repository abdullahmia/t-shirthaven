import { BestSelling } from "./components/wizards/best-selling";
import RecentOrders from "./components/wizards/recent-orders";
import { TotalCustomers } from "./components/wizards/total-customers";
import { TotalOrders } from "./components/wizards/total-orders";
import { TotalSells } from "./components/wizards/total-sells";

export const metadata = {
  title: "Admin",
  description: "Admin page",
};

export default function Admin() {
  return (
    <div className="space-y-10">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
        <TotalSells />
        <TotalCustomers />
        <TotalOrders />
      </div>

      <div className="grid lg:grid-cols-3 gap-10">
        <BestSelling />
        <RecentOrders />
      </div>
    </div>
  );
}
