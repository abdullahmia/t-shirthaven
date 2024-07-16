import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ResetPasswordSuccess() {
  return (
    <div>
      <GenerateBreadcrumb title="Email has been sent" />

      <div className="container w-full h-full flex flex-col items-center justify-center space-y-5 lg:py-32 py-14">
        <div className="w-[320px]">
          <div>
            <h1 className="leading-2 mb-4 text-center font-bold">
              Password successfully reset.
            </h1>
            <p className="text-center text-secondary">
              You can now log in with your new password
            </p>
            <div className="mt-5 text-center">
              <Link
                href="/login"
                className={`${cn(buttonVariants({}))} w-full`}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
