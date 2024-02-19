import CardInstint from "@/components/card/Card";
import HeaderInstint from "@/components/header/HeaderInstint";
import ImageInstint from "@/components/image/ImageInstint";
import { HeaderInstintProps } from "@/types/interfaces/header";
import { ImageInstintProps } from "@/types/interfaces/image";
import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import { dark } from "@mui/material/styles/createPalette";
import { useMemo } from "react";
export interface ButtonWalletModalInstintProps extends MainInstintProps {
  wallet: string;
  image: string;
  buttonContainerStyles: StylesInstintProps;
  imageStyles: ImageInstintProps;
  headerStyles: HeaderInstintProps;
  onClick: () => void;
  buttonStyles: StylesInstintProps
}
export default function ButtonWalletModalInstint({
  wallet,
  image,
  buttonContainerStyles,
  imageStyles,
  headerStyles,
  theme,
  onClick,
  buttonStyles,
  darkInstint,
}: ButtonWalletModalInstintProps) {
  const buttonColor = useMemo(() => {
    const colorObject = {
      container: determineClass(
        theme,
        buttonContainerStyles.brandStyles,
        buttonContainerStyles.darkStyles,
        buttonContainerStyles.lightStyles,
        darkInstint
      ),
      button: determineClass(
        theme,
        buttonStyles.brandStyles,
        buttonStyles.darkStyles,
        buttonStyles.lightStyles,
        darkInstint
      )
    };
    return colorObject;
  }, [theme, darkInstint]);
  return (
    <CardInstint className={buttonColor.container}>
      <button title="Wallet Modal Button" className={buttonColor.button} onClick={onClick}>
        <ImageInstint
          theme={theme}
          darkInstint={darkInstint}
          cardStyles={imageStyles.cardStyles}
          imageStyles={imageStyles.imageStyles}
          src={image}
          alt={imageStyles.alt}
          height={imageStyles.height}
          
        />
        <HeaderInstint
          content={wallet}
          headerType="h4"
          styles={headerStyles.styles}
          theme={theme}
          darkInstint={darkInstint}
        />
      </button>
    </CardInstint>
  );
}
