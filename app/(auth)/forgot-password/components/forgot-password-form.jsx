"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { forgotPasswordAction } from "../../action";

const ZEmail = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export default function ForgotPasswordForm() {
  // local state
  const [loading, setLoading] = useState(false);

  // hooks
  const router = useRouter();

  // form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(ZEmail),
    defaultValues: {
      email: "",
    },
  });

  /**
   * HANDLERS
   */
  const handleOnSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await forgotPasswordAction(data);
      if (response) {
        router.push("/forgot-password/email-sent");
      }
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
      <p className="font-light text-sm text-secondary">
        Please enter the email address associated with your account. We'll
        promptly send you a link to reset your password.
      </p>

      <div className="space-y-1 pt-5">
        <Label className="text-sm text-secondary">Email</Label>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <Input className="text-sm text-secondary" {...field} />
          )}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors?.email?.message}</p>
        )}
      </div>

      <div className="pt-5">
        <Button
          disabled={!isValid || isSubmitting}
          loading={loading}
          className="w-full"
        >
          Send reset link
        </Button>
      </div>
    </form>
  );
}
