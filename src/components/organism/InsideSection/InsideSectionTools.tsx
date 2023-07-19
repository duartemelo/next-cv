import Text from "@/components/atom/Text";

interface InsideSectionToolsProps {
  children: React.ReactNode;
}

export default function InsideSectionTools({
  children,
}: InsideSectionToolsProps) {
  return (
    <Text as="p" size="base" className="text-cyan-800">
      {children}
    </Text>
  );
}
