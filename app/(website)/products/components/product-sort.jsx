import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MobileProductFilter from "./mobile-product-filters";

const SORT_OPTIONS = [
  { label: "Low to High", value: "price-asc" },
  { label: "High to Low", value: "price-desc" },
];

export default function ProductSort() {
  return (
    <div className="pb-5 flex items-center justify-between">
      <p className="text-sm text-secondary">Showing 1-9 of 36 results.</p>
      <div className="flex items-center justify-end gap-3">
        <Select>
          <SelectTrigger className="w-[180px] text-sm text-secondary border-none !border-b focus:ring-0 focus:ring-offset-0  overflow-hidden">
            <SelectValue
              placeholder="SORT BY"
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
        <MobileProductFilter />
      </div>
    </div>
  );
}
