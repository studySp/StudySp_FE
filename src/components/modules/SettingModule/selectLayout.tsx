import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";

interface SelectLayoutProps {
  className?: string;
  label?: string;
  placeholder?: string;
  options: {
    label: string;
    items: {
      value: string;
      label: string;
    }[];
  }[];
  name: string;
  control: any; // Nhận control từ react-hook-form
}

export default function SelectLayout({
  className,
  label,
  placeholder,
  options,
  name,
  control,
}: SelectLayoutProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <h5 className="text-sm font-semibold">{label}</h5>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger className="bg-transparent">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent>
              {options.map((group, index) => (
                <SelectGroup key={index}>
                  <SelectLabel>{group.label}</SelectLabel>
                  {group.items.map((item, idx) => (
                    <SelectItem key={idx} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </div>
  );
}
