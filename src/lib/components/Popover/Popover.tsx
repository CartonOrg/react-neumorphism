import { css, SerializedStyles, Theme, withTheme } from "@emotion/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "motion/react";
import { PopoverAlignment } from "./popover.types";
import { spacings } from "../../constants";
import { getPositionStyle } from "./popover.styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useScroll } from "../../hooks/useScroll";

export interface PopoverProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  display: boolean;
  children?: React.ReactNode;
  alignment?: PopoverAlignment;
  onClickOutside?: () => void;
  theme: Theme;
}

const Popover: React.FC<PopoverProps> = ({
  anchorRef,
  display = false,
  children,
  alignment = "bottom-center",
  onClickOutside,
  theme,
}) => {
  const [position, setPosition] = useState<SerializedStyles>();
  const popoverWrapper = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = useCallback(() => {
    onClickOutside?.();
  }, [onClickOutside]);

  useClickOutside(popoverWrapper, () => {
    if (!display) {
      return;
    }
    onClickOutside?.();
  });

  const { background, borderRadius, shadow, border } = theme;

  const updatePosition = useCallback(() => {
    if (
      anchorRef.current === null ||
      popoverWrapper.current === null ||
      !display
    ) {
      return;
    }
    const positionStyle = getPositionStyle(
      anchorRef.current,
      popoverWrapper.current,
      alignment,
    );
    setPosition(positionStyle);
  }, [alignment, display]);

  useLayoutEffect(updatePosition, [alignment, display]);
  useScroll({
    enable: display,
    callback: handleClickOutside,
  });

  return display
    ? createPortal(
        <AnimatePresence>
          <motion.div
            ref={popoverWrapper}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            css={[
              css({
                zIndex: 99999999,
                position: "fixed",
                width: "max-content",
                padding: `${spacings.xs} ${spacings.sm}`,
                background,
                borderRadius,
                boxShadow: shadow,
                border,
              }),
              position,
            ]}
          >
            {children}
          </motion.div>
        </AnimatePresence>,
        document.body,
      )
    : null;
};

export default withTheme(Popover);
