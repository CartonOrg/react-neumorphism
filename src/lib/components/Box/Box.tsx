import { withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import { StyledBox } from "./box.styles";

type BoxProps = {
  inset?: boolean;
  size?: Sizes;
  children?: React.ReactNode;
  boxStyle?: React.CSSProperties;
} & Partial<React.HTMLAttributes<HTMLDivElement>>;

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ inset = false, size = "sm", children, boxStyle, ...rest }, ref) => {
    return (
      <StyledBox
        ref={ref}
        $inset={inset}
        $size={size}
        $boxStyle={boxStyle}
        {...rest}
      >
        {children}
      </StyledBox>
    );
  },
);

export default withTheme(Box);
