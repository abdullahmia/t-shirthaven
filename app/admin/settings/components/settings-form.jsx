import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SettingsForm() {
  return (
    <div className="bg-white border border-[#e9e9eb8d] rounded w-full">
      <div className="px-7 py-5 border-b">
        <h2 className="text-primary text-[18px]">Settings</h2>
      </div>

      <form className="space-y-4 mt-12 lg:w-2/6 w-full px-7 pb-10">
        <div>
          <Label className="text-sm text-secondary font-medium block mb-1">
            Site Name
          </Label>
          <Input />
        </div>

        <div>
          <Label className="text-sm text-secondary font-medium block mb-1">
            Support Email
          </Label>
          <Input />
        </div>

        <div>
          <Label className="text-sm text-secondary font-medium block mb-1">
            Monthly Order Goal
          </Label>
          <Input />
        </div>

        <div className="pt-8">
          <Button>Save changes</Button>
        </div>
      </form>
    </div>
  );
}
