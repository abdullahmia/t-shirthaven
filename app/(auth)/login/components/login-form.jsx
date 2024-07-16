"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { credentialLoginAction } from "../../action";

// validate schema
const ZLoginUser = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginForm() {
  // local state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // hooks
  const router = useRouter();

  // form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(ZLoginUser),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  /**
   * HANDLERS
   */
  const handleOnSubmit = async (data) => {
    setLoading(true);
    setError(null);
    try {
      const response = await credentialLoginAction(data);
      router.push("/account");
      toast.success("Login successful");
      setError(null);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Invalid email or password");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="w-[320px] h-full space-y-2"
    >
      {error && <div className="text-xs text-red-500 py-2 ">{error}</div>}
      <div className="space-y-1">
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

      <div className="space-y-1">
        <Label className="text-sm text-secondary">Password</Label>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <Input
              type="password"
              className="text-sm text-secondary"
              {...field}
            />
          )}
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors?.password?.message}</p>
        )}
      </div>
      <div className="text-end">
        <Link href="/forgot-password" className="text-xs text-secondary">
          Forgot Password?
        </Link>
      </div>

      <div className="pt-5">
        <Button
          type="submit"
          className="w-full"
          disabled={!isValid || isSubmitting}
          loading={loading}
        >
          Login
        </Button>
      </div>

      <div className="text-sm text-secondary text-center pt-4">
        Don't have an account?{" "}
        <Link href="/signup" className="hover:underline">
          Signup
        </Link>
      </div>
    </form>
  );
}
