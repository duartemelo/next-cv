import TimeInterval from "@/components/molecule/TimeInterval";

interface InsideSectionIntervalProps {
  start_at: string;
  finish_at?: string;
}

export default function InsideSectionInterval({start_at, finish_at}: InsideSectionIntervalProps) {
  return (
    <TimeInterval start_at={start_at} finish_at={finish_at} />
  )
}