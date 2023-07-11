interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  let customClassName =
    "w-full h-full max-h-[500px] max-w-[800px]  bg-zinc-900 rounded-md border border-zinc-800 shadow-xl p-10";
  customClassName += ` ${className || ""}`;
  return <div className={customClassName}>{children}</div>;
}
