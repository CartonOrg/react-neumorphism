import { CSSProperties } from "react";
import { getSpacing, Sizes, spacings } from "../../constants";

export const CHECKBOX_STYLE: Record<
  Sizes,
  {
    label: CSSProperties;
    beforeAfter: CSSProperties;
    before: CSSProperties;
    after: CSSProperties;
  }
> = {
  xs: {
    label: {
      paddingLeft: getSpacing(6),
      lineHeight: "18px",
      fontSize: "12px",
    },
    beforeAfter: {
      width: "16px",
      height: "16px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "4px",
      height: "8px",
      top: "3px",
      left: "6px",
    },
  },
  sm: {
    label: {
      paddingLeft: getSpacing(7),
      lineHeight: "22px",
      fontSize: "14px",
    },
    beforeAfter: {
      width: "20px",
      height: "20px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "5px",
      height: "10px",
      top: "4px",
      left: "8px",
    },
  },
  md: {
    label: {
      paddingLeft: getSpacing(8),
      lineHeight: "26px",
      fontSize: "16px",
    },
    beforeAfter: {
      width: "24px",
      height: "24px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "6px",
      height: "12px",
      top: "5px",
      left: "10px",
    },
  },
  lg: {
    label: {
      paddingLeft: getSpacing(9),
      lineHeight: "30px",
      fontSize: "18px",
    },
    beforeAfter: {
      width: "28px",
      height: "28px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "7px",
      height: "14px",
      top: "6px",
      left: "12px",
    },
  },
  xl: {
    label: {
      paddingLeft: getSpacing(10),
      lineHeight: "34px",
      fontSize: "20px",
    },
    beforeAfter: {
      width: "32px",
      height: "32px",
    },
    before: {
      borderRadius: spacings.xs,
    },
    after: {
      width: "8px",
      height: "16px",
      top: "7px",
      left: "14px",
    },
  },
};
