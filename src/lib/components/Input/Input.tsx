import { withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import { IconStyle } from "../../types/icon";
import { getIconDisplay } from "../../utils/icon";
import Typography from "../Typography/Typography";
import {
  StyledInput,
  StyledInputContainer,
  StyledInputLabel,
} from "./input.styles";

type InputProps = {
  label?: string;
  inputSize?: Sizes;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  iconStyle?: IconStyle;
  disabled?: boolean;
  inputStyle?: React.CSSProperties;
  inputContainerStyle?: React.CSSProperties;
  inputLabelStyle?: React.CSSProperties;
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      inputSize = "sm",
      iconLeft,
      iconRight,
      iconStyle = "outline",
      disabled,
      inputStyle,
      inputContainerStyle,
      inputLabelStyle,
      ...rest
    },
    ref,
  ) => {
    const iconLeftDisplay = getIconDisplay(iconLeft, iconStyle, inputSize);
    const iconRightDisplay = getIconDisplay(iconRight, iconStyle, inputSize);

    return (
      <StyledInputLabel $inputSize={inputSize}>
        {label !== undefined && (
          <Typography size={inputSize} labelStyle={inputLabelStyle}>
            {label}
          </Typography>
        )}
        <StyledInputContainer
          $inputSize={inputSize}
          $iconStyle={iconStyle}
          $hasIconLeft={iconLeft !== undefined}
          $hasIconRight={iconRight !== undefined}
          $disabled={disabled}
          $inputContainerStyle={inputContainerStyle}
        >
          {iconLeftDisplay}
          <StyledInput
            ref={ref}
            $inputSize={inputSize}
            disabled={disabled}
            $inputStyle={inputStyle}
            {...rest}
          />
          {iconRightDisplay}
        </StyledInputContainer>
      </StyledInputLabel>
    );
  },
);

export default withTheme(Input);
