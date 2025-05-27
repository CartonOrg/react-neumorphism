import { forwardRef, useCallback, useEffect } from "react";
import { Sizes } from "../../constants";
import Typography from "../Typography/Typography";
import { StyledLabel, StyledTextArea } from "./textArea.styles";
import { useForwardRef } from "../../hooks/useForwardRef";

type TextAreaProps = {
  label?: string;
  textAreaSize?: Sizes;
  enableDynamicHeight?: boolean;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  textAreaStyle?: React.CSSProperties;
  textAreaContainerStyle?: React.CSSProperties;
  textAreaLabelStyle?: React.CSSProperties;
} & Partial<React.TextareaHTMLAttributes<HTMLTextAreaElement>>;

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      textAreaSize = "sm",
      enableDynamicHeight = true,
      value,
      textAreaStyle,
      textAreaContainerStyle,
      textAreaLabelStyle,
      ...rest
    },
    ref,
  ) => {
    const textAreaRef = useForwardRef<HTMLTextAreaElement>(ref);

    const adjustHeight = useCallback(() => {
      const textarea = textAreaRef.current;
      if (enableDynamicHeight) {
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
      <StyledLabel
        $textAreaSize={textAreaSize}
        $textAreaContainerStyle={textAreaContainerStyle}
      >
        {label !== undefined && (
          <Typography size={textAreaSize} labelStyle={textAreaLabelStyle}>
            {label}
          </Typography>
        )}
        <StyledTextArea
          ref={textAreaRef}
          $textAreaSize={textAreaSize}
          $enableDynamicHeight={enableDynamicHeight}
          $textAreaStyle={textAreaStyle}
          {...rest}
        />
      </StyledLabel>
    );
  },
);

export default TextArea;
