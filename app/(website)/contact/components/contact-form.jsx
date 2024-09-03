"use client";
import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Controller, useForm } from "react-hook-form";

export default function ContactForm() {

    const {
        control,
        handleSubmit,
        formState: { errors },
      } = useForm({
        defaultValues: {
          name: "",
          email: "",
          subject: "",
          message: "",
        },
      });
    const onSubmit=(data)=>{
        console.log(data);
        
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container responsive py-20 flex flex-col md:flex-row  gap-28">
        <div className="lg:w-4/6">
            <h2 className="text-[16px] text-primary font-semibold">
                Contact Us
            </h2> 
             <div className="mt-10 space-y-5">
                <div>
                    <Label className="text-sm text-secondary font-medium block mb-1">
                    Full Name
                    </Label>
                    <Controller
                    name="name"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                    rules={{
                        required: "This field is required",
                    }}
                    />
                    {errors.name && <InputError message={errors?.name?.message} />}
                </div>
                <div>
                    <Label className="text-sm text-secondary font-medium block mb-1">
                    Email
                    </Label>
                    <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                    rules={{
                        required: "This field is required",
                    }}
                    />
                    {errors.email && <InputError message={errors?.email?.message} />}
                </div>
                <div>
                    <Label className="text-sm text-secondary font-medium block mb-1">
                    Subject
                    </Label>
                    <Controller
                    name="subject"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                    rules={{
                        required: "This field is required",
                    }}
                    />
                    {errors.subject && <InputError message={errors?.subject?.message} />}
                </div>
                <div>
                    <Label className="text-sm text-secondary font-medium block mb-1">
                    Message
                    </Label>
                    <Controller
                    name="message"
                    control={control}
                    render={({ field }) => <Input {...field} />}
                    rules={{
                        required: "This field is required",
                    }}
                    />
                    {errors.message && <InputError message={errors?.message?.message} />}
                </div>
          </div>   
            <div className="flex flex-col justify-center items-center gap-6 mt-6">
                <Button
                type="submit"
                size="lg"
                padding="lg"
                >
                Submit
                </Button>
            </div>
        </div>
        
    </form>
  );
}