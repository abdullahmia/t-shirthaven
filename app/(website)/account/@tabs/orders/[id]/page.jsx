import GenerateInvoice from '@/components/generate-invoice';
import { getOrderById } from '@/services/order/order.service';
import { formatDate } from '@/utils/date';

export default async function OrderDetail({ params: { id } }) {
  const order = await getOrderById(id);
  const billingAddress = order?.user;
  const shippingAddress = order?.shippingAddress;
  return (
    <div>
      <h3 className="text-sm text-secondary">
        Order <span className="bg-[#ff0]">#{order?.id}</span> was placed on{' '}
        <span className="bg-[#ff0]">{formatDate(order?.createdAt)}</span> and is
        currently{' '}
        <span className="bg-[#ff0] capitalize">{order?.orderStatus}</span>.
      </h3>

      <div className="mt-5 flex items-center justify-between">
        <h4 className="text-2xl font-bold">Order details</h4>
        <GenerateInvoice order={order} />
      </div>

      {/* Products  */}
      <div className="mt-3 w-full border text-secondary">
        {/*  */}
        <div className="text-md flex items-center justify-between px-2 py-2 uppercase">
          <div className="w-full">Product</div>
          <div className="w-full">Total</div>
        </div>

        {/* Products */}
        {order?.products?.map((item) => (
          <div
            key={item?.product?.id}
            className="flex items-center justify-between border-t px-2 py-2 text-xs"
          >
            <div className="w-full">
              {item?.product?.title?.slice(0, 50)} × {item?.quantity}
            </div>
            <div className="w-full">${item?.price * item?.quantity}</div>
          </div>
        ))}

        <div className="flex items-center justify-between border-t px-2 py-2 text-sm">
          <div className="w-full uppercase">Subtotal: </div>
          <div className="w-full">${order?.totalAmount}</div>
        </div>
        <div className="flex items-center justify-between border-t px-2 py-2 text-sm">
          <div className="w-full uppercase">Shipping: </div>
          <div className="w-full">Free shipping</div>
        </div>
        <div className="flex items-center justify-between border-t px-2 py-2 text-sm">
          <div className="w-full uppercase">Payment method: </div>
          <div className="w-full capitalize">{order?.paymentMethod}</div>
        </div>
        <div className="flex items-center justify-between border-t px-2 py-2 text-sm">
          <div className="w-full uppercase">Payment status: </div>
          <div className="w-full capitalize">{order?.paymentStatus}</div>
        </div>
        <div className="flex items-center justify-between border-t px-2 py-2 text-sm">
          <div className="w-full font-semibold uppercase">Total: </div>
          <div className="w-full font-semibold">${order?.totalAmount}</div>
        </div>
      </div>

      {/* Shipping Address */}

      <div className="mt-14 flex flex-wrap items-center gap-12 lg:flex-nowrap">
        <div className="w-full">
          <h2 className="text-2xl text-primary">Billing address</h2>

          <div className="mt-3 space-y-1">
            {/* name */}
            <p className="text-sm text-secondary">{billingAddress?.name}</p>
            <p className="text-sm text-secondary">
              {billingAddress?.address?.street}
            </p>
            <p className="text-sm text-secondary">
              {billingAddress?.address?.city}
            </p>
            {/* <p className="text-sm text-secondary">+8801318214225</p> */}
            <p className="text-sm text-secondary">{billingAddress?.email}</p>
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl text-primary">Shipping address</h2>

          <div className="mt-3 space-y-1">
            {/* name */}
            <p className="text-sm text-secondary">{shippingAddress?.name}</p>
            <p className="text-sm text-secondary">{shippingAddress?.streets}</p>
            <p className="text-sm text-secondary">{shippingAddress?.city}</p>
            {/* <p className="text-sm text-secondary">+8801318214225</p> */}
            <p className="text-sm text-secondary">{billingAddress?.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
