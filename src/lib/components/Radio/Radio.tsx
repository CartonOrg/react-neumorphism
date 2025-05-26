import { withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import {
  StyledRadioContainer,
  StyledRadioInput,
  StyledRadioLabel,
} from "./radio.styles";
import Typography from "../Typography/Typography";

type RadioProps = {
  label: string;
  inputSize?: Sizes;
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>;

export const Radio: React.FC<RadioProps> = ({
  id,
  label,
  inputSize = "sm",
  ...rest
}) => {
  return (
    <StyledRadioContainer>
      <StyledRadioInput id={id} type="radio" {...rest} />
      <StyledRadioLabel htmlFor={id} $inputSize={inputSize}>
        <Typography size={inputSize}>{label}</Typography>
      </StyledRadioLabel>
    </StyledRadioContainer>
  );
};

export default withTheme(Radio);
