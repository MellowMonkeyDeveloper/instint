import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import ButtonIconInstint, {
  ButtonIconInstintProps,
} from "../button/ButtonIconInstint";
import CardInstint from "../card/Card";
import { useMemo } from "react";
import { dark } from "@mui/material/styles/createPalette";
export interface UnconnectedWalletButtonInstintProps extends MainInstintProps {
  containerStyles: StylesInstintProps;
  buttonProps: ButtonIconInstintProps;
}
export default function UnconnectedWalletButtonInstint({
  theme,
  darkInstint,
  containerStyles,
  buttonProps,
}: UnconnectedWalletButtonInstintProps) {
  const unconnectedColor = useMemo(() => {
    const colorObject = {
      container: determineClass(
        theme,
        containerStyles.brandStyles,
        containerStyles.darkStyles,
        containerStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);
  return (
    <CardInstint className={unconnectedColor.container}>
      <ButtonIconInstint
        content={buttonProps.content}
        containerStyles={buttonProps.containerStyles}
        buttonStyles={buttonProps.buttonStyles}
        icon={buttonProps.icon}
        spanStyles={buttonProps.spanStyles}
        onClick={buttonProps.onClick}
        hover={buttonProps.hover}
        theme={theme}
        darkInstint={darkInstint}
      />
    </CardInstint>
  );
}
