import { ZCreateCategory } from "@/types/category";
import { cache } from "@/utils/cache";
import { transformObject } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { cache as reactCache } from "react";
import "server-only";
import { Category } from "./category.model";

export const getCategories = reactCache(
  () =>
    cache(async () => {
      return transformObject(await Category.find({}).lean());
    })(),
  ["categories"],
  {
    tags: ["categories"],
  }
);

export const addCategory = async (data) => {
  validateInputs([data, ZCreateCategory]);

  try {
    const category = await Category.create(data);
    return transformObject(category);
  } catch (error) {
    throw new Error(error?.message);
  }
};
