"use server";

import {
  addProduct,
  deleteProduct,
  updateProduct,
} from "@/services/product/service";

export const addProductAction = async (data) => {
  await addProduct(data);
};

export const deleteProductAction = async (id) => {
  await deleteProduct(id);
};

export const updateProductAction = async (id, data) => {
  await updateProduct(id, data);
};
