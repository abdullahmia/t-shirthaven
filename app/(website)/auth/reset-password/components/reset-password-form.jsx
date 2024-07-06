"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResetPasswordForm() {
  return (
    <form className="w-[320px] h-full space-y-2">
      <div className="space-y-1 pt-5">
        <Label className="text-sm text-secondary">New password</Label>
        <Input className="text-sm text-secondary" />
      </div>

      <div className="space-y-1 pt-5">
        <Label className="text-sm text-secondary">Confirm password</Label>
        <Input className="text-sm text-secondary" />
      </div>

      <div className="pt-5">
        <Button className="w-full">Reset password</Button>
      </div>
    </form>
  );
}
