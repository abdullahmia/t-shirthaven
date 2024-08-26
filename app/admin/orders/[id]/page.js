import { getOrderById } from "@/services/order/order.service";
import GeneralInformation from "./components/general-information";
import OrderItems from "./components/order-items";
import PaymentInfo from "./components/payment-info";

export const metadata = {
  title: "Order Detail",
  description: "View order detail. Update order status",
};

export default async function OrderDetail({ params: { id } }) {
  const order = await getOrderById(id);

  return (
    <div className="">
      <div className="grid grid-cols-12 gap-8">
        <div className="lg:col-span-8 col-span-12">
          <OrderItems
            products={order?.products}
            date={order?.createdAt}
            orderStatus={order?.orderStatus}
            totalAmount={order?.totalAmount}
            invoice={order}
          />
        </div>
        <div className="lg:col-span-4 col-span-12 space-y-[18px]">
          <GeneralInformation
            order={order}
            shippingAddress={order?.shippingAddress}
          />
          <PaymentInfo
            payment={{
              ...order?.paymentDetails,
              paymentStatus: order?.paymentStatus,
            }}
          />
        </div>
      </div>
    </div>
  );
}
