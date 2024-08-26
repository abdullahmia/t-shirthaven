import { Schema, model, models } from "mongoose";

const wishlistSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

// Optionally, create an index to ensure each user has a unique wishlist
wishlistSchema.index({ user: 1 }, { unique: true });

export const Wishlist = models?.Wishlist ?? model("Wishlist", wishlistSchema);
