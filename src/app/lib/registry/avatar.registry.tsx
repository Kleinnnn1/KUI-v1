import { AvatarPreview } from "./previews/AvatarPreview";
import type { ComponentEntry } from "./types";

export const avatarRegistry: ComponentEntry = {
  name: "Avatar",
  description:
    "A user avatar component with image, fallback initials, icon, status dot, and group support.",
  preview: <AvatarPreview />,
  code: `import { Avatar, AvatarGroup } from "@/kui/Avatar";

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
