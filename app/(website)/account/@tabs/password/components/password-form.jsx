"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { changePassword } from "../action";

const ZPassword = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function PasswordForm({ intiialData }) {
  // local state
  const [loading, setLoading] = useState(false);

  // hooks
  const router = useRouter();

  // form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm({
    resolver: zodResolver(ZPassword),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  /**
   * HANDLERS
   */
  const handleOnSubmit = async (data) => {
    setLoading(true);

    try {
      const payload = {
        password: data.password,
      };
      await changePassword(intiialData?.id, payload);
      toast.success("Password has been changed!");
      reset();
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className="space-y-4">
      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          New Password
        </Label>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input className="text-sm text-secondary" {...field} />
          )}
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors?.password?.message}</p>
        )}
      </div>

      <div>
        <Label className="text-sm text-secondary font-medium block mb-1">
          Confirm Password
        </Label>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <Input className="text-sm text-secondary" {...field} />
          )}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500">
            {errors?.confirmPassword?.message}
          </p>
        )}
      </div>

      <div className="pt-8">
        <Button disabled={!isValid || isSubmitting} loading={loading}>
          Change password
        </Button>
      </div>
    </form>
  );
}
