"use client";

import { cn } from "@/lib/utils";

export function Badge({ className, variant = "default", ...props }) {
  const variants = {
    default: "border-transparent bg-white text-black",
    secondary: "border-transparent bg-white/10 text-white",
    destructive: "border-transparent bg-red-500 text-white",
    outline: "text-white border-white/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
