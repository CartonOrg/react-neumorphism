import { withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import Badge from "../Badge/Badge";
import Typography from "../Typography/Typography";
import {
  StyledContainer,
  StyledLabelContainer,
  StyledProgress,
  StyledProgressBar,
} from "./progressBar.styles";

interface ProgressBarProps {
  progress: number;
  label?: string;
  showLabel?: boolean;
  size?: Sizes;
  insetLabel?: boolean;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      size = "sm",
      progress,
      label,
      showLabel = true,
      insetLabel = false,
      ...rest
    },
    ref,
  ) => {
    const defaultLabel = (
      <StyledLabelContainer>
        <Typography size={size}>{label}</Typography>
        <Typography size={size}>{progress}%</Typography>
      </StyledLabelContainer>
    );

    const insetLabelComp = (
      <StyledLabelContainer>
        <Badge inset size={size}>
          {label}
        </Badge>
        <Badge inset size={size}>
          {progress}%
        </Badge>
      </StyledLabelContainer>
    );

    return (
      <StyledContainer ref={ref} $size={size} {...rest}>
        {showLabel ? (insetLabel ? insetLabelComp : defaultLabel) : null}

        <StyledProgressBar $size={size}>
          <StyledProgress
            initial={{ width: progress }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </StyledProgressBar>
      </StyledContainer>
    );
  },
);

export default withTheme(ProgressBar);
