import { cn } from "@/lib/utils";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as React from "react";

/**
 * Gradient divider component that uses Radix UI's SeparatorPrimitive.
 */
function GradientDivider({
  className,
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="gradient-divider"
      decorative={decorative}
      className={cn(
        "h-px w-full border-t-0 bg-[linear-gradient(90deg,--alpha(var(--input)/10%),_var(--input),_--alpha(var(--input)/10%))]",
        className
      )}
      {...props}
    />
  );
}

export { GradientDivider };
