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
  radioContainerStyle?: React.CSSProperties;
  radioLabelStyle?: React.CSSProperties;
} & Partial<React.InputHTMLAttributes<HTMLInputElement>>;

export const Radio: React.FC<RadioProps> = ({
  id,
  label,
  inputSize = "sm",
  radioContainerStyle,
  radioLabelStyle,
  ...rest
}) => {
  return (
    <StyledRadioContainer $radioContainerStyle={radioContainerStyle}>
      <StyledRadioInput id={id} type="radio" {...rest} />
      <StyledRadioLabel htmlFor={id} $inputSize={inputSize}>
        <Typography size={inputSize} labelStyle={radioLabelStyle}>
          {label}
        </Typography>
      </StyledRadioLabel>
    </StyledRadioContainer>
  );
};

export default withTheme(Radio);
