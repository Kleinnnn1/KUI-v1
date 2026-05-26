import { AvatarPreview } from "./previews/AvatarPreview";
import type { ComponentEntry } from "./types";

export const avatarRegistry: ComponentEntry = {
  props: [
    {
      prop: "src",
      type: "string",
      description: "Image URL for the avatar.",
    },
    {
      prop: "alt",
      type: "string",
      description: "Alt text for the avatar image.",
    },
    {
      prop: "fallback",
      type: "string",
      description: "Initials shown when image is missing or fails to load.",
    },
    {
      prop: "size",
      type: "xs | sm | md | lg | xl",
      default: "md",
      description: "Controls the size of the avatar.",
    },
    {
      prop: "status",
      type: "online | offline | busy | away",
      description: "Shows a status indicator dot on the avatar.",
    },
    {
      prop: "className",
      type: "string",
      description: "Additional CSS classes to apply.",
    },
  ],
  name: "Avatar",
  description:
    "A user avatar component with image, fallback initials, icon, status dot, and group support.",
  preview: <AvatarPreview />,
  code: `import { Avatar, AvatarGroup } from "@kennbalino/kui";

// Image
<Avatar src="/photo.jpg" alt="Klein" />

// Fallback initials (when no image or image fails)
<Avatar fallback="KJ" />

// Icon fallback (when no src or fallback)
<Avatar />

// Sizes
<Avatar size="xs" fallback="KJ" />
<Avatar size="sm" fallback="KJ" />
<Avatar size="md" fallback="KJ" />  // default
<Avatar size="lg" fallback="KJ" />
<Avatar size="xl" fallback="KJ" />

// Status dot
<Avatar fallback="KJ" status="online"  />
<Avatar fallback="KJ" status="offline" />
<Avatar fallback="KJ" status="busy"    />
<Avatar fallback="KJ" status="away"    />

// Group with max overflow
<AvatarGroup max={3}>
  <Avatar fallback="KJ" />
  <Avatar fallback="AB" />
  <Avatar fallback="CD" />
  <Avatar fallback="EF" />
  <Avatar fallback="GH" />
</AvatarGroup>`,
};
