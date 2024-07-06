import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import ForgotPasswordForm from "./components/forgot-password-form";

export const metadata = {
  title: "Forgot Password",
  description: "Forgot Password to your account",
};

export default function ForgotPassword() {
  return (
    <div>
      <GenerateBreadcrumb title="Forgot Password" />

      <div className="container w-full h-full flex flex-col items-center justify-center space-y-5 lg:py-32 py-14">
        {/* Forgot password form */}
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
