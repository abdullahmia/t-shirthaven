"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AddressForm() {
  return (
    <form className="space-y-4">
      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          Street Address
        </Label>
        <Input />
      </div>

      <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            City
          </Label>
          <Input />
        </div>
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            State
          </Label>
          <Input />
        </div>
      </div>

      <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            Zip Code
          </Label>
          <Input />
        </div>
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            Country
          </Label>
          <Input />
        </div>
      </div>

      <div className="pt-8">
        <Button>Save Changes</Button>
      </div>
    </form>
  );
}
