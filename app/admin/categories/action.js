"use server";

import {
  addCategory,
  deleteCategory,
  updateCategory,
} from "@/services/category/service";

export const createCrategoryAction = async (data) => {
  await addCategory(data);
};

export const deleteCategoryAction = async (id) => {
  await deleteCategory(id);
};

export const updateCategoryAction = async (id, data) => {
  await updateCategory(id, data);
};
