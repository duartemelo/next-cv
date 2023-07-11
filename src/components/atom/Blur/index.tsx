import { MouseEventHandler } from "react";

interface BlurProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Blur({ children, className, onClick }: BlurProps) {
  let customClassName =
    "blur-background fixed w-full h-full top-0 left-0 flex items-center justify-center backdrop-blur-sm p-8";
  customClassName += ` ${className || ""}`;

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
