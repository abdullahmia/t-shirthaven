"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { CATEGORY_OPTIONS, SIZE_OPTIONS } from "@/constants";
import { useState } from "react";

export default function ProductFilters() {
  // Local state
  const [filter, setFilter] = useState({
    categories: [],
    price: [0, 100],
    size: "",
  });

  /**
   * HANDLERS
   */
  const handleCategory = (category) => {
    setFilter({ ...filter, categories: [...filter.categories, category] });
  };

  const handleSize = (size) => {
    setFilter({ ...filter, size });
  };

  const handlePriceRangeChange = (value) => {
    setFilter((prev) => ({
      ...prev,
      price: [prev.price[0], value],
    }));
  };

  return (
    <div className="border rounded p-4 space-y-6">
      {/* Categories */}
      <div>
        <h2 className="text-md text-primary font-semibold">Categories</h2>
        <ul className="space-y-4 mt-4">
          {CATEGORY_OPTIONS.map((option, optionIdx) => (
            <li key={option.value} className="flex items-center">
              <Checkbox
                type="checkbox"
                id={`category-${optionIdx}`}
                onCheckedChange={() => handleCategory(option.value)}
                checked={
                  filter.categories.includes(option.value) ? true : false
                }
              />
              <label
                htmlFor={`category-${optionIdx}`}
                className="ml-3 text-sm text-secondary cursor-pointer"
              >
                {option.label}
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
                filter.size === size.value ? "border-gray-800" : ""
              }`}
              key={size.value}
            >
              {size?.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div>
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
      </div>
    </div>
  );
}