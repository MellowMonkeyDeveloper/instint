import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import CardInstint from "../card/Card";
import HeaderInstint from "../header/HeaderInstint";
import { ErrorOutline, Warning, CheckCircle } from "@mui/icons-material";
import { HeaderInstintProps } from "@/types/interfaces/header";
import { Cancel } from "@mui/icons-material";
import { useMemo } from "react";
import { containerClasses } from "@mui/material";
export interface MobileSnackbarInstintProps extends MainInstintProps {
  icon: "Success" | "Warning" | "Error";
  containerStyles: StylesInstintProps;
  iconContainerStyles: StylesInstintProps;
  iconStyles: StylesInstintProps;
  header: HeaderInstintProps;
  cancelContainerStyles: StylesInstintProps;
  cancelStyles: StylesInstintProps;
  onClick: () => void
}
export default function MobileSnackbarInstint({
  theme,
  darkInstint,
  containerStyles,
  cancelContainerStyles,
  cancelStyles,
  icon,
  iconContainerStyles,
  iconStyles,
  onClick,
  header,
}: MobileSnackbarInstintProps) {
  const snackbarColor = useMemo(() => {
    const colorObject = {
      container: determineClass(
        theme,
        containerStyles.brandStyles,
        containerStyles.darkStyles,
        containerStyles.lightStyles,
        darkInstint
      ),
      cancelContainer: determineClass(
        theme,
        cancelContainerStyles.brandStyles,
        cancelContainerStyles.darkStyles,
        cancelContainerStyles.lightStyles,
        darkInstint
      ),
      cancel: determineClass(
        theme,
        cancelStyles.brandStyles,
        cancelStyles.darkStyles,
        cancelStyles.lightStyles,
        darkInstint
      ),
      iconContainer: determineClass(
        theme,
        iconContainerStyles.brandStyles,
        iconContainerStyles.darkStyles,
        iconContainerStyles.lightStyles,
        darkInstint
      ),
      icon: determineClass(
        theme,
        iconStyles.brandStyles,
        iconStyles.darkStyles,
        iconStyles.lightStyles,
        darkInstint
    ),
    };
    return colorObject
  }, [theme, darkInstint]);
  return (
    <CardInstint className={snackbarColor.container}>
      <CardInstint className={snackbarColor.iconContainer}>
        {icon === "Success" ? (
          <CheckCircle className={snackbarColor.icon} />
        ) : icon === "Warning" ? (
          <Warning className={snackbarColor.icon} />
        ) : icon === "Error" ? (
          <ErrorOutline className={snackbarColor.icon} />
        ) : null}
      </CardInstint>
      <HeaderInstint headerType='h3'styles={header.styles} content={header.content} darkInstint={darkInstint} theme={theme} />
      <CardInstint className={snackbarColor.cancelContainer}>
        <Cancel onClick={onClick} className={snackbarColor.cancel} />
      </CardInstint>
    </CardInstint>
  );
}
