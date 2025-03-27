"use client";

import { CalendarIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { format, parse } from "date-fns";

export function CalendarForm({ control }: any) {
  return (
    <FormField
      control={control}
      name="dob"
      render={({ field }) => {
        const selectedDate =
          field.value && typeof field.value === "string"
            ? parse(field.value, "dd/MM/yyyy", new Date())
            : field.value;

        const handleDateChange = (date: Date | undefined) => {
          if (date) {
            field.onChange(format(date, "dd/MM/yyyy"));
          } else {
            field.onChange("");
          }
        };

        return (
          <FormItem className="flex flex-col gap-2 space-y-0">
            <FormLabel className="text-sm font-semibold">Ngày sinh</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "border-#F1F4F8 bg-transparent pl-3 text-left font-normal",
                      !field.value && "text-muted-foreground",
                    )}
                  >
                    {selectedDate ? (
                      format(selectedDate, "PPP")
                    ) : (
                      <span>Chọn ngày</span>
                    )}
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={handleDateChange}
                  disabled={(date) =>
                    date > new Date() || date < new Date("1900-01-01")
                  }
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </FormItem>
        );
      }}
    />
  );
}
