"use client";

import { SelectInput } from "@/components/select-input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ORDER_STATUS_OPTIONS } from "@/constants";
import { Mail, MapPinned, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { updateOrderAction } from "../../action";

export default function GeneralInformation({ order, shippingAddress }) {
  // Local state
  const [loading, setLoading] = useState(false);

  /**
   * FORM ELEMENTS
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      orderStatus: order?.orderStatus,
    },
  });

  /**
   * FORM HANDLERS
   */
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await updateOrderAction(order?.id, data);
      toast.success("Order updated successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <div className="bg-white p-5 border border-[#e9e9eb8d] rounded">
      <div className="flex items-center gap-2 pb-5 border-b">
        <Image src="/assets/icons/info.png" height={36} width={36} alt="icon" />
        <h2>General Information</h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-[18px]">
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

          <Controller
            name="orderStatus"
            control={control}
            render={({ field }) => (
              <SelectInput options={ORDER_STATUS_OPTIONS} {...field} />
            )}
          />
        </div>

        <div className="flex items-start gap-2">
          <User size={23} color="#5c5f6a" />
          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Custoner</p>
            <h2 className="text-primary text-sm font-semibold">
              {shippingAddress?.name}
            </h2>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Mail size={20} color="#5c5f6a" />

          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Email</p>
            <h2 className="text-primary text-sm font-semibold">
              {order?.user?.email}
            </h2>
          </div>
        </div>

        {/* TODO: Implement phone features */}
        {/* <div className="flex items-start gap-2">
          <Smartphone size={20} color="#5c5f6a" />

          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">Phone Number</p>
            <h2 className="text-primary text-sm font-semibold">050 414 8788</h2>
          </div>
        </div> */}

        <div className="flex items-start gap-2">
          <MapPinned size={20} color="#5c5f6a" />
          <div className="flex-1">
            <p className="text-sm text-secondary font-normal">
              Shipping address
            </p>
            <h2 className="text-primary text-sm font-semibold">
              {shippingAddress?.street}
            </h2>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          Update order
        </Button>
      </form>
    </div>
  );
}
