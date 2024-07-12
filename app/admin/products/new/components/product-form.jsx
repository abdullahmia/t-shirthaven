"use client";

import { Editor } from "@/components/editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SIZE_OPTIONS } from "@/constants";
import { X } from "lucide-react";
import Image from "next/image";

export default function ProductForm() {
  return (
    <div className="bg-white rounded-lg border border-[#E9E9EB]">
      <div className="p-7 border-b border-[#E9E9EB]">
        <h2 className="text-[18px] text-primary font-normal">Add Product</h2>
      </div>

      <form className="p-7 space-y-5">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-24">
          <div className="space-y-6">
            {/* Product title */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Title
              </Label>
              <Input className="h-11" />
            </div>

            {/* Product Price */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Price
              </Label>
              <Input className="h-11" />
            </div>

            {/* Product Category */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Category
              </Label>
              <Input className="h-11" />
            </div>

            {/* Product SKU */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                SKU
              </Label>
              <Input className="h-11" />
            </div>

            {/* Product Stock status */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Stock status
              </Label>
              <Input className="h-11" />
            </div>
          </div>

          <div className="space-y-6">
            {/* Product Available quantity */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Available quantity
              </Label>
              <Input className="h-11" />
            </div>

            {/* Product Image */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Price
              </Label>
              <div class="relative">
                <label
                  title="Click to upload"
                  class="cursor-pointer flex items-center justify-center gap-4 px-6 py-4 before:border-gray-400/60 hover:before:border-gray-300 group before:bg-secondary before:absolute before:inset-0 before:rounded-3xl before:border before:border-dashed before:transition-transform before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95"
                >
                  <div class="w-max relative">
                    <Image
                      class="w-12"
                      src="/assets/icons/upload-cicle.svg"
                      alt="file upload icon"
                      width="512"
                      height="512"
                    />
                  </div>
                  <div class="relative">
                    <span class="block text-base font-semibold relative text-blue-900 group-hover:text-blue-500">
                      Upload a file
                    </span>
                    <span class="mt-0.5 block text-sm text-gray-500">
                      Max 1 MB
                    </span>
                  </div>
                </label>
                <Input
                  type="file"
                  name="button2"
                  id="button2"
                  className="hidden"
                />
              </div>

              {/* Uploaded images */}
              <div className="w-full flex flex-wrap gap-2 mt-5">
                <div className="relative w-14">
                  <Image
                    src="/assets/images/product.png"
                    height={40}
                    width={56}
                    alt="product"
                    className="h-[56px] w-[56px] object-contain"
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-secondary border border-gray-400 rounded-full p-1"
                    variant="link"
                  >
                    <X size={12} />
                  </button>
                </div>

                <div className="relative w-14">
                  <Image
                    src="/assets/images/product.png"
                    height={40}
                    width={56}
                    alt="product"
                    className="h-[56px] w-[56px] object-contain"
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-secondary border border-gray-400 rounded-full p-1"
                    variant="link"
                  >
                    <X size={12} />
                  </button>
                </div>

                <div className="relative w-14">
                  <Image
                    src="/assets/images/product.png"
                    height={40}
                    width={56}
                    alt="product"
                    className="h-[56px] w-[56px] object-contain"
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-secondary border border-gray-400 rounded-full p-1"
                    variant="link"
                  >
                    <X size={12} />
                  </button>
                </div>

                <div className="relative w-14">
                  <Image
                    src="/assets/images/product.png"
                    height={40}
                    width={56}
                    alt="product"
                    className="h-[56px] w-[56px] object-contain"
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-secondary border border-gray-400 rounded-full p-1"
                    variant="link"
                  >
                    <X size={12} />
                  </button>
                </div>

                <div className="relative w-14">
                  <Image
                    src="/assets/images/product.png"
                    height={40}
                    width={56}
                    alt="product"
                    className="h-[56px] w-[56px] object-contain"
                  />
                  <button
                    className="absolute -top-2 -right-2 bg-secondary border border-gray-400 rounded-full p-1"
                    variant="link"
                  >
                    <X size={12} />
                  </button>
                </div>
              </div>
            </div>

            {/* Product Stock status */}
            <div>
              <Label className="text-sm text-secondary font-medium block mb-1">
                Size
              </Label>
              <div className="flex flex-wrap gap-3 mt-4">
                {SIZE_OPTIONS?.map((size) => (
                  <button
                    onClick={() => handleSize(size.value)}
                    className={`border text-sm text-secondary uppercase py-2 px-4 rounded-sm `}
                    key={size.value}
                  >
                    {size?.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <Label>Description</Label>
          <Editor />
        </div>

        <Button>Save product</Button>
      </form>
    </div>
  );
}
