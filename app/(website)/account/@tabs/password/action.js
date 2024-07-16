"use server";

import { hashPassword } from "@/services/auth";
import { updateUser } from "@/services/user";

export const changePassword = async (id, data) => {
  const hashedPassword = await hashPassword(data.password);
  try {
    await updateUser(id, {
      password: hashedPassword,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
