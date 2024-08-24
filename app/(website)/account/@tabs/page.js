import { auth } from "@/lib/auth";
import { getUserById } from "@/services/user";

export const metadata = {
  title: "My Account",
  description: "Account page",
};

export default async function Account() {
  const session = await auth();
  const user = await getUserById(session.user.id);

  return (
    <div>
      <h2 className="text-secondary">
        Hello <b>{user?.name}</b>
      </h2>
      <p className="text-sm text-secondary pt-2">
        From your account dashboard you can view your recent orders, manage your
        shipping and billing addresses, and edit your password and account
        details.
      </p>
    </div>
  );
}
