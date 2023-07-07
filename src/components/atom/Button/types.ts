enum ButtonType {
  button = "button",
  submit = "submit",
  reset = "reset",
}

enum ButtonTarget {
  blank = "_blank",
  self = "_self",
}

export interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  type?: keyof typeof ButtonType;
  target?: keyof typeof ButtonTarget;
  onClick?: () => void;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  className?: string;
}

