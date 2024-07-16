"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { ZCreateUser } from "@/types/user";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { registerAction } from "../../action";

export default function SignupForm() {
  // local state
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // hooks
  const { toast } = useToast();
  const router = useRouter();

  // form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    resolver: zodResolver(ZCreateUser),
    defaultValues: {
      name: "",
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
      await registerAction(data);
      setLoading(false);
      setError(null);
      toast({
        description: "Account created successfully",
        variant: "success",
      });
      router.push("/login");
    } catch (error) {
      setError(error?.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleOnSubmit)}
      className="w-[320px] h-full space-y-2"
    >
      {error && <div className="text-xs text-red-500 py-2 ">{error}</div>}
      <div className="space-y-1">
        <Label className="text-sm text-secondary">Name</Label>
        <Controller
          control={control}
          name="name"
          render={({ field }) => (
            <Input className="text-sm text-secondary" {...field} />
          )}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors?.name?.message}</p>
        )}
      </div>

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

      <div className="text-start pt-3">
        <p className="text-xs text-secondary">
          By creating an account you agree with our Terms of Service, Privacy
          Policy,
        </p>
      </div>

      <div className="pt-5">
        <Button
          type="submit"
          className="w-full"
          disabled={!isValid || isSubmitting}
          loading={loading}
        >
          Create account
        </Button>
      </div>

      <div className="text-sm text-secondary text-center pt-4">
        Already have an account?{" "}
        <Link href="/login" className="hover:underline">
          Login
        </Link>
      </div>
    </form>
  );
}
