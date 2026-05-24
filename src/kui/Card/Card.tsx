import { type VariantProps } from "class-variance-authority";
import { cardVariants } from "./card.variants";
import { cn } from "@/app/lib/utils";

type CardProps = VariantProps<typeof cardVariants> & {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const Card = ({
  variant,
  padding,
  hoverable,
  children,
  className,
  onClick,
}: CardProps) => (
  <div
    onClick={onClick}
    className={cn(cardVariants({ variant, padding, hoverable }), className)}
  >
    {children}
  </div>
);

export const CardHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("mb-4 flex flex-col gap-1", className)}>{children}</div>
);

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h3
    className={cn("text-white font-semibold text-lg leading-snug", className)}
  >
    {children}
  </h3>
);

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <p className={cn("text-gray-500 text-sm leading-relaxed", className)}>
    {children}
  </p>
);

export const CardContent = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("text-gray-400 text-sm", className)}>{children}</div>;

export const CardFooter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("mt-4 flex items-center gap-3", className)}>
    {children}
  </div>
);
