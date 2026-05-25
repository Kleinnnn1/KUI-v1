"use client";

import { Avatar, AvatarGroup } from "@/kui/Avatar";
import avatarImage from "@/assets/sukuna.jpg";

export const AvatarPreview = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full">
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-gray-600 text-xs tracking-widest uppercase">Sizes</p>
        <div className="flex items-center gap-4">
          <Avatar size="xs" fallback="KJ" />
          <Avatar size="sm" fallback="KJ" />
          <Avatar size="md" fallback="KJ" />
          <Avatar size="lg" fallback="KJ" />
          <Avatar size="xl" fallback="KJ" />
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          Fallback
        </p>
        <div className="flex items-center gap-4">
          <Avatar
            src={avatarImage.src}
            fallback="SK"
            size="lg"
            className="bg-indigo-500/20 border-indigo-500/40 text-indigo-300"
          />

          <Avatar src="/broken.jpg" fallback="SK" size="lg" />

          <Avatar size="lg" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-gray-600 text-xs tracking-widest uppercase">
          Status
        </p>
        <div className="flex items-center gap-4">
          <Avatar fallback="ON" status="online" size="lg" />
          <Avatar fallback="OF" status="offline" size="lg" />
          <Avatar fallback="BS" status="busy" size="lg" />
          <Avatar fallback="AW" status="away" size="lg" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <p className="text-gray-600 text-xs tracking-widests uppercase">
          Group
        </p>
        <AvatarGroup max={3}>
          <Avatar fallback="KJ" />
          <Avatar fallback="AB" />
          <Avatar fallback="CD" />
          <Avatar fallback="EF" />
          <Avatar fallback="GH" />
        </AvatarGroup>
      </div>
    </div>
  );
};
