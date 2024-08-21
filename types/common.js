import { z } from "zod";

export const ZId = z.string().regex(/^[0-9a-fA-F]{24}$/, {
  message: "Invalid MongoDB ObjectId",
});

export const ZSlug = z.string({
  message: "Invalid slug",
});
