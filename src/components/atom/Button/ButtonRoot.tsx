import Link from "next/link";
import { ButtonRootProps } from "./types";
import { twMerge } from "tailwind-merge";

function ButtonType({
  children,
  to,
  type,
  target,
  onClick,
  disabled,
  className,
}: ButtonRootProps) {
  if (to) {
    return (
      <Link href={to} target={target} className={className}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={className}
      >
        {children}
      </button>
    );
  }
  return (
    <button type="submit" disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default function ButtonRoot({
  children,
  to,
  type = "submit",
  target = "self",
  onClick,
  disabled = false,
  className,
}: ButtonRootProps) {
  
  let customClassName = twMerge("flex items-center gap-2", className);
  
  return (
    <ButtonType
      to={to}
      type={type}
      target={target}
      onClick={onClick}
      disabled={disabled}
      className={customClassName}
    >
      {children}
    </ButtonType>
  );
}
