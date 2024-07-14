import { z } from "zod";

export const ZCreateUser = z.object({
  name: z
    .string({ message: "Name is required" })
    .min(3, { message: "Name should be at least 3 characters long" }),
  email: z.string().email(),
  password: z
    .string()
    .min(6, { message: "Password should be at least 6 characters long" }),
  // password: z.string()
  // .min(8, "Password must be at least 8 characters long")
  // .trim()
  // .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  // .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  // .regex(/\d/, "Password must contain at least one number")
  // .regex(/[!@#$%^&*()]/, "Password must contain at least one special character")
});
