import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

export const BOX_STYLES: Record<Sizes, CSSProperties> = {
  xs: {
    padding: `${spacings.xs} ${spacings.sm}`,
  },
  sm: {
    padding: `${spacings.sm} ${spacings.md}`,
  },
  md: {
    padding: `${spacings.md} ${spacings.lg}`,
  },
  lg: {
    padding: `${spacings.lg} ${spacings.xl}`,
  },
  xl: {
    padding: `${spacings.xl} ${spacings.xl}`,
  },
};
