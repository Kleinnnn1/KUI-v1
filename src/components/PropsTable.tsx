import { cn } from "@/app/lib/utils";

export type PropDefinition = {
  prop: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
};

type PropsTableProps = {
  props: PropDefinition[];
  className?: string;
};

export const PropsTable = ({ props, className }: PropsTableProps) => (
  <div
    className={cn(
      "w-full rounded-md border border-white/10 overflow-hidden",
      className,
    )}
  >
    <div className="overflow-x-auto">
      <table className="w-full text-sm min-w-150">
        <thead>
          <tr className="border-b border-white/10 bg-white/5">
            <th className="px-4 py-3 text-left text-xs text-gray-500 tracking-widest uppercase font-medium w-32">
              Prop
            </th>
            <th className="px-4 py-3 text-left text-xs text-gray-500 tracking-widest uppercase font-medium">
              Type
            </th>
            <th className="px-4 py-3 text-left text-xs text-gray-500 tracking-widest uppercase font-medium w-28">
              Default
            </th>
            <th className="px-4 py-3 text-left text-xs text-gray-500 tracking-widest uppercase font-medium">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          {props.map((item, i) => (
            <tr
              key={i}
              className={cn(
                "border-b border-white/5 transition-colors duration-150 hover:bg-white/5",
                i === props.length - 1 && "border-b-0",
              )}
            >
              <td className="px-4 py-3 font-mono text-xs">
                <span className="text-indigo-300">{item.prop}</span>
                {item.required && <span className="ml-1 text-red-400">*</span>}
              </td>
              <td className="px-4 py-3 font-mono text-xs text-amber-300/80">
                {item.type}
              </td>
              <td className="px-4 py-3 font-mono text-xs">
                {item.default ? (
                  <span className="text-gray-400">{item.default}</span>
                ) : (
                  <span className="text-gray-700">—</span>
                )}
              </td>
              <td className="px-4 py-3 text-gray-500 text-xs leading-relaxed">
                {item.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
