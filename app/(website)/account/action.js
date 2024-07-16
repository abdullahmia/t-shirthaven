"use server";

import { updateUser } from "@/services/user";

export const updateUserAction = async (id, data) => {
  await updateUser(id, data);
};
