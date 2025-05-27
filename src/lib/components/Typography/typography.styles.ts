import { CSSProperties } from "react";
import { css, SerializedStyles, Theme } from "@emotion/react";
import { Sizes } from "../../constants";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

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
  variant,
  size,
  theme,
  bold,
  italic,
  underline,
  ellipsis,
}: {
  variant: TypographyVariant;
  theme: Theme;
  size: Sizes;
  bold: boolean;
  italic: boolean;
  underline: boolean;
  ellipsis?: boolean;
}): SerializedStyles =>
  css({
    ...(variant === "span" || variant === "p"
      ? {
          ...TYPOGRAPHY_STYLES[size],
        }
      : {}),
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
