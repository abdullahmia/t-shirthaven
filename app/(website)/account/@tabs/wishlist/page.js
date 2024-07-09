import WishlistItem from "./components/wishlist-item";

export const metadata = {
  title: "My Wishlist",
  description:
    "This is your wishlist. Add your favorite products to wishlist. You can buy them later.",
};

export default function Wishlist() {
  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">My Wishlist</h2>

      <div className="mt-12 space-y-3 lg:w-4/5 w-full h-[450px] overflow-y-auto no-scrollbar">
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
      </div>
    </div>
  );
}
