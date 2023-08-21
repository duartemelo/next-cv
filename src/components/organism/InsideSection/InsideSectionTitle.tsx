import Text from "@/components/atom/Text";

interface InsideSectionTitleProps {
  children: React.ReactNode;
  href?: string;
}

export default function InsideSectionTitle({
  children,
  href,
}: InsideSectionTitleProps) {
  return (
    <Text
      as={href ? "a" : "h3"}
      weight="medium"
      size="xl"
      className="mt-4 text-white"
      href={href}
    >
      {children}
    </Text>
  );
}
