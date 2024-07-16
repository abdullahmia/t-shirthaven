"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { updateUserAction } from "../../../action";

const ZAddress = z.object({
  street: z.string({ message: "Street is required" }),
  city: z.string({ message: "City is required" }),
  state: z.string({ message: "State is required" }),
  zip: z.string({ message: "Zip is required" }),
  country: z.string({ message: "Country is required" }),
});

export default function AddressForm({ initialData }) {
  // Local State
  const [loading, setLoading] = useState(false);

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(ZAddress),
    defaultValues: {
      street: initialData?.street,
      city: initialData?.city,
      state: initialData?.state,
      zip: initialData?.zip,
      country: initialData?.country,
    },
  });

  /**
   * HANDLERS
   */
  const handleOnSubmit = async (data) => {
    setLoading(true);
    try {
      console.log(data);
      await updateUserAction(initialData.id, {
        address: data,
      });
      setLoading(false);
      toast.success("Address updated successfully");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update address");
    }
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">
      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          Street Address
        </Label>
        <Controller
          control={control}
          name="street"
          render={({ field }) => (
            <Input className="text-sm text-secondary" {...field} />
          )}
        />
        {errors.street && (
          <p className="text-xs text-red-500">{errors?.street?.message}</p>
        )}
      </div>

      <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            City
          </Label>
          <Controller
            control={control}
            name="city"
            render={({ field }) => (
              <Input className="text-sm text-secondary" {...field} />
            )}
          />
          {errors.city && (
            <p className="text-xs text-red-500">{errors?.city?.message}</p>
          )}
        </div>
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            State
          </Label>
          <Controller
            control={control}
            name="state"
            render={({ field }) => (
              <Input className="text-sm text-secondary" {...field} />
            )}
          />
          {errors.state && (
            <p className="text-xs text-red-500">{errors?.state?.message}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            Zip Code
          </Label>
          <Controller
            control={control}
            name="zip"
            render={({ field }) => (
              <Input className="text-sm text-secondary" {...field} />
            )}
          />
          {errors.zip && (
            <p className="text-xs text-red-500">{errors?.zip?.message}</p>
          )}
        </div>
        <div className="w-full">
          <Label className="text-sm text-secondary font-medium block mb-1">
            Country
          </Label>
          <Controller
            control={control}
            name="country"
            render={({ field }) => (
              <Input className="text-sm text-secondary" {...field} />
            )}
          />
          {errors.country && (
            <p className="text-xs text-red-500">{errors?.country?.message}</p>
          )}
        </div>
      </div>

      <div className="pt-8">
        <Button
          type="submit"
          disabled={!isValid || isSubmitting}
          loading={loading}
        >
          Save Changes
        </Button>
      </div>
    </form>
  );
}
