const { z } = require("zod");

export const ZSubscribe = z.object({
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
});
