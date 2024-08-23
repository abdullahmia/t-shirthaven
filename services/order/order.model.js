import { ORDER_STATUS_OPTIONS } from "@/constants";
import { Schema, model, models } from "mongoose";

const orderSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        product: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        _id: false,
      },
    ],
    note: {
      type: String,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      default: "pending",
    },
    paymentMethod: {
      type: String,
      enum: ["card", "paypal", "stripe", "cash_on_delivery"],
      default: "stripe",
    },
    paymentDetails: {
      type: Map,
      of: String,
    },
    orderStatus: {
      type: String,
      enum: Object.values(ORDER_STATUS_OPTIONS),
      default: "pending",
    },
    shippingAddress: {
      name: {
        type: String,
        required: true,
      },
      state: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      zip: {
        type: String,
        required: true,
      },
      street: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export const Order = models?.Order ?? model("Order", orderSchema);
