import { withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import { StyledBox } from "./box.styles";

type BoxProps = {
  inset?: boolean;
  size?: Sizes;
  children?: React.ReactNode;
} & Partial<React.HTMLAttributes<HTMLDivElement>>;

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ inset = true, size = "sm", children, ...rest }, ref) => {
    return (
      <StyledBox ref={ref} $inset={inset} $size={size} {...rest}>
        {children}
      </StyledBox>
    );
  },
);

export default withTheme(Box);
