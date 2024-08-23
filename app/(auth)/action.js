"use server";

import { signIn } from "@/lib/auth";
import { sendForgotPasswordEmail } from "@/lib/email";
import { verifyToken } from "@/lib/jwt";
import { hashPassword } from "@/services/auth";
import { createUser, getUserByEmail, updateUser } from "@/services/user";

export const registerAction = async (data) => {
  await createUser(data);
};

export const credentialLoginAction = async (data, redirect) => {
  try {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
      callbackUrl: redirect || "/account",
    });
    return response;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const forgotPasswordAction = async (data) => {
  const user = await getUserByEmail(data.email);
  if (user) {
    await sendForgotPasswordEmail(user);
  }
  return true;
};

export const resetPasswordAction = async (token, data) => {
  const { id } = await verifyToken(token);
  const hashedPassword = await hashPassword(data.password);

  try {
    await updateUser(id, {
      password: hashedPassword,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
