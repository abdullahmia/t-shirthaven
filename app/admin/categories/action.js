"use server";

import { addCategory } from "@/services/category/service";

export const createCrategoryAction = async (data) => {
  await addCategory(data);
};
