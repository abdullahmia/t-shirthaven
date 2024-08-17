import { z } from "zod";

const stockStatusEnum = z.enum([
  "In Stock",
  "Out of Stock",
  "Low Stock",
  "Pre-Order",
]);

const imageSchema = z.object({
  id: z.string().optional(),
  url: z.string().url({ message: "Invalid image URL" }),
});

export const ZCreateProduct = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  price: z.number().positive({ message: "Price must be a positive number" }),
  category: z.string().min(1, { message: "Category is required" }),
  sku: z.string().min(1, { message: "SKU is required" }),
  description: z.string().optional(),
  availableQuantity: z.number().int().nonnegative({
    message: "Available quantity must be a non-negative integer",
  }),
  size: z.string().optional(),
  images: z.array(imageSchema).optional(),
});

export const ZUpdateProduct = z.object({
  title: z.string().min(1, { message: "Title is required" }).optional(),
  price: z
    .number()
    .positive({ message: "Price must be a positive number" })
    .optional(),
  category: z.string().min(1, { message: "Category is required" }).optional(),
  sku: z.string().min(1, { message: "SKU is required" }).optional(),
  stockStatus: stockStatusEnum.optional(),
  description: z.string().optional(),
  availableQuantity: z
    .number()
    .int()
    .nonnegative({
      message: "Available quantity must be a non-negative integer",
    })
    .optional(),
  size: z.string().optional(),
  images: z.array(imageSchema).optional(),
  deleteImageIds: z.array(z.string()).optional(),
});
