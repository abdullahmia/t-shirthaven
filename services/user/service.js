import { ZCreateUser } from "@/types/user";
import { cache } from "@/utils/cache";
import { transformObject } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { cache as reactCache } from "react";
import "server-only";
import { User } from "./user.model";

export const getUsers = reactCache(() =>
  cache(async () => {
    return transformObject(await User.find().lean());
  })()
);

export const createUser = async (data) => {
  validateInputs([data, ZCreateUser]); // Assuming ZCreateUser is your validation schema

  try {
    const user = await User.create(data);
  } catch (error) {
    // check if the error is a duplicate key error and throw a custom error
    if (error.code === 11000) {
      throw new Error("Email already exists");
    }
    throw new Error("Failed to create user");
  }
};
