import { CardInstintStylesProps } from "./card";
import { MainInstintProps, StylesInstintProps } from "./main";

export interface HeaderInstintProps extends MainInstintProps{
    content: string;
    headerType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
    styles: HeaderInstintStyles
}

export interface HeaderInstintStyles{
    cardStyles: StylesInstintProps;
    headerStyles: StylesInstintProps;
}
