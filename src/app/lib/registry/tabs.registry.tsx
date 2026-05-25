import { TabsPreview } from "./previews/TabsPreview";
import type { ComponentEntry } from "./types";

export const tabsRegistry: ComponentEntry = {
  name: "Tabs",
  description:
    "A tabbed interface component with multiple variants, icon support, and disabled state.",
  preview: <TabsPreview />,
  code: `"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/kui/Tabs";
import { User, Settings } from "lucide-react";

export default function MyComponent() {
  return (
    <Tabs defaultValue="overview">
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        Overview content here.
      </TabsContent>
      <TabsContent value="details">
        Details content here.
      </TabsContent>
      <TabsContent value="settings">
        Settings content here.
      </TabsContent>
    </Tabs>
  );
}

// List variants
<TabsList variant="default">Tab 1</TabsList>
<TabsList variant="outline">Tab 2</TabsList>
<TabsList variant="ghost">Tab 3</TabsList>

// With icons
<TabsTrigger value="profile" icon={<User size={13} />}>
  Profile
</TabsTrigger>

// Disabled tab
<TabsTrigger value="tab" disabled>Disabled</TabsTrigger>

// Controlled
<Tabs value={activeTab} onValueChange={setActiveTab}>
  Tab 4
</Tabs>`,
};
