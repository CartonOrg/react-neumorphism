import { css, SerializedStyles } from "@emotion/react";
import { CSSProperties } from "react";
import { Sizes, spacings } from "../../constants";

const TABLES_STYLES: Record<Sizes, CSSProperties> = {
  xs: {
    padding: `${spacings.sm} ${spacings.md}`,
  },
  sm: {
    padding: `${spacings.sm} ${spacings.md}`,
  },
  md: {
    padding: `${spacings.md} ${spacings.lg}`,
  },
  lg: {
    padding: `${spacings.lg} ${spacings.xl}`,
  },
  xl: {
    padding: `${spacings.xl} ${spacings.xl}`,
  },
};

export const tableStyle = (
  borderRadius: string,
  inset: boolean,
  shadow: string,
): SerializedStyles =>
  css({
    position: "relative",
    width: "100%",
    background: "unset",
    borderCollapse: "collapse",
    borderSpacing: 0,
    overflow: "hidden",
    borderRadius,
    boxShadow: !inset ? shadow : "unset",
  });

export const rowStyle = (border: string, hover?: string): SerializedStyles =>
  css({
    background: "unset",
    borderBottom: border,

    "&:hover": {
      background: hover ?? "unset",
    },

    "*": {
      background: "unset",
    },
  });
export const cellStyle = (size: Sizes): SerializedStyles =>
  css({
    background: "unset",
    padding: TABLES_STYLES[size].padding,
    textAlign: "left",
  });
export const headerCellStyle = css({
  background: "unset",
  textAlign: "left",
  fontWeight: "bold",
  textTransform: "capitalize",
});
