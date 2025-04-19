import { CSSProperties } from "react";
import { Sizes } from "../../constants";

export const TOGGLE_SIZES: Record<
  Sizes,
  {
    container: CSSProperties;
    toggler: CSSProperties;
    custom: {
      togglerTransformY: string;
      iconSize: string;
      labelFontSize: string;
    };
  }
> = {
  xs: {
    container: {
      width: "50px",
      height: "10px",
    },
    toggler: {
      width: "20px",
      height: "20px",
    },
    custom: {
      togglerTransformY: "25px",
      iconSize: "8px",
      labelFontSize: "10px",
    },
  },
  sm: {
    container: {
      width: "60px",
      height: "15px",
    },
    toggler: {
      width: "25px",
      height: "25px",
    },
    custom: {
      togglerTransformY: "30px",
      iconSize: "10px",
      labelFontSize: "12px",
    },
  },
  md: {
    container: {
      width: "70px",
      height: "20px",
    },
    toggler: {
      width: "30px",
      height: "30px",
    },
    custom: {
      togglerTransformY: "35px",
      iconSize: "12.5px",
      labelFontSize: "14px",
    },
  },
  lg: {
    container: {
      width: "80px",
      height: "25px",
    },
    toggler: {
      width: "35px",
      height: "35px",
    },
    custom: {
      togglerTransformY: "40px",
      iconSize: "15px",
      labelFontSize: "16px",
    },
  },
  xl: {
    container: {
      width: "100px",
      height: "30px",
    },
    toggler: {
      width: "40px",
      height: "40px",
    },
    custom: {
      togglerTransformY: "45px",
      iconSize: "20px",
      labelFontSize: "18px",
    },
  },
};
