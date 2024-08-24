"use server";

import { updateOrder } from "@/services/order/order.service";

export const updateOrderAction = async (id, data) => {
  await updateOrder(id, data);
};
