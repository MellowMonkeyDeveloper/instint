import { Style } from "util";

export interface MainInstintProps {
  theme: "Brand" | "DarkInstint";
  darkInstint: boolean;
}

export interface StylesInstintProps{
  brandStyles: string;
  darkStyles: string;
  lightStyles: string;
}

export interface StatusStylesProps{
  success: string;
  warning: string;
  error: string;
}


// Determines the styling of the component based on the theme and if darkIntint mode is light or dark
function determineClass(
  theme: "Brand" | "DarkInstint",
  brandClass: string | undefined,
  darkClass: string | undefined,
  lightClass: string | undefined,
  darkInstint: boolean | undefined
) {
  if (theme === "Brand") {
    return brandClass;
  } else if (theme === "DarkInstint") {
    if (darkInstint) {
      return darkClass;
    } else if (!darkInstint) {
      return lightClass;
    }
  }
}

export { determineClass };
