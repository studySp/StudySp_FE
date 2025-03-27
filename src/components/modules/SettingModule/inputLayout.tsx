import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface InputLayoutProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  backgroundColor?: string;
}

const InputLayout = forwardRef<HTMLInputElement, InputLayoutProps>(
  ({ className, label, backgroundColor, ...rest }, ref) => {
    return (
      <section
        className={cn("", className)}
        style={{
          backgroundColor,
        }}
      >
        <div className="flex flex-col gap-2">
          {label && <h3 className="text-sm font-semibold">{label}</h3>}
          <Input ref={ref} className="bg-transparent" {...rest} />
        </div>
      </section>
    );
  },
);

InputLayout.displayName = "InputLayout";

export default InputLayout;
