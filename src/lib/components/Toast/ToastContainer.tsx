import { useLayoutEffect, useRef, useState } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { AnimatePresence, motion } from "motion/react";
import { ExtendedToast } from "./toast.type";
import Toast from "./Toast";
import { ScreenPosition } from "../../types";
import { spacings } from "../../constants";
import {
  getPositionStyle,
  getToastAlignement,
  getToastsAnimation,
} from "./toast.styles";
interface ToastContainerProps {
  toasts: ExtendedToast[];
  removeToast: (id: string) => void;
  position: ScreenPosition;
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  toasts,
  removeToast,
  position,
}) => {
  const [positionStyle, setPositionStyle] = useState<
    SerializedStyles | undefined
  >(undefined);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    if (containerRef.current === null) {
      return;
    }

    setPositionStyle(getPositionStyle(position, containerRef.current));
  }, [position, containerRef]);

  const animationPosition = getToastsAnimation(position);
  const needToReverse = position.startsWith("bottom");
  const alignment = getToastAlignement(position);

  return (
    <div
      ref={containerRef}
      css={[
        css({
          position: "fixed",
          zIndex: 99999999,
          display: "flex",
          flexDirection: "column",
          gap: spacings.sm,
          alignItems: alignment,
          background: "transparent",
        }),
        positionStyle,
      ]}
    >
      <AnimatePresence>
        {toasts
          .filter(
            (toast) =>
              toast.isExiting === false || toast.isExiting === undefined,
          )
          .reduce((acc, toast) => {
            if (needToReverse) {
              return [toast, ...acc];
            }

            return [...acc, toast];
          }, [] as ExtendedToast[])
          .map((toast) => (
            <motion.div
              key={toast.id}
              initial={animationPosition}
              animate={{ x: 0, y: 0 }}
              exit={animationPosition}
              transition={{
                duration: 0.3,
                ease: "easeOut",
                exit: {
                  duration: 0.3,
                  ease: "easeIn",
                },
              }}
            >
              <Toast key={toast.id} toast={toast} removeToast={removeToast} />
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};
