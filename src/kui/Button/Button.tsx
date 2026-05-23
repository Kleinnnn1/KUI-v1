import { type VariantProps } from "class-variance-authority";
import { buttonVariants } from "./button.variants";
import { cn } from "@/app/lib/utils";

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

export const Button = ({
  variant,
  size,
  children,
  onClick,
  className,
  disabled,
  type = "button",
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={disabled}
    className={cn(buttonVariants({ variant, size }), className)}
  >
    {children}
  </button>
);
