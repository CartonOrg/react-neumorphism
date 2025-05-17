import { css, Theme, withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import { BUTTON_STYLES } from "./button.styles";
import SpinnerIcon from "../../icons/SpinnerIcon";
import Typography from "../Typography/Typography";

type ButtonProps = {
  size?: Sizes;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  isLoading?: boolean;
  rounded?: boolean;
  border?: boolean;
  children?: React.ReactNode;
  theme: Theme;
} & Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "sm",
      iconLeft,
      iconRight,
      isLoading = false,
      rounded = false,
      border = false,
      theme,
      children,
      ...rest
    },
    ref,
  ) => {
    const {
      border: borderStyle,
      fontColor,
      borderRadius,
      background,
      shadow,
      shadowInset,
    } = theme;
    const buttonSizeStyles = BUTTON_STYLES[size];

    const hasOnlyIcon =
      (iconLeft !== undefined || iconRight !== undefined) &&
      children === undefined;
    const hasIcon = iconLeft !== undefined || iconRight !== undefined;

    return (
      <button
        ref={ref}
        disabled={isLoading || rest.disabled}
        css={css({
          ...buttonSizeStyles.container,
          border: border ? borderStyle : "unset",
          outline: "unset",
          borderRadius: rounded ? "50px" : borderRadius,
          background,
          boxShadow: shadow,
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: hasIcon || isLoading ? buttonSizeStyles.container.gap : "0",
          padding: hasOnlyIcon
            ? buttonSizeStyles.custom.padding
            : buttonSizeStyles.container.padding,

          "&:disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
          },

          "&:hover": {
            boxShadow: shadowInset,
          },

          "& > svg": {
            width: buttonSizeStyles.custom.iconSize,
            height: buttonSizeStyles.custom.iconSize,
          },
        })}
        {...rest}
      >
        {iconLeft}
        <Typography size={size}>{children}</Typography>
        {isLoading ? (
          <SpinnerIcon color={fontColor} />
        ) : iconRight !== undefined ? (
          iconRight
        ) : null}
      </button>
    );
  },
);

export default withTheme(Button);
