import PasswordForm from "./components/password-form";

export const metadata = {
  title: "Change Password",
  description: "Change your password here.",
};

export default function ChangePassword() {
  return (
    <div>
      <h2 className="text-primary text-[16px] font-semibold">
        Change Password
      </h2>

      <div className="mt-12 lg:w-2/6 w-full">
        <PasswordForm />
      </div>
    </div>
  );
}
