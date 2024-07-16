import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/services/user";
import PasswordForm from "./components/password-form";

export const metadata = {
  title: "Change Password",
  description: "Change your password here.",
};

export default async function ChangePassword() {
  const { user: loggedInUser } = await auth();
  const user = await getUserByEmail(loggedInUser?.email);
  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">
        Change Password
      </h2>

      <div className="mt-12 lg:w-2/6 w-full">
        <PasswordForm
          intiialData={{
            id: user?.id,
          }}
        />
      </div>
    </div>
  );
}
