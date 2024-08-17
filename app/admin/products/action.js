"use server";

import { addProduct } from "@/services/product/service";

export const addProductAction = async (data) => {
  await addProduct(data);
};
