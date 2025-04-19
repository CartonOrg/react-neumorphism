import { CSSProperties } from "react";
import { getSpacing, Sizes } from "../../constants";

export const RADIO_STYLE: Record<
  Sizes,
  {
    label: CSSProperties;
    before: CSSProperties;
    after: CSSProperties;
  }
> = {
  xs: {
    label: {
      paddingLeft: getSpacing(7),
      lineHeight: "18px",
      fontSize: "12px",
    },
    before: {
      width: "16px",
      height: "16px",
    },
    after: {
      width: "8.5px",
      height: "8.5px",
      top: "5px",
      left: "5px",
    },
  },
  sm: {
    label: {
      paddingLeft: getSpacing(8),
      lineHeight: "22px",
      fontSize: "14px",
    },
    before: {
      width: "20px",
      height: "20px",
    },
    after: {
      width: "10px",
      height: "10px",
      top: "6px",
      left: "6px",
    },
  },
  md: {
    label: {
      paddingLeft: getSpacing(9),
      lineHeight: "26px",
      fontSize: "16px",
    },
    before: {
      width: "24px",
      height: "24px",
    },
    after: {
      width: "12px",
      height: "12px",
      top: "7px",
      left: "7px",
    },
  },
  lg: {
    label: {
      paddingLeft: getSpacing(10),
      lineHeight: "30px",
      fontSize: "18px",
    },

    before: {
      width: "28px",
      height: "28px",
    },
    after: {
      width: "14px",
      height: "14px",
      top: "8px",
      left: "8px",
    },
  },
  xl: {
    label: {
      paddingLeft: getSpacing(11),
      lineHeight: "34px",
      fontSize: "20px",
    },

    before: {
      width: "32px",
      height: "32px",
    },
    after: {
      width: "16px",
      height: "16px",
      top: "9px",
      left: "9px",
    },
  },
};
