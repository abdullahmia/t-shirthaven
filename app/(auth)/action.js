"use server";

import { createUser } from "@/services/user";

export const registerAction = async (data) => {
  await createUser(data);
};
