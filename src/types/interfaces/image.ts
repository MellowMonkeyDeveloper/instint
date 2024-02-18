import { StylesInstintProps, MainInstintProps } from "./main";
export interface ImageInstintProps extends MainInstintProps{
  src: string;
  height: number;
  width: number;
  alt: string;
  cardStyles: StylesInstintProps;
  imageStyles: StylesInstintProps;
}
