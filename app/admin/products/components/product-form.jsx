"use client";

import Dropzone from "@/components/dropzone";
import { Editor } from "@/components/editor";
import InputError from "@/components/input-error";
import { SelectInput } from "@/components/select-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SIZE_OPTIONS } from "@/constants";
import { fileUpload } from "@/lib/storage-mangement";
import { X } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { addProductAction } from "../action";

export default function ProductForm({ categoryOptions = [], isEdit = false }) {
  // Local State
  const [loading, setLoading] = useState(false);

  // hooks
  const router = useRouter();

  /**
   * FORM ELEMENTS
   */
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      title: "",
      price: 0,
      category: "",
      sku: "",
      description: "",
      availableQuantity: 0,
      size: "",
      images: [],
      slug: "",
    },
  });

  /**
   * HANDLERS
   */
  const handlePhotoUpload = useCallback(
    (file) => {
      setValue("images", [...getValues("images"), file]);
    },
    [setValue, getValues]
  );

  const handleRemovePhoto = (index) => {
    const images = getValues("images");
    images.splice(index, 1);
    setValue("images", images);
  };

  const handleSize = (size) => {
    setValue("size", size);
  };

  const handleFormSubmit = async (data) => {
    setLoading(true);

    try {
      // upload images
      let imagesUrls = [];
      if (data.images?.length) {
        imagesUrls = await Promise.all(
          data.images.map(async (image) => {
            const imageUrl = await fileUpload(image);
            return { url: imageUrl.url };
          })
        );
      }

      data.images = imagesUrls;
      data.price = parseInt(data?.price);
      data.availableQuantity = parseInt(data?.availableQuantity);

      await addProductAction(data);
      toast.success("Product added successfully");
      router.push("/admin/products");
      setLoading(false);
    } catch (error) {
      // TODO: Handle error properly
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border border-[#E9E9EB]">
      <div className="p-7 border-b border-[#E9E9EB]">
        <h2 className="text-[18px] text-primary font-normal">
          {isEdit ? "Edit" : "Add"} Product
        </h2>
      </div>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="p-7 space-y-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-24">
          <div className="space-y-6">
            {/* Product title */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Title
              </Label>
              <Controller
                control={control}
                name="title"
                render={({ field }) => <Input className="h-11" {...field} />}
                rules={{
                  required: "Title is required",
                }}
              />
              {errors?.title && <InputError message={errors?.title?.message} />}
            </div>

            {/* Product Price */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Price
              </Label>
              <Controller
                control={control}
                name="price"
                render={({ field }) => <Input className="h-11" {...field} />}
                rules={{
                  required: "Price is required",
                  valueAsNumber: true,
                  validate: (value) =>
                    value > 0 || "Price should be greater than 0",
                }}
              />
              {errors?.price && <InputError message={errors?.price?.message} />}
            </div>

            {/* Product Category */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Category
              </Label>
              <Controller
                control={control}
                name="category"
                render={({ field }) => (
                  <SelectInput
                    className="h-11"
                    placeholder="Select category"
                    options={categoryOptions}
                    onChange={field.onChange}
                  />
                )}
                rules={{
                  required: "Category is required",
                }}
              />
              {errors?.category && (
                <InputError message={errors?.category?.message} />
              )}
            </div>

            {/* Product SKU */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                SKU
              </Label>
              <Controller
                control={control}
                name="sku"
                render={({ field }) => <Input className="h-11" {...field} />}
                rules={{
                  required: "SKU is required",
                }}
              />
              {errors?.sku && <InputError message={errors?.sku?.message} />}
            </div>
          </div>

          <div className="space-y-6">
            {/* Product Available quantity */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Available quantity
              </Label>
              <Controller
                control={control}
                name="availableQuantity"
                render={({ field }) => <Input className="h-11" {...field} />}
                rules={{
                  required: "Available quantity is required",
                  valueAsNumber: true,
                  validate: (value) =>
                    value > 0 || "Available quantity should be greater than 0",
                }}
              />
              {errors?.availableQuantity && (
                <InputError message={errors?.availableQuantity?.message} />
              )}
            </div>

            {/* Product Image */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Image
              </Label>

              <Controller
                control={control}
                name="images"
                render={({ field }) => (
                  <div className="flex items-center gap-3 flex-wrap">
                    <div className="flex items-center gap-3">
                      {getValues("images")?.length > 0 &&
                        getValues("images")?.map((image, index) => (
                          <div key={index} className="relative w-20 h-20">
                            <Image
                              src={URL.createObjectURL(image)}
                              height={40}
                              width={56}
                              alt="product"
                              className="h-20 w-20 object-contain"
                            />
                            <button
                              type="button"
                              onClick={() => handleRemovePhoto(index)}
                              className="absolute -top-2 -right-2 bg-secondary border border-gray-400 rounded-full p-1"
                              variant="link"
                            >
                              <X size={12} />
                            </button>
                          </div>
                        ))}
                    </div>

                    <Dropzone
                      onUpload={handlePhotoUpload}
                      acceptedFileTypes={["png", "jpg", "jpeg", "svg", "webp"]}
                    />
                  </div>
                )}
                rules={{
                  required: "Image is required",
                }}
              />
              {errors?.images && (
                <InputError message={errors?.images?.message} />
              )}
            </div>

            {/* Product Stock status */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Size
              </Label>
              <Controller
                name="size"
                control={control}
                render={({ field }) => (
                  <div className="flex flex-wrap gap-3 mt-4">
                    {SIZE_OPTIONS?.map((size) => (
                      <button
                        type="button"
                        onClick={() => handleSize(size.value)}
                        className={`border text-sm text-secondary uppercase py-2 px-4 rounded-sm ${
                          getValues("size") === size.value
                            ? "border-black"
                            : "border-[#E9E9EB]"
                        }`}
                        key={size.value}
                      >
                        {size?.label}
                      </button>
                    ))}
                  </div>
                )}
                rules={{
                  required: "Size is required",
                }}
              />
              {errors?.size && <InputError message={errors?.size?.message} />}
            </div>
          </div>
        </div>

        <div>
          <Label>Description</Label>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <Editor onChange={field.onChange} value={field.value} />
            )}
            rules={{
              required: "Description is required",
            }}
          />
          {errors?.description && (
            <InputError message={errors?.description?.message} />
          )}
        </div>

        <Button type="submit" loading={loading} disabled={loading}>
          Save product
        </Button>
      </form>
    </div>
  );
}
