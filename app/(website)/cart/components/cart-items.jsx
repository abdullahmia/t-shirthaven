"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  clearCart,
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "@/redux/cart/cart.slice";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

export default function CartItems() {
  // Hooks
  const dispatch = useDispatch();

  /**
   * SELECTORS
   */
  const { cart } = useSelector((state) => state.cart);

  /**
   * HANDLERS
   */
  const incrementQuantity = (item) => {
    dispatch(incrementCartItem(item.id));
  };

  const decrementQuantity = (item) => {
    dispatch(decrementCartItem(item.id));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return (
    <div className="space-y-8 h-full">
      {cart.length === 0 && (
        <div className="flex items-center justify-center flex-col h-full gap-2">
          <Image
            src={`/assets/icons/empty-state.png`}
            width={64}
            height={64}
            alt="Empty Order"
          />
          <p className="text-lg text-secondary">
            Your cart is waiting to be filled. Start shopping now!
          </p>
          <Link href="/products" className={cn(buttonVariants({}))}>
            Continue Shopping
          </Link>
        </div>
      )}
      {cart.map((item) => (
        <div
          key={item?.id}
          className="flex lg:flex-nowrap flex-wrap items-center justify-between lg:gap-0 gap-4"
        >
          <div className="w-full flex items-center gap-9">
            <div>
              <Image
                src={item.image}
                width={100}
                height={100}
                alt="prouct"
                className="w-[80px] h-[80px] object-cover aspect-auto"
              />
            </div>
            <div>
              <h2 className="text-sm font-medium text-primary">
                {item.title.slice(0, 31)}
              </h2>
              <p className="text-xs text-secondary">Size: {item?.size}</p>
            </div>
          </div>
          <div className="w-full flex items-center lg:justify-end justify-start gap-4">
            <h3 className="text-secondary">$ {item.price * item.quantity}</h3>
            <div className="border rounded-md flex items-center gap-3 ms-4">
              <Button
                variant="ghost"
                className="text-xs text-secondary"
                onClick={() => decrementQuantity(item)}
              >
                <Minus size={16} color="#5c5f6a" />
              </Button>
              <p>{item?.quantity}</p>
              <Button
                variant="ghost"
                className="text-xs text-secondary"
                onClick={() => incrementQuantity(item)}
              >
                <Plus size={16} color="#5c5f6a" />
              </Button>
            </div>
            <Button
              variant="ghost"
              className="text-xs bg-secondary"
              onClick={() => removeItem(item.id)}
            >
              <X />
            </Button>
          </div>
        </div>
      ))}

      {cart?.length > 0 && (
        <div className="flex justify-end">
          <Button
            onClick={clearCartHandler}
            variant="link"
            className="underline pr-0"
          >
            Clear cart
          </Button>
        </div>
      )}
    </div>
  );
}
