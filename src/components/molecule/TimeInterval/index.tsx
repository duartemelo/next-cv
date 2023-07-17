import Text from "@/components/atom/Text";
import Image from "next/image";
import jobCurrentImage from "@/assets/images/job-current.svg";
import jobDoneImage from "@/assets/images/job-done.svg";

interface TimeIntervalProps {
  start_at: string;
  finish_at?: string;
}

export default function TimeInterval({
  start_at,
  finish_at,
}: TimeIntervalProps) {
  return (
    <div className="flex flex-col md:flex-1 max-w-[800px] items-center justify-center mt-2 md:mt-0">
      <div className="flex flex-row w-[200px] justify-between">
        <Text as="h3" weight="light" className="text-white">
          {start_at}
        </Text>
        <Text as="h3" weight="light" className="text-white">
          {finish_at}
        </Text>
      </div>

      <Image
        src={finish_at ? jobDoneImage : jobCurrentImage}
        alt="Job"
        className="mt-2"
      />
    </div>
  );
}
