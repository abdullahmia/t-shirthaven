"use server";

import { removeWishlistFromUser } from "@/services/wishlist/service";

export const removeWishlistFromUserAction = async (userId, productId) => {
  await removeWishlistFromUser(userId, productId);
};
