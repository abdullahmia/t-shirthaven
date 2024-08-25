import ClientWrapper from "@/components/client-wrapper";
import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import ReduxWrapper from "@/components/redux-wrapper";
import { stripe } from "@/lib/stripe";
import { getOrderBySessionId } from "@/services/order/order.service";
import Image from "next/image";
import { redirect } from "next/navigation";
import { confirmOrderAction, sendOrderConfirmationEmailAction } from "./action";
import { RedirectAccount } from "./components/redirect-account";

export const metadata = {
  title: "Order Successfull",
  description: "Order Successfull",
};

export default async function OrderSuccessfull({
  searchParams: { session_id },
}) {
  if (!session_id) {
    return redirect("/");
  }
  const order = await getOrderBySessionId(session_id);

  if (!order) {
    return redirect("/");
  }

  // Payment session
  const paymentSession = await stripe.checkout.sessions.retrieve(session_id);

  // Update the order status & payment status
  if (paymentSession.payment_status === "paid") {
    confirmOrderAction(order.id, {
      paymentStatus: paymentSession.payment_status,
      orderStatus: "processing",
    });

    if (order?.orderStatus === "pending") {
      /**
       * Send order confirmation email
       */
      await sendOrderConfirmationEmailAction(order);
    }
  }

  return (
    <div>
      <GenerateBreadcrumb variant="success" title="Successful Order" />

      <div className="container responsive flex items-center justify-center lg:py-36 py-20">
        <div className="lg:w-2/6 text-center space-y-2">
          <Image
            src="/assets/images/payment-success.png"
            width={143}
            height={122}
            alt="Payment Success"
            className="m-auto"
          />
          <h2 className="text-2xl text-primary font-semibold">
            Thank you for shopping
          </h2>
          <p className="text-sm text-secondary pb-8">
            Your order has been successfully placed. Your order number is{" "}
            <b>#{order?.id}</b> and it is being processed. You will receive an
            email confirmation shortly.
          </p>

          <ClientWrapper>
            <ReduxWrapper>
              <RedirectAccount />
            </ReduxWrapper>
          </ClientWrapper>
        </div>
      </div>
    </div>
  );
}
