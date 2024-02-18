import { LinkInstintProps } from "@/types/interfaces/link";
import Link from "next/link";
import { useMemo } from "react";
import { determineClass } from "@/types/interfaces/main";
import CardInstint from "../card/Card";
export default function LinkInstint({
  cardClass,
  linkClass,
  theme,
  content,
  href,
  prefetch,
  onClick,
  darkInstint
}: LinkInstintProps) {
  const linkColor = useMemo(() => {
    const colorObject = {
      card: determineClass(
        theme,
        cardClass.brandStyles,
        cardClass.darkStyles,
        cardClass.lightStyles,
        darkInstint
      ),
      link: determineClass(
        theme,
        linkClass.brandStyles,
        linkClass.darkStyles,
        linkClass.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);

  return (
    <CardInstint className={linkColor.card}>
      <Link
        className={linkColor.link}
        prefetch={prefetch}
        href={href}
        onClick={onClick}
      >
        {content}
      </Link>
    </CardInstint>
  );
}
