import { Button } from "@/kui/Button";
import type { ComponentEntry } from "./types";

export const buttonRegistry: ComponentEntry = {
  props: [
    {
      prop: "variant",
      type: "solid | ghost | danger | muted",
      default: "solid",
      description: "Controls the visual style of the button.",
    },
    {
      prop: "size",
      type: "sm | md | lg",
      default: "md",
      description: "Controls the size of the button.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the button and prevents interaction.",
    },
    {
      prop: "onClick",
      type: "() => void",
      description: "Callback fired when the button is clicked.",
    },
    {
      prop: "type",
      type: "button | submit | reset",
      default: "button",
      description: "HTML button type attribute.",
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
      description: "Content rendered inside the button.",
    },
  ],
  name: "Button",
  description: "A flexible button component with multiple variants and sizes.",
  preview: (
    <div className="flex flex-wrap gap-3 items-center justify-center">
      <Button variant="solid">Solid</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="muted">Muted</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
  code: `import { Button } from "@/kui/Button";

// Variants
<Button variant="solid">Solid</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="muted">Muted</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled
<Button disabled>Disabled</Button>`,
};
