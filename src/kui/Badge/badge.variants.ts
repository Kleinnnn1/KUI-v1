import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm font-medium tracking-widest uppercase transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border border-white/20 text-white bg-white/5",
        solid: "bg-white text-black",
        success: "border border-green-500/40 text-green-400 bg-green-500/10",
        warning: "border border-yellow-500/40 text-yellow-400 bg-yellow-500/10",
        danger: "border border-red-500/40 text-red-400 bg-red-500/10",
        muted: "text-gray-500 bg-white/5",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-3 py-1 text-xs",
        lg: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
