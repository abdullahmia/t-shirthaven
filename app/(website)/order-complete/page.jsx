import ClientWrapper from '@/components/client-wrapper';
import { GenerateBreadcrumb } from '@/components/generate-breadcrumb';
import ReduxWrapper from '@/components/redux-wrapper';
import { auth } from '@/lib/auth';
import { stripe } from '@/lib/stripe';
import {
  getOrderBySessionId,
  getOrdersUserId,
} from '@/services/order/order.service';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import { confirmOrderAction, sendOrderConfirmationEmailAction } from './action';
import { RedirectAccount } from './components/redirect-account';

export const metadata = {
  title: 'Order Successfull',
  description: 'Order Successfull',
};

export default async function OrderSuccessfull({
  searchParams: { session_id },
}) {
  const session = await auth();

  // Redirect to login if user is not logged in
  if (!session) {
    return redirect('/login');
  }

  let order;

  if (!session_id) {
    const orders = await getOrdersUserId(session.user.id);
    order = orders[0];

    if (order?.orderStatus === 'pending') {
      /**
       * Update the order status to processing
       */
      await confirmOrderAction(order.id, {
        orderStatus: 'processing',
      });

      /**
       * Send order confirmation email
       */
      await sendOrderConfirmationEmailAction(order);
    }
  }

  if (session_id) {
    order = await getOrderBySessionId(session_id);
    if (!order) {
      return redirect('/');
    }

    // Payment session
    const paymentSession = await stripe.checkout.sessions.retrieve(session_id);

    if (
      paymentSession.payment_status === 'paid' &&
      order?.orderStatus === 'pending'
    ) {
      /**
       * Update the order status to processing
       */
      await confirmOrderAction(order.id, {
        orderStatus: 'processing',
        paymentStatus: 'paid',
      });

      /**
       * Send order confirmation email
       */
      await sendOrderConfirmationEmailAction(order);
    }
  }

  return (
    <div>
      <GenerateBreadcrumb variant="success" title="Successful Order" />

      <div className="responsive container flex items-center justify-center py-20 lg:py-36">
        <div className="space-y-2 text-center lg:w-2/6">
          <Image
            src="/assets/images/payment-success.png"
            width={143}
            height={122}
            alt="Payment Success"
            className="m-auto"
          />
          <h2 className="text-2xl font-semibold text-primary">
            Thank you for shopping
          </h2>
          <p className="pb-8 text-sm text-secondary">
            Your order has been successfully placed. Your order number is{' '}
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
