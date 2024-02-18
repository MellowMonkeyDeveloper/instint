import { PageInstintProps } from "@/types/interfaces/page";
import CardInstint from "../card/Card";
import { useMemo } from "react";
import { determineClass } from "@/types/interfaces/main";

export default function PageInstint({theme, className, children, pageStyles}: PageInstintProps){
    const pageColor = useMemo(() => {
        const colorObject = {
            card: determineClass(
                theme,
                pageStyles.brandPage,
                pageStyles.darkPage,
                pageStyles.lightPage,
                pageStyles.darkInstint
            )
        }
        return colorObject
    }, [pageStyles.darkInstint])
    return (
        <CardInstint className={pageColor.card}>
            {children}
        </CardInstint>
    )
}