import * as React from "react";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="flex h-10 w-full rounded border border-black/15 px-3 py-2 text-base ring-offset-1 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-[#1b1b1b] placeholder:text-[#1b1b1b]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30 focus-visible:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
