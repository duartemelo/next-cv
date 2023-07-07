import { IconProps } from "./types";

export default function Icon({ children, className = "" }: IconProps) {
  let customClassName = "";
  customClassName += ` ${className || ""}`;
  return <div className={customClassName}>{children}</div>;
}
