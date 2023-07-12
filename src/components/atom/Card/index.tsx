"use client";

import { useEffect } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  let customClassName =
    "w-full max-h-full overflow-auto max-w-[1000px]  bg-zinc-900 rounded-md border border-zinc-800 shadow-xl p-10 animate-fade";
  customClassName += ` ${className || ""}`;
  return <div className={customClassName}>{children}</div>;
}
