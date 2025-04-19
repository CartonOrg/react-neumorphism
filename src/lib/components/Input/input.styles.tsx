import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

export const INPUT_STYLES: Record<
  Sizes,
  {
    container: CSSProperties;
    inputContainer: CSSProperties;
    label: CSSProperties;
    input: CSSProperties;
    icon: CSSProperties;
  }
> = {
  xs: {
    container: {
      fontSize: "10px",
      gap: spacings.xs,
    },
    label: {
      fontSize: "10px",
    },
    inputContainer: {},
    input: {
      fontSize: "10px",
      padding: `0 ${spacings.sm}`,
    },
    icon: {
      width: "12px",
      height: "12px",
    },
  },
  sm: {
    container: {
      fontSize: "12px",
      gap: spacings.sm,
    },
    label: {
      fontSize: "12px",
    },
    inputContainer: {},
    input: {
      fontSize: "12px",
      padding: `0 ${spacings.sm}`,
    },
    icon: {
      width: "14px",
      height: "14px",
    },
  },
  md: {
    container: {
      fontSize: "14px",
      gap: spacings.sm,
    },
    label: {
      fontSize: "14px",
    },
    inputContainer: {},
    input: {
      fontSize: "14px",
      padding: `0 ${spacings.md}`,
    },
    icon: {
      width: "16px",
      height: "16px",
    },
  },
  lg: {
    container: {
      fontSize: "16px",
      gap: spacings.md,
    },
    label: {
      fontSize: "16px",
    },
    inputContainer: {},
    input: {
      fontSize: "16px",
      padding: `0 ${spacings.md}`,
    },
    icon: {
      width: "18px",
      height: "18px",
    },
  },
  xl: {
    container: {
      fontSize: "18px",
      gap: spacings.lg,
    },
    label: {
      fontSize: "18px",
    },
    inputContainer: {},
    input: {
      padding: `0 ${spacings.lg}`,
      fontSize: "18px",
    },
    icon: {
      width: "20px",
      height: "20px",
    },
  },
};

export const OUTLINE_INPUT_CONTAINER_STYLE: Record<
  Sizes,
  {
    inputContainer: CSSProperties;
  }
> = {
  xs: {
    inputContainer: {
      padding: `${spacings.xs} ${spacings.sm}`,
    },
  },
  sm: {
    inputContainer: {
      padding: `${spacings.sm} ${spacings.md}`,
    },
  },
  md: {
    inputContainer: {
      padding: `${spacings.md} ${spacings.lg}`,
    },
  },
  lg: {
    inputContainer: {
      padding: `${spacings.lg} ${spacings.xl}`,
    },
  },
  xl: {
    inputContainer: {
      padding: `${spacings.xl} ${spacings.xl}`,
    },
  },
};
