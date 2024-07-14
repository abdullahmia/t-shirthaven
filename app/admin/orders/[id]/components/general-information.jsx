import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ORDER_STATUS_OPTIONS } from "@/constants";
import { Mail, MapPinned, Smartphone, User } from "lucide-react";
import Image from "next/image";

export default function GeneralInformation() {
  return (
    <div className="bg-white p-5 border border-[#e9e9eb8d] rounded">
      <div className="flex items-center gap-2 pb-5 border-b">
        <Image src="/assets/icons/info.png" height={36} width={36} alt="icon" />
        <h2>General Information</h2>
      </div>

      <form className="space-y-[18px]">
        <div className="space-y-2 mt-6">
          <Label className="flex items-center gap-2 text-sm text-secondary">
            <Image
              src="/assets/icons/cart.png"
              height={17}
              width={17}
              alt="icon"
            />
            Order Status
          </Label>
          <Select>
            <SelectTrigger className="w-full text-sm text-secondary focus:ring-0 focus:ring-offset-0  overflow-hidden">
              <SelectValue
                placeholder={ORDER_STATUS_OPTIONS[0].label}
                className="txt-sm text-secondary"
              />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {ORDER_STATUS_OPTIONS.map((option) => (
                  <SelectItem
                    className="cursor-pointer hover:bg-gray-900"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-start gap-2">
          <User size={23} color="#5c5f6a" />
          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Custoner</p>
            <h2 className="text-primary text-sm font-semibold">
              Jay Hadgunson
            </h2>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Mail size={20} color="#5c5f6a" />

          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Email</p>
            <h2 className="text-primary text-sm font-semibold">
              jay.hadgunson@mail.com
            </h2>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Smartphone size={20} color="#5c5f6a" />

          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Phone Number</p>
            <h2 className="text-primary text-sm font-semibold">050 414 8788</h2>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <MapPinned size={20} color="#5c5f6a" />
          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">
              Shipping address
            </p>
            <h2 className="text-primary text-sm font-semibold">
              dhaka bangladesh
            </h2>
          </div>
        </div>

        <Button className="w-full">Update order</Button>
      </form>
    </div>
  );
}
