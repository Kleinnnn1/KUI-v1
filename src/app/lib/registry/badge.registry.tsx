import { Badge } from "@kennbalino/kui";
import type { ComponentEntry } from "./types";

export const badgeRegistry: ComponentEntry = {
  props: [
    {
      prop: "variant",
      type: "default | solid | success | warning | danger | muted",
      default: "default",
      description: "Controls the visual style of the badge.",
    },
    {
      prop: "size",
      type: "sm | md | lg",
      default: "md",
      description: "Controls the size of the badge.",
    },
    {
      prop: "className",
      type: "string",
      description: "Additional CSS classes to apply.",
    },
    {
      prop: "children",
      type: "ReactNode",
      required: true,
      description: "Content rendered inside the badge.",
    },
  ],
  name: "Badge",
  description: "A small label component for status, tags, and categories.",
  preview: (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Badge variant="default">Default</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="muted">Muted</Badge>
    </div>
  ),
  code: `import { Badge } from "@kennbalino/kui";

// Variants
<Badge variant="default">Default</Badge>
<Badge variant="solid">Solid</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="muted">Muted</Badge>

// Sizes
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>`,
};
