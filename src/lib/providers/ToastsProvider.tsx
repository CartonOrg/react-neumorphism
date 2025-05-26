import { createContext, useCallback, useContext, useState } from "react";
import { createPortal } from "react-dom";
import {
  ExtendedToast,
  Toast,
  ToastConfig,
} from "../components/Toast/toast.type";
import { ToastContainer } from "../components/Toast/ToastContainer";
import {
  BOTTOM_CENTER,
  BOTTOM_LEFT,
  BOTTOM_RIGHT,
  ScreenPosition,
  TOP_CENTER,
  TOP_LEFT,
  TOP_RIGHT,
} from "../types";
import { Sizes } from "../constants";

interface ToastsContextType {
  createToast: (toast: Toast, config?: ToastConfig) => void;
}

const ToastsContext = createContext<ToastsContextType>({
  createToast: () => console.log("Toast provider not well initialized"),
});

export const useToasts = (): ToastsContextType => useContext(ToastsContext);

const DEFAULT_DURATION = 3000;

export const ToastsProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode => {
  const [toastsByPositions, setToastsByPositions] = useState<
    Record<ScreenPosition, ExtendedToast[]>
  >({
    [BOTTOM_RIGHT]: [],
    [BOTTOM_LEFT]: [],
    [BOTTOM_CENTER]: [],
    [TOP_RIGHT]: [],
    [TOP_LEFT]: [],
    [TOP_CENTER]: [],
  });

  const removeToast = useCallback((id: string, position: ScreenPosition) => {
    setToastsByPositions((prev) => {
      return {
        ...prev,
        [position]: prev[position].filter((toast) => toast.id !== id),
      };
    });
  }, []);

  const createToast = useCallback(
    (
      toast: Toast = {
        type: "info",
      },
      config?: ToastConfig,
    ) => {
      const defaultConfig = {
        duration: DEFAULT_DURATION,
        position: BOTTOM_RIGHT as ScreenPosition,
        size: "md" as Sizes,
        isClosable: false,
        bordered: false,
      };

      const mergedConfig = {
        ...defaultConfig,
        ...config,
      };

      const enrichedToast: ExtendedToast = {
        ...toast,
        ...mergedConfig,
        id: crypto.randomUUID(),
      };

      console.log("@@", enrichedToast, toastsByPositions);

      const isInfinite = config?.duration === 0;

      if (!isInfinite) {
        setTimeout(() => {
          setToastsByPositions((prev) => ({
            ...prev,
            [mergedConfig.position]: prev[mergedConfig.position].map((t) =>
              t.id === enrichedToast.id ? { ...t, isExiting: true } : t,
            ),
          }));

          setTimeout(() => {
            removeToast(enrichedToast.id, mergedConfig.position);
          }, 300);
        }, mergedConfig.duration);
      }

      setToastsByPositions((prev) => ({
        ...prev,
        [mergedConfig.position]: [
          ...prev[mergedConfig.position],
          enrichedToast,
        ],
      }));
    },
    [removeToast],
  );

  return (
    <ToastsContext.Provider value={{ createToast }}>
      {children}

      {Object.keys(toastsByPositions).map((position) => {
        const pos = position as ScreenPosition;
        const toasts = toastsByPositions[pos];

        if (toasts.length === 0) {
          return null;
        }

        return createPortal(
          <ToastContainer
            toasts={toasts}
            removeToast={(id) => removeToast(id, pos)}
            position={pos}
          />,
          document.body,
        );
      })}
    </ToastsContext.Provider>
  );
};
