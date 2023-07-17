import Text from "@/components/atom/Text";
import TimeInterval from "../../molecule/TimeInterval";

interface InsideSectionProps {
  title: string;
  description: string;
  tools: string;
  start_at: string;
  finish_at?: string;
}

export default function InsideSection({
  title,
  description,
  tools,
  start_at,
  finish_at,
}: InsideSectionProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-10 w-full max-w-[1640px]">
      <div className="flex flex-col md:flex-1">
        <Text as="h3" weight="medium" size="xl" className="mt-4 text-white">
          {title}
        </Text>
        <Text as="p" size="base" className="text-white">
          {description}
        </Text>
        <Text as="p" size="base" className="text-cyan-800">
          {tools}
        </Text>
      </div>
      <TimeInterval start_at={start_at} finish_at={finish_at} />
    </div>
  );
}
