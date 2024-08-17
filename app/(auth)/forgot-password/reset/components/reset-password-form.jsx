"use client";

import { resetPasswordAction } from "@/app/(auth)/action";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const ZResetPassword = z
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

export default function ResetPasswordForm() {
  // local state
  const [loading, setLoading] = useState(false);

  // hooks
  const router = useRouter();
  const searchParams = useSearchParams();

  // form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(ZResetPassword),
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

    const token = searchParams?.get("token");
    try {
      if (!token) throw new Error("No token provided");
      const payload = {
        password: data.password,
      };
      await resetPasswordAction(token, payload);
      router.push("/forgot-password/reset/success");
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="w-[320px] h-full space-y-2"
    >
      <div className="space-y-1 pt-5">
        <Label className="text-sm text-secondary">New password</Label>
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

      <div className="space-y-1 pt-5">
        <Label className="text-sm text-secondary">Confirm password</Label>
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

      <div className="pt-5">
        <Button
          disabled={!isValid || isSubmitting}
          loading={loading}
          className="w-full"
          type="submit"
        >
          Reset password
        </Button>
      </div>
    </form>
  );
}
