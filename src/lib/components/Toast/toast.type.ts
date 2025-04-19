import { Sizes } from "../../constants";
import { ScreenPosition } from "../../types";

export interface Toast {
  title?: string;
  description?: string;
  type?: "success" | "error" | "warning" | "info";
}

export interface ExtendedToast extends Toast, ToastConfig {
  id: string;
  isExiting?: boolean;
}
export interface ToastConfig {
  duration?: number;
  position?: ScreenPosition;
  size?: Sizes;
  isClosable?: boolean;
  bordered?: boolean;
}
