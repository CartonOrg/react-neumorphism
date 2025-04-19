import { CSSProperties } from "react";
import { css, SerializedStyles, Theme } from "@emotion/react";
import { Sizes } from "../../constants";

export const TYPOGRAPHY_STYLES: Record<Sizes, CSSProperties> = {
  xs: {
    fontSize: "12px",
  },
  sm: {
    fontSize: "14px",
  },
  md: {
    fontSize: "16px",
  },
  lg: {
    fontSize: "18px",
  },
  xl: {
    fontSize: "20px",
  },
};

export const defaultStyle = ({
  size,
  theme,
  bold,
  italic,
  underline,
  ellipsis,
}: {
  theme: Theme;
  size: Sizes;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  ellipsis?: boolean;
}): SerializedStyles =>
  css({
    ...TYPOGRAPHY_STYLES[size],
    color: theme.fontColor,
    fontWeight: bold ? "bold" : "normal",
    fontStyle: italic ? "italic" : "normal",
    textDecoration: underline ? "underline" : "none",
    fontFamily: theme.fontFamily,
    pointerEvents: "none",
    ...(ellipsis === true && {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    }),
  });
