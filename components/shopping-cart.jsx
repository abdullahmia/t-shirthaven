"use client";

import { ShoppingCart as CartIcon } from "lucide-react";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ShoppingCart() {
  /**
   * SELECTOR
   */
  const { cart } = useSelector((state) => state?.cart);

  return (
    <Link href="/cart" className="relative">
      <CartIcon size={20} />
      <span className="absolute text-[10px] text-white -top-2 -right-2 w-4 h-4 bg-black rounded-full flex items-center justify-center">
        {cart?.length || 0}
      </span>
    </Link>
  );
}
