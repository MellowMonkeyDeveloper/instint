import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import { extname } from "path";
import { ReactElement, useMemo } from "react";
import CardInstint from "../card/Card";
export interface ButtonIconInstintProps extends MainInstintProps {
  content: string;
  icon: ReactElement;
  containerStyles: StylesInstintProps;
  buttonStyles: StylesInstintProps;
  spanStyles: StylesInstintProps;
  onClick?: () => void;
  hover?: () => void;
}

export default function ButtonIconInstint({
  content,
  icon,
  containerStyles,
  buttonStyles,
  onClick,
  spanStyles,
  theme,
  darkInstint,
  hover
}: ButtonIconInstintProps) {
  const buttonColor = useMemo(() => {
    const colorObject = {
      container: determineClass(
        theme,
        containerStyles.brandStyles,
        containerStyles.darkStyles,
        containerStyles.lightStyles,
        darkInstint
      ),
      button: determineClass(
        theme,
        buttonStyles.brandStyles,
        buttonStyles.darkStyles,
        buttonStyles.lightStyles,
        darkInstint
      ),
      span: determineClass(
        theme,
        spanStyles.brandStyles,
        spanStyles.darkStyles,
        spanStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);
  return (
    <CardInstint className={buttonColor.container}>
      <button onMouseOver={hover} className={buttonColor.button} onClick={onClick}>
        {icon}
        <span className={buttonColor.span}>{content}</span>
      </button>
    </CardInstint>
  );
}
