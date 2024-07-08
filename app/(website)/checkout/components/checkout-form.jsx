import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function CheckoutForm() {
  return (
    <div className="container responsive py-20 flex flex-col md:flex-row  gap-28">
      <div className="lg:w-4/6">
        <h2 className="text-[16px] text-primary font-semibold">
          Shipping Address
        </h2>

        <div className="mt-10 space-y-5">
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

          <div className="mt-8 flex items-center gap-6 lg:flex-nowrap flex-wrap">
            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                Email
              </Label>
              <Input type="email" />
            </div>

            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                Full name
              </Label>
              <Input />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-2/6">
        <div className="w-full p-5">
          <h2 className="text-primary text-[16px] font-semibold">Your Order</h2>

          <div className="space-y-3 mt-10">
            <div className="text-sm text-secondary flex justify-between">
              <span>Subtotal: </span>
              <span>$ 90</span>
            </div>
            <div className="text-sm text-secondary flex justify-between">
              <span>Shipping: </span>
              <span className="capitalize font-semibold">free</span>
            </div>
            <div className="text-sm text-secondary flex justify-between">
              <span>Tax: </span>
              <span className="capitalize font-semibold">$ 2</span>
            </div>
          </div>
          <div className="py-6">
            <hr />
          </div>
          <div className="text-sm text-primary flex justify-between">
            <span>Total: </span>
            <span className="capitalize font-semibold">$ 220</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 mt-6">
            <Button className="w-full">Place Order</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
