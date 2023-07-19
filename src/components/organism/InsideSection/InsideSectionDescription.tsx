import Text from "@/components/atom/Text";

interface InsideSectionDescriptionProps {
  children: React.ReactNode;
}

export default function InsideSectionDescription({
  children,
}: InsideSectionDescriptionProps) {
  return (
    <Text as="p" size="base" className="text-white">
      {children}
    </Text>
  );
}
