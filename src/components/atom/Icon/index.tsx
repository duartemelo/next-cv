import { twMerge } from "tailwind-merge";
import { IconProps } from "./types";

export default function Icon({ children, className = "" }: IconProps) {
  return <div className={twMerge('next-icon', className)}>{children}</div>;
}
