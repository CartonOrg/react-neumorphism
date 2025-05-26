import { forwardRef, useRef } from "react";
import { Theme, withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import Typography from "../Typography/Typography";
import {
  StyledToggleButton,
  StyledToggleContainer,
  StyledToggleInput,
  StyledToggleWrapper,
} from "./toggle.styles";
import { useForwardRef } from "../../hooks/useForwardRef";
interface ToggleProps {
  id?: string;
  label?: string;
  size?: Sizes;
  rounded?: boolean;
  border?: boolean;
  checked?: boolean;
  disabled?: boolean;
  icons?: {
    checkedIcon: React.ReactNode;
    uncheckedIcon: React.ReactNode;
  };
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      id,
      label,
      size = "sm",
      rounded = false,
      border = false,
      checked = false,
      icons,
      onChange,
      disabled = false,
      ...rest
    },
    ref,
  ) => {
    const inputRef = useForwardRef<HTMLInputElement>(ref);
    const hasIcon =
      icons?.checkedIcon !== undefined && icons.uncheckedIcon !== undefined;

    const triggerToggle = () => {
      if (disabled) {
        return;
      }
      inputRef.current.click();
    };

    return (
      <StyledToggleContainer>
        {label !== undefined && (
          <label htmlFor={id}>
            <Typography size={size}>{label}</Typography>
          </label>
        )}
        <StyledToggleWrapper
          $size={size}
          $rounded={rounded}
          $border={border}
          $checked={checked}
          $disabled={disabled}
        >
          <StyledToggleInput
            $disabled={disabled}
            id={id}
            name={id}
            ref={inputRef}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
            {...rest}
          />
          <StyledToggleButton
            onClick={triggerToggle}
            $size={size}
            $rounded={rounded}
            $border={border}
            $checked={checked}
            $disabled={disabled}
          >
            {hasIcon && (checked ? icons.checkedIcon : icons.uncheckedIcon)}
          </StyledToggleButton>
        </StyledToggleWrapper>
      </StyledToggleContainer>
    );
  },
);

export default withTheme(Toggle);
