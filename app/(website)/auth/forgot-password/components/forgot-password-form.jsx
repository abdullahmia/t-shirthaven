"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordForm() {
  return (
    <form className="w-[320px] h-full space-y-2">
      <p className="font-light text-sm text-secondary">
        Please enter the email address associated with your account. We'll
        promptly send you a link to reset your password.
      </p>

      <div className="space-y-1 pt-5">
        <Label className="text-sm text-secondary">Email</Label>
        <Input className="text-sm text-secondary" />
      </div>

      <div className="pt-5">
        <Button className="w-full">Send reset link</Button>
      </div>
    </form>
  );
}
