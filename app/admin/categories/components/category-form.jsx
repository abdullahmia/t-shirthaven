"use client";

import Dropzone from "@/components/dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fileUpload } from "@/lib/storage-mangement";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createCrategoryAction } from "../action";

const CategorySchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().optional(),
  image:
    typeof window !== "undefined" && typeof File !== "undefined"
      ? z.instanceof(File).optional()
      : z.any().optional(),
});

export default function CategoryForm({ isEdit = false }) {
  // Local State
  const [loading, setLoading] = useState(false);

  // hooks
  const router = useRouter();

  // Form
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
    getValues,
  } = useForm({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      name: "",
      description: "",
      image: null,
    },
  });
  /**
   * HANDLERS
   */
  const handlePhotoUpload = useCallback(
    (file) => {
      setValue("image", file);
    },
    [setValue]
  );

  const removeImage = useCallback(
    () => {
      setValue("image", null);
    }, // eslint-disable-next-line
    [setValue]
  );

  const handleOnSubmit = async (data) => {
    setLoading(true);
    try {
      const { url, error: uploadImageError } = await fileUpload(data.image);
      if (uploadImageError) {
        setLoading(false);
        toast.error(uploadImageError);
        return;
      }

      const createdCategory = await createCrategoryAction({
        ...data,
        image: url,
      });

      setLoading(false);
      toast.success("Address updated successfully");
      router.push("/admin/categories");
    } catch (error) {
      setLoading(false);
      toast.error("Failed to update address");
    }
  };

  return (
    <div className="bg-white rounded-lg border border-[#E9E9EB]">
      <div className="p-7 border-b border-[#E9E9EB]">
        <h2 className="text-[18px] text-primary font-normal">
          {isEdit ? "Edit" : "Add"} Category
        </h2>
      </div>

      <form onSubmit={handleSubmit(handleOnSubmit)} className="p-7 space-y-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-24">
          <div className="space-y-6">
            {/* Product title */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Title
              </Label>
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <Input className="text-sm text-secondary h-11" {...field} />
                )}
              />
              {errors.name && (
                <p className="text-xs text-red-500">{errors?.name?.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-6">
            {/* Category Image */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Image
              </Label>
              <Controller
                name="image"
                control={control}
                render={({ field }) => (
                  <>
                    <div className="w-full">
                      <Dropzone
                        onUpload={handlePhotoUpload}
                        title="Drop a category image here"
                        acceptedFileTypes={["png", "jpg", "jpeg"]}
                        subTitle='or click to select a file from your computer "png, jpg, jpeg" format maximum size 1MB'
                      />
                    </div>

                    {/* Uploaded images */}
                    {getValues("image") && (
                      <div className="w-full flex flex-wrap gap-2 mt-5">
                        <div className="relative w-14">
                          <Image
                            src={
                              typeof value === "string"
                                ? value
                                : URL.createObjectURL(
                                    field.value ? getValues("image") : null
                                  )
                            }
                            height={40}
                            width={56}
                            alt="product"
                            className="h-[56px] w-[56px] object-contain"
                          />
                          <button
                            className="absolute -top-2 -right-2 bg-secondary border border-gray-400 rounded-full p-1"
                            variant="link"
                            onClick={removeImage}
                          >
                            <X size={12} />
                          </button>
                        </div>
                      </div>
                    )}
                    {errors.image && (
                      <p className="text-xs text-red-500">
                        {errors?.image?.message}
                      </p>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <div>
          <Label>Description</Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Textarea className="text-sm text-secondary" {...field} />
            )}
          />
          {errors.description && (
            <p className="text-xs text-red-500">
              {errors?.description?.message}
            </p>
          )}
        </div>

        <Button>Save category</Button>
      </form>
    </div>
  );
}
