interface InsideSectionProps {
  children: React.ReactNode;
}

export default function InsideSectionRoot({ children }: InsideSectionProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 w-full max-w-[1640px]">
      {/* <div className="flex flex-col md:flex-1">
      </div> */}
      {children}
    </div>
  );
}
