import { ToastPreview } from "./previews/ToastPreview"; // ← import instead
import type { ComponentEntry } from "./types";

export const toastRegistry: ComponentEntry = {
  props: [
    {
      prop: "toast.success()",
      type: "(message: string, duration?: number) => void",
      description: "Triggers a success toast notification.",
    },
    {
      prop: "toast.error()",
      type: "(message: string, duration?: number) => void",
      description: "Triggers an error toast notification.",
    },
    {
      prop: "toast.warning()",
      type: "(message: string, duration?: number) => void",
      description: "Triggers a warning toast notification.",
    },
    {
      prop: "toast.info()",
      type: "(message: string, duration?: number) => void",
      description: "Triggers an info toast notification.",
    },
    {
      prop: "duration",
      type: "number",
      default: "3000",
      description: "Duration in milliseconds before the toast disappears.",
    },
  ],
  name: "Toast",
  description:
    "A toast notification system with context, portal rendering, and multiple variants.",
  preview: <ToastPreview />,
  code: `// 1. Wrap your app with ToastProvider in layout.tsx
import { ToastProvider } from "@kennbalino/kui";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}

// 2. Use the hook anywhere in your app
"use client";
import { useToast } from "@kennbalino/kui";
import { Button } from "@kennbalino/kui";

export default function MyComponent() {
  const { toast } = useToast();

  return (
    <div className="flex gap-3">
      <Button onClick={() => toast.success("Saved!")}>Success</Button>
      <Button onClick={() => toast.error("Failed!")}>Error</Button>
      <Button onClick={() => toast.warning("Watch out!")}>Warning</Button>
      <Button onClick={() => toast.info("Did you know?")}>Info</Button>
    </div>
  );
}`,
};
