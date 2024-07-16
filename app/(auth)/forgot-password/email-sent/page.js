import { GenerateBreadcrumb } from "@/components/generate-breadcrumb";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function EmailSend() {
  return (
    <div>
      <GenerateBreadcrumb title="Email has been sent" />

      <div className="container w-full h-full flex flex-col items-center justify-center space-y-5 lg:py-32 py-14">
        <div className="w-[320px]">
          <div>
            <h1 className="leading-2 mb-4 text-center font-bold">
              Password reset successfully requested
            </h1>
            <p className="text-center text-sm text-secondary">
              Check your email for a link to reset your password. If it
              doesn&apos;t appear within a few minutes, check your spam folder.
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
