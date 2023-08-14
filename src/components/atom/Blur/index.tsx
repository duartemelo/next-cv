import { MouseEventHandler } from "react";
import { twMerge } from "tailwind-merge";

interface BlurProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Blur({ children, className, onClick }: BlurProps) {
  let customClassName = twMerge(
    "blur-background  backdrop-blur-sm",
    "flex items-center justify-center",
    "fixed w-full h-full top-0 left-0 p-8",
    className
  );

  const handleBlurClick: MouseEventHandler<HTMLDivElement> = (event) => {
    const target = event.target as HTMLDivElement;
    if (target.className.includes("blur")) {
      if (onClick) onClick();
    }
  };

  return (
    <div className={customClassName} onClick={handleBlurClick}>
      {children}
    </div>
  );
}
