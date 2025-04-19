import { useEffect, useRef } from "react";

export const useScroll = ({
  enable = true,
  ref,
  callback,
}: {
  enable?: boolean;
  ref?: React.RefObject<HTMLElement | null>;
  callback: () => void;
}): void => {
  const isListening = useRef(false);

  useEffect(() => {
    if (isListening.current) {
      isListening.current = false;
    }
  }, [enable]);

  useEffect(() => {
    if (isListening.current || !enable) {
      return;
    }
    isListening.current = true;

    (ref?.current ?? window).addEventListener("scroll", callback);

    return () => {
      (ref?.current ?? window).removeEventListener("scroll", callback);
    };
  }, [callback, enable, ref]);
};
