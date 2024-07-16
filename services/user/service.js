import { ZCreateUser, ZUser } from "@/types/user";
import { cache } from "@/utils/cache";
import { transformObject } from "@/utils/convert-data";
import { validateInputs } from "@/utils/validate";
import { cache as reactCache } from "react";
import "server-only";
import { z } from "zod";
import { userCache } from "./cache";
import { User } from "./user.model";

export const getUsers = reactCache(() =>
  cache(async () => {
    return transformObject(await User.find().lean());
  })()
);

export const getUserById = reactCache((id) =>
  cache(
    async () => {
      validateInputs([id, z.string()]);

      try {
        const user = await User.findOne({ _id: id }).lean();
        if (!user) {
          return null;
        }
        return transformObject(user);
      } catch (error) {
        throw new Error("Failed to get user");
      }
    },
    [userCache.tag.byId(id)],
    {
      tags: [userCache.tag.byId(id)],
    }
  )()
);

export const getUserByEmail = reactCache((email) =>
  cache(
    async () => {
      validateInputs([email, z.string().email()]);

      try {
        const user = await User.findOne({ email }).lean();
        if (!user) {
          return null;
        }
        return transformObject(user);
      } catch (error) {
        throw new Error("Failed to get user");
      }
    },
    [userCache.tag.byEmail(email)],
    {
      tags: [userCache.tag.byEmail(email)],
    }
  )()
);

export const createUser = async (data) => {
  validateInputs([data, ZCreateUser]);

  try {
    const user = await User.create(data);
  } catch (error) {
    if (error.code === 11000) {
      throw new Error("Email already exists");
    }
    throw new Error("Failed to create user");
  }
};

export const updateUser = async (id, data) => {
  validateInputs([id, z.string()], [data, ZUser.partial()]);

  try {
    const user = await User.findOneAndUpdate({ _id: id }, data, {
      new: true,
    }).lean();
    return transformObject(user);
  } catch (error) {
    throw new Error("Failed to update user");
  }
};
