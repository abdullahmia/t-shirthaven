import mongoose, { model, models, Schema } from "mongoose";
import slugify from "slugify";

const productSchema = new Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    sku: { type: String, required: true, unique: true },
    stockStatus: {
      type: String,
      required: true,
      enum: ["In Stock", "Out of Stock", "Low Stock", "Pre-Order"],
      default: "In Stock",
    },
    description: { type: String },
    availableQuantity: { type: Number, required: true },
    size: { type: String },
    images: {
      type: [
        new mongoose.Schema({
          _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
          url: { type: String, required: true },
        }),
      ],
      default: [],
    },
    slug: { type: String, unique: true },
  },
  { timestamps: true }
);

/**
 * Slugify the title before saving the product
 */
productSchema.pre("save", function (next) {
  if (this.isModified("title") || this.isNew) {
    if (this.title) {
      this.slug = `${slugify(this.title, {
        lower: true,
        strict: true,
      })}-${Date.now()}`;
    }
  }

  if (this.availableQuantity <= 0) {
    this.stockStatus = "Out of Stock";
  } else if (this.availableQuantity <= 5) {
    this.stockStatus = "Low Stock";
  } else {
    this.stockStatus = "In Stock";
  }

  next();
});

export const Product = models?.Product ?? model("Product", productSchema);
