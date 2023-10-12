import Text from "@/components/atom/Text";
import Icon from "@/components/atom/Icon";
import { twMerge } from "tailwind-merge";

interface InsideSectionTitleProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  icon?: React.ReactNode;
}

export default function InsideSectionTitle({
  children,
  className = "",
  href,
  icon,
}: InsideSectionTitleProps) {
  if (icon) {
    return (
      <div className="mt-4 flex items-center gap-2 text-[var(--white)] cursor-pointer">
        <Text
          as={href ? "a" : "h3"}
          weight="medium"
          size="xl"
          className={twMerge("mt-4 text-white", className)}
          href={href}
        >
          {children}
        </Text>
        <Icon className="text-lg">{icon}</Icon>
      </div>
    );
  }

  return (
    <Text
      as={href ? "a" : "h3"}
      weight="medium"
      size="xl"
      className={twMerge("mt-4 text-white", className)}
      href={href}
    >
      {children}
    </Text>
  );
}
