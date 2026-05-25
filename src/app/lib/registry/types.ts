import type { PropDefinition } from "@/components/PropsTable";

export type ComponentEntry = {
  name: string;
  description: string;
  preview: React.ReactNode;
  code: string;
  props: PropDefinition[];
};
