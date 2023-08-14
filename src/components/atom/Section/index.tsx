import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  let customClassName = twMerge(
    "min-h-screen max-w-[1600px] mx-auto flex items-center self-center justify-center p-16",
    className
  );
  
  return <div className={customClassName}>{children}</div>;
}
