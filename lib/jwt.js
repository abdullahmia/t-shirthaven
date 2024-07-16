import { getUserById } from "@/services/user";
import jwt from "jsonwebtoken";

export const createToken = (userId, userEmail, options = {}) => {
  return jwt.sign(
    { id: userId },
    process.env.NEXTAUTH_SECRET + userEmail,
    options
  );
};

export const verifyToken = async (token, userEmail = "") => {
  if (!token) {
    throw new Error("No token found");
  }
  const decoded = jwt.decode(token);
  const payload = decoded;
  const { id } = payload;

  if (!userEmail) {
    const foundUser = await getUserById(id);
    if (!foundUser) {
      throw new Error("User not found");
    }

    userEmail = foundUser.email;
  }

  return jwt.verify(token, process.env.NEXTAUTH_SECRET + userEmail);
};
