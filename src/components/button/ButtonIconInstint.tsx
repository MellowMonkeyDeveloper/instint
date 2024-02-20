"use client";
import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import { extname } from "path";
import { ReactElement, useEffect, useMemo, useState } from "react";
import CardInstint from "../card/Card";
import card from "../../../styles/card.module.scss";
export interface ButtonIconInstintProps extends MainInstintProps {
  content: string;
  icon: ReactElement;
  buttonStyles: StylesInstintProps;
  spanStyles: StylesInstintProps;
  onClick?: () => void;
  hover?: () => void;
}

export default function ButtonIconInstint({
  content,
  icon,
  buttonStyles,
  onClick,
  spanStyles,
  theme,
  darkInstint,
  hover,
}: ButtonIconInstintProps) {
  const [buttonColor, setButtonColor] = useState<any>();
  useEffect(() => {
    const colorObject = {
      button: buttonStyles.brandStyles,
      span: spanStyles.brandStyles,
    };
    setButtonColor(colorObject);
  }, [theme, darkInstint]);
  return (
    <CardInstint className={card.buttonContainer}>
      <button
        onMouseOver={hover}
        className={buttonColor.button}
        onClick={onClick}
      >
        {icon}
        <span className={buttonColor.span}>{content}</span>
      </button>
    </CardInstint>
  );
}
