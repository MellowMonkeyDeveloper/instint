import CardInstint from "../card/Card";
import { Cancel } from "@mui/icons-material";
import HeaderInstint from "../header/HeaderInstint";
import ButtonTextInstint from "../button/ButtonText";
import { ButtonInstintTextProps } from "@/types/interfaces/button";
import {
  MainInstintProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import { useMemo } from "react";
import { dark } from "@mui/material/styles/createPalette";
import ParagraphInstint from "../paragraph/ParagraphInstint";
import { HeaderInstintProps } from "@/types/interfaces/header";
import { ParagraphInstintProps } from "@/types/interfaces/paragraph";
import ModalSkeletonInstint, {
  ModalSkeletonInstintProps,
} from "./ModalSkeletonInstint";
export interface ModalInstintProps extends MainInstintProps {
  buttonCancel: ButtonInstintTextProps;
  buttonSubmit: ButtonInstintTextProps;
  cancelContainerStyles: StylesInstintProps;
  cancelStyles: StylesInstintProps;
  buttonsContainerStyles: StylesInstintProps;
  paragraph: ParagraphInstintProps;
  header: HeaderInstintProps;
  modalSkeleton: ModalSkeletonInstintProps;
  onClick: () => void;
}
export default function ModalInstint({
  onClick,
  buttonCancel,
  buttonSubmit,
  buttonsContainerStyles,
  cancelContainerStyles,
  cancelStyles,
  theme,
  darkInstint,
  header,
  paragraph,
  modalSkeleton,
}: ModalInstintProps) {
  const modalColor = useMemo(() => {
    const colorObject = {
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
      buttonsContainer: determineClass(
        theme,
        buttonsContainerStyles.brandStyles,
        buttonsContainerStyles.darkStyles,
        buttonsContainerStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, []);
  return (
    <ModalSkeletonInstint
      containerStyles={modalSkeleton.containerStyles}
      modalStyles={modalSkeleton.modalStyles}
      theme={theme}
      darkInstint={darkInstint}
    >
      <CardInstint className={modalColor.cancelContainer}>
        <Cancel className={modalColor.cancel} onClick={onClick} />
      </CardInstint>
      <HeaderInstint
        headerType={header.headerType}
        content={header.content}
        theme={theme}
        darkInstint={darkInstint}
        styles={header.styles}
      />
      <ParagraphInstint
        content={paragraph.content}
        cardStyles={paragraph.cardStyles}
        paragraphStyles={paragraph.paragraphStyles}
        theme={theme}
        darkInstint={darkInstint}
      />
      <CardInstint className={modalColor.buttonsContainer}>
        <ButtonTextInstint
        onClick={buttonCancel.onClick}
          content={buttonCancel.content}
          cardStyles={buttonCancel.cardStyles}
          buttonStyles={buttonCancel.buttonStyles}
          theme={theme}
          darkInstint={darkInstint}
        />
        <ButtonTextInstint
        onClick={buttonSubmit.onClick}
          content={buttonSubmit.content}
          cardStyles={buttonSubmit.cardStyles}
          buttonStyles={buttonSubmit.buttonStyles}
          theme={theme}
          darkInstint={darkInstint}
        />
      </CardInstint>
    </ModalSkeletonInstint>
  );
}
