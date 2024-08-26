import connectDB from "@/lib/db";
import { ZId } from "@/types/common";
import { cache } from "@/utils/cache";
import { replaceMeta } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { cache as reactCache } from "react";
import "server-only";
import { z } from "zod";
import { Product } from "../product/product.model";
import { User } from "../user";
import { wishlistCache } from "./cache";
import { Wishlist } from "./wishlist.model";

export const getWishlistsByUser = reactCache((id) =>
  cache(
    async () => {
      validateInputs([id, z.string()]);

      try {
        await connectDB();

        const wishlists = await Wishlist.findOne({
          user: id,
        })
          .populate({
            path: "user",
            model: User,
          })
          .populate({
            path: "products",
            model: Product,
          })
          .sort({ createdAt: -1 })
          .lean();

        return replaceMeta(wishlists);
      } catch (error) {
        console.log(error);
        throw new Error("Failed to get wishlists by user");
      }
    },
    [wishlistCache.tag.byUser(id)],
    {
      tags: [wishlistCache.tag.byUser(id)],
    }
  )()
);

export const addWishlistToUser = async (userId, productId) => {
  validateInputs([userId, ZId], [productId, ZId]);

  try {
    await Wishlist.findOneAndUpdate(
      { user: userId },
      { $addToSet: { products: productId } },
      { upsert: true, new: true }
    );

    wishlistCache.revalidate({
      userId: userId,
      count: true,
    });
  } catch (error) {
    throw new Error("Failed to add wishlist to user");
  }
};

export const removeWishlistFromUser = async (userId, productId) => {
  validateInputs([userId, ZId], [productId, ZId]);

  try {
    await Wishlist.findOneAndUpdate(
      { user: userId },
      { $pull: { products: productId } },
      { new: true }
    );

    wishlistCache.revalidate({
      userId: userId,
      count: true,
    });
  } catch (error) {
    throw new Error("Failed to remove wishlist from user");
  }
};
