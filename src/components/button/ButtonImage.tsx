import { ButtonInstintImageProps } from "@/types/interfaces/button";
import { determineClass } from "@/types/interfaces/main";
import Image from "next/image";
import { useMemo } from "react";
import CardInstint from "../card/Card";
export default function ButtonImageInstint({
  theme,
  cardStyles,
  buttonStyles,
  imageStyles,
  imageProps,
  darkInstint,
  onClick,
  hover
}: ButtonInstintImageProps) {
  const buttonColor = useMemo(() => {
    const colorObject = {
      button: determineClass(
        theme,
        buttonStyles.brandStyles,
        buttonStyles.darkStyles,
        buttonStyles.lightStyles,
        darkInstint
      ),
      card: determineClass(
        theme,
        cardStyles.brandStyles,
        cardStyles.darkStyles,
        cardStyles.lightStyles,
        darkInstint
      ),
      image: determineClass(
        theme,
        imageStyles.brandStyles,
        imageStyles.darkStyles,
        imageStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);

  return (
    <CardInstint className={buttonColor.card}>
      <button onMouseOver={hover} onClick={onClick} title="Button Image Instint" className={buttonColor.button}>
        <Image
          className={buttonColor.image}
          src={imageProps.src}
          alt={imageProps.alt}
          height={imageProps.height}
          width={imageProps.width}
        />
      </button>
    </CardInstint>
  );
}
