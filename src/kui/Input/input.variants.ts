import { cva } from "class-variance-authority";

export const inputVariants = cva(
  "w-full rounded font-medium text-sm text-white placeholder:text-gray-600 bg-white/5 border transition-all duration-200 outline-none focus:ring-1 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "border-white/10 focus:border-white/30 focus:ring-white/10",
        error:
          "border-red-500/50 focus:border-red-500/70 focus:ring-red-500/20 text-red-400 placeholder:text-red-500/40",
        success:
          "border-green-500/50 focus:border-green-500/70 focus:ring-green-500/20",
      },
      size: {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);
