import { twMerge } from "tailwind-merge";
import { IconProps } from "./types";

export default function Icon({ children, className = "" }: IconProps) {
  let customClassName = twMerge(className);
  return <div className={customClassName}>{children}</div>;
}
