import { twMerge } from "tailwind-merge";
import { TextProps, TextWeights, TextAligns, TextSizes } from "./types";

// TODO: colors? (variants?)

function TextElement(props: TextProps) {
  const { as } = props;
  if (as === "h1") return <h1 {...props}></h1>;
  if (as === "h2") return <h2 {...props}></h2>;
  if (as === "h3") return <h3 {...props}></h3>;
  if (as === "h4") return <h4 {...props}></h4>;
  if (as === "h5") return <h5 {...props}></h5>;
  if (as === "h6") return <h6 {...props}></h6>;
  if (as === "a") return <a {...props}></a>;

  if (as === "p") return <p {...props}></p>;

  return <p {...props}></p>;
}

export default function Text({
  children,
  as,
  href,
  onClick,
  target = "self",
  className = "",
  weight = "regular",
  align = "start",
  italic = false,
  size = "base",
}: TextProps) {
  let customClassName = twMerge(
    TextSizes[size],
    TextWeights[weight],
    TextAligns[align],
    italic ? "italic" : "not-italic",
    className
  );

  return (
    <TextElement
      className={customClassName}
      as={as}
      href={href}
      onClick={onClick}
      target={target}
    >
      {children}
    </TextElement>
  );
}
