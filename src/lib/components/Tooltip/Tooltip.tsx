import { css, SerializedStyles, Theme, withTheme } from "@emotion/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { TooltipAlignment } from "./tooltip.types";
import { Sizes, spacings } from "../../constants";
import { getPositionStyle } from "./tooltip.styles";
import { Typography } from "..";
import { useScroll } from "../../hooks/useScroll";

export interface TooltipProps {
  text: string;
  children?: React.ReactNode;
  alignment?: TooltipAlignment;
  theme: Theme;
  size?: Sizes;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  children,
  alignment = "bottom-center",
  size = "sm",
  theme,
}) => {
  const [position, setPosition] = useState<SerializedStyles>();
  const [display, setDisplay] = useState(false);
  const { background, fontColor, borderRadius, shadow, border } = theme;

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
    <div
      ref={wrapper}
      css={css({ width: "fit-content" })}
      onMouseOver={() => setDisplay(true)}
      onFocus={() => setDisplay(true)}
      onMouseLeave={() => setDisplay(false)}
      onBlur={() => setDisplay(false)}
    >
      {children}
      {display &&
        createPortal(
          <AnimatePresence>
            <motion.div
              ref={tooltipWrapper}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              css={[
                css({
                  position: "fixed",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 99999999,
                  width: "max-content",
                  maxWidth: "320px",
                  padding: `${spacings.xs} ${spacings.sm}`,
                  background,
                  color: fontColor,
                  borderRadius,
                  boxShadow: shadow,
                  border,
                }),
                position,
              ]}
            >
              <Typography size={size}>{text}</Typography>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
};

export default withTheme(Tooltip);
