import connectDB from "@/lib/db";
import { cache } from "@/utils/cache";
import { replaceMeta } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { cache as reactCache } from "react";
import "server-only";
import { z } from "zod";
import { orderSchema } from "../../types/order";
import { Product } from "../product/product.model";
import { User } from "../user";
import { orderCache } from "./cache";
import { Order } from "./order.model";

export const createOrder = async (orderData) => {
  validateInputs([orderData, orderSchema]);

  try {
    const order = await Order.create(orderData);

    orderCache.revalidate({
      userId: orderData.user,
      count: true,
      sessionId: orderData.paymentDetails.sessionId,
    });
  } catch (error) {
    throw new Error("Failed to create order");
  }
};

export const getOrders = reactCache(() =>
  cache(
    async () => {
      try {
        await connectDB();

        const orders = await Order.find({})
          .populate({
            path: "user",
            model: User,
          })
          .populate({
            path: "products",
            model: Product,
          })
          .populate({
            path: "products.product",
            model: Product,
          })
          .sort({ createdAt: -1 })
          .lean();

        return replaceMeta(orders);
      } catch (error) {
        throw new Error("Failed to get order");
      }
    },
    [orderCache.tag.byCount()],
    {
      tags: [orderCache.tag.byCount()],
    }
  )()
);

export const getOrderBySessionId = reactCache((id) =>
  cache(
    async () => {
      validateInputs([id, z.string()]);

      try {
        await connectDB();

        const order = await Order.findOne({
          "paymentDetails.sessionId": id,
        })

          .populate({
            path: "user",
            model: User,
          })
          .populate({
            path: "products",
            model: Product,
          })
          .populate({
            path: "products.product",
            model: Product,
          })
          .lean();

        if (!order) {
          throw new Error("Order not found");
        }
        return replaceMeta(order);
      } catch (error) {
        throw new Error("Failed to get order");
      }
    },
    [orderCache.tag.bySession(id)],
    {
      tags: [orderCache.tag.bySession(id)],
    }
  )()
);

export const getOrdersUserId = reactCache((id) =>
  cache(
    async () => {
      validateInputs([id, z.string()]);

      try {
        await connectDB();

        const orders = await Order.find({
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
          .populate({
            path: "products.product",
            model: Product,
          })
          .sort({ createdAt: -1 })
          .lean();

        return replaceMeta(orders);
      } catch (error) {
        throw new Error("Failed to get order");
      }
    },
    [orderCache.tag.byUser(id)],
    {
      tags: [orderCache.tag.byUser(id)],
    }
  )()
);

export const getOrderById = reactCache((id) =>
  cache(
    async () => {
      validateInputs([id, z.string()]);

      try {
        await connectDB();

        const order = await Order.findOne({
          _id: id,
        })
          .populate({
            path: "user",
            model: User,
          })
          .populate({
            path: "products",
            model: Product,
          })
          .populate({
            path: "products.product",
            model: Product,
          })
          .lean();

        if (!order) {
          throw new Error("Order not found");
        } else {
          return replaceMeta(order);
        }

        // return replaceMeta(order);
      } catch (error) {
        throw new Error("Failed to get order");
      }
    },
    [orderCache.tag.byUser(id)],
    {
      tags: [orderCache.tag.byUser(id)],
    }
  )()
);

export const updateOrder = async (id, data) => {
  validateInputs([id, z.string(), data, orderSchema.partial()]);

  try {
    const order = await getOrderById(id);
    if (!order) {
      throw new Error("Order not found");
    }
    await Order.findByIdAndUpdate(id, data);

    orderCache.revalidate({
      id: id,
      count: true,
      sessionId: order.paymentDetails.sessionId,
      userId: order.user.id,
    });
  } catch (error) {
    throw new Error("Failed to update order");
  }
};
