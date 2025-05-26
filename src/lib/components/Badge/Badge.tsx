import { withTheme } from "@emotion/react";
import { forwardRef } from "react";
import { Sizes } from "../../constants";
import { StyledBadge } from "./badge.styles";
import Typography from "../Typography/Typography";

type BadgeProps = {
  inset?: boolean;
  size?: Sizes;
  children: React.ReactNode;
} & Partial<React.HTMLAttributes<HTMLDivElement>>;

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ children, inset = false, size = "sm", ...rest }, ref) => {
    return (
      <StyledBadge ref={ref} $inset={inset} $size={size} {...rest}>
        <Typography size={size}>{children}</Typography>
      </StyledBadge>
    );
  },
);

export default withTheme(Badge);
