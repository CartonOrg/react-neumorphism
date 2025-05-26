import { css, SerializedStyles } from "@emotion/react";
import { ScreenPosition } from "../../types";
import { spacings } from "../../constants";
export const getPositionStyle = (
  position: ScreenPosition,
  containerRef: HTMLDivElement | null,
): SerializedStyles => {
  if (containerRef === null) {
    return css({});
  }
  const containerRect = containerRef.getBoundingClientRect();
  switch (position) {
    case "top-right":
      return css({
        top: spacings.xl,
        right: spacings.xl,
      });
    case "top-left":
      return css({
        top: spacings.xl,
        left: spacings.xl,
      });
    case "top-center":
      return css({
        top: spacings.xl,
        left: `calc(50% - ${containerRect.width / 2}px)`,
      });
    case "bottom-left":
      return css({
        bottom: spacings.xl,
        left: spacings.xl,
      });
    case "bottom-center":
      return css({
        bottom: spacings.xl,
        left: `calc(50% - ${containerRect.width / 2}px)`,
      });
    case "bottom-right":
    default:
      return css({
        bottom: spacings.xl,
        right: spacings.xl,
      });
  }
};

export const getToastsAnimation = (
  position: ScreenPosition,
): { x?: string; y?: string } => {
  switch (position) {
    case "top-right":
      return { x: "120%" };
    case "top-left":
      return { x: "-120%" };
    case "top-center":
      return { y: "-120%" };
    case "bottom-left":
      return { x: "-120%" };
    case "bottom-center":
      return { y: "120%" };
    case "bottom-right":
    default:
      return { x: "120%" };
  }
};

export const getToastAlignement = (
  position: ScreenPosition,
): React.CSSProperties["alignItems"] => {
  switch (position) {
    case "top-right":
      return "flex-end";
    case "top-left":
      return "flex-start";
    case "top-center":
      return "center";
    case "bottom-right":
      return "flex-end";
    case "bottom-left":
      return "flex-start";
    case "bottom-center":
      return "center";
  }
};
