import { MainInstintProps, StylesInstintProps, determineClass } from "@/types/interfaces/main";
import CardInstint from "../card/Card";
import { useMemo } from "react";
import { dark } from "@mui/material/styles/createPalette";

export interface ModalSkeletonInstintProps extends MainInstintProps {
  children: any;
  containerStyles: StylesInstintProps;
  modalStyles: StylesInstintProps;
}
export default function ModalSkeletonInstint({
  children,
  containerStyles,
  modalStyles,
  theme,
  darkInstint,
}: ModalSkeletonInstintProps) {
  const modalColor = useMemo(() => {
    const colorObject = {
        containter: determineClass(
            theme,
            containerStyles.brandStyles,
            containerStyles.darkStyles,
            containerStyles.lightStyles,
            darkInstint,
        ),
        modal: determineClass(
            theme,
            modalStyles.brandStyles,
            modalStyles.darkStyles,
            modalStyles.lightStyles,
            darkInstint
        )
    }
    return colorObject
  }, [theme, darkInstint]);

  return (
    <CardInstint className={modalColor.containter}>
      <CardInstint className={modalColor.modal}>{children}</CardInstint>
    </CardInstint>
  );
}
