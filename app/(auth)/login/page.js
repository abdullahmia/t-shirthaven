import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import GoogleLogin from "../components/google-login";
import LoginForm from "./components/login-form";

export const metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function Login() {
  return (
    <div>
      <GenerateBreadcrumb title="Login" />

      <div className="container w-full h-full flex flex-col items-center justify-center space-y-5 lg:py-32 py-14">
        {/* Google Login */}
        <GoogleLogin />

        <div className="text-center font-light text-sm text-secondary">Or</div>

        {/* Credential Login */}
        <LoginForm />
      </div>
    </div>
  );
}
