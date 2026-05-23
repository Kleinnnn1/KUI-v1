import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center rounded font-medium tracking-widest uppercase transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        solid: "bg-white text-black hover:bg-white/90",
        ghost:
          "border border-white/20 text-white bg-white/5 hover:bg-white/10 hover:border-white/40",
        danger:
          "border border-red-500/40 text-red-400 bg-red-500/10 hover:bg-red-500/20",
        muted: "text-gray-400 bg-white/5 hover:bg-white/10",
      },
      size: {
        sm: "px-3 py-1 text-xs",
        md: "px-6 py-2 text-sm",
        lg: "px-8 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);
