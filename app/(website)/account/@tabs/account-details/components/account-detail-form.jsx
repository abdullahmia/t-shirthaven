"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AccountDetailsForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          Full name
        </Label>
        <Input />
      </div>

      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          Email
        </Label>
        <Input value="abdullahbang1971@gmail.com" disabled />
      </div>

      <div className="pt-8">
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}
