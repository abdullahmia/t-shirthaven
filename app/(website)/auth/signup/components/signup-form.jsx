"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignupForm() {
  return (
    <form className="w-[320px] h-full space-y-2">
      <div className="space-y-1">
        <Label className="text-sm text-secondary">Name</Label>
        <Input className="text-sm text-secondary" />
      </div>
      <div className="space-y-1">
        <Label className="text-sm text-secondary">Email</Label>
        <Input className="text-sm text-secondary" />
      </div>
      <div className="space-y-1">
        <Label className="text-sm text-secondary">Password</Label>
        <Input className="text-sm text-secondary" />
      </div>
      <div className="text-start pt-3">
        <p className="text-xs text-secondary">
          By creating an account you agree with our Terms of Service, Privacy
          Policy,
        </p>
      </div>

      <div className="pt-5">
        <Button className="w-full">Create account</Button>
      </div>

      <div className="text-sm text-secondary text-center pt-4">
        Already have an account?{" "}
        <Link href="/auth/login" className="hover:underline">
          Login
        </Link>
      </div>
    </form>
  );
}
