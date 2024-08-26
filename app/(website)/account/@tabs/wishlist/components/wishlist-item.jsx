"use client";

import { Button } from "@/components/ui/button";
import { addToCart } from "@/redux/cart/cart.slice";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { removeWishlistFromUserAction } from "../action";

export default function WishlistItem({ product }) {
  // Local state
  const [loading, setLoading] = useState(false);

  // Hooks
  const dispatch = useDispatch();

  /**
   * SESSION
   */
  const { data: session } = useSession();

  /**
   * HANDLERS
   */
  const removeFromWishlistHandler = async () => {
    setLoading(true);

    try {
      await removeWishlistFromUserAction(session.user.id, product.id);
      toast.success("Item removed from wishlist");
      setLoading(false);
    } catch (error) {
      toast.error("Failed to remove item from wishlist");
    }
  };

  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.images[0].url,
        size: "M",
        quantity: 1,
      })
    );
    toast.success("Product added to cart", {
      position: "bottom-right",
    });
  };

  return (
    <div className="w-full flex items-center justify-between lg:gap-0 gap-4">
      <div className="w-full flex items-center lg:gap-9 gap-2">
        <div>
          <Image
            src={product?.images[0].url}
            width={100}
            height={100}
            alt="prouct"
            className="w-[80px] h-[80px] object-cover aspect-auto"
          />
        </div>
        <div>
          <h2 className="text-sm font-medium text-primary">{product?.title}</h2>
          <button
            onClick={removeFromWishlistHandler}
            className="text-xs text-primary font-semibold"
            disabled={loading}
          >
            {loading ? "Removing..." : "Remove item"}
          </button>
        </div>
      </div>
      <div className="w-full flex items-center lg:justify-end justify-start gap-4">
        <div className="lg:mr-4">
          <p className="text-sm font-medium text-primary">$ {product?.price}</p>
        </div>
        <Button
          onClick={addToCartHandler}
          variant="outline"
          className="text-xs border-primary"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
