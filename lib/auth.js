import { verifyPassword } from "@/services/auth";
import { User } from "@/services/user";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials == null) return null;

        try {
          let user = await User.findOne({ email: credentials.email }).lean();
          if (user) {
            const isMatch = await verifyPassword(
              credentials?.password,
              user.password
            );

            if (isMatch) {
              return {
                email: user.email,
                name: user.name,
                id: user._id.toString(),
              };
            } else {
              throw new Error("Invalid email or password");
            }
          } else {
            throw new Error("Invalid email or password");
          }
        } catch (err) {
          throw new Error(err?.message);
        }
      },
    }),
  ],

  callbacks: {
    async session({ session, token }) {
      session.user.id = token?.sub;
      return session;
    },
  },
});
