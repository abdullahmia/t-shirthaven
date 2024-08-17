import { ZCreateProduct } from "@/types/product";
import { cache } from "@/utils/cache";
import { transformObject } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { cache as reactCache } from "react";
import "server-only";
import { productCache } from "./cache";
import { Product } from "./product.model";

export const getProducts = reactCache(() =>
  cache(
    async () => {
      return transformObject(
        await Product.find({})
          .populate("category")
          .sort({ createdAt: -1 })
          .lean()
      );
    },
    [productCache.tag.byCount()],
    {
      tags: [productCache.tag.byCount()],
    }
  )()
);

export const addProduct = async (data) => {
  validateInputs([data, ZCreateProduct]);

  try {
    const product = await Product.create(data);
    console.log(product);
    // return transformObject(product);
  } catch (error) {
    console.log(error);
    throw new Error(error?.message);
  }
};
