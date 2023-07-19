import Text from "@/components/atom/Text";

interface InsideSectionTitleProps {
  children: React.ReactNode;
}

export default function InsideSectionTitle({
  children,
}: InsideSectionTitleProps) {
  return (
    <Text as="h3" weight="medium" size="xl" className="mt-4 text-white">
      {children}
    </Text>
  );
}
