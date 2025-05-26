import styled from "@emotion/styled";
import { motion } from "motion/react";
import { spacings } from "../../constants";
import { PopoverAlignment } from "./popover.types";

export const StyledPopover = styled(motion.div)`
  z-index: 99999999;
  position: fixed;
  width: max-content;
  padding: ${spacings.xs} ${spacings.sm};
  background: ${({ theme }) => theme.background};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadow};
  border: ${({ theme }) => theme.border};
`;

export const getPositionStyle = (
  wrapper: HTMLElement,
  tooltipWrapper: HTMLElement,
  alignment: PopoverAlignment,
): { top: string; left: string } => {
  const coords = wrapper.getBoundingClientRect();
  const coordsToolTip = tooltipWrapper.getBoundingClientRect();

  switch (alignment) {
    case "top-right":
      return {
        top: `calc(${coords.y}px - ${spacings.sm} - ${coordsToolTip.height}px)`,
        left: `calc(${coords.x}px + ${coords.width}px - ${coordsToolTip.width}px)`,
      };
    case "top-left":
      return {
        top: `calc(${coords.y}px - ${spacings.sm} - ${coordsToolTip.height}px)`,
        left: `${coords.x}px`,
      };
    case "top-center":
      return {
        top: `calc(${coords.y}px - ${spacings.sm} - ${coordsToolTip.height}px)`,
        left: `calc(${(coords.width - coordsToolTip.width) / 2}px + ${coords.x}px)`,
      };
    case "bottom-left":
      return {
        top: `calc(${coords.y + coords.height}px + ${spacings.sm})`,
        left: `${coords.x}px`,
      };
    case "bottom-right":
      return {
        top: `calc(${coords.y + coords.height}px + ${spacings.sm})`,
        left: `calc(${coords.x}px + ${coords.width}px - ${coordsToolTip.width}px)`,
      };
    case "bottom-center":
    default:
      return {
        top: `calc(${coords.y + coords.height}px + ${spacings.sm})`,
        left: `calc(${(coords.width - coordsToolTip.width) / 2}px + ${coords.x}px)`,
      };
  }
};
