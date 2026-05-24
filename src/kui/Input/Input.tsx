import { type VariantProps } from "class-variance-authority";
import { type InputHTMLAttributes } from "react";
import { inputVariants } from "./input.variants";
import { cn } from "@/app/lib/utils";

type InputProps = VariantProps<typeof inputVariants> &
  Omit<InputHTMLAttributes<HTMLInputElement>, "size"> & {
    label?: string;
    hint?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    className?: string;
  };

export const Input = ({
  variant,
  size,
  label,
  hint,
  error,
  leftIcon,
  rightIcon,
  className,
  ...props
}: InputProps) => (
  <div className="flex flex-col gap-1.5 w-full">
    {label && (
      <label className="text-xs text-gray-400 tracking-widest uppercase font-medium">
        {label}
      </label>
    )}

    <div className="relative flex items-center">
      {leftIcon && (
        <span className="absolute left-3 text-gray-500">{leftIcon}</span>
      )}

      <input
        {...props}
        className={cn(
          inputVariants({ variant: error ? "error" : variant, size }),
          leftIcon && "pl-9",
          rightIcon && "pr-9",
          className,
        )}
      />

      {rightIcon && (
        <span className="absolute right-3 text-gray-500">{rightIcon}</span>
      )}
    </div>

    {error ? (
      <p className="text-xs text-red-400 tracking-wide">{error}</p>
    ) : hint ? (
      <p className="text-xs text-gray-600 tracking-wide">{hint}</p>
    ) : null}
  </div>
);
