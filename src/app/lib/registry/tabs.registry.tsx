import { TabsPreview } from "./previews/TabsPreview";
import type { ComponentEntry } from "./types";

export const tabsRegistry: ComponentEntry = {
  props: [
    {
      prop: "defaultValue",
      type: "string",
      required: true,
      description: "The value of the tab that is active by default.",
    },
    {
      prop: "value",
      type: "string",
      description: "Controlled active tab value.",
    },
    {
      prop: "onValueChange",
      type: "(value: string) => void",
      description: "Callback fired when the active tab changes.",
    },
    {
      prop: "variant (list)",
      type: "default | outline | ghost",
      default: "default",
      description: "Controls the visual style of the tabs list.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables a tab trigger.",
    },
    {
      prop: "icon",
      type: "ReactNode",
      description: "Icon displayed on the left of a tab trigger.",
    },
  ],
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
