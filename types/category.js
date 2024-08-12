import { z } from "zod";

export const ZCategoryInput = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name should be at least 3 characters long" }),
  description: z.string(),
  image: z.string().url({ message: "Image must be a valid URL" }),
});
