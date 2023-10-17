"use client";

import { twMerge } from "tailwind-merge";
import { Button } from "../Button";
import Text from "../Text";

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  onClose: () => void;
}

export default function Card({
  title,
  children,
  className,
  onClose,
}: CardProps) {
  return (
    <div
      className={twMerge(
        "w-full max-h-full overflow-auto max-w-[1000px] p-10 bg-[var(--dark-500)] rounded-md border border-[var(--dark-200)] shadow-xl animate-fade",
        className
      )}
    >
      <div className="w-full flex items-center justify-between">
        <Text as="h1" size="3xl" weight="medium" className="text-white">
          {title}
        </Text>
        <div className="w-min flex flex-row gap-2 group">
          <Button.Root className="w-3 h-3 rounded-full bg-[var(--dark-100)] group-hover:bg-green-400"></Button.Root>
          <Button.Root className="w-3 h-3 rounded-full bg-[var(--dark-100)] group-hover:bg-yellow-400"></Button.Root>
          <Button.Root
            className="w-3 h-3 rounded-full bg-[var(--dark-100)] group-hover:bg-red-400"
            onClick={onClose}
          ></Button.Root>
        </div>
      </div>
      <div className="mt-7">{children}</div>
    </div>
  );
}
