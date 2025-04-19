import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

export const BADGE_STYLES: Record<Sizes, CSSProperties> = {
  xs: {
    padding: `${spacings.xs} ${spacings.sm}`,
    fontSize: "10px",
    borderRadius: "4px",
  },
  sm: {
    padding: `${spacings.sm} ${spacings.md}`,
    fontSize: "12px",
    borderRadius: "6px",
  },
  md: {
    padding: `${spacings.md} ${spacings.lg}`,
    fontSize: "14px",
    borderRadius: "8px",
  },
  lg: {
    padding: `${spacings.lg} ${spacings.xl}`,
    fontSize: "16px",
    borderRadius: "10px",
  },
  xl: {
    padding: `${spacings.xl} ${spacings.xl}`,
    fontSize: "18px",
    borderRadius: "12px",
  },
};
