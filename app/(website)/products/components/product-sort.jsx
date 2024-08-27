"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import MobileProductFilter from "./mobile-product-filters";

const SORT_OPTIONS = [
  { label: "Low to High", value: "asc" },
  { label: "High to Low", value: "desc" },
];

export default function ProductSort({
  products,
  categories,
  totalProductCount,
}) {
  // Hooks
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  /**
   * HANDLERS
   */

  const handleSort = (sort) => {
    const params = new URLSearchParams(searchParams);
    if (sort) {
      params.set("sort", sort);
    } else {
      params.delete("sort");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleResetSearchParam = () => {
    replace(pathname);
  };

  return (
    <div className="pb-5 flex items-center justify-between">
      <div className="flex items-center">
        <p className="text-sm text-secondary">
          Showing {products?.length} of {totalProductCount} results.
        </p>

        {searchParams.get("category") ||
        searchParams.get("price") ||
        searchParams.get("size") ||
        searchParams.get("sort") ? (
          <Button
            variant="link"
            className="underline"
            onClick={handleResetSearchParam}
          >
            <span className="text-sm text-primary">Reset filter</span>
          </Button>
        ) : null}
      </div>
      <div className="flex items-center justify-end gap-3">
        <Select onValueChange={handleSort}>
          <SelectTrigger className="w-[180px] text-sm text-secondary border-none !border-b focus:ring-0 focus:ring-offset-0  overflow-hidden">
            <SelectValue
              placeholder={searchParams?.get("sort") || "SORT BY"}
              className="txt-sm text-secondary"
            />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {SORT_OPTIONS.map((option) => (
                <SelectItem
                  className="cursor-pointer hover:bg-gray-900"
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        {/* Filter for mobile */}
        <MobileProductFilter categories={categories} />
      </div>
    </div>
  );
}
