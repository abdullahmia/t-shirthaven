import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import GoogleLogin from "../components/google-login";
import SignupForm from "./components/signup-form";

export const metadata = {
  title: "Signup",
  description: "Signup to your account",
};

export default function Signup() {
  return (
    <div>
      <GenerateBreadcrumb title="Sign up" />

      <div className="container w-full h-full flex flex-col items-center justify-center space-y-5 lg:py-32 py-14">
        {/* Google Login */}
        <GoogleLogin />

        <div className="text-center font-light text-sm text-secondary">Or</div>

        {/* Credential Signup */}
        <SignupForm />
      </div>
    </div>
  );
}
