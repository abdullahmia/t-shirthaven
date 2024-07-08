import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import CartItem from "./components/cart-item";
import CartTotal from "./components/cart-total";

export const metadata = {
  title: "Cart",
  description: "Cart",
};

export default function Cart() {
  return (
    <div>
      <GenerateBreadcrumb title={"Cart"} />

      <div className="container responsive pt-20 flex flex-col md:flex-row  gap-28">
        <div className="md:w-3/4">
          <h2 className="text-lg font-semibold text-primary">Your cart</h2>

          <div className="pt-2 pb-10">
            <hr className="" />
          </div>

          <div className="space-y-8">
            <CartItem />
            <CartItem />
          </div>
        </div>
        <div className="md:w-1/4">
          <CartTotal />
        </div>
      </div>
    </div>
  );
}
