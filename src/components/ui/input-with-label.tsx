import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const InputWithLabel = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-0">
        <label
          htmlFor={props.id}
          className="text-xs text-gray-500 font-normal max-md:font-extralight max-md:scale-75"
        >
          {props.label}
        </label>
        <input
          type={type}
          className={cn(
            "flex h-10 w-full truncate rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 max-md:text-xs max-md:font-extralight max-md:px-2 max-md:py-1",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
InputWithLabel.displayName = "InputWithLabel";

export { InputWithLabel };
