"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PasswordForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          New Password
        </Label>
        <Input />
      </div>

      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          Confirm Password
        </Label>
        <Input />
      </div>

      <div className="pt-8">
        <Button>Change password</Button>
      </div>
    </form>
  );
}
