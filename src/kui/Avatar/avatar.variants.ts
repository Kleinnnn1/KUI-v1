import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  "relative inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 font-medium text-white overflow-hidden shrink-0",
  {
    variants: {
      size: {
        xs: "w-6  h-6  text-xs",
        sm: "w-8  h-8  text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-base",
        xl: "w-16 h-16 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);

export const statusVariants = cva(
  "absolute rounded-full border-2 border-black",
  {
    variants: {
      status: {
        online: "bg-green-400",
        offline: "bg-gray-500",
        busy: "bg-red-400",
        away: "bg-yellow-400",
      },
      size: {
        xs: "w-1.5 h-1.5 bottom-0 right-0",
        sm: "w-2   h-2   bottom-0 right-0",
        md: "w-2.5 h-2.5 bottom-0 right-0",
        lg: "w-3   h-3   bottom-0 right-0",
        xl: "w-3.5 h-3.5 bottom-0.5 right-0.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  },
);
