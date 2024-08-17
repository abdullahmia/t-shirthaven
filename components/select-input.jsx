import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectInput({
  options,
  label,
  onChange,
  value,
  placeholder,
  className,
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className={`w-full py-[10px] ${className}`}>
        <SelectValue placeholder={placeholder} className="capitalize" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {label && <SelectLabel>{label}</SelectLabel>}
          {options &&
            options?.map((option) => (
              <SelectItem key={option.value} value={option.value.toString()}>
                {option.label}
              </SelectItem>
            ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
