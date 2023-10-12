import Text from "@/components/atom/Text";

interface InsideSectionDate {
  children: React.ReactNode;
}

export default function InsideSectionDate({ children }: InsideSectionDate) {
  return (
    <div className="flex flex-col md:flex-1 max-w-[800px] items-center justify-center mt-2 md:mt-0 text-[var(--white)]">
      <Text as="p" weight="light">
        {children}
      </Text>
    </div>
  );
}
