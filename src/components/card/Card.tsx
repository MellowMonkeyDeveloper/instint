import { CardInstintProps } from "@/types/interfaces/card";
import { determineClass } from "@/types/interfaces/main";
import { useMemo } from "react";

export default function CardInstint({ children, className }: CardInstintProps) {
  return <div className={className}>{children}</div>;
}
