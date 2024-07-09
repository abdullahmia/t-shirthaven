"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginForm() {
  return (
    <form className="w-[320px] h-full space-y-2">
      <div className="space-y-1">
        <Label className="text-sm text-secondary">Email</Label>
        <Input className="text-sm text-secondary" />
      </div>
      <div className="space-y-1">
        <Label className="text-sm text-secondary">Password</Label>
        <Input className="text-sm text-secondary" />
      </div>
      <div className="text-end">
        <Link href="/forgot-password" className="text-xs text-secondary">
          Forgot Password?
        </Link>
      </div>

      <div className="pt-5">
        <Button className="w-full">Login</Button>
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
