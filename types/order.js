import { z } from "zod";

const orderStatusOptions = [
  "pending",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
];

const productSchema = z.object({
  product: z.string().min(1, "Product ID is required"),
  quantity: z.number().min(1, "Quantity must be at least 1"),
  price: z.number().min(0, "Price must be a positive number"),
});

const shippingAddressSchema = z.object({
  name: z.string().min(1, "Name is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  city: z.string().min(1, "City is required"),
  zip: z.string().min(1, "ZIP code is required"),
  street: z.string().min(1, "Street address is required"),
});

const orderSchema = z.object({
  user: z.string().min(1, "User ID is required"),
  products: z
    .array(productSchema)
    .min(1, "Order must contain at least one product"),
  totalAmount: z.number().min(0, "Total amount must be a positive number"),
  paymentStatus: z.enum(["pending", "completed", "cancelled"]).optional(),
  paymentMethod: z
    .enum(["card", "paypal", "stripe", "cash_on_delivery"])
    .optional(),
  paymentDetails: z.record(z.string()).optional(),
  orderStatus: z.enum(orderStatusOptions).optional(),
  shippingAddress: shippingAddressSchema,
});

export { orderSchema };
