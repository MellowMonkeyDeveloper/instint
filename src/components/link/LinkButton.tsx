import { LinkInstintButtonProps, LinkInstintProps } from "@/types/interfaces/link";
import Link from "next/link";
import { determineClass } from "@/types/interfaces/main";
import { useMemo } from "react";
import { link } from "fs";
import CardInstint from "../card/Card";
export default function LinkButton({
  content,
  href,
  prefetch,
  onClick,
  theme,
  spanClass,
  cardClass,
  linkClass,
  darkInstint
}: LinkInstintButtonProps) {
  const linkButtonColor = useMemo(() => {
    const colorObject = {
      link: determineClass(
        theme,
        linkClass.brandStyles,
        linkClass.darkStyles,
        linkClass.lightStyles,
        darkInstint
      ),
      div: determineClass(
        theme,
        cardClass.brandStyles,
        cardClass.darkStyles,
        cardClass.lightStyles,
        darkInstint
      ),
      span: determineClass(
        theme,
        spanClass.brandStyles,
        spanClass.darkStyles,
        spanClass.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);
  return (
      <Link
        className={linkButtonColor.link}
        onClick={onClick}
        href={href}
        prefetch={prefetch}
      >
        <CardInstint className={linkButtonColor.div}>
          <span className={linkButtonColor.span}>{content}</span>
        </CardInstint>
      </Link>
  );
}
