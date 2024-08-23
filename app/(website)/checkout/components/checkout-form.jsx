"use client";

import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export default function CheckoutForm({ currentUser }) {
  // Local State
  const [loading, setLoading] = useState(false);

  /**
   * STIPE LOAD
   */
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

  /**
   * SELECTORS
   */
  const { cart, cartTotal } = useSelector((state) => state.cart);

  /**
   * FORMS ELEMENTS
   */
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: currentUser?.email,
      name: currentUser?.name,
      street: currentUser?.address?.street,
      city: currentUser?.address?.city,
      state: currentUser?.address?.state,
      zip: currentUser?.address?.zip,
      country: currentUser?.address?.country,
    },
  });

  /**
   * HANDLERS
   */
  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      });
      const responseData = await response.json();
      if (response?.ok) {
        const stripe = await stripePromise;
        stripe.redirectToCheckout({
          sessionId: responseData?.sessionId,
        });
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Something went wrong. Please try again later");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="container responsive py-20 flex flex-col md:flex-row  gap-28"
    >
      <div className="lg:w-4/6">
        <h2 className="text-[16px] text-primary font-semibold">
          Shipping Address
        </h2>

        <div className="mt-10 space-y-5">
          <div>
            <Label className="text-sm text-secondary font-medium block mb-1">
              Street Address
            </Label>
            <Controller
              name="street"
              control={control}
              render={({ field }) => <Input {...field} />}
              rules={{
                required: "This field is required",
              }}
            />
            {errors.street && <InputError message={errors?.street?.message} />}
          </div>

          <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                City
              </Label>
              <Controller
                name="city"
                control={control}
                render={({ field }) => <Input {...field} />}
                rules={{
                  required: "City is required",
                }}
              />
              {errors.city && <InputError message={errors?.city?.message} />}
            </div>

            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                State
              </Label>
              <Controller
                name="state"
                control={control}
                render={({ field }) => <Input {...field} />}
                rules={{
                  required: "State is required",
                }}
              />
              {errors.state && <InputError message={errors?.state?.message} />}
            </div>
          </div>

          <div className="flex items-center gap-6 lg:flex-nowrap flex-wrap">
            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                Zip Code
              </Label>
              <Controller
                name="zip"
                control={control}
                render={({ field }) => <Input {...field} />}
                rules={{
                  required: "Zip code is required",
                }}
              />
              {errors.zip && <InputError message={errors?.zip?.message} />}
            </div>

            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                Country
              </Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => <Input {...field} />}
                rules={{
                  required: "Country is required",
                }}
              />
              {errors.country && (
                <InputError message={errors?.country?.message} />
              )}
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6 lg:flex-nowrap flex-wrap">
            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                Email
              </Label>
              <Controller
                name="email"
                control={control}
                //TODO:  If user is logged in, email is disabled
                render={({ field }) => <Input {...field} disabled={true} />}
                rules={{
                  required: "Email is required",
                }}
              />
              {errors.email && <InputError message={errors?.email?.message} />}
            </div>

            <div className="w-full">
              <Label className="text-sm text-secondary font-medium block mb-1">
                Full name
              </Label>
              <Controller
                name="name"
                control={control}
                render={({ field }) => <Input {...field} />}
                rules={{
                  required: "Name is required",
                }}
              />
              {errors.name && <InputError message={errors?.name?.message} />}
            </div>
          </div>

          <div className="mt-8">
            <Label className="text-sm text-secondary font-medium block mb-1">
              Note
            </Label>
            <Controller
              name="note"
              control={control}
              render={({ field }) => <Textarea {...field} />}
            />
          </div>
        </div>
      </div>

      <div className="lg:w-2/6">
        <div className="w-full p-5">
          <h2 className="text-primary text-[16px] font-semibold">Your Order</h2>

          <div className="space-y-3 mt-10">
            <div className="text-sm text-secondary flex justify-between">
              <span>Subtotal: </span>
              <span>$ {cartTotal}</span>
            </div>
            <div className="text-sm text-secondary flex justify-between">
              <span>Shipping: </span>
              <span className="capitalize font-semibold">free</span>
            </div>
            <div className="text-sm text-secondary flex justify-between">
              <span>Tax: </span>
              <span className="capitalize font-semibold">$ 0</span>
            </div>
          </div>
          <div className="py-6">
            <hr />
          </div>
          <div className="text-sm text-primary flex justify-between">
            <span>Total: </span>
            <span className="capitalize font-semibold">$ {cartTotal}</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 mt-6">
            <Button
              type="submit"
              className="w-full"
              loading={loading}
              disabled={loading}
            >
              Place Order
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
}
