import { ModalPreview } from "./previews/ModalPreview";
import type { ComponentEntry } from "./types";

export const modalRegistry: ComponentEntry = {
  props: [
    {
      prop: "open",
      type: "boolean",
      required: true,
      description: "Controls whether the modal is visible.",
    },
    {
      prop: "onClose",
      type: "() => void",
      required: true,
      description: "Callback fired when the modal is closed.",
    },
    {
      prop: "size",
      type: "sm | md | lg | xl | full",
      default: "md",
      description: "Controls the max width of the modal.",
    },
    {
      prop: "closeOnBackdrop",
      type: "boolean",
      default: "true",
      description: "Whether clicking the backdrop closes the modal.",
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
      description: "Content rendered inside the modal.",
    },
  ],
  name: "Modal",
  description:
    "A dialog component with backdrop, keyboard support, and composable sub-components.",
  preview: <ModalPreview />,
  code: `"use client";

import { useState } from "react";
import { Button } from "@kennbalino/kui";
import {
  Modal,
  ModalHeader,
  ModalTitle,
  ModalDescription,
  ModalContent,
  ModalFooter,
} from "@kennbalino/kui";

export default function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>

      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader onClose={() => setOpen(false)}>
          <ModalTitle>Modal Title</ModalTitle>
          <ModalDescription>Optional description here.</ModalDescription>
        </ModalHeader>
        <ModalContent>
          Your content goes here.
        </ModalContent>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)}>Confirm</Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

// Sizes
<Modal size="sm">Modal 1</Modal>
<Modal size="md">Modal 2</Modal>   // default
<Modal size="lg">Modal 3</Modal>
<Modal size="xl">Modal 4</Modal>

// Disable backdrop close
<Modal open={open} onClose={onClose} closeOnBackdrop={false}>
  Modal 5
</Modal>`,
};
