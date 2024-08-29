import ClientWrapper from '@/components/client-wrapper';
import ReduxWrapper from '@/components/redux-wrapper';
import { auth } from '@/lib/auth';
import { getWishlistsByUser } from '@/services/wishlist/service';
import { redirect } from 'next/navigation';
import EmptyWishlist from './components/empty-wishlist';
import WishlistItem from './components/wishlist-item';

export const metadata = {
  title: 'My Wishlist',
  description:
    'This is your wishlist. Add your favorite products to wishlist. You can buy them later.',
};

export default async function Wishlist() {
  const session = await auth();

  if (!session) {
    return redirect('/login');
  }

  const wishlists = await getWishlistsByUser(session.user.id);
  const products = wishlists?.products || [];

  return (
    <div>
      <h2 className="text-[16px] font-semibold text-primary">My Wishlist</h2>

      <div className="no-scrollbar mt-12 h-[450px] w-full space-y-3 overflow-y-auto lg:w-4/5">
        {products?.length > 0 ? (
          products?.map((product) => (
            <ClientWrapper key={product?.id}>
              <ReduxWrapper>
                <WishlistItem product={product} />
              </ReduxWrapper>
            </ClientWrapper>
          ))
        ) : (
          <EmptyWishlist />
        )}
      </div>
    </div>
  );
}
