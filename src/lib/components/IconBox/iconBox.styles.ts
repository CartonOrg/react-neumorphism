import { CSSProperties } from "react";
import { css, SerializedStyles, Theme } from "@emotion/react";
import { Sizes, spacings } from "../../constants";

export const ICON_BOX_STYLES: Record<
  Sizes,
  CSSProperties & { iconSize: string }
> = {
  xs: {
    width: "30px",
    height: "30px",
    padding: spacings.sm,
    iconSize: "10px",
  },
  sm: {
    width: "40px",
    height: "40px",
    padding: spacings.md,
    iconSize: "15px",
  },
  md: {
    width: "50px",
    height: "50px",
    padding: spacings.lg,
    iconSize: "20px",
  },
  lg: {
    width: "60px",
    height: "60px",
    padding: spacings.xl,
    iconSize: "25px",
  },
  xl: {
    width: "70px",
    height: "70px",
    padding: spacings.xl,
    iconSize: "30px",
  },
} as const;

export const blankStyle = ({
  iconBoxSizeStyles,
}: {
  iconBoxSizeStyles: CSSProperties & { iconSize: string };
}): SerializedStyles =>
  css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      opacity: 0.8,
    },
    "& > svg": {
      width: iconBoxSizeStyles.iconSize,
      height: iconBoxSizeStyles.iconSize,
    },
  });

export const defaultStyle = ({
  iconBoxSizeStyles,
  theme,
  width,
  height,
  inset,
  rounded,
  border,
}: {
  iconBoxSizeStyles: CSSProperties & { iconSize: string };
  theme: Theme;
  width?: string;
  height?: string;
  inset?: boolean;
  rounded?: boolean;
  border?: boolean;
}): SerializedStyles => {
  const {
    borderRadius,
    shadow,
    shadowInset,
    fontColor,
    background,
    border: borderStyle,
  } = theme;

  return css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: fontColor,
    background,
    borderRadius: rounded === true ? "50%" : borderRadius,
    ...iconBoxSizeStyles,
    ...(width !== undefined && {
      width,
    }),
    ...(height !== undefined && {
      height,
    }),
    ...(border === true && {
      border: borderStyle,
    }),
    boxShadow: inset === true ? shadowInset : shadow,
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      opacity: 0.8,
    },
    "& > svg": {
      width: iconBoxSizeStyles.iconSize,
      height: iconBoxSizeStyles.iconSize,
    },
  });
};
