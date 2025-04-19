import { css, Theme, withTheme } from "@emotion/react";
import ReactDOM from "react-dom";
import { useRef } from "react";
import { CrossIcon } from "../../icons";
import { spacings } from "../../constants";
import Button from "../Button/Button";
import Badge from "../Badge/Badge";
import { useClickOutside } from "../../hooks/useClickOutside";

interface ModalProps {
  width?: number;
  height?: number;
  isOpen: boolean;
  onClose?: () => void;
  theme: Theme;
  title?: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  theme,
  children,
  width,
  height,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { background, borderRadius, border, shadowInset } = theme;
  useClickOutside(modalRef, () => onClose?.());

  if (!isOpen) {
    return null;
  }

  const defaultWidth = width ?? window.innerWidth / 2;
  const defaultHeight = height ?? window.innerHeight / 2;

  return ReactDOM.createPortal(
    <div>
      <div
        css={css({
          position: "fixed",
          zIndex: 9999998,
          top: 0,
          left: 0,
          background,
          opacity: 0.9,
          width: "100%",
          height: "100%",
        })}
      ></div>
      <div
        ref={modalRef}
        css={css({
          position: "fixed",
          zIndex: 9999999,
          top: `calc(50% - ${defaultHeight / 2}px)`,
          left: `calc(50% - ${defaultWidth / 2}px)`,
          width: defaultWidth,
          height: defaultHeight,
          background,
          borderRadius,
          border,
          boxShadow: shadowInset,
          display: "flex",
          flexDirection: "column",
          padding: spacings.xl,

          "@media (max-width: 768px)": {
            width: "100%",
            height: "100%",
            maxWidth: defaultWidth,
            maxHeight: defaultHeight,
            top: 0,
            left: 0,
          },
        })}
      >
        <div
          css={css({
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            position: "relative",
            paddingBottom: spacings.md,
            "&:after": {
              content: "''",
              position: "absolute",
              bottom: 0,
              borderBottom: border,
              width: `calc(100%  + 2 * ${spacings.xl})`,
              left: `-${spacings.xl}`,
            },
          })}
        >
          <Badge size="sm">{title}</Badge>
          <Button iconLeft={<CrossIcon />} size="sm" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>,
    document.body,
  );
};

export default withTheme(Modal);
