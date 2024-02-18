import { ReactElement } from "react";
import { MainInstintProps, StylesInstintProps } from "./main";
export interface LinkInstintProps extends MainInstintProps{
    href: string;
    prefetch: boolean;
    content?: string;
    onClick?: () => void;
    children: ReactElement;
    linkClass: StylesInstintProps
    cardClass: StylesInstintProps
}

export interface LinkInstintButtonProps extends LinkInstintProps{
    spanClass: StylesInstintProps;
}
