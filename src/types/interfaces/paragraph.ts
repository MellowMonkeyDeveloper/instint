import { CardInstintProps, CardInstintStylesProps } from "./card";
import { MainInstintProps, StylesInstintProps } from "./main";

export interface ParagraphInstintProps extends MainInstintProps{
    content: string;
    paragraphStyles: StylesInstintProps;
    cardStyles: StylesInstintProps;
}

