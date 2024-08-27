import { Schema, model, models } from "mongoose";

const subscribeSchema = new Schema(
  {
    email: { type: String, required: true },
  },
  { timestamps: true }
);

export const Subscribe =
  models?.Subscribe ?? model("Subscribe", subscribeSchema);
