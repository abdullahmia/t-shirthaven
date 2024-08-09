"use server";

import { addCategory, deleteCategory } from "@/services/category/service";

export const createCrategoryAction = async (data) => {
  await addCategory(data);
};

export const deleteCategoryAction = async (id) => {
  await deleteCategory(id);
};
