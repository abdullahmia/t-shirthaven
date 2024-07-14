import GeneralInformation from "./components/general-information";
import OrderItems from "./components/order-items";
import PaymentInfo from "./components/payment-info";

export const metadata = {
  title: "Order Detail",
  description: "View order detail. Update order status",
};

export default function OrderDetail() {
  return (
    <div className="">
      <div className="grid grid-cols-12 gap-8">
        <div className="lg:col-span-8 col-span-12">
          <OrderItems />
        </div>
        <div className="lg:col-span-4 col-span-12 space-y-[18px]">
          <GeneralInformation />
          <PaymentInfo />
        </div>
      </div>
    </div>
  );
}
