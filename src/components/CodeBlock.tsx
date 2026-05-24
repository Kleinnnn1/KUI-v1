"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/app/lib/utils";

type CodeBlockProps = {
  code: string;
  language?: string;
  className?: string;
};

export const CodeBlock = ({
  code,
  language = "tsx",
  className,
}: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative rounded-md border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10">
        <span className="text-xs text-gray-600 tracking-widest uppercase">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-white transition-colors duration-200"
        >
          {copied ? (
            <>
              <Check size={12} className="text-green-400" />
              <span className="text-green-400">Copied</span>
            </>
          ) : (
            <>
              <Copy size={12} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      <pre className="p-4 overflow-x-auto text-sm text-gray-300 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};
