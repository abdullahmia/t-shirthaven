"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { clearCart } from "@/redux/cart/cart.slice";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export function RedirectAccount() {
  // Hooks
  const dispatch = useDispatch();

  /**
   * EFFECTS
   */
  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <Link
      href="/account/orders"
      className={`${cn(buttonVariants({}))} text-sm font-light px-8 rounded-sm`}
    >
      Go to my account
      <MoveRight size={20} />
    </Link>
  );
}
