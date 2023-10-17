import Text from "@/components/atom/Text";

interface InsideSectionFooterProps {
  children: React.ReactNode;
}

export default function InsideSectionFooter({
  children,
}: InsideSectionFooterProps) {
  return (
    <Text as="p" size="base" className="text-cyan-800">
      {children}
    </Text>
  );
}
