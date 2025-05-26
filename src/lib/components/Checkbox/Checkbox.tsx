import { withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import Typography from "../Typography/Typography";
import {
  StyledCheckboxContainer,
  StyledCheckboxLabel,
  StyledHiddenInput,
} from "./checkbox.styles";

type CheckboxProps = {
  label: string;
  inputSize?: Sizes;
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>;

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ id, label, inputSize = "sm", ...rest }, ref) => {
    return (
      <StyledCheckboxContainer>
        <StyledHiddenInput ref={ref} id={id} type="checkbox" {...rest} />
        <StyledCheckboxLabel htmlFor={id} $size={inputSize}>
          <Typography size={inputSize}>{label}</Typography>
        </StyledCheckboxLabel>
      </StyledCheckboxContainer>
    );
  },
);

export default withTheme(Checkbox);
