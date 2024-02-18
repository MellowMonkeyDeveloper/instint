import { ImageInstintProps } from "./image";
import { MainInstintProps, StylesInstintProps } from "./main";
export interface ButtonInstintStylesProps {
  darkButton: string;
  lightButton: string;
  brandButton: string;
  darkInstint: boolean;
}
export interface ButtonInstintTextProps extends MainInstintProps {
  content: string;
  buttonStyles: StylesInstintProps;
  cardStyles: StylesInstintProps;
  onClick?: () => void;
  hover?: () => void;
}
export interface ButtonInstintImageProps extends MainInstintProps {
  cardStyles: StylesInstintProps;
  buttonStyles: StylesInstintProps;
  imageStyles: StylesInstintProps;
  onClick?: () => void;
  hover?: () => void;
  imageProps: ImageInstintProps;
}
