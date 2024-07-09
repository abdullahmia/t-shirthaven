import EmptyOrder from "./components/empty-order";

export const metadata = {
  title: "My Account",
  description: "Account page",
};

export default function Account() {
  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">Orders</h2>

      <div className="mt-12 space-y-3 lg:w-4/5 w-full h-[450px] overflow-y-auto no-scrollbar">
        <EmptyOrder />
      </div>
    </div>
  );
}
