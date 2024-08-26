import ClientWrapper from "@/components/client-wrapper";
import ReduxWrapper from "@/components/redux-wrapper";
import { auth } from "@/lib/auth";
import { getWishlistsByUser } from "@/services/wishlist/service";
import { redirect } from "next/navigation";
import EmptyWishlist from "./components/empty-wishlist";
import WishlistItem from "./components/wishlist-item";

export const metadata = {
  title: "My Wishlist",
  description:
    "This is your wishlist. Add your favorite products to wishlist. You can buy them later.",
};

export default async function Wishlist() {
  const session = await auth();

  if (!session) {
    return redirect("/login");
  }

  const wishlists = await getWishlistsByUser(session.user.id);
  const products = wishlists?.products || [];

  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">My Wishlist</h2>

      <div className="mt-12 space-y-3 lg:w-4/5 w-full h-[450px] overflow-y-auto no-scrollbar">
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
