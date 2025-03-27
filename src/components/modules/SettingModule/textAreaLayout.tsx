import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

interface TextAreaLayoutProps {
  label?: string;
  backgroundColor?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
}

function TextAreaLayout({
  className,
  label,
  backgroundColor,
  value,
  onChange,
  name,
}: TextAreaLayoutProps) {
  return (
    <section
      className={cn("", className)}
      style={{
        backgroundColor,
      }}
    >
      <div className="flex flex-col gap-2">
        {label && <h3 className="text-sm font-semibold">{label}</h3>}
        <Textarea
          className="bg-transparent"
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </section>
  );
}

export default TextAreaLayout;
