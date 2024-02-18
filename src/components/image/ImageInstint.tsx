import { ImageInstintProps } from "@/types/interfaces/image";
import Image from "next/image";
import CardInstint from "../card/Card";
import { useMemo } from "react";
import { determineClass } from "@/types/interfaces/main";
export default function ImageInstint({
  src,
  alt,
  height,
  width,
  cardStyles,
  imageStyles,
  theme,
  darkInstint
}: ImageInstintProps) {
  const imageColor = useMemo(() => {
    const colorObject = {
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
    <CardInstint className={imageColor.card}>
      <Image
        src={src}
        alt={alt}
        height={height}
        width={width}
        className={imageColor.image}
      />
    </CardInstint>
  );
}
