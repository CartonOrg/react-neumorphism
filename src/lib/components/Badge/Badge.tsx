import { css, Theme, withTheme } from "@emotion/react";
import { Sizes } from "../../constants";
import { BADGE_STYLES } from "./badge.styles";
import Typography from "../Typography/Typography";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  inset?: boolean;
  theme: Theme;
  size?: Sizes;
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({
  theme,
  children,
  inset = false,
  size = "sm",
  ...rest
}) => {
  const { background, borderRadius, border, shadowInset, shadow } = theme;
  const currentBadgeStyles = BADGE_STYLES[size];

  return (
    <div
      css={css({
        background,
        borderRadius,
        border,
        height: "fit-content",
        boxShadow: inset ? shadowInset : shadow,
        ...currentBadgeStyles,
      })}
      {...rest}
    >
      <Typography size={size}>{children}</Typography>
    </div>
  );
};

export default withTheme(Badge);
