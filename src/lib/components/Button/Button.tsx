import { Theme, withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import { StyledButton } from "./button.styles";
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
      children,
      theme,
      ...rest
    },
    ref,
  ) => {
    const hasOnlyIcon =
      (iconLeft !== undefined || iconRight !== undefined) &&
      children === undefined;
    const hasIcon = iconLeft !== undefined || iconRight !== undefined;

    return (
      <StyledButton
        ref={ref}
        $size={size}
        $rounded={rounded}
        $border={border}
        $hasIcon={hasIcon}
        $hasOnlyIcon={hasOnlyIcon}
        $isLoading={isLoading}
        disabled={isLoading || rest.disabled}
        {...rest}
      >
        {iconLeft}
        {hasOnlyIcon ? null : <Typography size={size}>{children}</Typography>}
        {isLoading ? (
          <SpinnerIcon color={theme.fontColor} />
        ) : iconRight !== undefined ? (
          iconRight
        ) : null}
      </StyledButton>
    );
  },
);

export default withTheme(Button);
