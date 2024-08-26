"use server";

import { addWishlistToUser } from "@/services/wishlist/service";

export const addToWishlistAction = async (userId, productId) => {
  await addWishlistToUser(userId, productId);
};
