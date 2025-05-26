import { Theme, withTheme } from "@emotion/react";
import ReactDOM from "react-dom";
import { forwardRef, useRef } from "react";
import { CrossIcon } from "../../icons";
import { Sizes } from "../../constants";
import Button from "../Button/Button";
import Badge from "../Badge/Badge";
import { useClickOutside } from "../../hooks/useClickOutside";
import { StyledHeader, StyledModal, StyledOverlay } from "./modal.styles";

type ModalProps = {
  width?: number;
  height?: number;
  isOpen: boolean;
  onClose?: () => void;
  title?: string;
  children: React.ReactNode;
  headerSize?: Sizes;
  theme: Theme;
} & Partial<React.HTMLAttributes<HTMLDivElement>>;

const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      isOpen,
      onClose,
      title,
      children,
      width,
      height,
      headerSize = "sm",
      theme,
      ...rest
    },
    ref,
  ) => {
    const modalRef = useRef<HTMLDivElement>(null);
    useClickOutside(modalRef, () => onClose?.());

    if (!isOpen) {
      return null;
    }

    const defaultWidth = width ?? window.innerWidth / 2;
    const defaultHeight = height ?? window.innerHeight / 2;
    const hasHeader = title !== undefined;

    return ReactDOM.createPortal(
      <div ref={ref} {...rest}>
        <StyledOverlay />
        <StyledModal
          ref={modalRef}
          $width={defaultWidth}
          $height={defaultHeight}
        >
          {hasHeader && (
            <StyledHeader>
              <Badge size={headerSize}>{title}</Badge>
              <Button
                iconLeft={<CrossIcon color={theme.fontColor} />}
                size={headerSize}
                onClick={onClose}
              />
            </StyledHeader>
          )}
          {children}
        </StyledModal>
      </div>,
      document.body,
    );
  },
);

export default withTheme(Modal);
