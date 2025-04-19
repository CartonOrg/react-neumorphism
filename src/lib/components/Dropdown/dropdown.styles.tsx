import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

export const DROPDOWN_STYLES: Record<
  Sizes,
  {
    headerContainer: CSSProperties;
    contentContainer: CSSProperties;
    item: CSSProperties;
  }
> = {
  xs: {
    headerContainer: {
      padding: `${spacings.xs} ${spacings.sm}`,
    },
    contentContainer: {
      padding: `${spacings.xs} ${spacings.sm}`,
    },
    item: {
      padding: `${spacings.xs} 0`,
    },
  },
  sm: {
    headerContainer: {
      padding: `${spacings.sm} ${spacings.md}`,
    },
    contentContainer: {
      padding: `${spacings.sm} ${spacings.md}`,
    },
    item: {
      padding: `${spacings.sm} 0`,
    },
  },
  md: {
    headerContainer: {
      padding: `${spacings.md} ${spacings.lg}`,
    },
    contentContainer: {
      padding: `${spacings.md} ${spacings.lg}`,
    },
    item: {
      padding: `${spacings.md} 0`,
    },
  },
  lg: {
    headerContainer: {
      padding: `${spacings.lg} ${spacings.xl}`,
    },
    contentContainer: {
      padding: `${spacings.lg} ${spacings.xl}`,
    },
    item: {
      padding: `${spacings.lg} 0`,
    },
  },
  xl: {
    headerContainer: {
      padding: `${spacings.xl} ${spacings.xl}`,
    },
    contentContainer: {
      padding: `${spacings.xl} ${spacings.xl}`,
    },
    item: {
      padding: `${spacings.xl} 0`,
    },
  },
};
