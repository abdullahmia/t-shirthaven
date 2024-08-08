import { Schema, model, models } from "mongoose";

const mediaSchema = new Schema(
  {
    publicId: { type: String, required: true },
    url: { type: String, required: true },
  },
  { timestamps: true }
);

export const Media = models?.Media ?? model("Media", mediaSchema);
