"use client";

import Dropzone from "@/components/dropzone";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { fileUpload, updateFile } from "@/lib/storage-mangement";
import { isFileObject } from "@/utils/file";
import { zodResolver } from "@hookform/resolvers/zod";
import { extractPublicId } from "cloudinary-build-url";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { createCrategoryAction, updateCategoryAction } from "../action";

const CategorySchema = z.object({
  name: z.string().nonempty("Name is required"),
  description: z.string().optional(),
  image: z
    .union([
      typeof window !== "undefined" && typeof File !== "undefined"
        ? z.instanceof(File)
        : z.any(),
      z.string(),
    ])
    .optional(),
});

export default function CategoryForm({ isEdit = false, category }) {
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

  // Add Category Handler
  const addCategoryHandler = async (data) => {
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
      toast.success(`Category ${data?.name} created successfully`);
      router.push("/admin/categories");
    } catch (error) {
      toast.error(error?.message);
    }
  };

  // update category handler
  const updateCategoryHandler = async (data) => {
    setLoading(true);
    try {
      const isUpdatedImage = isFileObject(data.image);

      if (!isUpdatedImage) {
        delete data.image;
        await updateCategoryAction(category.id, data);
      } else {
        const { url } = await updateFile(
          data.image,
          extractPublicId(category.image)
        );

        await updateCategoryAction(category.id, { ...data, image: url });
      }

      toast.success(`Category ${data?.name} updated successfully`);
      router.push("/admin/categories");
    } catch (error) {
      setLoading(false);
      toast.error(error?.message);
    }
  };

  const handleOnSubmit = async (data) => {
    !isEdit ? addCategoryHandler(data) : updateCategoryHandler(data);
  };

  /**
   * EFFECTS
   */
  useEffect(() => {
    if (isEdit && category) {
      setValue("name", category.name);
      setValue("description", category.description);
      setValue("image", category.image);
    }
  }, [isEdit, category, setValue]);

  return (
    <div className="bg-white rounded-lg border border-[#E9E9EB]">
      <div className="p-7 border-b border-[#E9E9EB]">
        <h2 className="text-[18px] text-primary font-normal">
          {isEdit ? "Edit" : "Add"} Category
        </h2>
      </div>

      <form onSubmit={handleSubmit(handleOnSubmit)} className="p-7 space-y-5">
        <div className="w-1/2 space-y-5">
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
                    {!getValues("image") && (
                      <div className="w-full">
                        <Dropzone
                          onUpload={handlePhotoUpload}
                          title="Drop a category image here"
                          acceptedFileTypes={["png", "jpg", "jpeg"]}
                          subTitle='or click to select a file from your computer "png, jpg, jpeg" format maximum size 1MB'
                        />
                      </div>
                    )}

                    {/* Uploaded images */}
                    {getValues("image") && (
                      <div className="w-full flex flex-wrap gap-2 mt-5">
                        <div className="relative w-[200px]">
                          <Image
                            src={
                              isFileObject(getValues("image"))
                                ? URL.createObjectURL(getValues("image"))
                                : getValues("image")
                            }
                            height={200}
                            width={200}
                            alt="product"
                            className="h-[200px] w-[200px] object-contain"
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
        </div>

        <Button loading={loading} type="submit">
          Save category
        </Button>
      </form>
    </div>
  );
}
