import Link from "next/link";
import { ButtonProps } from "./types";

function ButtonType({
  children,
  to,
  type = "submit",
  target = "self",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
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

export default function Button({
  children,
  to,
  type = "submit",
  target = "self",
  onClick,
  disabled = false,
  leftIcon,
  rightIcon,
  className = "",
}: ButtonProps) {
  let customClassName = "flex items-center gap-2";
  customClassName += ` ${className || ""}`;
  return (
    <ButtonType
      to={to}
      type={type}
      target={target}
      onClick={onClick}
      disabled={disabled}
      className={customClassName}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </ButtonType>
  );
}
