"use client";

import * as React from "react";
import { Copy, Check } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CopyToClipboard({
  text,
  label = "Sao chép",
}: {
  text: string;
  label?: string;
}) {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<number | null>(null);

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => setCopied(false), 1400);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={onCopy}
      aria-label={copied ? "Đã sao chép vào bộ nhớ tạm" : label}
      aria-live="polite"
    >
      {copied ? (
        <Check className="h-4 w-4" aria-hidden="true" />
      ) : (
        <Copy className="h-4 w-4" aria-hidden="true" />
      )}
      {copied ? "Đã sao chép" : label}
    </Button>
  );
}
