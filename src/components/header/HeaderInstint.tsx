import { HeaderInstintProps } from "@/types/interfaces/header";
import CardInstint from "../card/Card";
import { useMemo } from "react";
import { determineClass } from "@/types/interfaces/main";

export default function HeaderInstint({
  content,
  theme,
  headerType,
  styles,
  darkInstint
}: HeaderInstintProps) {
  const headerStyles = useMemo(() => {
    const colorObject = {
      card: determineClass(
        theme,
        styles.cardStyles.brandStyles,
        styles.cardStyles.darkStyles,
        styles.cardStyles.lightStyles,
        darkInstint
      ),
      header: determineClass(
        theme,
        styles.headerStyles.brandStyles,
        styles.headerStyles.darkStyles,
        styles.headerStyles.lightStyles,
        darkInstint
      ),
    };
    return colorObject;
  }, [theme, darkInstint]);

  const determineHeader = () => {
    if (headerType === "h1") {
      return <h1 className={headerStyles.header}>{content}</h1>;
    } else if (headerType === "h2") {
      return <h2 className={headerStyles.header}>{content}</h2>;
    } else if (headerType === "h3") {
      return <h3 className={headerStyles.header}>{content}</h3>;
    } else if (headerType === "h4") {
      return <h4 className={headerStyles.header}>{content}</h4>;
    } else if (headerType === "h5") {
      return <h5 className={headerStyles.header}>{content}</h5>;
    }
  };
  return (
    <CardInstint className={headerStyles.card}>{determineHeader()}</CardInstint>
  );
}
