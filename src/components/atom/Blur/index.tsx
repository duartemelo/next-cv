import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface BlurProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Blur({ children, className, onClick }: BlurProps) {
  const handleBlurClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement;
    if (target.className.includes("next-blur")) {
      if (onClick) onClick();
    }
  };

  return (
    <div
      className={twMerge(
        "next-blur",
        "bg-[rgba(0,0,0,0.8)]",
        "flex items-center justify-center",
        "fixed w-full h-full top-0 left-0 p-8",
        className
      )}
      onClick={handleBlurClick}
    >
      {children}
    </div>
  );
}
