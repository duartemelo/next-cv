import { twMerge } from "tailwind-merge";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <div
      className={twMerge(
        "min-h-screen max-w-[1600px] mx-auto flex items-center self-center justify-center p-32",
        className
      )}
    >
      {children}
    </div>
  );
}
