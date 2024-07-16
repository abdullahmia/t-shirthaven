import { auth } from "@/lib/auth";
import { getUserByEmail } from "@/services/user";
import AccountDetailsForm from "./components/account-detail-form";

export const metadata = {
  title: "Account Details",
  description:
    "This is your account details page. You can manage your account here.",
};

export default async function AccountDetails() {
  const { user: loggedInUser } = await auth();
  const user = await getUserByEmail(loggedInUser?.email);
  console.log(user);

  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">
        Account Details
      </h2>

      <div className="mt-12 lg:w-2/6 w-full">
        <AccountDetailsForm
          initialData={{
            name: user?.name,
            email: user?.email,
            id: user?.id,
          }}
        />
      </div>
    </div>
  );
}
