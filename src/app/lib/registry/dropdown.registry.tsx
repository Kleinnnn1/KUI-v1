import { DropdownPreview } from "./previews/DropdownPreview";
import type { ComponentEntry } from "./types";

export const dropdownRegistry: ComponentEntry = {
  props: [
    {
      prop: "align",
      type: "start | center | end",
      default: "start",
      description: "Controls the horizontal alignment of the dropdown menu.",
    },
    {
      prop: "side",
      type: "top | bottom",
      default: "bottom",
      description: "Controls which side the dropdown opens from.",
    },
    {
      prop: "variant (item)",
      type: "default | danger | disabled",
      default: "default",
      description: "Controls the visual style of a dropdown item.",
    },
    {
      prop: "icon",
      type: "ReactNode",
      description: "Icon displayed on the left of a dropdown item.",
    },
    {
      prop: "onClick",
      type: "() => void",
      description: "Callback fired when a dropdown item is clicked.",
    },
  ],
  name: "Dropdown",
  description:
    "A dropdown menu component with trigger, items, labels, separators, and keyboard support.",
  preview: <DropdownPreview />,
  code: `"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSeparator,
  DropdownLabel,
} from "@/kui/Dropdown";
import { Button } from "@/kui/Button";
import { User, Settings, LogOut } from "lucide-react";

export default function MyComponent() {
  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="ghost">Open Menu ▾</Button>
      </DropdownTrigger>
      <DropdownMenu>
        <DropdownLabel>Account</DropdownLabel>
        <DropdownItem icon={<User size={14} />}>Profile</DropdownItem>
        <DropdownItem icon={<Settings size={14} />}>Settings</DropdownItem>
        <DropdownSeparator />
        <DropdownItem icon={<LogOut size={14} />} variant="danger">
          Logout
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}

// Align options
<DropdownMenu align="start">Item 1</DropdownMenu>  // default
<DropdownMenu align="center">Item 2</DropdownMenu>
<DropdownMenu align="end">Item 3</DropdownMenu>

// Side options
<DropdownMenu side="bottom">Item 4</DropdownMenu>  // default
<DropdownMenu side="top">Item 5</DropdownMenu>

// Item variants
<DropdownItem variant="default">Default</DropdownItem>
<DropdownItem variant="danger">Danger</DropdownItem>
<DropdownItem variant="disabled">Disabled</DropdownItem>`,
};
