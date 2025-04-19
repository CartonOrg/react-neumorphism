import { css, Theme, withTheme } from "@emotion/react";
import { Sizes, spacings } from "../../constants";
import { INPUT_STYLES, OUTLINE_INPUT_CONTAINER_STYLE } from "./input.styles";
import { IconStyle } from "../../types/icon";
import { getIconDisplay } from "../../utils/icon";
import Typography from "../Typography/Typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  theme: Theme;
  label?: string;
  inputSize?: Sizes;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconStyle?: IconStyle;
  disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
  theme,
  label,
  inputSize = "sm",
  iconLeft,
  iconRight,
  iconStyle = "outline",
  disabled,
  ...rest
}) => {
  const { border, borderRadius, background, shadowInset } = theme;
  const currentInputStyle = INPUT_STYLES[inputSize];
  const currentOutlineInputContainerStyle =
    OUTLINE_INPUT_CONTAINER_STYLE[inputSize];

  const iconLeftDisplay = getIconDisplay(iconLeft, iconStyle, inputSize);
  const iconRightDisplay = getIconDisplay(iconRight, iconStyle, inputSize);

  return (
    <label
      css={css({
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: spacings.sm,
        ...currentInputStyle.container,
      })}
    >
      {label !== undefined && <Typography size={inputSize}>{label}</Typography>}
      <div
        css={css({
          display: "flex",
          alignItems: "center",
          border,
          borderRadius,
          background,
          boxShadow: shadowInset,
          ...(iconStyle === "outline"
            ? currentOutlineInputContainerStyle.inputContainer
            : currentInputStyle.inputContainer),
          ...((iconRight !== undefined && iconLeft === undefined) ||
          (iconRight === undefined && iconLeft === undefined)
            ? {
                paddingLeft: 0,
              }
            : {}),
          ...(disabled === true && {
            opacity: 0.5,
            cursor: "not-allowed",
          }),
        })}
      >
        {iconLeftDisplay}
        <input
          {...rest}
          disabled={disabled}
          css={css({
            ...currentInputStyle.input,
            outline: "unset",
            border: "unset",
            background: "transparent",
            textAlign: "left",
            width: "100%",
            height: "100%",

            "&:disabled": {
              opacity: 0.5,
              cursor: "not-allowed",
            },
          })}
        />
        {iconRightDisplay}
      </div>
    </label>
  );
};

export default withTheme(Input);
