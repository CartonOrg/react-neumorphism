import { css, Theme, withTheme } from "@emotion/react";
import { useCallback, useEffect, useRef } from "react";
import { Sizes, spacings } from "../../constants";
import { TEXTAREA_STYLES } from "./textArea.styles";
import Typography from "../Typography/Typography";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  theme: Theme;
  label?: string;
  textAreaSize?: Sizes;
  enableDynamicHeight?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  theme,
  label,
  textAreaSize = "sm",
  enableDynamicHeight = true,
  value,
  ...rest
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const { border, borderRadius, background, shadowInset } = theme;
  const currentTextareaStyle = TEXTAREA_STYLES[textAreaSize];

  const adjustHeight = useCallback(() => {
    const textarea = textAreaRef.current;
    if (textarea && enableDynamicHeight) {
      textarea.style.height = "auto";
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [enableDynamicHeight]);

  useEffect(() => {
    if (!enableDynamicHeight) {
      return;
    }

    adjustHeight();
  }, [value, adjustHeight]);

  return (
    <label
      css={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: spacings.sm,
        ...currentTextareaStyle.container,
      })}
    >
      {label !== undefined && (
        <Typography size={textAreaSize}>{label}</Typography>
      )}

      <textarea
        {...rest}
        css={css({
          ...currentTextareaStyle.textarea,
          outline: "unset",
          textAlign: "left",
          width: "100%",
          minHeight: enableDynamicHeight
            ? currentTextareaStyle.textarea.height
            : "100%",
          border,
          borderRadius,
          background,
          boxShadow: shadowInset,

          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },
          resize: "none",
        })}
        ref={textAreaRef}
      />
    </label>
  );
};

export default withTheme(TextArea);
