import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

export const PROGRESS_BAR_STYLES: Record<
  Sizes,
  {
    bar: CSSProperties;
    title: CSSProperties;
  }
> = {
  xs: {
    bar: {
      height: "8px",
    },
    title: {
      gap: spacings.xs,
    },
  },
  sm: {
    bar: {
      height: "10px",
    },
    title: {
      gap: spacings.sm,
    },
  },
  md: {
    bar: {
      height: "15px",
    },
    title: {
      gap: spacings.md,
    },
  },
  lg: {
    bar: {
      height: "20px",
    },
    title: {
      gap: spacings.md,
    },
  },
  xl: {
    bar: {
      height: "25px",
    },
    title: {
      gap: spacings.md,
    },
  },
};
