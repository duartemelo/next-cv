import NextImage, { StaticImageData } from "next/image";
import { twMerge } from "tailwind-merge";

interface ImageProps {
  src: StaticImageData;
  alt: string;
  className?: string;
}

export default function Image({ src, alt, className }: ImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      className={twMerge("object-contain", className)}
    />
  );
}
