interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  let customClassName =
    "min-h-[500px] h-screen flex items-center self-center justify-center p-16";
  customClassName += ` ${className || ""}`;

  return <div className={customClassName}>{children}</div>;
}
