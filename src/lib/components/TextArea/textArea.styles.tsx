import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

export const TEXTAREA_STYLES: Record<
  Sizes,
  {
    container: CSSProperties;
    label: CSSProperties;
    textarea: CSSProperties;
  }
> = {
  xs: {
    container: {
      gap: spacings.xs,
    },
    label: {
      fontSize: "10px",
    },
    textarea: {
      padding: `${spacings.md} ${spacings.md}`,
    },
  },
  sm: {
    container: {
      gap: spacings.sm,
    },
    label: {
      fontSize: "12px",
    },
    textarea: {
      fontSize: "12px",
      padding: `${spacings.md} ${spacings.md}`,
    },
  },
  md: {
    container: {
      gap: spacings.sm,
    },
    label: {
      fontSize: "14px",
    },
    textarea: {
      fontSize: "14px",
      padding: `${spacings.md} ${spacings.lg}`,
    },
  },
  lg: {
    container: {
      gap: spacings.sm,
    },
    label: {
      fontSize: "16px",
    },
    textarea: {
      fontSize: "16px",
      padding: `${spacings.lg} ${spacings.xl}`,
    },
  },
  xl: {
    container: {
      gap: spacings.sm,
    },
    label: {
      fontSize: "18px",
    },
    textarea: {
      padding: `${spacings.lg} ${spacings.xl}`,
      fontSize: "18px",
    },
  },
};
