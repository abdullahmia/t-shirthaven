import { auth } from '@/lib/auth';
import { getOrdersUserId } from '@/services/order/order.service';
import EmptyOrder from './components/empty-order';
import OrderItem from './components/order-item';

export const metadata = {
  title: 'My Account',
  description: 'Account page',
};

export default async function Orders() {
  const session = await auth();

  const orders = await getOrdersUserId(session.user.id);

  return (
    <div>
      <h2 className="text-[16px] font-semibold text-primary">Orders</h2>
      <div className="no-scrollbar mt-12 h-[450px] w-full space-y-3 overflow-y-auto lg:w-4/5">
        {orders?.length > 0 ? (
          orders?.map((order) => <OrderItem key={order?.id} order={order} />)
        ) : (
          <EmptyOrder />
        )}
      </div>
    </div>
  );
}
