import { validateInputs } from "@/utils/validate";
import "server-only";
import { Subscribe } from "./subscribe.model";
import { ZSubscribe } from "./types";

export const addSubscribe = async (data) => {
  validateInputs([data, ZSubscribe]);

  try {
    const isExist = await Subscribe.findOne({ email: data.email });
    if (isExist) {
      return;
    }

    await Subscribe.create(data);
  } catch (error) {
    throw new Error(error.message);
  }
};
