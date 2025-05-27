import { SerializedStyles, withTheme } from "@emotion/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import { TooltipAlignment } from "./tooltip.types";
import { Sizes } from "../../constants";
import {
  getPositionStyle,
  StyledTooltip,
  StyledTooltipWrapper,
} from "./tooltip.styles";
import { Typography } from "..";
import { useScroll } from "../../hooks/useScroll";

export interface TooltipProps {
  text: string;
  children?: React.ReactNode;
  alignment?: TooltipAlignment;
  size?: Sizes;
  tooltipStyle?: React.CSSProperties;
  tooltipLabelStyle?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  alignment = "bottom-center",
  size = "sm",
  tooltipStyle,
  tooltipLabelStyle,
}) => {
  const [position, setPosition] = useState<SerializedStyles>();
  const [display, setDisplay] = useState(false);

  const wrapper = useRef<HTMLDivElement | null>(null);
  const tooltipWrapper = useRef<HTMLDivElement | null>(null);

  const updatePosition = useCallback(() => {
    if (
      wrapper.current === null ||
      tooltipWrapper.current === null ||
      !display
    ) {
      return;
    }
    const positionStyle = getPositionStyle(
      wrapper.current,
      tooltipWrapper.current,
      alignment,
    );
    setPosition(positionStyle);
  }, [alignment, display]);

  const closeTooltip = useCallback(() => {
    setDisplay(false);
  }, []);

  useLayoutEffect(updatePosition, [alignment, display]);

  useScroll({
    enable: display,
    callback: closeTooltip,
  });

  return (
    <StyledTooltipWrapper
      ref={wrapper}
      onMouseOver={() => setDisplay(true)}
      onFocus={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      onBlur={() => setDisplay(false)}
    >
      {children}
      {display &&
        createPortal(
          <AnimatePresence>
            <StyledTooltip
              ref={tooltipWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              css={position}
              $tooltipStyle={tooltipStyle}
            >
              <Typography size={size} labelStyle={tooltipLabelStyle}>
                {text}
              </Typography>
            </StyledTooltip>
          </AnimatePresence>,
          document.body,
        )}
    </StyledTooltipWrapper>
  );
};

export default withTheme(Tooltip);
