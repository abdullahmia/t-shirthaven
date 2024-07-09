"use client";

import { Button } from "@/components/ui/button";
import { SIZE_OPTIONS } from "@/constants";
import { Heart, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function AddToCart() {
  // Local state
  const [cartInfo, setCartInfo] = useState({
    size: "",
    quantity: 1,
  });

  /**
   * HANDLERS
   */
  const handleSize = (size) => {
    setCartInfo({ ...cartInfo, size });
  };

  const handleQuantity = (type) => {
    if (type === "decrement" && cartInfo.quantity > 1) {
      setCartInfo({ ...cartInfo, quantity: cartInfo.quantity - 1 });
    } else if (type === "increment") {
      setCartInfo({ ...cartInfo, quantity: cartInfo.quantity + 1 });
    }
  };

  return (
    <div className="space-y-6 mt-8">
      <div>
        <h2 className="text-xs text-secondary font-light uppercase">
          Select Size
        </h2>
        <div className="flex flex-wrap gap-3 mt-2">
          {SIZE_OPTIONS?.map((size) => (
            <button
              onClick={() => handleSize(size.value)}
              className={`border text-sm text-secondary uppercase py-2 px-4 rounded-sm ${
                cartInfo.size === size.value ? "border-gray-800" : ""
              }`}
              key={size.value}
            >
              {size?.label}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xs text-secondary font-light uppercase">
          Quantity
        </h2>

        <div className="flex items-start justify-start">
          <div className="border rounded-md flex items-center gap-3  mt-2">
            <Button
              onClick={() => handleQuantity("decrement")}
              variant="ghost"
              className="text-xs text-secondary"
              disabled={cartInfo.quantity === 1}
            >
              <Minus size={16} color="#5c5f6a" />
            </Button>
            <p>{cartInfo.quantity}</p>
            <Button
              onClick={() => handleQuantity("increment")}
              variant="ghost"
              className="text-xs text-secondary"
            >
              <Plus size={16} color="#5c5f6a" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button className="px-24">Add to Cart</Button>
        <Button variant="outline">
          <Heart size={20} color="#5c5f6a" />
        </Button>
      </div>

      <div>
        <p className="text-sm text-secondary">
          — Free shipping on orders $100+
        </p>
      </div>
    </div>
  );
}
