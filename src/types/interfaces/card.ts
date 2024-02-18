import { ReactNode } from "react";
import { MainInstintProps } from "./main";

export interface CardInstintProps {
    children: ReactNode;
    className: string | undefined;
}
export interface CardInstintStylesProps{
    brandCard: string | undefined;
    darkCard: string | undefined;
    lightCard: string | undefined;
    darkInstint: boolean;
}