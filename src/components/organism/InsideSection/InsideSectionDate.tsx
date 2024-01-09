import Text from "@/components/atom/Text";

interface InsideSectionDate {
  children: React.ReactNode;
}

export default function InsideSectionDate({ children }: InsideSectionDate) {
  return (
    <div className="flex flex-col items-center md:flex-1 max-w-[800px] md:items-end justify-center mt-2 md:mt-0 text-[var(--white)]">
      <div className="w-[230px] flex items-center justify-center">
        <Text as="p" weight="light">
          {children}
        </Text>
      </div>
    </div>
  );
}
