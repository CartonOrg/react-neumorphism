import { withTheme } from "@emotion/react";
import { useCallback, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence } from "motion/react";
import { PopoverAlignment } from "./popover.types";
import { getPositionStyle, StyledPopover } from "./popover.styles";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useScroll } from "../../hooks/useScroll";

export interface PopoverProps {
  anchorRef: React.RefObject<HTMLElement | null>;
  display: boolean;
  children?: React.ReactNode;
  alignment?: PopoverAlignment;
  onClickOutside?: () => void;
}

const Popover: React.FC<PopoverProps> = ({
  anchorRef,
  display = false,
  children,
  alignment = "bottom-center",
  onClickOutside,
}) => {
  const [position, setPosition] = useState<{ top: string; left: string }>();
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
          <StyledPopover
            ref={popoverWrapper}
            style={position}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {children}
          </StyledPopover>
        </AnimatePresence>,
        document.body,
      )
    : null;
};

export default withTheme(Popover);
