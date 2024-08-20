import { getUserById } from "@/services/user";
import jwt from "jsonwebtoken";

/**
 * @name createToken
 * @description Generates a JSON Web Token (JWT) for a user using their ID and email.
 * The token is signed using a secret key composed of a combination of the NEXTAUTH_SECRET environment variable and the user's email.
 *
 * @param {string} userId - The unique identifier of the user.
 * @param {string} userEmail - The email of the user, used to enhance the security of the token.
 * @param {object} [options={}] - Additional options for the JWT, such as expiration time or other settings supported by the jwt.sign method.
 *
 * @returns {string} - The generated JWT as a string.
 *
 * @example
 * const token = createToken('12345', 'user@example.com', { expiresIn: '1h' });
 * console.log(token); // Outputs the JWT token string
 */
export const createToken = (userId, userEmail, options = {}) => {
  return jwt.sign(
    { id: userId },
    process.env.NEXTAUTH_SECRET + userEmail,
    options
  );
};

/**
 * @name verifyToken
 * @description Verifies a JSON Web Token (JWT) and optionally retrieves the user's email to use as part of the secret key for verification.
 * If the token is valid, it returns the decoded payload. If the user's email is not provided, it fetches the user's email using the user ID from the token payload.
 *
 * @param {string} token - The JWT to be verified.
 * @param {string} [userEmail=""] - The email of the user. If not provided, it will be retrieved from the database based on the user ID in the token payload.
 *
 * @returns {object} - The decoded token payload if the token is successfully verified.
 *
 * @throws {Error} - Throws an error if the token is not found, if the user is not found, or if the token verification fails.
 *
 * @example
 * try {
 *   const payload = await verifyToken(token, 'user@example.com');
 *   console.log(payload); // Outputs the decoded token payload
 * } catch (error) {
 *   console.error(error.message); // Handles errors such as "No token found" or "User not found"
 * }
 */
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
