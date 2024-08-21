"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { SIZE_OPTIONS } from "@/constants";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ProductFilters({ categories }) {
  // Hooks
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * HANDLERS
   */
  const handleCategory = (category) => {
    const params = new URLSearchParams(searchParams);
    if (category) {
      params.set("category", category);
    } else {
      params.delete("category");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleSize = (size) => {
    const params = new URLSearchParams(searchParams);
    if (size) {
      params.set("size", size);
    } else {
      params.delete("size");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="border rounded p-4 space-y-6">
      {/* Categories */}
      <div>
        <h2 className="text-md text-primary font-semibold">Categories</h2>
        <ul className="space-y-4 mt-4">
          {categories?.map((option, optionIdx) => (
            <li key={option.value} className="flex items-center">
              <Checkbox
                type="checkbox"
                id={`category-${option?.id}`}
                onCheckedChange={() => handleCategory(option?.id)}
                checked={
                  searchParams.get("category") === option?.id?.toString()
                }
              />
              <label
                htmlFor={`category-${option?.id}`}
                className="ml-3 text-sm text-secondary cursor-pointer"
              >
                {option?.name}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Size */}
      <div>
        <h2 className="text-md text-primary font-semibold">Size</h2>
        <div className="flex flex-wrap gap-3 mt-4">
          {SIZE_OPTIONS?.map((size) => (
            <button
              onClick={() => handleSize(size.value)}
              className={`border text-sm text-secondary uppercase py-2 px-4 rounded-sm ${
                searchParams.get("size") === size.value ? "border-gray-800" : ""
              }`}
              key={size.value}
            >
              {size?.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      {/* <div>
        <div className="flex items-center justify-between">
          <h2 className="text-md text-primary font-semibold">Size</h2>
          <p className="text-secondary text-sm ">$ {filter?.price[1]}</p>
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <Slider
            defaultValue={[25]}
            onValueChange={(value) => handlePriceRangeChange(value[0])}
          />
        </div>
      </div> */}
    </div>
  );
}
