import { ParagraphInstintProps } from "@/types/interfaces/paragraph";
import CardInstint from "../card/Card";
import { useMemo } from "react";
import { determineClass } from "@/types/interfaces/main";
import { parseHttpError } from "@meshsdk/core";

export default function ParagraphInstint({
  theme,
  content,
  paragraphStyles,
  cardStyles,
  darkInstint
}: ParagraphInstintProps) {
  const paragraphColor = useMemo(() => {
    const colorObject = {
      card: determineClass(
        theme,
        cardStyles.brandStyles,
        cardStyles.darkStyles,
        cardStyles.lightStyles,
        darkInstint
      ),
      paragraph: determineClass(
        theme,
        paragraphStyles.brandStyles,
        paragraphStyles.darkStyles,
        paragraphStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, []);

  return (
    <CardInstint className={paragraphColor.card}>
      <p className={paragraphColor.paragraph}>{content}</p>
    </CardInstint>
  );
}
