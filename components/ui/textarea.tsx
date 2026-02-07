import * as React from "react";

const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ ...props }, ref) => {
  return (
    <textarea
      className="flex min-h-20 w-full rounded border border-black/15 px-3 py-2 text-sm ring-offset-1 placeholder:text-[#1b1b1b]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
