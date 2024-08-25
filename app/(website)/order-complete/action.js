"use server";

import { sendOrderConfirmationEmail } from "@/lib/email";
import { updateOrder } from "@/services/order/order.service";

export const confirmOrderAction = async (id, data) => {
  await updateOrder(id, data);
};

/**
 * Send order confirmation email
 */
export const sendOrderConfirmationEmailAction = async (order) => {
  await sendOrderConfirmationEmail(order);
};
