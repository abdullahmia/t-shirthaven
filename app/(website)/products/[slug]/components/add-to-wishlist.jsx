"use client";

import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { addToWishlistAction } from "../action";

export default function AddToWishlist({ product }) {
  // Local state
  const [loading, setLoading] = useState(false);

  /**
   * SESSION
   */
  const { data: session } = useSession();

  /**
   * HANDLERS
   */
  const addToWishlistHandler = async () => {
    setLoading(true);
    try {
      await addToWishlistAction(session?.user?.id, product.id);
      toast.success("Product added to wishlist", {
        position: "bottom-right",
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error("Failed to add product to wishlist");
    }
  };

  return (
    <Button
      onClick={addToWishlistHandler}
      variant="outline"
      loading={loading}
      disabled={loading || !session}
    >
      <Heart size={20} color="#5c5f6a" />
    </Button>
  );
}
