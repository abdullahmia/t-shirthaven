"use server";

import { updateOrder } from "@/services/order/order.service";

export const confirmOrderAction = async (id, data) => {
  await updateOrder(id, data);
};
