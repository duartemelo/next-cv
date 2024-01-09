import Text from "@/components/atom/Text";
import Image from "@/components/atom/Image";

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
    <div className="flex flex-col lg:flex-1 max-w-[800px] lg:items-end justify-center mt-2 md:mt-0 p-6">
      <div className="flex flex-col items-center">
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
    </div>
  );
}
