import { CardInstintProps } from "./card";

export interface PageInstintProps extends CardInstintProps{
    pageStyles: PageInstintStylesProps;
    theme: 'Brand' | 'DarkInstint'
}

export interface PageInstintStylesProps{
    brandPage: string;
    darkPage: string;
    lightPage: string;
    darkInstint: boolean;
}