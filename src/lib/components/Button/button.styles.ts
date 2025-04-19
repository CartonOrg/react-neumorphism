import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

export const BUTTON_STYLES: Record<
  Sizes,
  {
    container: CSSProperties;
    custom: {
      padding: string;
      iconSize: string;
    };
  }
> = {
  xs: {
    container: {
      padding: `${spacings.xs} ${spacings.sm}`,
      fontSize: "10px",
      gap: spacings.xs,
    },
    custom: {
      iconSize: "12px",
      padding: `${spacings.xs} ${spacings.xs}`,
    },
  },
  sm: {
    container: {
      padding: `${spacings.sm} ${spacings.md}`,
      fontSize: "12px",
      gap: spacings.sm,
    },
    custom: {
      iconSize: "14px",
      padding: `${spacings.sm} ${spacings.sm}`,
    },
  },
  md: {
    container: {
      padding: `${spacings.md} ${spacings.lg}`,
      fontSize: "14px",
      gap: spacings.sm,
    },
    custom: {
      iconSize: "16px",
      padding: `${spacings.md} ${spacings.md}`,
    },
  },
  lg: {
    container: {
      padding: `${spacings.lg} ${spacings.xl}`,
      fontSize: "16px",
      gap: spacings.md,
    },
    custom: {
      iconSize: "18px",
      padding: `${spacings.lg} ${spacings.lg}`,
    },
  },
  xl: {
    container: {
      padding: `${spacings.xl} ${spacings.xl}`,
      fontSize: "18px",
      gap: spacings.lg,
    },
    custom: {
      iconSize: "20px",
      padding: `${spacings.xl} ${spacings.xl}`,
    },
  },
};
