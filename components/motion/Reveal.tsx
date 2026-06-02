import * as React from "react";

import { cn } from "@/lib/utils";

export function FadeUp({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return <div className={className}>{children}</div>;
}

export function Stagger({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  delayChildren?: number;
}) {
  return <div className={cn(className)}>{children}</div>;
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={cn(className)}>{children}</div>;
}

