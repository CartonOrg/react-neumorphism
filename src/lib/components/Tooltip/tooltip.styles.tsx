import { css, SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "motion/react";
import { spacings } from "../../constants";
import { TooltipAlignment } from "./tooltip.types";
export const getPositionStyle = (
  wrapper: HTMLElement,
  tooltipWrapper: HTMLElement,
  alignment: TooltipAlignment,
): SerializedStyles => {
  const coords = wrapper.getBoundingClientRect();
  const coordsToolTip = tooltipWrapper.getBoundingClientRect();

  switch (alignment) {
    case "top-right":
      return css({
        top: `calc(${coords.y}px - ${spacings.sm} - ${coordsToolTip.height}px)`,
        left: `calc(${coords.x}px + ${coords.width}px - ${coordsToolTip.width}px)`,
      });
    case "top-left":
      return css({
        top: `calc(${coords.y}px - ${spacings.sm} - ${coordsToolTip.height}px)`,
        left: `${coords.x}px`,
      });
    case "top-center":
      return css({
        top: `calc(${coords.y}px - ${spacings.sm} - ${coordsToolTip.height}px)`,
        left: `calc(${(coords.width - coordsToolTip.width) / 2}px + ${
          coords.x
        }px)`,
      });
    case "bottom-left":
      return css({
        top: `calc(${coords.y + coords.height}px + ${spacings.sm})`,
        left: `${coords.x}px`,
      });
    case "bottom-right":
      return css({
        top: `calc(${coords.y + coords.height}px + ${spacings.sm})`,
        left: `calc(${coords.x}px + ${coords.width}px - ${coordsToolTip.width}px)`,
      });
    case "bottom-center":
    default:
      return css({
        top: `calc(${coords.y + coords.height}px + ${spacings.sm})`,
        left: `calc(${(coords.width - coordsToolTip.width) / 2}px + ${
          coords.x
        }px)`,
      });
  }
};

export const StyledTooltipWrapper = styled.div`
  width: fit-content;
`;

export const StyledTooltip = styled(motion.div)<{
  $tooltipStyle?: React.CSSProperties;
}>`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999999;
  width: max-content;
  max-width: 320px;
  padding: ${spacings.xs} ${spacings.sm};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.fontColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  border: ${({ theme }) => theme.border};
  ${({ $tooltipStyle }) => ({ ...$tooltipStyle })}
`;
