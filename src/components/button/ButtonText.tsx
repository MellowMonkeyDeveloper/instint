import { ButtonInstintTextProps } from "@/types/interfaces/button";
import { StylesInstintProps, determineClass } from "@/types/interfaces/main";
import { useMemo } from "react";
import CardInstint from "../card/Card";

export default function ButtonTextInstint(
  { content, theme, buttonStyles, cardStyles, darkInstint, onClick }: ButtonInstintTextProps,
) {
  const buttonColor = useMemo(() => {
    const colorObject = {
      button: determineClass(
        theme,
        buttonStyles.brandStyles,
        buttonStyles.darkStyles,
        buttonStyles.lightStyles,
        darkInstint
      ),
      card: determineClass(
        theme,
        cardStyles.brandStyles,
        cardStyles.darkStyles,
        cardStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);

  return (
    <CardInstint className={buttonColor.card}>
      <button onClick={onClick} className={buttonColor.button}>{content}</button>
    </CardInstint>
  );
}
