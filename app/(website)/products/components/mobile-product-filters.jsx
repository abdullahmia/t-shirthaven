"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SIZE_OPTIONS } from "@/constants";
import { Filter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function MobileProductFilter({ categories }) {
  // Local state
  const [filter, setFilter] = useState({
    categories: [],
    price: [0, 100],
    size: "",
  });

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

  const handleResetSearchParam = () => {
    replace(pathname);
  };

  return (
    <div className="lg:hidden block">
      <Sheet>
        <SheetTrigger asChild>
          <Filter className="h-5 w-5" color="#5c5f6a" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-xl">Filter products</SheetTitle>
          </SheetHeader>
          {/* Categories */}
          <div className="mt-5">
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
                    {option.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* Size */}
          <div className="mt-5">
            <h2 className="text-md text-primary font-semibold">Size</h2>
            <div className="flex flex-wrap gap-3 mt-4">
              {SIZE_OPTIONS?.map((size) => (
                <button
                  onClick={() => handleSize(size.value)}
                  className={`border text-sm text-secondary uppercase py-2 px-4 rounded-sm ${
                    searchParams.get("size") === size.value
                      ? "border-gray-800"
                      : ""
                  }`}
                  key={size.value}
                >
                  {size?.label}
                </button>
              ))}
            </div>
          </div>

          {/* Price */}
          {/* <div className="mt-5">
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

          <div className="mt-10">
            <Button
              onClick={handleResetSearchParam}
              type="button"
              className="w-full"
              disabled={!searchParams.toString()}
            >
              Reset filter
            </Button>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
