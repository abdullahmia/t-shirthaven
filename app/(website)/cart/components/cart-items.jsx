"use client";

import { Button } from "@/components/ui/button";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "@/redux/cart/cart.slice";
import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
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

  return (
    <div className="space-y-8">
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
    </div>
  );
}