import { Wallet } from "@mui/icons-material";
import { BrowserWallet } from "@meshsdk/core";
import { useWallet } from "@meshsdk/react";
import CardInstint from "../card/Card";
import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import ButtonImageInstint from "../button/ButtonImage";
import { useMemo } from "react";
import { dark } from "@mui/material/styles/createPalette";
import { ImageInstintProps } from "@/types/interfaces/image";
import { ButtonInstintImageProps } from "@/types/interfaces/button";
export interface ConnectedWalletButtonInstintProps extends MainInstintProps {
  image: string;
  containerStyles: StylesInstintProps;
  onClick?: () => void;
  hover?: () => void;
  buttonProps: ButtonInstintImageProps;
  imageProps: ImageInstintProps
}
export default function ConnectedWalletButtonInstint({
  theme,
  darkInstint,
  buttonProps,
  containerStyles,
  onClick,
  hover,
  imageProps
}: ConnectedWalletButtonInstintProps) {
  const connectColor = useMemo(() => {
    const colorObject = {
      container: determineClass(
        theme,
        containerStyles.brandStyles,
        containerStyles.darkStyles,
        containerStyles.lightStyles,
        darkInstint
      ),
    };
    
    return colorObject
  }, [darkInstint, theme]);
  return (
    <CardInstint className={connectColor.container}>
      <ButtonImageInstint
        cardStyles={buttonProps.cardStyles}
        buttonStyles={buttonProps.buttonStyles}
        imageStyles={buttonProps.imageStyles}
        theme={theme}
        darkInstint={darkInstint}
        imageProps={imageProps}
        hover={hover}
        onClick={onClick}
      />
    </CardInstint>
  );
}
