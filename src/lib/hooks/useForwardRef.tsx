import { ForwardedRef, RefObject, useEffect, useRef } from "react";

export const useForwardRef = <T,>(ref: ForwardedRef<T>): RefObject<T> => {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (!ref) {
      return;
    }

    if (typeof ref === "function") {
      ref(targetRef.current);
    } else {
      ref.current = targetRef.current;
    }
  }, [ref]);

  return targetRef as RefObject<T>;
};
