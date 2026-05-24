import { cva } from "class-variance-authority";

export const cardVariants = cva(
  "rounded-md border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-black/60 border-white/10 backdrop-blur-md",
        elevated: "bg-white/5 border-white/15 backdrop-blur-md shadow-xl",
        outline: "bg-transparent border-white/20",
        ghost: "bg-white/5 border-transparent",
      },
      padding: {
        none: "",
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
      },
      hoverable: {
        true: "hover:border-white/30 hover:shadow-2xl hover:shadow-black/50 cursor-pointer",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      hoverable: false,
    },
  },
);
