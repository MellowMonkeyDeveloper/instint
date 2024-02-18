import CardInstint from "../card/Card";
import ImageInstint from "../image/ImageInstint";
import { Cancel } from "@mui/icons-material";
import ParagraphInstint from "../paragraph/ParagraphInstint";
import Image from "next/image";
import {
  MainInstintProps,
  StatusStylesProps,
  StylesInstintProps,
  determineClass,
} from "@/types/interfaces/main";
import {
  CardInstintProps,
  CardInstintStylesProps,
} from "@/types/interfaces/card";
import { useMemo } from "react";
import { ImageInstintProps } from "@/types/interfaces/image";
export interface DesktopSnackbarInstintProps extends MainInstintProps {
  status: "Success" | "Warning" | "Error";
  borderFill: number;
  content: string;
  cardProps: CardInstintProps;
  containerStyles: StylesInstintProps;
  imageContainerStyles: StylesInstintProps;
  imageStyles: StylesInstintProps;
  svgContainerStyles: StylesInstintProps;
  svgStyles: StatusStylesProps;
  infoContainerStyles: StylesInstintProps;
  cancelContainerStyles: StylesInstintProps;
  cancelStyles: StylesInstintProps;
  paragraphCardStyles: StylesInstintProps;
  paragraphStyles: StylesInstintProps;
  src: string;
  alt: string;
  height: number;
  width: number;
  onClick: () => void;
}
export default function DesktopSnackbarInstint({
  onClick,
  imageStyles,
  infoContainerStyles,
  content,
  cancelContainerStyles,
  cancelStyles,
  containerStyles,
  imageContainerStyles,
  svgContainerStyles,
  svgStyles,
  paragraphCardStyles,
  paragraphStyles,
  status,
  borderFill,
  theme,
  darkInstint,
  src,
  alt,
  height,
  width,
}: DesktopSnackbarInstintProps) {
  const snackbarColor = useMemo(() => {
    const colorObject = {
      container: determineClass(
        theme,
        containerStyles.brandStyles,
        containerStyles.darkStyles,
        containerStyles.lightStyles,
        darkInstint
      ),
      imageContainer: determineClass(
        theme,
        imageContainerStyles.brandStyles,
        imageContainerStyles.darkStyles,
        imageContainerStyles.lightStyles,
        darkInstint
      ),
      image: determineClass(
        theme,
        imageStyles.brandStyles,
        imageStyles.darkStyles,
        imageStyles.lightStyles,
        darkInstint
      ),
      svgContainer: determineClass(
        theme,
        svgContainerStyles.brandStyles,
        svgContainerStyles.darkStyles,
        svgContainerStyles.lightStyles,
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
      infoContainer: determineClass(
        theme,
        infoContainerStyles.brandStyles,
        infoContainerStyles.darkStyles,
        infoContainerStyles.lightStyles,
        darkInstint
      ),
      paragraphCard: determineClass(
        theme,
        paragraphCardStyles.brandStyles,
        paragraphCardStyles.darkStyles,
        paragraphCardStyles.lightStyles,
        darkInstint
      ),
      paragraph: determineClass(
        theme,
        paragraphStyles.brandStyles,
        paragraphStyles.darkStyles,
        paragraphStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);
  return (
    <CardInstint className={snackbarColor.container}>
      <CardInstint className={snackbarColor.imageContainer}>
        <CardInstint className={snackbarColor.svgContainer}>
          <svg width={"100px"} height={"100px"}>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              stroke={
                status === "Success"
                  ? svgStyles.success
                  : status === "Warning"
                  ? svgStyles.warning
                  : status === "Error"
                  ? svgStyles.error
                  : undefined
              }
              strokeWidth="10"
              fill="transparent"
              style={{
                strokeDasharray: "884",
                strokeDashoffset: `${884 - (884 * borderFill) / 100}`,
              }}
            />
          </svg>
        </CardInstint>
        <Image
          className={snackbarColor.image}
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
      </CardInstint>
      <CardInstint className={snackbarColor.infoContainer}>
        <CardInstint className={snackbarColor.cancelContainer}>
          <Cancel onClick={onClick} className={snackbarColor.cancel} />
        </CardInstint>
        <ParagraphInstint
          theme={theme}
          darkInstint={darkInstint}
          paragraphStyles={paragraphStyles}
          cardStyles={paragraphCardStyles}
          content={content}
        />
      </CardInstint>
    </CardInstint>
  );
}
