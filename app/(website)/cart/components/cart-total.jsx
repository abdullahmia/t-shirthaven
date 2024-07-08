import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CartTotal() {
  return (
    <div className="w-full border rounded-md p-5">
      <h2 className="text-primary font-semibold">Order Summary</h2>

      <div className="mt-3 space-y-3">
        <div className="text-sm text-secondary flex justify-between">
          <span>Subtotal: </span>
          <span>$ 90</span>
        </div>
        <div className="text-sm text-secondary flex justify-between">
          <span>Shipping: </span>
          <span className="capitalize font-semibold">free</span>
        </div>
        <div className="text-sm text-secondary flex justify-between">
          <span>Tax: </span>
          <span className="capitalize font-semibold">$ 2</span>
        </div>
      </div>
      <div className="py-6">
        <hr />
      </div>
      <div className="text-sm text-primary flex justify-between">
        <span>Total: </span>
        <span className="capitalize font-semibold">$ 220</span>
      </div>

      <div className="flex flex-col justify-center items-center gap-6 mt-6">
        <Button className="w-full">Checkout</Button>

        <Link
          href="/shop"
          className="text-xs text-secondary underline font-medium"
        >
          Continue shopping
        </Link>
      </div>
    </div>
  );
}
