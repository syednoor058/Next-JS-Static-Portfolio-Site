import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

const labelVariants = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ ...props }, ref) => (
  <LabelPrimitive.Root ref={ref} className={labelVariants} {...props} />
));
Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
