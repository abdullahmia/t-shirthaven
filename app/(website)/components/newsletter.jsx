"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { addNewSubscriberAction } from "../action";

const ZNewsletter = z.object({
  email: z.string().email({
    message: "Invalid email address",
  }),
});

export default function Newsletter() {
  /**
   * LOCAL STATE
   */
  const [loading, setLoading] = useState(false);

  /**
   * Form Elements
   */
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(ZNewsletter),
  });

  /**
   * HANDLERS
   */
  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await addNewSubscriberAction(data);
      toast.success("Subscribed successfully");
      reset();
      setLoading(false);
    } catch (error) {
      toast.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary py-20">
      <div className="container responsive grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4">
        <div className="w-full space-y-4">
          <h2 className="text-2xl text-primary font-semibold">
            Join Our Newsletter
          </h2>
          <p className="text-sm text-secondary">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex items-center gap-3 lg:ps-14"
        >
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Your email address"
                className={`flex-1 ${errors.email ? "border-red-500" : ""}`}
                {...field}
              />
            )}
          />
          <Button type="submit" loading={loading} disabled={loading}>
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
}
